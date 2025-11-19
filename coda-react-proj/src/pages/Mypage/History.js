import React from "react";

const History = ({historyData,onCancel}) =>{
    const formatCurrency=(amount)=>{
        return new Intl.NumberFormat('ko-KR').format(amount);
    };
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
                    {historyData.map((history)=>{
                        return(
                            <tr>
                                <td>{history.orderDate.replace("T", " ").slice(0, 16)}</td>
                                <td>
                                    <div className="history-info-container">
                                        <img 
                                            src={history?.itemUrl}
                                            alt={history?.itemName}
                                            className='history-info-img'
                                        ></img>
                                        <div className="history-info-txtbox">
                                            <div className="history-info-maintxt">
                                                {history?.itemName??"NaN"}
                                            </div>
                                            <div className="history-info-subtxt">
                                                {history?.itemBrand??"NaN"}
                                            </div>
                                        </div>
                                    </div>    
                                </td>
                                <td>{history?.quantity??"NaN"}</td>
                                <td>{formatCurrency(history?.price??-1)}원</td>
                                <td>{history?.status}</td>
                                <td>
                                    <div className="history-cancel">
                                        <div
                                        className="history-cancel-button"
                                        onClick={()=>onCancel(history?.orderId)}
                                        >
                                            취소
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                    
                </tbody>
            </table>
        </div>
    </div>
    );

};

export default History;