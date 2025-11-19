import React, { useEffect } from 'react'; //자바스크립 안에서 html을 쓸수있게 해줌
import Menu from "./Menu"
import Banner from './Banner';
import Info from './Info';
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';
import "../../styles/Home.css"

const Home = ({onLoginChange}) => {
    const navigate=useNavigate();
    // eslint-disable-next-line
    const[,setCookie] =useCookies(["accessToken"]);
    useEffect(()=>{
        const params=new URLSearchParams(window.location.search);
        const accessToken=params.get("accessToken");
        if(accessToken){
            setCookie("accessToken",accessToken,
            {path:"/",
                maxAge:60*60*24*7,
            });
            navigate("/",{replace:true});
            onLoginChange(true);
        }
    },[setCookie,navigate,onLoginChange]);
    return(
        <div className='home-container'>
            <Banner/>
            <Menu/>
            <Info/>
        </div>
    );
}
export default Home;