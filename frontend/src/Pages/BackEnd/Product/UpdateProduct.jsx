/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ProductService from "../../../Services/ProductService";
import {useParams, useNavigate} from "react-router-dom";
import { urlImage } from "../../../Config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProduct = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const {id} = useParams();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [slug, setSlug] = useState(1);
    const [load, setLoad] = useState(Date.now());
    useEffect(() => {
        (async () => {
          const result = await ProductService.getById(id);
          setProducts(result.data);
          setName(result.data.name);
          setDescription(result.data.description);
          setSlug(result.data.slug);
          setImage(result.data.image);
          setPrice(result.data.price);
        })();
      }, [id, load]);
    const handleSubmit= async (e)=>{
        e.preventDefault();
        try{
            const newProduct = {
                name,
                description,
                slug,
                price,
                image,
              };
              console.log(newProduct);
  
          const result = await ProductService.UpdateProduct(id, newProduct);
            alert("Update successfully");
            navigate("../product/all");
            setLoad(Date.now());
        } catch (error) {
            console.error("Error creating product:", error);
          }
        };
    

    return ( 

            <div className="row border border-warning m-5">
                <div className=" m-4 ">
                <ToastContainer/>

                    <h4 className="text-center mb-5">Chỉnh sửa sản phẩm: </h4>

                    <form className="row">
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
                                    <strong>Mô tả:</strong>
                                </label>
                                <input value={description}
                                        onChange={(e) => setDescription(e.target.value)} className="border w-100 p-2 word-wrap" placeholder={products.description}/>
                            
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
                                    <strong>Slug:</strong>
                                </label>
                                <input value={slug}
                                        onChange={(e) => setSlug(e.target.value)} className="border w-100 p-2" placeholder={products.slug}/>
                            
                            </div>
                            
                            
                        </div>
                        <div className="col-md-5 mb-3">
                           
                            
                            <div className="mb-3">
                                <label>
                                    <strong>Hình ảnh</strong>
                                </label>
                                <div>
                                <img  className="w-25 mb-3" src={urlImage+products.image} alt="dadada"></img>
                                </div>

                                <input id="image" 
                                        onChange={(e) => setImage(e.target.value)} name="image" type="file" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <input className="btn btn-success" onClick={handleSubmit} placeholder="Cập nhập" />
                                
                            </div>
                        </div>
                            
                    </form> 
                    
                </div>
                
            </div>
    );
}
 
export default UpdateProduct;