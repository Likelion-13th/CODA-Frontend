import React from "react";

const History = () =>{
    const onCancel=()=>{
        //API호출
        alert("canceled");
    }
    return (
    <div className="history-container-wrap">
        <div className="history-title">나의 쇼핑내역</div>
        <div className="history-container">
            <table
                className="history-table"
                cellPadding="10px"
                cellSpacing="0"
            >
                <thead>
                    <tr>
                        <th>주문 일자</th>
                        <th>상품 정보</th>
                        <th>수량</th>
                        <th>구매 금액</th>
                        <th>상태</th>
                        <th>주문 취소</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2025-01-01</td>
                        <td>
                            <div className="history-info-container">
                                <img 
                                    src={`${process.env.PUBLIC_URL}/img/perfume_1.png`}
                                    alt="perfume_1"
                                    className='history-info-img'
                                ></img>
                                <div className="history-info-txtbox">
                                    <div className="history-info-maintxt">
                                        엠버 술탄 오드 퍼퓸
                                    </div>
                                    <div className="history-info-subtxt">
                                        세르주르텐
                                    </div>
                                </div>
                            </div>    
                        </td>
                        <td>1</td>
                        <td>135,000원</td>
                        <td>배송중</td>
                        <td>
                            <div className="history-cancel">
                                <div
                                className="history-cancel-button"
                                onClick={onCancel}
                                >
                                    취소
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    );

};

export default History;