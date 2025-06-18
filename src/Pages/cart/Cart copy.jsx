import React from 'react';
import userIcon from '../../assets/svg/user.png';
import dollorsign from '../../assets/svg/bx-euro.svg';
import { useSelector,useDispatch } from 'react-redux';
import './cart.scss';
import {useMutation} from '@tanstack/react-query' 
import axios from 'axios';
import {clearCart,removeIt} from '../../features/cartSlicer'

const Cart = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.users.currentUser);
  const userSelectedProduct = useSelector((state) => state.product.selectedProduct);
  const carts = useSelector((state) => state.cart.item);
   console.log(carts)
  const orderMutate = useMutation({
    mutationKey:['order'],
    mutationFn:async()=>{
      const res = await axios.post('https://bashtotalsportbackend.onrender.com/api/v1/home/order',{
      user_id:currentUser.id,
      prod_id:userSelectedProduct.prod_id,
      Price:userSelectedProduct.Price,
      Total:userSelectedProduct.Price
      })
      console.log(res.data)
      return res
    },
    onSuccess:()=>{
      alert('order sent')

    },
    onError:()=>{
      alert('failed to send the order')
    }
  })
  const sendOrder = ()=>{
    if(!currentUser||!userSelectedProduct){
      alert('please loggin to see you cart')
    }
    const orderData = {
      user_id:currentUser.id,
      prod_id:userSelectedProduct.prod_id,
      Price:userSelectedProduct.Price,
      Total:userSelectedProduct.Price
    }
    orderMutate.mutate(orderData)
  }
  const clearCartAll = ()=>{
    if(!carts){
      alert('Cart is already empty')
    }
    dispatch(clearCart())
  }
  return (
    <div className="cart">
      <header className="cart-header">
        <div className="cart-total">
          <img src={dollorsign} alt="Total" className="currency-icon" />
          <p className="total-amount">1500 +</p>
        </div>
        
        <div className="user-info">
          <img src={userIcon} alt="User" className="user-avatar" />
          <div className="user-details">
            <p className="user-name">{currentUser?.name || 'Guest'}</p>
          </div>
        </div>
      </header>

      <div className="cart-items">
        {
          carts ?
            (<div key={carts.prod_id} className="cart-item">
              <div className="item-image-container">
                <img src={carts.img} alt={carts.Prod_name} className="item-image" />
              </div>
              <div className="item-details">
                <h3 className="item-name">{carts.Prod_name}</h3>
                <p className="item-price">${carts.Price}</p>
                <button onClick={()=>dispatch(removeIt(cart))}>Remove Product</button>
              </div>
            </div>
          
        ): (
          <p className="empty-cart-message">Your cart is empty</p>
        )}
      </div>

      <button onClick={sendOrder}>Check out</button>
      
      <button onClick={clearCartAll}>Clear Cart</button>
    </div>
  );
};

export default Cart;