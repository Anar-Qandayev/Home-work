import axios from "axios";
import React , { useState , useEffect} from "react";
import CardDetail from "../../components/CardDetails/CardDetail";
import { useParams } from "react-router-dom";
import "./ProductDetails.scss"

const ProductDetails = () => {
  const { id } = useParams();
  const [card, setCard] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3009/get-data/${id}`).then((res) => {
      setCard(res.data.data);
    });
  }, [id]);

  return (
    <div className="card-content">
      <CardDetail card={card} />
    </div>
  );
};

export default ProductDetails;
