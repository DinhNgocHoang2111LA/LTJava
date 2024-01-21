import Logo from "../../../Public/images/logo.png";

import React, { useEffect, useState } from "react";
import ProductService from "../../../Services/ProductService";
import {useParams} from "react-router-dom";
import { urlImage } from "../../../Config";
const CheckOut = () => {
  const [products, setProducts] = useState([]);
  const {id} = useParams();
useEffect(() => {
  (async () => {
    const result = await ProductService.getById(id);
    setProducts(result.data);
  })();
}, [id]);
    return ( 
        <section className="hdl-maincontent py-2">
             <div className="img-fluid d-flex justify-content-center">
          <img className="img-fluid border w-15" alt="logo" src={Logo}/>

          </div>
          <div className="line "></div>
  <div className="container ">
    <div className="row border  ">
      <div className="col-md-4">
        <h2 className="fs-5 text-main">Thông tin giao hàng</h2>
        <p>Bạn có tài khoản chưa? <a href="login.html">Đăng nhập</a></p>
        <div className="mb-3">
          <label htmlFor="name">Họ tên</label>
          <input type="text" name="name" id="name" className="form-control" placeholder="Nhập họ tên" />
        </div>
        <div className="mb-3">
          <label htmlFor="phone">Điện thoại</label>
          <input type="text" name="phone" id="phone" className="form-control" placeholder="Nhập điện thoại" />
        </div>
        <div className="card">
          <div className="card-header text-main">
            Địa chỉ nhận hàng
          </div>
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="address">Địa chỉ</label>
              <input type="text" name="address" id="address" className="form-control" placeholder="Nhập địa chỉ" />
            </div>
            <div className="row">
              <div className="col-4">
                <select name="tinhtp" id="tinhtp" className="form-control">
                  <option value>Hồ chí Minh</option>
                  <option value>Hà Nội</option>
                  <option value>Đà Nẵng</option>
                  <option value>Hải Phòng</option>
                  <option value>Cần Thơ</option>
                </select>
              </div>
              <div className="col-4">
                <select name="quanhuyen" id="quanhuyen" className="form-control">
                  <option value>Chọn Quận 1</option>
                  <option value>Chọn Quận 2</option>
                  <option value>Chọn Quận 3</option>
                  <option value>Chọn Quận 4</option>
                  <option value>Chọn Quận 5</option>
                  <option value>Chọn Quận 6</option>
                  <option value>Chọn Quận 7</option>
                  <option value>Chọn Quận 8</option>
                  <option value>Chọn Quận 9</option>
                  <option value>Chọn Quận 10</option>
                  <option value>Chọn Quận 11</option>
                  <option value>Chọn Quận 12</option>
                  <option value>Chọn Quận Bình Thạnh</option>
                  <option value>Chọn Quận Gò Vấp</option>
                </select>
              </div>
              <div className="col-4">
                <select name="phuongxa" id="phuongxa" className="form-control">
                  <option value>Chọn Phường/Xã</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <h4 className="fs-6 text-main mt-4">Phương thức thanh toán</h4>
        <div className="thanhtoan mb-4">
          <div className="p-4 border">
            <input name="typecheckout" onchange="showbankinfo(this.value)" type="radio" defaultValue={1} id="check1" />
            <label htmlFor="check1">Thanh toán khi giao hàng</label>
          </div>
          <div className="p-4 border">
            <input name="typecheckout" onchange="showbankinfo(this.value)" type="radio" defaultValue={2} id="check2" />
            <label htmlFor="check2">Chuyển khoản qua ngân hàng</label>
          </div>
          <div className="p-4 border bankinfo">
            <p>Ngân Hàng Vietcombank </p>
            <p>STK: 99999999999999</p>
            <p>Chủ tài khoản: Đinh Ngọc Hoàng</p>
          </div>
        </div>
        
      </div>
      <div className="col-md-8">
        <h2 className="fs-5 text-main">Thông tin đơn hàng</h2>
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
              <td style={{height: 300}}>
                <img className=" w-75" alt="sad" src={urlImage+products.image}  />
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
          </tfoot>
        </table>
        <div>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Mã giảm giá" aria-describedby="basic-addon2" />
            <span className="input-group-text" id="basic-addon2">Sử dụng</span>
          </div>
        </div>
        <table className="table table-borderless border">
          <tbody><tr>
              <th>Tạm tính</th>
              <td className="text-end">{products.price}</td>
            </tr>
            <tr>
              <th>Phí vận chuyển</th>
              <td className="text-end">0</td>
            </tr>
            <tr>
              <th>Giảm giá</th>
              <td className="text-end">0</td>
            </tr>
            <tr>
              <th>Tổng cộng</th>
              <td className="text-end">{products.price}</td>
            </tr>
            </tbody>
          </table>
          <div className="text-center">
        <a href={"../checkout/transaction/"+products.id} className="btn btn-primary w-75 my-5">XÁC NHẬN</a>
            </div>
      </div>
    </div>
  </div>
</section>

     );
}
 
export default CheckOut;