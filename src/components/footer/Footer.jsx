import React from 'react';
import { FaWallet, FaMapMarkerAlt, FaUndo, FaStore, FaMobileAlt, FaQuestionCircle, FaHome, FaTruck, FaExchangeAlt, FaUser, FaShoppingCart, FaFileAlt, FaEnvelope, FaCreditCard, FaCoins, FaShieldAlt, FaWifi, FaFilm, FaTools, FaBuilding } from 'react-icons/fa';
import './footer.scss'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Customer Service</h3>
        <div className="footer-links">
          <Link to="/"><FaWallet className="icon" /> Pay your TFG Money Account online</Link>
          <Link to="/"><FaTruck className="icon" /> Track your order</Link>
          <Link to="/"><FaUndo className="icon" /> Log a return</Link>
          <Link to="/"><FaMapMarkerAlt className="icon" /> Find your nearest store</Link>
          <Link to="/"><FaMobileAlt className="icon" /> Get the Bash app</Link>
        </div>
      </div>

      <div className="footer-section">
        <h3>Bash Help</h3>
        <div className="footer-links">
          <Link to="/"><FaHome className="icon" /> Bash Help home</Link>
          <Link to="/"><FaTruck className="icon" /> Collect and Deliver</Link>
          <Link to="/"><FaExchangeAlt className="icon" /> Returns and Refunds</Link>
          <Link to="/"><FaUser className="icon" /> Profile and Login</Link>
          <Link to="/"><FaShoppingCart className="icon" /> How to shop online</Link>
          <Link to="/"><FaFileAlt className="icon" /> Terms & Conditions</Link>
          <Link to="/"><FaEnvelope className="icon" /> Contact us</Link>
        </div>
      </div>

      <div className="footer-section">
        <h3>TFG services</h3>
        <div className="footer-links">
          <Link to="/"><FaCreditCard className="icon" /> TFG Financial Services</Link>
          <Link to="/"><FaWallet className="icon" /> TFG Money Account</Link>
          <Link to="/"><FaCoins className="icon" /> TFG Rewards</Link>
          <Link to="/"><FaShieldAlt className="icon" /> TFG Insurance</Link>
          <Link to="/"><FaWifi className="icon" /> TFG Connect airtime & data</Link>
          <Link to="/"><FaFilm className="icon" /> TFG Media</Link>
          <Link to="/"><FaTools className="icon" /> Repairs, valuation & ring sizing</Link>
        </div>
      </div>

      <div className="footer-section">
        <h3>Company</h3>
        <div className="footer-links">
          <Link to="/location"><FaMapMarkerAlt className="icon" /> Store finder</Link>
          <Link to="/"><FaBuilding className="icon" /> About Bash</Link>
          <Link to="/"><FaBuilding className="icon" /> About TFG - The Foschini Group Ltd.</Link>
          <Link to="/"><FaShieldAlt className="icon" /> Sustainability, CSI, BEE</Link>
          <Link to="/"><FaUser className="icon" /> Bash Careers</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;