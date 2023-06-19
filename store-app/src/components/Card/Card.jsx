import React from "react";
import "../../style/main.scss";
import Button from "../Button/Button";

const Card = ({ data }) => {
  const clickedButton = () => {
    console.log("Hello");
  };

  const { title, image, description, price } = data;

  return (
    <div className="card">
      <img src={image} alt="" />
      <h1>{title.slice(0, 15)}</h1>
      <p>{description.slice(0, 20)}</p>
      <h3>
        {price} <span>AZN</span>
      </h3>
      <Button className="primary" text="Read More" onClick={clickedButton} />
    </div>
  );
};

export default Card;
