import React from 'react';
import "./Basket.scss";
import { useDispatch,  useSelector } from 'react-redux';  
import { removeBasket } from '../../redux/slices/addToBasketSlice';


const Basket = ({data}) => {
    const basketItems=useSelector((state)=>state.basket);
    const dispatch=useDispatch();
  return (
    <div className='basket'>
        <h2>Basket</h2>
        <div className='basket-product'>
            {basketItems.length===0?(
                <p>There are no favorite products</p>
                ):(
                    <ul>
                        {basketItems.map((data,index)=>(
                            <li key={index}><img src={data.image} alt="" /></li>
                            ))}
                    </ul>
                )
            }
        </div>
        <button onClick={()=>dispatch(removeBasket())}>Clear Basket</button>
    </div>
  )
}

export default Basket;