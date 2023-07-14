import React from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { increment,decrement } from '../../redux/slices/counterSlice';
import { addToCard,removeCard } from '../../redux/slices/addToCardSlice';

const Counter = () => {
  const count=useSelector((state)=> state.counter);
  const dispatch=useDispatch();
  return (
    <div>
      <h1>Counter App</h1>
      <h2>Count : {count}</h2>
      <div className='button'>
      <button className="primary" onClick={()=>dispatch(increment())}>Increment</button>
      <button className="secondary" onClick={()=>(count===0 ? "" : dispatch(decrement()))}>Decrement</button>
      </div>
      <div className='button'>
      <button className="danger" onClick={()=>dispatch(addToCard())}>Like</button>
      <button className="primary" onClick={()=>dispatch(removeCard())}>Clear</button>
      </div>
    </div>
  )
}

export default Counter