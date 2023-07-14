import {createSlice} from '@reduxjs/toolkit';

const addToBasketSlice=createSlice({
  name:"basket",
  initialState:[],
  reducers:{
    addToBasket:(state, action)=>{
      state.push(action.payload);
    },
    removeBasket:(state)=>state=[],
  },
});


export const {addToBasket,removeBasket}=addToBasketSlice.actions;
export default addToBasketSlice.reducer;