import React, { useState,useEffect } from 'react';
import Banner from './Banner'
import ProductCard from "./ProductCard"
import PayModal from '../../components/PayModal';
import "../../styles/ProductPage.css"
import axios from 'axios'
import { useCookies } from 'react-cookie';




const Perfume = ({isLogin}) => {
    const [products,setProducts]=useState([]);
    
    const [cookies]=useCookies("accessToken")
    useEffect(()=>{
        axios.get("/categories/2/items",{
            headers:{
                accept:"*/*"
            }
        })
        .then((response)=>{
            setProducts(response.data.result);

        })
        .catch((err)=>{
            console.log("아이템 카테고리 요청 실패",err);
        });
        },[]);





    const [currentPage,setCurrentPage]=useState(1);
    const itemsPerPage=15;
    const totalPages=Math.ceil(products.length/itemsPerPage);
    const startIndex=(currentPage-1)*itemsPerPage;
    const endIndex=startIndex+itemsPerPage;
    const currentProducts=products.slice(startIndex,endIndex);
    const [selectedProduct, setSelectedProduct]=useState(null);

    const handlePageChange=(pageNumber)=>{
        setCurrentPage(pageNumber);
    };

    const [isModalOpen,setIsModalOpen]=useState(false);
    const handleCardClick=(product)=>{
        setSelectedProduct(product);
        if(!isLogin){
            alert("로그인이 필요합니다");
            return;
        };
        setIsModalOpen(true);
    }
    const handleCloseModal = () => {
        setSelectedProduct(null);
        setIsModalOpen(false);
    };
    
    return(
        <div>
            <Banner title="Perfume" imagePath={"/banner_perfume.jpg"}/>
            <div className='product-container'>
                <div className='product-grid' >
                    {currentProducts.map((products)=>(
                        <ProductCard
                            key={products.id}
                            product={products} 
                            onClick={()=>handleCardClick(products)}
                            
                        />
                    ))}
                </div>
                <div className="paging">
                    {currentPage > 1 && (
                        <button 
                            className='page-arrow'
                            onClick={()=>handlePageChange(currentPage-1)}
                        >
                            Prev
                        </button>
                    )}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (pageNumber) => (
                        <button
                            className={currentPage===pageNumber ? "page-now":"page-not"}
                            key={pageNumber}
                            onClick={()=>handlePageChange(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                        )
                    )}
                    {currentPage < totalPages && (
                        <button
                            className='page-arrow'
                            onClick={()=>handlePageChange(currentPage+1)}
                        >
                            Next
                        </button>
                    )}  
                </div>
            </div>
            {isModalOpen && (
                <PayModal product={selectedProduct} onClose={handleCloseModal} />
            )}
        </div>
    );
}
export default Perfume;