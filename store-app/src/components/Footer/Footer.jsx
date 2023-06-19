import React from "react";
import "../../style/main.scss";

const Footer = () => {
  return (
      <footer>
        <ul className="ul1">
          <li> Everything</li>
          <li> Shoop</li>
          <li>
           <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg"
            alt="logoImage"/>
          </li>
        </ul>
        <ul className="ul1">
          <li> About</li>
          <li> Blog</li>
          <li> Gallery</li>
        </ul>
        <ul className="ul1">
          <li> Card</li>
          <li> Goods</li>
          <li> Organic</li>
        </ul>
        <ul className="ul1">
          <li> Log in</li>
          <li> <button>Add</button> </li>
          <li> <input type="text" placeholder="Enter mail"/></li>
        </ul>
      </footer>
  );
};
export default Footer;