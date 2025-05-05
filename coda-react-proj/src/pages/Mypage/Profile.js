import React from "react";





const Profile = () =>{
    const formatCurrency=(amount)=>{
        return new Intl.NumberFormat('ko-KR').format(amount);
    };
    return (
    <div className="profile-container">{/*0 */}
        <div className="profile-section">{/*2*/}
            <div className="profile-name">{/*3 */}
                <span className="profile-realname">제리</span>님
            </div>
            <div className="profile-membership">{/*3 */}
                [VVIP]회원
            </div>
        </div>
        <div className="profile-section">{/*2*/}
            <div className="profile-stat-label">{/*3 */}
                총 결제 금액
            </div>
            <div className="profile-stat-value">{/*3 */}
                <span>{formatCurrency(10000000)}</span>원
            </div>
        </div>
        <div className="profile-section">{/*2 */}
            <div className="profile-stat-label">{/*3*/}
                마일리지
            </div>
            <div className="profile-stat-value">{/*3*/}
                <span>{formatCurrency(10000)}</span>원
            </div>
        </div>
    </div>
    );

};

export default Profile;