import React from 'react'; //자바스크립 안에서 html을 쓸수있게 해줌
import {Link} from 'react-router-dom';


const Menu = () => {
    return(
        <div className='menu-container'>
            <Link to='/perfume' className='menu-section menu-perfume'>
                <img 
                    src={`${process.env.PUBLIC_URL}/img/banner_perfume.jpg`}
                    alt="perfume"
                    className='menu-img'
                ></img>
                <div className='txt-box perfume'>
                </div>
            </Link>

            <Link to ='/diffuser' className='menu-section menu-diffuser'>
                <img
                    src={`${process.env.PUBLIC_URL}/img/banner_diffuser.jpg`}
                    alt="diffuser"
                    className='menu-img'
                ></img>
                <div className='txt-box diffuser'>
                </div>
            </Link>
        </div>
    );
}
export default Menu;

