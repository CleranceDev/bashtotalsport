import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    search:[]
}
const searcherSlice = createSlice({
    name:'searching',
    initialState,
    reducers:{
        searchingProducts : (state,action)=>{
           
            state.search = action.payload
        },
        searchingClear :(state,action)=>{
            state.search =[]
        }

    }
})
export const {searchingProducts,searchingClear} = searcherSlice.actions
export default searcherSlice.reducer