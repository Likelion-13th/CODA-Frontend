import React from "react";
import {Link, useLocation} from "react-router-dom";
import "../styles/Header.css";

const Header = () =>{
    const location = useLocation();
    const currentPage = location.pathname;
    return (
        <header>
          <div className={currentPage === "/mypage" ? "MP-hederBox" : "heder-box"}>
            <div className={currentPage === "/mypage"? "MP-Home" : "Home"}>
              <Link to="/">
                LIKELION
              </Link>
            </div>
            <div className={currentPage === "/mypage" ? "MP-rmenu" : "right-menu"}>
              
              <Link to="/new" className={currentPage === "/new" ? "active" : ""}>
                New
              </Link>
              <Link to="/perfume" className={currentPage === "/perfume" ? "active" : ""}>
                Perfume
              </Link>
              <Link to="/diffuser" className={currentPage === "/diffuser" ? "active" : ""}>
                Diffuser
              </Link>
              <Link to="/mypage" className={currentPage === "/mypage" ? "active" : ""}>
                Mypage
              </Link>
            </div>
          </div>
        </header>
    );
}
export default Header;
