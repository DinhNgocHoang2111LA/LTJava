/* eslint-disable array-callback-return */
import React,{useEffect, useState} from "react";
import ProductService from "../../../Services/ProductService";
import { urlImage } from "../../../Config";
import { Icon } from '@iconify/react';
import { ToastContainer, toast } from 'react-toastify';

const Bin = () => {
    
    const [status, setStatus] = useState(1);
    const [load, setLoad] = useState(Date.now());  
    const [products, setProducts] = useState([]);
    useEffect(() => {
        (async () => {
          const result = await ProductService.getList();
          setProducts(result.data.products);
        })();
      }, [load]);
      
      function format2(n, currency) {
        return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'); 
      }
      const restore=(id)=>{
        
        console.log(status);
        var product = new FormData();
        product.append("status", status);
        (async () => {
          const result = await ProductService.DeleteTrashProduct(id, product);
          if (result.data.status === true) {
            toast.success("Khôi phục thành công", { position: toast.POSITION.TOP_RIGHT,})
            // alert("khôi phục thành công");
            // ("Xóa thành công")
            setLoad(Date.now());
          } else {
            alert("lỗi");
          }
        })();
      }

    return (
              <div className="row"> 
                
          <div className="col-md-12">
            <div className="title text-center my-4">
                <ToastContainer/>
              <h4>Tất cả sản phẩm</h4>
            </div>
            <table className="table">
              <thead>
                    
                <tr>

                  <th className="border" scope="col">""</th>
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
                        if(product.status===0){
                          return (
                            <tr>
                              <th className="border" ><input value="test" type="checkbox" /> </th>
                              <th className="border" >{product.id}</th>
                              <td className="border" >{product.name}</td>
                              <td className="border" >{format2(product.price,'đ')}</td>
                              <img className="img-fluid w-50 border" src={urlImage+"/product/"+product.image} alt="imge"/>
                              <td className="border" >{product.status}</td>
                              <td className="border" >
                                <a href={"././show/"+product.id} class="btn btn-primary mx-1" role="button" aria-pressed="true"><Icon icon="ph:eye" /></a>
                                <a href={"././update/"+product.id} class="btn btn-warning mx-1" role="button" aria-pressed="true"><Icon icon="fluent-mdl2:repair" /></a>
                                <a href={"././delete/"+product.id} class="btn btn-danger mx-1" role="button" aria-pressed="true"><Icon icon="icon-park-twotone:delete" /></a>
                                <div onClick={()=>restore(product.id)} class="btn btn-success mx-1" role="button" aria-pressed="true"><Icon icon="mdi:restore" /></div>
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
export default Bin;