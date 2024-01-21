import React, { useEffect, useState } from "react";
import ProductStoreService from "../../../Services/ProductStoreService";
import {useParams, useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProductStore = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const {id} = useParams();
    const [name, setName] = useState("");
    const [product_id, setProduct_id] = useState("");
    const [price, setPrice] = useState("");
    const [status, setStatus] = useState(1);
    const [qty, setQty] = useState('');
    const [load, setLoad] = useState(Date.now());
    useEffect(() => {
        (async () => {
          const result = await ProductStoreService.getById(id);
          setProducts(result.data.products);
          setName(result.data.products.name);
          setProduct_id(result.data.products.product_id);
          setStatus(result.data.products.status);
          setPrice(result.data.products.price);
          setQty(result.data.products.qty);
        })();
      }, [id, load]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        var product = new FormData();
        product.append("name", name);
        product.append("status", status);
        product.append("price", price);
        product.append("qty", qty);
        product.append("product_id", product_id);
        console.log(product);
        (async () => {
        const result = await ProductStoreService.UpdateProduct(id, product);
        if (result.data.status === true) {
            toast.success("Success Notification !", {
            position: toast.POSITION.TOP_RIGHT,
            });
            navigate("../productstore");
            setLoad(Date.now());
        } else {
            toast.error("Error Notification !", {
            position: toast.POSITION.TOP_CENTER,
            });
        }
    
        })();
        
    }


    return ( 

            <div className="row border border-warning m-5">
                <div className=" m-4 ">
                <ToastContainer/>

                    <h4 className="text-center mb-5">Chỉnh sửa sản phẩm: </h4>

                    <form onSubmit={handleSubmit} className="row">
                        <div className="col-md-5">
                            
                            <div className="mb-3">
                                <label>
                                    <strong>Tên sản phẩm:</strong>
                                </label>
                                <input name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)} className="border w-100 p-2" placeholder={products.name}/>
                            
                            </div>
                            <div className="mb-3">
                                <label>
                                    <strong>Product_id:</strong>
                                </label>
                                <input name="name"
                                        value={product_id}
                                        onChange={(e) => setName(e.target.value)} className="border w-100 p-2" placeholder={products.product_id}/>
                            
                            </div>
                            
                            <div className="mb-3">
                                <label>
                                    <strong>Giá bán: </strong>
                                </label>
                                <input value={price}
                                        onChange={(e) => setPrice(e.target.value)} className="border w-100 p-2"  placeholder={products.price}/>
                            
                            </div>
                            <div className="mb-3">
                                
                                <label>
                                    <strong>Số lượng:</strong>
                                </label>
                                <input value={qty}
                                        onChange={(e) => setQty(e.target.value)} className="border w-100 p-2" placeholder={products.qty}/>

                            </div>
                            
                        </div>
                        <div className="col-md-5 mb-3">
                           
                            <div className="mb-3">
                                <label>
                                    <strong>Trạng thái</strong>
                                </label>
                                <input id="status" value={status} type="text"
                                        onChange={(e) => setStatus(e.target.value)} className="border w-100 p-2"  placeholder={products.status}/>
                                
                            </div >
                            
                            <div className="mb-3">
                                <button className="btn btn-success" type="submit">Cập nhập</button>
                                
                            </div>
                        </div>
                            
                    </form> 
                    
                </div>
                
            </div>
    );
}
 
export default UpdateProductStore;