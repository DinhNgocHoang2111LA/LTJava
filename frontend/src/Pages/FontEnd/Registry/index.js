/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import UserService from "../../../Services/UserService"


const Registry = () => {
 
  const [name, setName] =useState([]);
  const [password, setPassword] =useState([]);
  const [username, setUsername] =useState([]);
  const [phone, setPhone] =useState([]);
  const [email, setEmail] =useState([]);
  const [address, setAddress] =useState([]);
  const [roles, setRoles] =useState('1');
  const [load, setLoad] =useState([]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     
      const newUser = {
          username: username,
          password: password,
          name: name,
          phone: phone,
          email: email,
          address:address,
      };

      const response = await UserService.getStore(newUser);

      console.log("Product created successfully:", response.data);
      alert("Dng ky mới thành công")
      setLoad(Date.now());
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };
  
  return (
    <form action={handleSubmit} method="post" name="registercustomer">
  <div className="container">
    <h1 className="fs-2 text-main text-center">ĐĂNG KÝ TÀI KHOẢN</h1>
    <div className="row">
      <div className="col-md-6">
        <div className="mb-3">
          <label htmlFor="name" className="text-main">Họ tên(*)</label>
          <input type="text" name="name" id="name" className="form-control" onChange={(e) => setName(e.target.value)} placeholder="nhập họ tên" required />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="text-main">Điện thoại(*)</label>
          <input type="text" name="phone" id="phone" className="form-control" onChange={(e) => setPhone(e.target.value)} placeholder="Nhập điện thoại" required />
        </div>
        <div className="mb-3">
          <div className="card">
            <div className="card-header text-main">
              Địa chỉ
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="address">Địa chỉ</label>
                <input type="text" name="address" id="address" className="form-control" onChange={(e) => setAddress(e.target.value)} placeholder="Nhập địa chỉ" />
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
      <div className="col-md-6">
        <div className="mb-3">
          <label htmlFor="username" className="text-main">Tên tài khoản(*)</label>
          <input type="text" name="username" id="username" className="form-control" onChange={(e) => setUsername(e.target.value)} placeholder="Nhập tài khoản đăng nhập" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="text-main">Email(*)</label>
          <input type="email" name="email" id="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Nhập email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="text-main">Mật khẩu(*)</label>
          <input type="password" name="password" id="password" className="form-control" placeholder="Mật khẩu" required />
        </div>
        <div className="mb-3">
          <label htmlFor="password_re" className="text-main">Xác nhận Mật khẩu(*)</label>
          <input type="password" name="password_re" id="password_re" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Xác nhận mật khẩu" required />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary" type="submit" value="submit">Đăng ký</button>
        </div>
      </div>
    </div>
  </div>
</form>

    
  ) 
  ;
};

export default Registry;