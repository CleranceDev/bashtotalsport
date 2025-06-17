import React from "react";
import './loca.scss';

const Location = () => {
  return (
    <div className="store-finder-container">
      <div className="store-finder-header">
        <h1>Store finder</h1>
        <div className="filter-options">
          <button className="filter-btn">Filter by province</button>
          <button className="view-all-btn">View all stores</button>
        </div>
      </div>

      <div className="store-finder-content">
        <div className="sidebar">
          <div className="filter-section">
            <h2>Filter by store</h2>
            <ul className="store-list">
              <li>
                <strong>Sportsideing by</strong>
                <ul className="sub-list">
                  <li>Wast</li>
                  <li>Filters</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="map-section">
            <h2>Map</h2>
            <ul className="map-options">
              <li>Satellite</li>
              <li>
                Houthoof
                <ul className="sub-list">
                  <li>Greenfall Nature Reserve</li>
                </ul>
              </li>
              <li>Patensie
                <ul className="sub-list">
                  <li>Hanley</li>
                  <li>Gemicoe Mouth</li>
                </ul>
              </li>
              <li>Jeffreys Bay</li>
              <li>St Francis Bay</li>
              <li>Spie SS Francis</li>
              <li>Google</li>
            </ul>
          </div>

          <div className="help-section">
            <h2>Helpmekaar</h2>
            <ul className="help-list">
              <li><strong>K</strong></li>
              <li><strong>18 g</strong>
                <ul className="sub-list">
                  <li>Ongsatch</li>
                </ul>
              </li>
              <li><strong>Addo</strong>
                <ul className="sub-list">
                  <li>Neynarha</li>
                </ul>
              </li>
              <li><strong>Buzzblog</strong></li>
              <li><strong>P</strong></li>
            </ul>
          </div>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.018501577021!2d28.418339274652944!3d-25.703821443780413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e955fba9db7167b%3A0x9e767e26b7211615!2sMams%20Mall!5e0!3m2!1sen!2sza!4v1745106150964!5m2!1sen!2sza"
            className="responsive-map"
            allowFullScreen
            loading="lazy"
            title="Store Location Map"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;