import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import './search.scss'
import { addItem } from '../../features/cartSlicer'

const SearchPage = () => {
    const dispatch = useDispatch()
    const searched = useSelector((state)=>state.search.search)
    console.log(searched)
  return (
    <div className='containers'>
        <div className='products-grids'>
            {Array.isArray(searched)?  searched.map((prod)=>{
                const productInfor = ()=>dispatch(addItem(prod))
                return(
                    <div className='products-display' onClick={productInfor} key={prod.pro_id}>
                        <img className='products-img' src={prod.img} alt="" />
                        <div className="product-info">
                            <p>{prod.Prod_name}</p>
                            <p>{prod.brand_name}</p>
                            <p>R{prod.Price}</p>
                        </div>
                    </div>
                )
            }):(!searched && <div>No product found </div>)}
        </div>
    </div>
  )
}

export default SearchPage