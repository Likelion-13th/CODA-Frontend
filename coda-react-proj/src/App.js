import React,{ useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Mypage from "./pages/Mypage/Mypage";
import Diffuser from "./pages/ProductPage/Diffuser";
import Perfume from "./pages/ProductPage/Perfume";
import Footer from "./components/Footer";
import New from "./pages/ProductPage/New";
import ToolBar from "./components/ToolBar";
import {CookiesProvider} from "react-cookie"
function App() {
  const [isLogin,setIsLogin]=useState(false);
  return (
    <CookiesProvider>
      <Router>
        <Header />
        <ToolBar isLogin={isLogin} onLoginChange={ setIsLogin } />
        <Routes>
          <Route path="/" element={<Home onLoginChange={ setIsLogin }/>} />
          <Route path="/new" element={<New />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/diffuser" element={<Diffuser />} />
          <Route path="/perfume" element={<Perfume />} />
        </Routes>
        <Footer />
      </Router>
    </CookiesProvider>
  );
}

export default App;