import React, { useState, useMemo } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import { selectProduct, clearSelectedProduct } from "../../features/productSlice";
import { addItem } from "../../features/cartSlicer"; // ✅ Updated import
import "./stylemen.scss";

const Men = () => {
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.product.selectedProduct);
  const currentUser = useSelector((state) => state.users.currentUser);
  const [display, setDisplay] = useState([]);
  const [filters, setFilters] = useState({
    brand: '',
    size: '',
    colour: '',
    material: '',
  });

  const { data: product, error, isLoading } = useQuery({
    queryKey: ["men"],
    queryFn: async () => {
      const response = await axios.get("https://bashtotalsportbackend.onrender.com/api/v1/home/men");
      return response.data;
    },
  });

  const filterOptions = useMemo(() => {
    if (!product) return { brands: [], sizes: [], colours: [], materials: [] };
    return {
      brands: [...new Set(product.map(p => p.brand_name))].filter(Boolean),
      sizes: [...new Set(product.flatMap(p => p.sizes || []))].filter(Boolean),
      colours: [...new Set(product.map(p => p.colour))].filter(Boolean),
      materials: [...new Set(product.map(p => p.material))].filter(Boolean),
    };
  }, [product]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://bashtotalsportbackend.onrender.com/api/v1/home/men/search", { search });
      setDisplay(response.data);
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  const clearBtn = () => {
    setDisplay([]);
    setSearch("");
  };

  const productsToDisplay = display.length > 0 ? display : product;
  const filteredProducts = productsToDisplay ? productsToDisplay.filter(product => {
    return (
      (!filters.brand || product.brand_name === filters.brand) &&
      (!filters.size || (product.sizes && product.sizes.includes(filters.size))) &&
      (!filters.colour || product.colour === filters.colour) &&
      (!filters.material || product.material === filters.material)
    );
  }) : [];

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

    try {
      await axios.post("https://bashtotalsportbackend.onrender.com/api/v1/home/order", orderData);
      alert("Order placed successfully!");
      setModal(false);
      dispatch(clearSelectedProduct());
    } catch (error) {
      console.error("Order error:", error);
      alert("Please login to add to cart");
    }
  };

  const handleAddToCart = () => {
    if (currentUser.length === 0) {
      alert("Please login to add to cart");
      return;
    }

    dispatch(addItem({ product: selectedProduct })); // ✅ Updated action
    alert("Added to cart!");
    setModal(false);
    dispatch(clearSelectedProduct());
  };

  const renderFilterGroup = (title, filterType, options) => (
    <div className="filter-group">
      <div className="filter-title">{title}</div>
      <label>
        <input
          type="radio"
          name={filterType}
          value=""
          checked={filters[filterType] === ''}
          onChange={(e) => setFilters(prev => ({ ...prev, [filterType]: e.target.value }))}
        />
        All {title}
      </label>
      {options.map(option => (
        <label key={option}>
          <input
            type="radio"
            name={filterType}
            value={option}
            checked={filters[filterType] === option}
            onChange={(e) => setFilters(prev => ({ ...prev, [filterType]: e.target.value }))}
          />
          {option}
        </label>
      ))}
    </div>
  );

  return (
    <div className="men-container">
      <div className="filter-sidebar">
        <h3>Filter</h3>
        {renderFilterGroup("Brand", "brand", filterOptions.brands)}
        {renderFilterGroup("Size", "size", filterOptions.sizes)}
        {renderFilterGroup("Colour", "colour", filterOptions.colours)}
        {renderFilterGroup("Material", "material", filterOptions.materials)}
      </div>

      <div className="products-grid">
        {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
          filteredProducts.map((prod) => {
            const prodInfor = () => {
              dispatch(selectProduct(prod));
              setModal(true);
              setQuantity(1);
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
        ) : (
          !isLoading && <div>No products found matching your filters</div>
        )}
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

              <div className="quantity-section">
                <label>Quantity:</label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
              </div>

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

export default Men;
