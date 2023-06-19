import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Dashboard.scss";
import Home from "../Home/Home"
export const Dashboard = ({setUser}) => {
  const navigate = useNavigate();
  return (
    <div className='dashboard'>
      <button onClick={()=>{ navigate("/login"); setUser(false); sessionStorage.removeItem("token");}}>
        Logout
      </button>
      <Home/>
    </div>
  )
}
export default Dashboard;