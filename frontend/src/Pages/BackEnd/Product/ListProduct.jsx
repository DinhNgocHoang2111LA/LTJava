/* eslint-disable array-callback-return */
import React,{useEffect, useState} from "react";
import ProductService from "../../../Services/ProductService";
import { urlImage } from "../../../Config";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
const ListProduct = () => {
    
    var SumProduct=0;
    var SumProductTrash=0;  
    const [products, setProducts] = useState([]);
    const [load] = useState(Date.now());
    useEffect(() => {
        (async () => {
          const result = await ProductService.getList();
          setProducts(result.data);

        })();
      }, [load]);
      
      function format2(n, currency) {
        return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'); 
      }
    return (
              <div className="row"> 
                
          <div className="col-md-12">
            <div className="title text-center my-4">
              <h4>Tất cả sản phẩm</h4>
            </div>
            <div className="mb-4">
              <Link className="btn btn-warning" to="../product/bin"><Icon icon="ph:trash-fill" /> Thùng rác</Link>
              <Link to="../product/create" class="btn btn-success mx-1" role="button" aria-pressed="true">+ Thêm sản phẩm mới</Link>

            </div>
            <div className="d-flex">
              {products && products.map((product,index)=>{
                  
                  if(product.id!==null){
                    SumProduct=SumProduct+1;
                  }else{
                    SumProductTrash=SumProductTrash+1;
                  }       
              })}
              <span>Tổng số sản phẩm: {SumProduct} | </span>
              <span> Thùng rác: {SumProductTrash}</span>
            </div>
            <table className="table">
              <thead>
                    
                <tr>
                  <th className="border" scope="col">id</th>
                  <th className="border  w-10" scope="col">Name</th>
                  <th className="border" scope="col">Price</th>
                  <th className="border w-25" scope="col">Image</th>
                  <th className="border" scope="col">Status</th>
                  <th className="border" scope="col">Features</th>

                </tr>
              </thead>
              <tbody>

                      {products && products.map((product,index)=>{
                        if(product.id>0){
                          return (
                            
                            <tr>
                              <th className="border" >{product.id}</th>
                              <td className="border" >{product.name}</td>
                              <td className="border" >{format2(product.price,'$')}</td>
                              <img className="img-fluid w-50 border" src={urlImage+product.image} alt="imge"/>
                              <td className="border" >{product.status}</td>
                              <td className="border" >
                                <a href={"././show/"+product.id} class="btn btn-primary mx-1" role="button" aria-pressed="true"><Icon icon="ph:eye" /></a>
                                <a href={"././update/"+product.id} class="btn btn-warning mx-1" role="button" aria-pressed="true"><Icon icon="fluent-mdl2:repair" /></a>
                                <a href={"././delete/"+product.id} class="btn btn-danger mx-1" role="button" aria-pressed="true"><Icon icon="icon-park-twotone:delete" /></a>
                                <Link to={"../productstore/create-product-store/"+product.id} class="btn btn-success mx-1" role="button" aria-pressed="true"> Thêm vào kho</Link>
                              </td>
  
                            </tr>
                          );
                        }
                        

                      })}
                
                
              </tbody>
            </table>
          </div>
          

        </div>
    );
};
export default ListProduct;