import React, { useEffect, useState } from "react";
import ProductService from "../Services/ProductService";
import { urlImage } from "../Config";


const ViewProductItem = () => {
    const [products, setProducts] = useState([]);
    const [load] = useState(Date.now());
    
 
    useEffect(() => {
        (async () => {
          const result = await ProductService.getList();
          setProducts(result.data);
          console.log(result.data);
        })();
      }, [load]);
     
     
    return (
        <div className="container-fluid border ">
            <h1 className="text-center">Tất cả sản phẩm</h1>
            <div className="row justify-content-around">
           
            {products && products.map((product,index)=>{
            
            return(
                <div className="product-item border rounded col-md-3 m-3">
                    <div className="w-75 border rounded mx-auto my-3">
                        <img className="img-fluid rounded" src={urlImage+product.image} alt="hoang.png" />
                        <div className="row my-2 mx-5 justify-content-around">
                            <div className="name col-md-6" style={{fontSize:"11px"}}>{product.name}</div>
                            <div className="price col-md-6 ">{"$"+product.price}</div>
                        </div>
                        <a href={"./cart/"+product.id} className="btn btn-success">Buy</a>
                    </div>    
                </div>
                
                );
        
                
                }
     )}
                
                
            </div>
            </div>
            );     
}
export default ViewProductItem;

