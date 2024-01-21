/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable array-callback-return */
import React,{useEffect, useState} from "react";
import ProductStoreService from "../../../Services/ProductStoreService";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
const productstore = () => {
    
    var SumProduct=0;
    const [products, setProducts] = useState([]);
    const [load] = useState(Date.now());
    useEffect(() => {
        (async () => {
          const result = await ProductStoreService.getList();
          setProducts(result.data.products);
        })();
      }, [load]);
      
     
    return (
              <div className="row"> 
                
          <div className="col-md-12">
            <div className="title text-center my-4">
              <h4>Tất cả sản phẩm trong kho</h4>
            </div>
            <div className="mb-4">
              <Link to="../product/all" class="btn btn-success mx-1" role="button" aria-pressed="true">+ Thêm sản phẩm mới</Link>

            </div>
            <div className="d-flex">
              {products && products.map((product,index)=>{
                  
                  if(product.status===0){
                    SumProduct=SumProduct+1;
                  }
              })}
              <span>Tổng số sản phẩm: {SumProduct} | </span>
            </div>
            <table className="table">
              <thead>
                    
                <tr>    
                  <th className="border" scope="col">id</th>
                  <th className="border " scope="col">Name</th>
                  <th className="border" scope="col">Giá nhập</th>
                  <th className="border" scope="col">Giá bán</th>
                  <th className="border" scope="col">Ngày nhập</th>
                  <th className="border " scope="col">Số lượng</th>
                  <th className="border w-10" scope="col">Status</th>
                  <th className="border" scope="col">Features</th>

                </tr>
              </thead>
              <tbody>

                      {products && products.map((product,index)=>{
                          return (
                            
                            <tr>
                              
                              <th className="border" >{product.id}</th>
                              <td className="border" >{product.name}</td>
                              <td className="border" >{product.price}</td>
                              <td className="border" >{product.price_sell}</td>
                              <td className="border" >{product.created_at}</td>
                              <td className="border" >{product.qty}</td>
                              <td className="border" >{product.status}</td>
                              <td className="border" >
                                <a href={"./productstore/show/"+product.id} class="btn btn-primary mx-1" role="button" aria-pressed="true"><Icon icon="ph:eye" /></a>
                                <a href={"./productstore/update/"+product.id} class="btn btn-warning mx-1" role="button" aria-pressed="true"><Icon icon="fluent-mdl2:repair" /></a>
                                
                                <a href={"././product/create-product/"+product.id} class="btn btn-success mx-1" role="button" aria-pressed="true"><Icon icon="ph:plus-fill" /></a>
                                <a href={"././delete/"+product.id} class="btn btn-danger mx-1" role="button" aria-pressed="true"><Icon icon="icon-park-twotone:delete" /></a>
                              </td>
                            </tr>
                          );
                        
                        

                      })}
                
                
              </tbody>
            </table>
          </div>
          

        </div>
    );
};
export default productstore;