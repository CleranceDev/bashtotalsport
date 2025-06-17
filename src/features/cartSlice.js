import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    item:[]
}
const cartSlicer = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state,action)=>{
            const exist  = state.item.find((ite)=>ite.prod_id === action.payload.prod_id)
            if(exist){
                alert('product already exist')
                return;
            }
            if(!Array.isArray(state.item)) state.item = []
            state.item = state.item.concat(action.payload)
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