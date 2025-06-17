import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    item:[]
}
const cartSlicer = createSlice({
    name:'cart',
    initialState,
    reducers:{
  
       addItem: (state, action) => {
          if (!Array.isArray(state.item)) {
            state.item = [];
          }
          const exist = state.item.find((item) => item.prod_id === action.payload.prod_id);
          if (exist) {
            alert('Product already exists!');
            return;
          }
          state.item.push(action.payload);
        },
        clearCart:(state)=>{
            state.item = []
        },
        removeIt:(state,action)=>{
            const removeExist = state.item.find((prod)=>{ return prod.prod_id === action.payload.prod_id})
            // console.log('product found',removeExist)
            if(removeExist){
                state.item = state.item.filter((ite)=>ite.prod_id !==action.payload.prod_id)
            }
        }
    }  
})
export const {addItem,clearCart,removeIt} = cartSlicer.actions
export default cartSlicer.reducer