import React, { useState } from "react";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import { selectProduct, clearSelectedProduct } from "../../features/productSlice";
import { addItem } from "../../features/cartSlicer";
import {useNavigate} from 'react-router-dom'

const Puma = () => {
  const [modal, setModal] = useState(false);
  const itemscart = useSelector((state)=>state.cart.item) 
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.product.selectedProduct);
  const currentUser = useSelector((state) => state.users.currentUser);
  const { data: product, error, isLoading } = useQuery({
    queryKey: ["puma"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/api/v1/home/brand/Puma");
      return response.data;
    },
  });
  const orderMutate = useMutation({
    mutationFn:async (orderData)=>{
      const res = await axios.post("http://localhost:3000/api/v1/home/order",orderData)
      return res.data
    },
    onSuccess:()=>{
      alert('Order placed')
    },
    onError:(error)=>{
      console.log(error)
    }
  })


  const handlePlaceOrder = async () => {
    if (currentUser.length===0) {
      alert("Please login to place an order");
      return;
    }
    const orderData = {
      prod_id: selectedProduct.prod_id,
      user_id: currentUser.user_id,
      Price: selectedProduct.Price,
    };
    orderMutate.mutate(orderData)
    navigate('/successorder')
  };

  const handleAddToCart = ()=>{
    if(currentUser.length===0){
      return alert('Please login to add to cart')
    }
    const itemExist = itemscart.find((exist)=>exist.prod_id === selectedProduct.prod_id)
    if(itemExist){
      alert('product already in the cart')
      return;
    }
    dispatch(addItem(selectedProduct));
    alert('added to cart')
    setTimeout(()=>{
      navigate('/cart')
    },500)
  }

  const productsToDisplay =product;

  return (
    <div className="men-container">
      <div className="filter-sidebar">
        <h3>Filter</h3>
        <div className="filter-group">Department</div>
        <div className="filter-group">Subcategory</div>
        <div className="filter-group">Brand</div>
        <div className="filter-group">Size</div>
        <div className="filter-group">Colour</div>
        <div className="filter-group">Material</div>
        <div className="filter-group">Price</div>
        <div className="filter-group">Sport</div>
      </div>

      <div className="products-grid">
        {Array.isArray(productsToDisplay) && productsToDisplay.length > 0 ? (
          productsToDisplay.map((prod) => {
            const prodInfor = () => {
              dispatch(selectProduct(prod));
              setModal(true);
            };
            return (
              <div key={prod.prod_id} className="product-card" onClick={prodInfor}>
                <div className="product-image">
                  <img src={prod.img} alt={prod.Prod_name} />
                </div>
                <div className="product-info">
                  <span className="new-badge">NEW</span>
                  <p className="product-name">{prod.Prod_name}</p>
                  <p className="product-brand">{prod.brand_name}</p>
                  <p className="product-price">R{prod.Price}</p>
                </div>
              </div>
            );
          })
        ) : ('')}
      </div>

      {selectedProduct && modal && (
        <div className="product-modal">
          <div className="modal-content">
            <div className="modal-left">
              <img src={selectedProduct.img} alt={selectedProduct.Prod_name} />
            </div>

            <div className="modal-right">
              <h2 className="product-title">{selectedProduct.Prod_name}</h2>
              <p className="product-brand">Brand: {selectedProduct.brand_name}</p>
              <p className="product-price">Price: R{selectedProduct.Price}</p>
              
              <div className="button-group">
                <button className="buy-now" onClick={handlePlaceOrder}>Buy Now</button>
                <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
                <button className="close-btn" onClick={() => { setModal(false); dispatch(clearSelectedProduct()); }}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Puma;
