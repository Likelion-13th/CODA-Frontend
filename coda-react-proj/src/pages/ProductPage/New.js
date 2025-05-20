import React, { useState } from 'react';
import Banner from './Banner'
import ProductCard from "./ProductCard"
import PayModal from '../../components/PayModal';
import "../../styles/ProductPage.css"
const New = () => {
    const products=[
        {
            id:1,
            name:"퍼퓸",
            brand:"브랜드",
            price:30000,
            imagePath:"/img/perfume_1.png",
            isNew:true,
        },
        {
            id:2,
            name:"디퓨저",
            brand:"브랜드",
            price:10000,
            imagePath:"/img/diffuser_2.png",
            isNew:true,
        },
        {
            id:3,
            name:"퍼퓸",
            brand:"브랜드",
            price:20000,
            imagePath:"/img/perfume_3.png",
            isNew:true,
        },
        {
            id:4,
            name:"퍼퓸",
            brand:"브랜드",
            price:30000,
            imagePath:"/img/perfume_4.png",
            isNew:true,
        },
        {
            id:5,
            name:"퍼퓸",
            brand:"브랜드",
            price:30000,
            imagePath:"/img/perfume_5.png",
            isNew:true,
        },
        

    ];
    const [currentPage,setCurrentPage]=useState(1);
    const itemsPerPage=5;
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
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setSelectedProduct(null);
        setIsModalOpen(false);
    };
    
    return(
        <div>
            <Banner title="New" imagePath={"/banner_new.jpg"}/>
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
export default New;