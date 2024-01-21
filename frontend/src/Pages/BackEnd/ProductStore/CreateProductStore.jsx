/* eslint-disable no-unused-vars */
import React,{useEffect, useState} from "react";
import ProductStoreService from "../../../Services/ProductStoreService";
import ProductService from "../../../Services/ProductService";
import {useParams} from "react-router-dom";

const CreateProductStore = () => {
    const [products, setProducts] = useState([]);
    const [productstores, setProductStores] = useState([]);
    const [load, setLoad] = useState(Date.now());
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [price_sell , setPriceSell] = useState('');
    const [qty, setQty] = useState('');
    const [product_id, setProduct_id] = useState('');
    const [status, setStatus] = useState('');
    const {id} = useParams();

    useEffect(() => {
        (async () => {
          const result = await ProductService.getById(id);
          setProducts(result.data.products);
        })();
      }, [id,load]);
      useEffect(() => {
        (async () => {
          const result = await ProductStoreService.getList();
          setProductStores(result.data.products);
          console.log(result);
        })();
      }, [load]);
      
      function format2(n, currency) {
        return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
      }
    //=============
   const handleSubmit = async (event) => {
    event.preventDefault();
    var product = new FormData();
    product.append("name", products.name);
    product.append("price", products.price);
    product.append("price_sell", price_sell);
    product.append("status", status);
    product.append("qty", qty);
    product.append("product_id", products.id);
    try{
      (async () => {
        const result = await ProductStoreService.getStore(product);
        if (result.data.status === true) {
          setLoad(Date.now());
        }
      })();
      alert("Them moi thanh cong");
    }catch(e){
      alert(e.result);
    }
    
    }
    return ( 
        <div className="row">
            <div className="title p-4 my-4 col-md-5">
                <h4>Chức năng</h4>
                <form onSubmit={handleSubmit} method="post">
                        <div className="mb-3">
                        <label>
                            <strong>Tên sản phẩm</strong>
                        </label>
                        <input type="text" name="name" value={name} placeholder={products.name} onChange={(e) => setName(e.target.value)} className="form-control"  /></div>
                        <div className="mb-3">
                        
                        </div>
                        <div className="mb-3">
                        <label>
                            <strong>Số lượng</strong>
                        </label>
                        <input name="qty" value={qty} className="form-control" onChange={(e) => setQty(e.target.value)} />
                        </div>
                        <div className="mb-3">
                        <label>
                            <strong>Giá nhập</strong>
                        </label>
                        <input type="number" value={price} placeholder={products.price} name="price" className="form-control" onChange={(e) => setPrice(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                        <label>
                            <strong>Giá bán</strong>
                        </label>
                        <input type="number" value={price_sell} name="price_sell" className="form-control" onChange={(e) => setPriceSell(e.target.value)}/>
                        </div>
                       
                        
                        <div className="mb-3">
                          <label>
                              <strong>Product_id</strong>
                          </label>
                          <input type="number" value={product_id} placeholder={products.id} name="product_id" className="form-control" defaultValue={1} onChange={(e) => setProduct_id(e.target.value)}/>
                        
                        </div>
                        <div className="mb-3">
                        <label>
                            <strong>Trạng thái</strong>
                        </label>
                        <select name="status" value={status} className="form-select" onChange={(e) => setStatus(e.target.value)}>
                            <option value={1}>Xuất bản</option>
                            <option value={0}>Chưa xuất bản</option>
                        </select>
                        </div>
                        <div className="mb-3 text-end">
                        <button type="submit" value="submit" className="btn btn-success">
                            <i className="fa fa-save" />
                            Lưu[Thêm]</button>
                        </div>
                </form>
            </div>
            <div className="col-md-7 border ">
            <div className="title text-center my-4">
              <h4>Tất cả sản phẩm</h4>
            </div>
            <table className="table">
              <thead>
                    
                <tr>
                  <th className="border" scope="col">id</th>
                  <th className="border  w-10" scope="col">Name</th>
                  <th className="border" scope="col">Giá nhập</th>
                  <th className="border" scope="col">Giá bán</th>
                  <th className="border" scope="col">Ngày nhập</th>
                  <th className="border" scope="col">Số lượng</th>
                  <th className="border" scope="col">Status</th>

                </tr>
              </thead>
              <tbody>
                      {productstores && productstores.map((productstore,index)=>{
                        return (
                          <tr>
                            <td className="border" >{productstore.product_id}</td>
                            <td className="border" >{productstore.name}</td>
                            <td className="border" >{format2(productstore.price,'đ')}</td>
                            <td className="border" >{format2(productstore.price_sell,'đ')}</td>
                            <td className="border" >{productstore.created_at}</td>
                            <td className="border" >{productstore.qty}</td>
                            <td className="border" >{productstore.status}</td>
                          </tr>
                        );

                      })}
                
                
              </tbody>
            </table>
          </div>
        </div>
     );
}
 
export default CreateProductStore;