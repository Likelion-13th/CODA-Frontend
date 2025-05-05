import React from "react";

const Status = () =>{
    return (
    <div className="status-wrap">
        <div className="status-title">
            나의 주문 현황
        </div>
        <div className="status-container">
            <div className="status-box">
                <div className="status-teg">
                    입금완료
                </div>
                <div className="status-value">
                    1
                </div>
            </div>
            <div className="status-box">
                <div className="status-teg">
                    배송중
                </div>
                <div className="status-value">
                    10
                </div>
            </div>
            <div className="status-box">
                <div className="status-teg">
                    배송완료
                </div>
                <div className="status-value">
                    100
                </div>
            </div>
            <div className="status-box">
                <div className="status-teg">
                    주문취소
                </div>
                <div className="status-value">
                    0
                </div>
            </div>
        </div>
    </div>
    );

};

export default Status;