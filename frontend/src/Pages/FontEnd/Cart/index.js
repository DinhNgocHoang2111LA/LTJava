/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {useParams, useNavigate} from "react-router-dom";
import ProductService from "../../../Services/ProductService";
import { urlImage } from '../../../Config';
const Cart = () => {
      const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [slug, setSlug] = useState(1);
    const [load, setLoad] = useState(Date.now());
    const {id} = useParams();

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
    // Initialize quantity state
    const [quantity, setQuantity] = useState(1);
  
    // Function to increase quantity
    const increaseQuantity = () => {
      setQuantity(prevQuantity => prevQuantity + 1);
    };
  
    // Function to decrease quantity
    const decreaseQuantity = () => {
      if (quantity > 0) {
        setQuantity(prevQuantity => prevQuantity - 1);
      }
    };
  
    return ( 
        <section className="hdl-maincontent container py-2 my-5">
         <div className="container">
            <table className="table table-bordered">
               <thead>
                  <tr className="bg-dark">
                     <th className="text-center">STT</th>
                     <th className="w-25">Hình</th>
                     <th className="w-25">Tên sản phẩm</th>
                     <th className="text-center w-10">Giá</th>
                     <th className="text-center w-15">Số lượng</th>
                     <th className="text-center">Thành tiền</th>
                     <th className="text-center">Hủy</th>
                  
                  </tr>
               </thead>

               <tbody>
                  <tr>
                     <td className="text-center align-middle">1</td>
                     <td>
                        <img className="img-fluid" src={urlImage+products.image} alt=""/>
                     </td>
                     <td className="align-middle">{products.name}</td>
                     <td className="text-center align-middle">{products.price}</td>
                     <td className="text-center align-middle">
                        <div className="input-group mb-3">
                           <div className="btn border btn-primary h-100 input-group-text" id="sub" onClick={decreaseQuantity}>-</div>
                           <p className="form-control text-center">{quantity}</p>
                           <div className="btn border btn-primary h-100 input-group-text" id="add" onClick={increaseQuantity}>+</div>
                        </div>
                     </td>
                     <td className="text-center align-middle">
                     {products.price}
                     </td>
                     <td className="text-center align-middle">
                        <input className="btn btn-sm btn-main" type='submit'  placeholder={<i className="fa-solid fa-xmark"></i>}/>
                       
                     </td>
                  </tr>
               </tbody>
               <tfoot>
                  <tr>
                     <td colspan="5">
                     
                     </td>
                     <td colspan="2" className="text-end">
                        <strong>Tổng tiền: {products.price}</strong>
                     </td>
                  </tr>
               </tfoot>
               
            </table>
            <div>
            <a href={"/product/checkout/"+products.id} className="btn btn-success float-right my-3">Thanh toán</a>

            </div>

         </div>
        </section>
    );
}

export default Cart;