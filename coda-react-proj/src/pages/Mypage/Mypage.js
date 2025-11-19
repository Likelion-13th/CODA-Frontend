import React, { useEffect, useState } from 'react'; //자바스크립 안에서 html을 쓸수있게 해줌
import "../../styles/Mypage.css";
import Profile from './Profile';
import History from './History';
import Status from './Status';
import Address from './Address';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const Mypage = () => {
    const[cookies]=useCookies(["accessToken"]);
    const [profileData,setProfileData]=useState({});
    const [orderStatusData,setOrderStatusData]=useState({});
    const [historyData,setHistoryData]=useState([])
    const handleSave = async (zipcode, address, addressDetail) => {
        try {
            const response = await axios.put(
                "/users/me/address",
                {
                    "zipcode": zipcode,
                    "address": address,
                    "addressDetail": addressDetail
                },
                { 
                headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${cookies.accessToken}`,
                },
            }
            );

            if (response.data.isSuccess) {
                alert("주소가 성공적으로 저장되었습니다.");
            } else {
                alert(`주소 저장 실패: ${response.data.message}`);
            }
        } catch (error) {
        console.error("주소 저장 오류:", error);
        alert("주소 저장 중 오류가 발생했습니다.");
        }
    };
    const onCancel=async(orderId)=>{
        try{
            const response=await axios.put(`/orders/${orderId}/cancel`,{},{
                headers:{
                    accept:"*/*",
                    Authorization:`Bearer ${cookies.accessToken}`,
                },
            })
            if(response.data.isSuccess){
                alert("성공적으로 주문이 취소되었습니다.")
            }else{
                alert("주문 취소 실패")
            }
            

        }catch(err){
            console.log("API 요청 실패",err)
            alert("주문 취소에 실패하였습니다.")
        }
        

    }
    useEffect(()=>{
        axios.get("/user/me",{
            headers:{
                accept: "*/*",
                Authorization: `Bearer ${cookies.accessToken}`,
            },
        }).then((respone)=>{
            setProfileData({
                userNickname: respone.data.result.usernickname,
                recentTotal: respone.data.result.recentTotal,
                maxMilege: respone.data.result.maxMilege,
            });
            setOrderStatusData(
                respone.data.result.orderStatusCounts
            )
        }).catch((err)=>{
            console.log("API 요청 실패",err);
        });
        axios.get("/orders",{
            headers:{
                accept:"*/*",
                Authorization: `Bearer ${cookies.accessToken}`,
            },
        }).then((response)=>{
            const tmpData=response.data.result.map((elm)=>{
                return {
                    orderId:elm.orderId,
                    itemName:elm.item_name,
                    itemBrand:elm.item_brand,
                    itemUrl:elm.item_url,
                    quantity:elm.quantity,
                    price:elm.finalPrice,
                    status:elm.status,
                    orderDate:elm.createdAt
                }
            })
            setHistoryData(tmpData)
        }).catch((err)=>{
            console.log("API 요청 실패",err);
        })
        
    },[cookies.accessToken])
    
    return(
        <div className="page-container">
            <Profile profileData={profileData}/>
            <Status orderStatusData={orderStatusData}/>
            <Address handleSave={handleSave}/>
            <History historyData={historyData} onCancel={onCancel}/>
        </div>
    );
};

export default Mypage;