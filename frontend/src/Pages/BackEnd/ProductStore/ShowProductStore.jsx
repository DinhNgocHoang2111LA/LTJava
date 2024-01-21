import React, { useEffect, useState } from "react";
import ProductStoreService from "../../../Services/ProductStoreService";
import {useParams} from "react-router-dom";
const ShowProductStore = () => {
    const [products, setProducts] = useState([]);
    const {id} = useParams();
    
    useEffect(() => {
        (async () => {
          const result = await ProductStoreService.getById(id);
          setProducts(result.data.products);
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
                                    <strong>Giá bán: </strong>
                                </label>
                                <div className="border w-100 p-2">{products.price}</div>
                            </div>
                            <div className="mb-3">
                                <label>
                                    <strong>Số lượng:</strong>
                                </label>
                                <div className="border w-100 p-2">{products.qty}</div>
                            
                                <label>
                                    <strong>Id:</strong>
                                </label>
                                <div className="border w-100 p-2">{products.id}</div>

                            </div>
                            
                            <div className="mb-3">
                                <label>
                                    <strong>Trạng thái</strong>
                                </label>
                                <div className="border w-100 p-2">{products.status}</div>
                
                            </div>
                            
                            <div className="mb-3">
                                <a className="btn btn-success"  href={"../update/"+id}>Chỉnh sửa</a>
                            </div>
                    </form>
                    
                </div>
            </div>
    );
}
 
export default ShowProductStore;