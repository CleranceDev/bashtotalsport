import React from 'react'
import { useSelector } from 'react-redux'

const CheckUser = () => {

    const currentUser = useSelector((state)=>state.users.currentUser)
    const cart = useSelector((state)=>state.cart.item)
    console.log(currentUser)
    console.log(cart)

  return (
    <div>
        <p>{JSON.stringify(currentUser)}</p>
        <div>
          {Array.isArray(cart) && cart.map((car)=>{
            return(
              <div key={car.prod_id}>
                <p>{car.Price}</p>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default CheckUser