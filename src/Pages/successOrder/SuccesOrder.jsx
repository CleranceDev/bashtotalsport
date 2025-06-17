import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './checkout.scss'

const SuccessOrder = () => {
    const navigate = useNavigate()
    const backToHome = () => {
        navigate('/')
    }
    
    const productBought = useSelector((state) => state.product.selectedProduct)
    const currentUser = useSelector((state) => state.users.currentUser)

    return (
        <div className="success-container">
            <div className="success-card">
                <div className="success-header">
                    <h1>Thanks for your order!</h1>
                    <div className="success-icon">✓</div>
                    <p className="success-message">
                        Woohoo! Your payment was successful, and your order is complete.<br />
                        A receipt is on its way to your inbox.
                    </p>
                </div>

                <div className="divider"></div>

                {currentUser && (
                    <div className="user-info">
                        <p>Shipping to: <strong>{currentUser.lastname}</strong></p>
                        <p>Location: <strong>{currentUser.address}</strong></p>
                    </div>
                )}

                {productBought && (
                    <div className="product-details">
                        <h3>Your Order</h3>
                        <div className="product-item">
                            <img src={productBought.img} alt={productBought.product} className="product-image" />
                            <div className="product-info">
                                <p className="product-brand">{productBought.brand_name}</p>
                                <p className="product-name">{productBought.product}</p>
                                <p className="product-prices">R{productBought.Price}</p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="action-buttons">
                    <button className="view-order-btn" onClick={()=>navigate('/cart')}>View Cart</button>
                    <button className="back-to-shop-btn" onClick={backToHome}>Back to shop</button>
                </div>
            </div>
        </div>
    )
}

export default SuccessOrder