import React from "react";
import { Link } from "react-router-dom";
import './style.scss';

const Features = () => {
  return (
    <div className="feat-container">
      <hr className="divider" />
      <nav className="features" aria-label="Main navigation">
        <Link className="link" to="brands">Features</Link>
        <Link className="link" to="shoes">Shoes</Link>
        <Link className="link" to="/men">Men</Link>
        <Link className="link" to="/female">Women</Link>
        <Link className="link" to="kids">Kids</Link>
        <Link className="link" to="/men">FanGear</Link>
        <Link className="link" to="tech">Tech & equipment</Link>
        <Link className="link" to="brands">Brands</Link>
      </nav>
      <hr className="divider" />
    </div>
  );
};

export default Features;