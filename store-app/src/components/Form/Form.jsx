import React, {useState} from 'react';
import axios from 'axios';
const Form = () => {
  const { REACT_APP_BASE_URL }=process.env;
  console.log( REACT_APP_BASE_URL);
    const [data , setData]=useState({
        name:"",
        surname:"",
        email:"",
        password:"",
    });

   const onHandleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value}); //  ...data yazilisi  name,surname,email,password-u goturmek demekdir
   };

    const register = () => {
      console.log(`${REACT_APP_BASE_URL}/create-data`);
        axios.post(`${REACT_APP_BASE_URL}/create-data`,data)
        .then((res)=>{
            console.log(res);
        });
        console.log("data>>" , data);
    };
  return (
    <div className="form">
      <input
        placeholder="name"
        name="name"
        onChange={onHandleChange}
      />
      <input
        type="text"
        placeholder="surname"
        name="surname"
        onChange={onHandleChange}
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        onChange={onHandleChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={onHandleChange}
      />
      <button className="secondary" onClick={register}>Register</button>
    </div>
  );
};

export default Form;