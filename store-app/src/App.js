import {React , useEffect, useState}  from "react"; 
import { Route, Routes ,Navigate } from "react-router-dom"; 
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Form from "./components/Form/Form.jsx";
import About from "./pages/About/About.jsx";
import Home from "./pages/Home/Home.jsx";
import Products from "./pages/Products/Products.jsx";
import Login from "./pages/Login/Login.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx"; 
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx"; 
import jwt_decode from "jwt-decode";

function App() { 
  const [user,setUser]=useState(null);
  useEffect(()=>{
    const token=sessionStorage.getItem("token"); 
    if(token){
      let decoded = jwt_decode(token);
      setUser(decoded.sub);
    }

  },[user]); 

  return (
    <div className="App">
      <Header />
      <main> 
        <Routes>
          <Route 
            path="/login" 
            element={
              user ?  <Navigate to="/dashboard"/> : <Login setUser={setUser}/>
          }/>
          <Route 
          path="/dashboard" 
          element={user ? <Dashboard setUser={setUser}/> : <Navigate to="/login"/>
          }/>
          <Route 
            path="/product-detail/:id" 
            element={ user ? <ProductDetails setUser={setUser}/> : <Navigate to="/"/> }
          />
          <Route path="/home" element={<Home/>}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/form" element={<Form />}/>
          <Route path="/about" element={<About />}/>
        </Routes> 
      </main>
      <Footer />
    </div>
  );
}

export default App;
