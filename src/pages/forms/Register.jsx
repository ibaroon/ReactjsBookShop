import { Link } from "react-router-dom";
import "./Forms.css";
import { useState,useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [userName,setUserName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [repassword,setRePassword]=useState("");
   
    // form submit handler
    const formSubmitHandler = (e) => {
      e.preventDefault(); 

      if(email.trim()==="") return toast.error("Email is Required"); // validate email  and => toast.error("Email is Required") => use toast to feedback user
      if(password.trim()==="") return; // validate password
      if(repassword.trim()==="") return; // validate repassword
      if(userName.trim()==="") return; // validate username
      if (password !== repassword)  return toast.error("Password didn't Match");
       
      //console.log({email,password,repassword,userName});
      
    }

   

    return (
        <div className="form-wrapper">
            <ToastContainer theme="colored"/>
            <h1 className="fomr-title">Create new account</h1>
        <form onSubmit={formSubmitHandler} className="form">
<input value={userName} onChange={e=>setUserName(e.target.value)} type="text" placeholder="User Name *"/>
<input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email *"/>
<input value={password}  onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password *"/>
<input value={repassword} onChange={e=>setRePassword(e.target.value)} type="password" placeholder="Rewrite Password *"/>


<button className="form-btn">Register</button>

        </form>
<div className="fomr-footer">
    Already have an account?{" "}
    <Link to="/login" className="form-link">Login</Link>
</div>
        </div>
    );
}

export default Register;
