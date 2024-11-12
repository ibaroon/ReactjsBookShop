import { Link } from "react-router-dom";
import "./Forms.css";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [showPassword,setShowPassword]=useState(false);
    // form submit handler
    const formSubmitHandler = (e) => {
      e.preventDefault(); 

      if(email.trim()==="") return toast.error("Email is Required"); // validate email  and => toast.error("Email is Required") => use toast to feedback user
      if(password.trim()==="") return; // validate password
      console.log({email,password});
    }
// show password
const showPasswordHandler=()=>{
    setShowPassword(prev => !prev);
}

    return (
        <div className="form-wrapper">
            <ToastContainer theme="colored"/>
            <h1 className="fomr-title">login to your account</h1>
        <form onSubmit={formSubmitHandler} className="form">
<input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email"/>
<input value={password} onChange={e=>setPassword(e.target.value)} type={showPassword ? "text" : "password"} placeholder="Password"/>

{
showPassword ? 
<i onClick={showPasswordHandler} className="bi bi-eye-slash-fill show-password-icon"></i>
:
<i onClick={showPasswordHandler} className="bi bi-eye-fill show-password-icon"></i>

 }
<button className="form-btn">Login</button>

        </form>
<div className="fomr-footer">
    Don't have an account?{" "}
    <Link to="/register" className="form-link">Register</Link>
</div>
        </div>
    );
}

export default Login;
