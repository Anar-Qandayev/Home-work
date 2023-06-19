import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = ({setUser,checkToken}) => {
    const navigate = useNavigate();

    const [loginData,setLoginData]=useState({
        username:"",
        password:"",
    })
    const login = () => {
      axios.post(`http://localhost:3009/login`, loginData).then((res) => {
        
        if(res.status===200){
            navigate("/dashboard");
            setUser(true); 
            sessionStorage.setItem("token",res.data.data.token);
        } 
      });
    };
    const onHandleChange = (e) => {
        setLoginData({...loginData, [e.target.name]:e.target.value});
    }
  return (
    <div className='login'>
        <input type="text" name="username" onChange={onHandleChange} placeholder='...User Name'/>
        <input type="password" name="password" onChange={onHandleChange} placeholder='...User Password' />
        <button onClick={login}>Login</button>
    </div>
  )
}
export default Login;