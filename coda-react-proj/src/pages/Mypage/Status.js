import React from "react";

const Status = ({orderStatusData}) =>{
    const formatCurrency=(amount)=>{
        return new Intl.NumberFormat('ko-KR').format(amount);
    }
    
    return (
    <div className="status-wrap">
        <div className="status-title">
            나의 주문 현황
        </div>
        <div className="status-container">
            <div className="status-box">
                <div className="status-teg">
                    배송중
                </div>
                <div className="status-value">
                    <span>{formatCurrency(orderStatusData?.PROCESSING)}</span>
                </div>
            </div>
            <div className="status-box">
                <div className="status-teg">
                    배송완료s
                </div>
                <div className="status-value">
                    <span>{formatCurrency(orderStatusData?.COMPLETE)}</span>
                </div>
            </div>
            <div className="status-box">
                <div className="status-teg">
                    주문취소
                </div>
                <div className="status-value">
                    <span>{formatCurrency(orderStatusData?.CANCEL)}</span>
                </div>
            </div>
        </div>
    </div>
    );

};

export default Status;