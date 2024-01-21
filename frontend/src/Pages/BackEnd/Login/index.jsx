import "./style.css";
import React,{useState} from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import UserService from "../../../Services/UserService";


const Login = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handSubmit=(e)=>{
        e.preventDefault();
        let username=document.getElementById("login").value;
        let password=document.getElementById("pass").value;
        if (username==="admin" && password === "1") {
            alert('Chao mung');
            setIsLoggedIn(true);
            navigate("/admin/home");
            }else{
                alert('Sai mat khau');
                };
                
   }
    return ( <>
    <div className="wrapper fadeInDown">
        <div id="formContent">
            
            <div className="fadeIn first">
            <Icon icon="teenyicons:user-solid" className="user-icon my-2"/>   
            </div>
            
            <form onSubmit={handSubmit}>
                <input type="text" id="login" className="fadeIn second" name="uname" placeholder="login" required />
                <input type="text" id="pass" className="fadeIn third" name="pass" placeholder="password" required  />
                <input type="submit" className="fadeIn fourth" defaultValue="Log In" />
                
            </form>

            <div id="formFooter">
            <a className="underlineHover" href="/">Forgot Password?</a>
            </div>
        </div>
    </div>



    </> );
}
 
export default Login;