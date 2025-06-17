import React from 'react';
import { FaWallet, FaMapMarkerAlt, FaUndo, FaStore, FaMobileAlt, FaQuestionCircle, FaHome, FaTruck, FaExchangeAlt, FaUser, FaShoppingCart, FaFileAlt, FaEnvelope, FaCreditCard, FaCoins, FaShieldAlt, FaWifi, FaFilm, FaTools, FaBuilding } from 'react-icons/fa';
import './footer.scss'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Customer Service</h3>
        <div className="footer-links">
          <a href="#"><FaWallet className="icon" /> Pay your TFG Money Account online</a>
          <a href="#"><FaTruck className="icon" /> Track your order</a>
          <a href="#"><FaUndo className="icon" /> Log a return</a>
          <a href="#"><FaMapMarkerAlt className="icon" /> Find your nearest store</a>
          <a href="#"><FaMobileAlt className="icon" /> Get the Bash app</a>
        </div>
      </div>

      <div className="footer-section">
        <h3>Bash Help</h3>
        <div className="footer-links">
          <a href="#"><FaHome className="icon" /> Bash Help home</a>
          <a href="#"><FaTruck className="icon" /> Collect and Deliver</a>
          <a href="#"><FaExchangeAlt className="icon" /> Returns and Refunds</a>
          <a href="#"><FaUser className="icon" /> Profile and Login</a>
          <a href="#"><FaShoppingCart className="icon" /> How to shop online</a>
          <a href="#"><FaFileAlt className="icon" /> Terms & Conditions</a>
          <a href="#"><FaEnvelope className="icon" /> Contact us</a>
        </div>
      </div>

      <div className="footer-section">
        <h3>TFG services</h3>
        <div className="footer-links">
          <a href="#"><FaCreditCard className="icon" /> TFG Financial Services</a>
          <a href="#"><FaWallet className="icon" /> TFG Money Account</a>
          <a href="#"><FaCoins className="icon" /> TFG Rewards</a>
          <a href="#"><FaShieldAlt className="icon" /> TFG Insurance</a>
          <a href="#"><FaWifi className="icon" /> TFG Connect airtime & data</a>
          <a href="#"><FaFilm className="icon" /> TFG Media</a>
          <a href="#"><FaTools className="icon" /> Repairs, valuation & ring sizing</a>
        </div>
      </div>

      <div className="footer-section">
        <h3>Company</h3>
        <div className="footer-links">
          <a href="/location"><FaMapMarkerAlt className="icon" /> Store finder</a>
          <a href="#"><FaBuilding className="icon" /> About Bash</a>
          <a href="#"><FaBuilding className="icon" /> About TFG - The Foschini Group Ltd.</a>
          <a href="#"><FaShieldAlt className="icon" /> Sustainability, CSI, BEE</a>
          <a href="#"><FaUser className="icon" /> Bash Careers</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;