import React from 'react'; //자바스크립 안에서 html을 쓸수있게 해줌
import Menu from "./Menu"
import Banner from './Banner';
import Info from './Info';
import "../../styles/Home.css"

const Home = () => {
    return(
        <div className='home-container'>
            <Banner/>
            <Menu/>
            <Info/>
        </div>
    );
}
export default Home;