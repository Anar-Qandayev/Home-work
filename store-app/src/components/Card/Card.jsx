import React from "react";
import "../../style/main.scss";
import Button from "../Button/Button";
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../redux/slices/addToBasketSlice';

const Card = ({ data }) => {
  const clickedButton = () => {
    console.log("Hello");
  };

  const { title, image, description, price } = data;

  const dispatch=useDispatch();

  const handleAddToBasket=()=>{
    dispatch(addToBasket(data));
  }
  return (
    <div className="card">
      <img src={image} alt="" />
      <h1>{title.slice(0, 15)}</h1>
      <p>{description.slice(0, 20)}</p>
      <h3>
        {price} <span>AZN</span>
      </h3>
      <Button className="primary" text="Read More" onClick={clickedButton} />
      <button className="secondary" onClick={handleAddToBasket}>Add</button>
    </div>
  );
};

export default Card;
