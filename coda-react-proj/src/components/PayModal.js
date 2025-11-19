import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "../styles/PayModal.css"
import { useCookies } from 'react-cookie';

const PayModal=({product, onClose})=>{
    const [maxMileage,setMaxMileage]=useState(0);
    const [cookies]=useCookies(["accessToken"]);
    useEffect(()=>{
        axios.get("/user/me/mileage",{
            headers:{
                accept:"*/*",
                Authorization: `Bearer ${cookies.accessToken}`,
            },
        })
        .then((response)=>{
            setMaxMileage(response.data.result.maxMileage);

        })
        .catch((err)=>{
            console.log("아이템 카테고리 요청 실패",err);
        });
        },[]);
    //주문할 상품 갯수(defalt 1)
    const [quantity,setQuantity]=useState(1);
    //사용자가 입력한 마일리지 금액
    const [mileageToUse,setMileageToUse]=useState("");
    //최대 사용 가능 마일리지
    //상품가격
    const[,setProductPrice]=useState(product.price);
    //총 결제 금액
    const [totalPrice,setTotalPrice]=useState(product.price);

    //수량 증가 감소 fuc
    const handleQuantityChange=(type)=>{
        setQuantity((prev)=>(type==="plus"?prev+1:Math.max(1,prev-1)));
    };
    useEffect(()=>{
        const newProductPrice=product.price*quantity;
        setProductPrice(newProductPrice);
        setTotalPrice(Math.max(newProductPrice-mileageToUse,0));
    },[quantity,mileageToUse,product.price]);

    const handleMilageChange=(e)=>{
        const value=e.target.value;
        const numericValue=value===""?0:Math.min(Number(value),maxMileage);
        setMileageToUse(numericValue);
    };

    const handlePayment=async()=>{
        try{
            const response = await axios.post("/orders",{
                itemId: product.itemId,
                quantity: quantity,
                mileageToUse: mileageToUse,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${cookies.accessToken}`,
                },
            }
        );
        if(response.data.isSuccess){
            alert("주문이 성공적으로 생성되었습니다.");
            onClose();
        
        }else{
            alert(`주문 실패: ${response.data.massage}`)
        }
        }catch(err){
            console.error("결재오류",err);
            alert("결제처리중 오류가 발생하였습니다.")
        }
    };
    


    return(
        <div className='modal'>
            <div className="overlay" onClick={onClose}></div>
            <div className='container'>
                <button className='close-button' onClick={onClose}>
                    &times;
                </button>
                <div className='title'>주문/결제</div>

                <div className='section'>
                    <div className='section-title'>주문 상품</div>
                    <div className='order-info'>
                        <img
                            src={product.imagePath}
                            alt={product.name}
                            className="order-image"
                        />
                        <div>
                            <div className='order-name'>{product.name}</div>
                            <div className="order-brand">{product.brand}</div>
                            <div className='order-price'>
                                {product.price.toLocaleString()}원
                            </div>
                            <div className='quantity-control'>
                                <button
                                    className="quantity-button"
                                    onClick={()=>handleQuantityChange("minus")}
                                >-</button>
                                <div className='quantity'>{quantity}</div>
                                <button
                                    className='quantity-button'
                                    onClick={()=>handleQuantityChange("plus")}
                                >+</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*배송지 정보 */}
                <div className='section'>
                    <div className='section-title'>배송지</div>
                    <div className='user-info'>CODA</div>
                    <div className='user-info'>010-6774-1933</div>
                    <div className='user-info'>대구광역시 수성구 국채보상로 1040</div>
                </div>
                {/*마일리지 사용 입력 */}
                <div className='section'>
                    <div className='section-title'>마일리지 사용</div>
                    <div className='mileage-info'>
                        현재 사용 가능한 마일리지: {maxMileage.toLocaleString()}원
                    </div>
                    <input 
                        className='milageToUse-input'
                        placeholder='사용할 마일리지를 입력하세요'
                        value={mileageToUse}
                        onChange={handleMilageChange}
                    />
                </div>
                {/*총결제*/}
                <div className='section'>
                    <div className='section-title'>마일리지 사용</div>
                    <div className='total'>
                        <div>
                            <div className='total-item'>총 결제금액</div>
                            <div className='total-item'>마일리지 할인</div>
                            <div className='total-item'>배송비</div>
                        </div>
                        <div>
                            {/*상품금액 */}
                            <div className='total-value'>
                                {totalPrice.toLocaleString()}원
                            </div>
                            <div className='total-value discount'>
                                -{mileageToUse.toLocaleString()}원
                            </div>
                            {/*무료배송 */}
                            <div className='total-value'>무료배송</div>
                        </div>
                    </div>
                </div>
                {/*결제버튼*/}
                <button className='pay-button' onClick={handlePayment}>결제하기</button>
            </div>            
        </div>
    );
};

export default PayModal;

