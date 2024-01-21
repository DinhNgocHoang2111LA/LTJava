/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect, useState } from "react";
import ProductService from "../../../Services/ProductService";
import CategoryService from "../../../Services/CategoryService";
import { urlImage } from "../../../Config";
import {useParams} from "react-router-dom";
import { Icon } from '@iconify/react';


const View1 = () => {
    const [products, setProducts] = useState([]);
    const [categories,setCategories]=useState([]);
    const {id} = useParams();
    const [load, setLoad] = useState(Date.now());

    
    useEffect(() => {
        (async () => {
        const result = await CategoryService.getById(id);
        setCategories(result.data);
        })();
    }, [id]);
    useEffect(() => {
        (async () => {
            const result = await ProductService.getList();
            setProducts(result.data);
        })();
        }, [load]);

    function format2(n, currency) {
            return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
        }


    return ( <>
     {products && products.map((product, index) => {
                        if(categories.id===product.slug){
                            return (
                                console.log(categories.id),
                            <div className="col-6 col-md-3 mb-4">
                            <div className="product-item border">
    
                                <div className="product-item-image">
                                    <a href="/product/product-detail">
    
                                        <img className="img-fluid d-none d-md-block" src={urlImage + product.image} alt="product.jpg"/>
                                    </a>
                                </div>
                                <p className="product-item-name text-main fs-5 text-center py-1">
                                    <a href="/product/product-detail">{product.name}</a>
                                </p>
                                <h3 className="product-item-price fs-6 p-2 d-flex justify-content-around">
                                    <div>
                                        <div className="btn btn-primary">
                                            <a className="bg-muted text-center text-main text-light text-decoration-none px-3" href="/product/product-detail"><Icon icon="typcn:plus" /></a>
                                        </div>
    
                                    </div>
    
                                    <div className="text-main my-auto text-decoration-underline text-dark">{format2(product.price, 'đ')}</div>
                                </h3>
    
                            </div>
                        </div>);
                        }
                    

                            })
                        }
    </> );
}
 
export default View1;