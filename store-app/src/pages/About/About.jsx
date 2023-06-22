import React ,{useState} from 'react';
import {userData} from "../../data/data";
// import axios from "axios";
import Search from "../../components/Search/Search";
import "./About.scss";
const About = () => {
    const [userDatas,setUserDatas]=useState(userData);
    const inputStyle={
    padding:10,
    with:"30%",
    fontSize:"22px",
    }
    const searchUsers=(value)=>{ 
      const search=value.target.value;
      const newData=userData.filter(item=>(
        item.name.toLocaleUpperCase().includes(search.toLocaleUpperCase())
      ));
      setUserDatas(newData)
    }
return (
    <div className='about'> 
        <h1>User Data</h1>
        <input type="search" 
          placeholder="Search..."  
          style={inputStyle}
          onChange={searchUsers}
        />
          {
            userDatas.map((item)=>(
              <Search  key={item.id} user={item}/>
            ))
          } 
    </div>
  )
}

export default About