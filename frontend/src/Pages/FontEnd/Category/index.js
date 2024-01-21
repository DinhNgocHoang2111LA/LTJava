/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ProductService from "../../../Services/ProductService";
import CategoryService from "../../../Services/CategoryService";
import { urlImage } from "../../../Config";
import View1 from "./view1";

const Category = () => {
    const [products, setProducts] = useState([]);
    const [brands, setBrands] = useState([]);
    const [load, setLoad] = useState(Date.now());
    const [categories,setCategories]=useState([])
    var a=0;
   
   
        useEffect(() => {
            (async () => {
                const result = await ProductService.getList();
                setProducts(result.data);
            })();
            }, [load]);
        useEffect(() => {
            (async () => {
            const result = await CategoryService.getList();
            setCategories(result.data);
            })();
        }, [load]);
        


    return ( 
        <section className="hdl-maincontent py-2">
            <div className="container">
                <div className="row">
                <div className="col-md-3 order-2 order-md-1">
                    <ul className="list-group mb-3 list-brand">
                    <li className="list-group-item bg-main py-3">Các loại sản phẩm</li>
                    {categories && categories.map((category,index)=>{
                        return (
                        <li className="list-group-item text-decoration-none">
                            <a href={"/category/"+category.id}>{category.name}</a>
                        </li>
                        );

                    })}
                    </ul>
                    
                    <ul className="list-group mb-3 list-product-new">
                    <li className="list-group-item bg-main py-3">Sản phẩm mới</li>
                    {products && products.map((product,index)=>{
                        a=a+1;
                        if(a<=3){
                          return(
                            <li className="list-group-item">
                            <div className="product-item border">
                            <div className="product-item-image">
                                <a href={"/product/product-detail/"+product.id}>
                                <img src={urlImage+product.image} className="img-fluid" alt="dw" />
                                </a>
                            </div>
                            <h2 className="product-item-name text-center fs-5 py-1">
                                <a href={"/product/product-detail/"+product.id}>{product.name}</a>
                            </h2>
                            <h3 className="product-item-price fs-6 p-2 d-flex">
                              <a href={"/product/product-detail/"+product.id} className="flex-fill text-start text-main">Xem</a>

                                <div className="flex-fill text-end text-main">190.000đ</div>
                            </h3>
                            </div>
                        </li>
                              );
                          
                          }
                          a=a+1;
                       }
                  )}
                      
                    
                    </ul>
                </div>
                <div className="col-md-9 order-1 order-md-2">
                    <div className="category-title bg-main">
                    <h3 className="fs-5 py-3 text-center">SẢN PHẨM</h3>
                    </div>
                    <div className="product-category mt-3">
                    <div className="row product-list">
                       {/* <View1/> */}
                    </div>
                    </div>
                    <nav aria-label="Phân trang">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                        <a className="page-link text-main" href="product_category.html" aria-label="Previous">
                            <span aria-hidden="true">«</span>
                        </a>
                        </li>
                        <li className="page-item">
                        <a className="page-link text-main" href="product_category.html">1</a>
                        </li>
                        <li className="page-item">
                        <a className="page-link text-main" href="product_category.html">2</a>
                        </li>
                        <li className="page-item">
                        <a className="page-link text-main" href="product_category.html">3</a>
                        </li>
                        <li className="page-item">
                        <a className="page-link text-main" href="product_category.html" aria-label="Next">
                            <span aria-hidden="true">»</span>
                        </a>
                        </li>
                    </ul>
                    </nav>
                </div>
                </div>
            </div>
</section>
     );
}
 
export default Category;