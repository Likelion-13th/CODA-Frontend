import React from "react"
import "../styles/Footer.css"
const Footer = () => {
    return(
        <div className="footer-container">
            <div className="footer-section">
                <div className="footer-title">LIKELION PROCESS</div>
                <div className="footer-subtitle">멋쟁이사자처럼은 창업동아리이므로 실제 상품을 판매하지 않으며 연출된 페이지 입니다.</div>
            </div>
            <div className="info-section">
                <div className="line-1">
                    <div className='info-txt-wrapper'>
                        <div className="info-txt-1">상호명</div>
                        <div className="info-txt-2">멋쟁이 사자처럼</div>
                    </div>
                    <div className='info-txt-wrapper'>
                        <div className="info-txt-1">대표</div>
                        <div className="info-txt-2">CODA</div>
                    </div>
                    <div className='info-txt-wrapper'>
                        <div className="info-txt-1">사업자 등록번호</div>
                        <div className="info-txt-2">123-456-789</div>
                    </div>
                    <div className='info-txt-wrapper'>
                        <div className="info-txt-1">주소</div>
                        <div className="info-txt-2">경기도 고양시 덕양구 항공대</div>
                    </div>    
                </div>
                <div className="line-2">
                    <div className='info-txt-wrapper'>
                        <div className="info-txt-1">전화번호</div>
                        <div className="info-txt-2">010-6774-1933</div>
                    </div>
                    <div className='info-txt-wrapper'>
                        <div className="info-txt-1">정보보호책임자</div>
                        <div className="info-txt-2">전성환</div>
                    </div>
                    <div className='info-txt-wrapper'>
                        <div className="info-txt-1">입금계좌</div>
                        <div className="info-txt-2">0000-000-00</div>
                    </div>   
                </div>
            </div>
            
            
        </div>
    );
}

export default Footer;