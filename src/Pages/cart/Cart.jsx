import React from 'react';
import userIcon from '../../assets/svg/user.png';
import dollorsign from '../../assets/svg/bx-euro.svg';
import { useSelector,useDispatch } from 'react-redux';
import './cart.scss';
import {useMutation} from '@tanstack/react-query' 
import axios from 'axios';
import {clearCart,removeIt} from '../../features/cartSlicer'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.users.currentUser);
  const carts = useSelector((state) => state.cart.item)
  
  const orderMutate = useMutation({
    mutationKey:['order'],
    mutationFn:async(orderData)=>{
      const res = await axios.post('https://bashtotalsportbackend.onrender.com/api/v1/home/order',orderData)
      return res.data
    },
    onSuccess:()=>{
      alert('order sent')

    },
    onError:(error)=>{
      alert('failed to send the order')

      console.log(error)
      return navigate('/error');
    }
  })
  const sendOrder = ()=>{
    if(currentUser.length===0|| carts.length===0){
      alert('Cart is empty')
    }
    try {    
      carts.forEach((prod)=>{
        const orderData = {
          prod_id: prod.prod_id,
          user_id: currentUser.user_id,
          Price: prod.Price,
      }
        orderMutate.mutate(orderData)
        dispatch(clearCart())
        navigate('/successorder')
      })
    } catch (error) {
      console.log(error)
    }

  }
  const clearCartAll = ()=>{
    if(carts.length ===0){
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
            <p className="user-name">{currentUser.lastname || 'Guest'}</p>
          </div>
        </div>
      </header>

      <div className="cart-items">
        {Array.isArray(carts) && carts.length > 0 ? (
          carts.map((cart) => (
            <div key={cart.prod_id} className="cart-item">
              <div className="item-image-container">
                <img src={cart.img} alt={cart.Prod_name} className="item-image" />
              </div>
              <div className="item-details">
                <h3 className="item-name">{cart.Prod_name}</h3>
                <p className="item-price">${cart.Price}</p>
                <button onClick={()=>{dispatch(removeIt(cart))}}>Remove Product</button>
              </div>
            </div>
          ))
        ) : (
          <p className="empty-cart-message">Your cart is empty</p>
        )}
        {/* {
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
        )} */}
      </div>

      <button onClick={sendOrder}>Check out</button>
      
      <button onClick={clearCartAll}>Clear Cart</button>
    </div>
  );
};

export default Cart;