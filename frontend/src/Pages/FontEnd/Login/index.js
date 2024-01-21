import {useNavigate} from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const loginUser=(e)=> {
    e.preventDefault();
    const username=document.getElementById('username').value;
    const password=document.getElementById('password').value;
    
      if (username === "user" && password==="1") {
        navigate("../");
      } else {
        alert('Login failed');
      }
    
  }

    return ( 
        <section className="hdl-maincontent py-2">
  <form >
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <p>Để gửi bình luận, liên hệ hay để mua hàng cần phải có tài khoản</p>
        </div>
        <div className="col-md-8">
          <div className="mb-3">
            <div classname="w-25">
            <label id="username" className="text-main">Tên tài khoản (*)</label>
              
            </div>
            <input type="text" name="username" id="username" className="form-control w-50" placeholder="Nhập tài khoản đăng nhập" required />
          </div>
          <div className="mb-3">
            <div classname="w-25">
              <label id="password" className="text-main">Mật khẩu (*)</label>
            </div>
            <input type="text" name="password" id="password" className="form-control w-50" placeholder="Mật khẩu" required />
          </div>
          <div className="mb-3">
            <button className="btn btn-success" name="LOGIN" onClick={loginUser}>Đăng nhập</button>
          </div>
          <p><u className="text-main">Chú ý</u>: (*) Thông tin bắt buộc phải nhập</p>
        </div>
      </div>
    </div>
  </form>
</section>

     );
}
 
export default Login;