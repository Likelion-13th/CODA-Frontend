import React from "react";
import "../styles/ToolBar.css"
import axios from "axios"
import { useCookies } from "react-cookie";

const MoveToTop=()=>{
    window.scrollTo({top:0,behavior:"smooth"});
};
const MoveToEnd=()=>{
    window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"});
};

const handleLoginRedirect=()=>{
    const redirectUrl=
        process.env.NODE_ENV==="development"
        ?"http://localhost:3000"
        :"https://coda-likelion.netlify.app";
        const oauthUrl=
        "http://coda-dev-env.eba-pdmadfde.ap-northeast-2.elasticbeanstalk.com/oauth2/start/kakao"+
        `?redirect_uri=${encodeURIComponent(redirectUrl)}`;
        window.location.href=oauthUrl;
}
/*
const handleLoginRedirect =()=>{
    const redirectUrl= 'https://coda-likelion.netlify.app';
    const oauthUrl=`Coda-dev-env-1.eba-vdx3cuqn.ap-northeast-2.elasticbeanstalk.com/oauth2/authorization/kakao?redirect_uri=${redirectUrl}`;
    window.location.href=oauthUrl;
};
*/

const ToolBar = ({isLogin,onLoginChange}) => {
    const[cookies,removeCookie]=useCookies(["accessToken"]);
    const handleLogout=()=>{
        axios.delete("/users/logout",{
            headers:{
                accept:"*/*",
                Authorization:`Bearer ${cookies.accessToken}`,
            }
        })
        .then(()=>{
            onLoginChange(false);
            removeCookie("accessToken",{path:"/"});
        })
        .catch((err)=>{
            console.log("LOGOUT 요청 실패",err);
        });
    }
    return(
        <div className="toolbar-container">
            <img
                src={
                    isLogin
                    ?`${process.env.PUBLIC_URL}/icon/icon_logout.svg`
                    :`${process.env.PUBLIC_URL}/icon/icon_login.svg`
                }
                alt="login"
                className="toobar-icon"
                onClick={
                    isLogin?handleLogout:handleLoginRedirect}
            ></img>
            <img
                src={`${process.env.PUBLIC_URL}/icon/icon_recent.svg`}
                alt="recent"
                className="toobar-icon"
            ></img>
            <img
                src={`${process.env.PUBLIC_URL}/icon/icon_up.svg`}
                alt="up"
                className="toobar-icon"
                onClick={MoveToTop}
            ></img>
            <img
                src={`${process.env.PUBLIC_URL}/icon/icon_down.svg`}
                alt="down"
                className="toobar-icon"
                onClick={MoveToEnd}
            ></img>
        </div>
    );
};

export default ToolBar;