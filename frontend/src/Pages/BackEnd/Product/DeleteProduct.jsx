import React from 'react';
import { urlImage } from '../../../Config';
import ProductService from "../../../Services/ProductService";
import {useParams, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";

const DeleteProduct =()=> {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]); 
  const {id} = useParams();

 
  useEffect(() => {
    (async () => {
      const result = await ProductService.getById(id);
      setProducts(result.data);
    })();
  }, [id]); 

  const handleDelete = (e) => {
    e.preventDefault();
    ProductService.DeleteProduct(id)
    .then(response => {
        alert("xoa thanh cong");
        navigate("../product/all");
    })
    .catch(error => {
      alert(e.error);
    });
  };
  
    return (
        
        <div className="row ">
        <div className="col-md-5 m-4 border border-warning">
            <h4 className="text-center">Chi tiết sản phẩm:
            </h4>
            <form>
                <div className="mb-3">
      

                    <label>
                        <strong>ID</strong>
                    </label>
                    <div className="border w-100 p-2">{products.id}</div>

                </div>
                <div className="mb-3">
                    <label>
                        <strong>Tên sản phẩm:</strong>
                    </label>
                    <div className="border w-100 p-2">{products.name}</div>

                </div>
                <div className="mb-3">

                    <label>
                        <strong>Mô tả:</strong>
                    </label>
                    <div className="border w-100 p-2 word-wrap">{products.description}</div>

                </div>
                <div className="mb-3">
                    <label>
                        <strong>Giá bán:
                        </strong>
                    </label>
                    <div className="border w-100 p-2">{products.price}</div>

                </div>
                <div className="mb-3">
                    <label>
                        <strong>slug:</strong>
                    </label>
                    <div className="border w-100 p-2">{"$"+products.slug}</div>

                </div>

                <div className="mb-3">
                    <input className="btn btn-warning" onClick={handleDelete} value='Xóa vĩnh viễn' />
                    
                    
                </div>
            </form>

        </div>
        <div className="col-md-5 m-4">
            <label>
                <strong>Hình ảnh</strong>
            </label>
            <div>
                <img className="w-75" src={urlImage+"/product/"+products.image} alt="dadada"></img>

            </div>

        </div>
        </div>
    )
  }
export default DeleteProduct;