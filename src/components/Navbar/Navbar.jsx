import React, { useState } from "react";
import "./style.scss";
import hambuger from "../../assets/svg/hamburgermenuwhite.svg";
import searchwhiteline from "../../assets/svg/searchwhiteline.svg";
import locationwhiteline from "../../assets/svg/locationwhiteline2.svg";
import userwhiteline from "../../assets/svg/userwhiteline.svg";
import cartwhiteline from "../../assets/svg/cartwhiteline.svg";
import { useNavigate, Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { searchingProducts } from "../../features/searchSlice.js";
import onlinesvg from '../../../images/greendot.svg'
import offlinesvg from '../../../images/offlinedot.svg'
import { Link } from "react-router-dom";
const Navbar = () => {
  const currentUser = useSelector((state)=>state.users.currentUser)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [model, setModel] = useState(false);
  const [search, setSearch] = useState("");
  const isOnline = ()=>{
    return currentUser && !(Array.isArray(currentUser) && currentUser.length ===0) 
  }
  const searchMutate = useMutation({
    mutationKey: ["seachedMute"],
    mutationFn: async (search) => {
      const response = await axios.post(
        "https://bashtotalsportbackend.onrender.com/api/v1/home/allproduct/search",
        {
          search: search,
        }
      );
      return response.data;
    },
    onSuccess: (data) => {
      dispatch(searchingProducts(data));
      navigate("/searchpage");
      setSearch("");
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (search.trim()) {
        searchMutate.mutate(search);
        setSearch("");
        setModel(false)
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="container">
      <div className="navbar">
        <div className="bash-section">
          <img
            onClick={() => {
              setMenu(true);
            }}
            src={hambuger}
            alt="menu"
          />
          <Link to='/'>
          
            <h1>bash</h1>
          </Link>
          
        </div>
        <div className="icons-sections">
          <div
            onClick={() => {
              setModel(true);
            }}
          >
            <img src={searchwhiteline} alt="search" />
          </div>
          {model && (
            <div className="search-model">
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  name="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit">Search</button>
              </form>
            </div>
          )}
          <Link to="/location">
            <img src={locationwhiteline} alt="location" />
          </Link>
          <Link to="/registeruser">
            {isOnline() ? <img className="online-indicator" src={onlinesvg}/> : <img className="online-indicator" src={offlinesvg}/> }
            <img src={userwhiteline} alt="User" />
          </Link>
          <Link to="/cart">
            <img src={cartwhiteline} alt="Cart" />
          </Link>
          {menu && (
            <div className="mobile-menu" onClick={()=>setMenu(false)}>
              <Link className="menu-link" to="/brands">Features</Link>
              <Link className="menu-link" to="shoes">Shoes</Link>
              <Link className="menu-link" to="/men">Men</Link>
              <Link className="menu-link" to="/female">Women</Link>
              <Link className="menu-link" to="kids">Kids</Link>
              <Link className="menu-link" to="/men">FanGear</Link>
              <Link className="menu-link" to="tech">Tech & equipment</Link>
              <Link className="menu-link" to="brands">Brands</Link>
          <button className="close-menu-btn" onClick={()=>setMenu(false)}>X</button>
            </div>
          )}
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;