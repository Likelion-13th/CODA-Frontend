import React from "react";
import "../styles/ToolBar.css"

const MoveToTop=()=>{
    window.scrollTo({top:0,behavior:"smooth"});
};
const MoveToEnd=()=>{
    window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"});
};




const ToolBar = () => {
    return(
        <div className="toolbar-container">
            <img
                src={`${process.env.PUBLIC_URL}/icon/icon_login.svg`}
                alt="login"
                className="toobar-icon"
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