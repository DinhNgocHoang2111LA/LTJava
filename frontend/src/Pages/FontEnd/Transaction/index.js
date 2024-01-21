
import React, { useEffect, useState } from "react";
import ProductService from "../../../Services/ProductService";
import {useParams} from "react-router-dom";
import { urlImage } from "../../../Config";

const Transaction = () => {
    const [products, setProducts] = useState([]);
    const {id} = useParams();
  useEffect(() => {
    (async () => {
      const result = await ProductService.getById(id);
      setProducts(result.data);
    })();
  }, [id]);
    return ( 
    <div className="container">
        <div className="row">
            <div className="col-md-4 border rounded mx-auto my-5">
                <h4 className="text-center text-success">Giao dịch thành công</h4>
                <h5 className="text-center text-success">ĐƠN HÀNG</h5>
            </div>
        </div>
        <div className="row">
            <div className="col-md-7 mx-auto border rounded">
            <h4 className="text-center text-success my-3">Thông tin đơn hàng</h4>
            
            <div className="mb-3">
                <div ></div>
                <label htmlFor="name w-10" className="w-15">Họ tên</label>
                <input type="text" name="name" id="name" className="form-control w-100" placeholder="Nhập họ tên" />
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="w-15">Điện thoại</label>
                <input type="text" name="phone" id="phone" className="form-control w-100" placeholder="Nhập điện thoại" />
            </div>
            <div className="card-body">
                <label htmlFor="address" className="w-15">Địa chỉ</label>
                <input type="text" name="address" id="address" className="form-control w-100" placeholder="Nhập địa chỉ" />
            </div>
            <table className="table table-borderless">
                <thead>
                    <tr className="bg-dark">
                    <th style={{width: 30}} className="text-center">STT</th>
                    <th className="w-50 text-center">Hình</th>
                    <th>Tên sản phẩm</th>
                    <th className="text-center">Giá</th>
                    <th style={{width: 130}} className="text-center">Số lượng</th>
                    <th className="text-center">Thành tiền</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="text-center align-middle">1</td>
                    <td style={{height: 100}}>
                        <img className=" w-50 h-100" alt="sad" src={urlImage+products.image}  />
                    </td>
                    <td className="align-middle">{products.name}</td>
                    <td className="text-center align-middle">{products.price}</td>
                    <td className="text-center align-middle">
                        1
                    </td>
                    <td className="text-center align-middle">
                        {products.price}
                    </td>
                    </tr>

                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={6} className="text-end">
                            <strong>Tổng: {products.price}</strong>
                        </td>
                        
                    </tr>
                    <tr>
                    <td colSpan={6} className="text-end">
                            <a className="btn btn-primary" href="../../../">Tiếp tục mua sắm</a>
                        </td>
                    </tr>
                </tfoot>
                </table>
            
        </div>
        </div>
    </div> );
}
 
export default Transaction;