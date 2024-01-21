import React, { useEffect, useState } from "react";
import ProductService from "../../../Services/ProductService";
import {useParams} from "react-router-dom";
import { urlImage } from "../../../Config";
const ShowProduct = () => {
    const [products, setProducts] = useState([]);
    const {id} = useParams();
    
    useEffect(() => {
        (async () => {
          const result = await ProductService.getById(id);
          setProducts(result.data);
        })();
      }, [id]);

      

    return ( 
            <div className="row ">
                <div className="col-md-5 m-4 border border-warning">
                    <h4 className="text-center">Chi tiết sản phẩm: </h4>
                    <form>
                            <div className="mb-3">
                                <label>
                                    <strong>Tên sản phẩm:</strong>
                                </label>
                                <div className="border w-100 p-2">{products.name}</div>
                            
                            </div>
                            <div className="mb-3">
                            
                                <label>
                                    <strong>Slug:</strong>
                                </label>
                                <div className="border w-100 p-2 word-wrap">{products.slug}</div>

                            
                            </div>
                            <div className="mb-3">
                                <label>
                                    <strong>Giá bán: </strong>
                                </label>
                                <div className="border w-100 p-2">{"$"+products.price}</div>
                            
                            </div>
                            <div className="mb-3">
                                <label>
                                    <strong>Mô tả:</strong>
                                </label>
                                <div className="border w-100 p-2">{products.description}</div>
                            </div>  
                            <div className="mb-3">
                                <a className="btn btn-success"  href={"../update/"+id}>Chỉnh sửa</a>
                            </div>
                    </form>
                    
                </div>
                <div className="col-md-5 m-4">
                    <label>
                        <strong>Hình ảnh</strong>
                    </label>
                    <div>
                        <img className="w-75" src={urlImage+products.image} alt="dadada"></img>

                    </div>
                </div>
            </div>
    );
}
 
export default ShowProduct;