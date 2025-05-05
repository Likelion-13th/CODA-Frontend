import React from 'react'; //자바스크립 안에서 html을 쓸수있게 해줌
import "../../styles/Mypage.css";
import Profile from './Profile';
import History from './History';
import Status from './Status';
import Address from './Address';

const Mypage = () => {
    return(
        <div className="page-container">
            <Profile/>
            <Status/>
            <Address/>
            <History/>
        </div>
    );
};

export default Mypage;