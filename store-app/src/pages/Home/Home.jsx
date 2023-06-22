import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Home( ) {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const decrement = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };
  const increment = () => {
    if (count >= 0) {
      setCount(count + 1);
    }
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3009/get-data").then((res) => {
      setData(res.data.data);
    });
  },[]);
  const deleteItem = (id)=>{
    axios.delete(`http://localhost:3009/delete-data/${id}`).then((res)=>{
      setData(res.data.data);
    })
  };
  
  
  return (
    <div className="home">
      <div className="btnClick">
        <button className="primary" onClick={increment}>
          +
        </button>
        <span>{count}</span>
        <button className="primary" onClick={decrement}>
          -
        </button>
      </div>
      
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Details</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            { data.map((item)=>{
              if(typeof item.title !== "undefined"){
                return(
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td className="img">
                      <img src={item.image} alt="productImage" />
                    </td>
                    <td>{item.title.slice(0,15)}</td>
                    <td>{item.description.slice(0,70)}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td><button className="primary" onClick={()=> navigate(`/product-detail/${item.id}`)}>Details</button></td>
                    <td><button className="primary" onClick={()=>deleteItem(item.id)}>Delete</button></td>
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
