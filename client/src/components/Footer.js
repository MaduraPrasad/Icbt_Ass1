import React, { Component } from "react";
import { Link } from 'react-router-dom'; 
import './componentStyle/footer.css'; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-section">
        <div className="column">
        <ul className="nav-links">
            <li><a href="/">Aim</a></li>
            <li><a href="/services">Vision</a></li>
            <li><a href="/contact">Mision</a></li>
            <li><a href="/services">Testimonials</a></li>
          </ul>
        </div>
        <div className="column">
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Consultant</a></li>
            <li><a href="/services">JoobSeekers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="column">
        <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Enter search term..."
        />
        <button className="footer-btn">Search</button>
      </div>
        </div>
        <div className="column">
        <ul className="nav-links" id="left">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Consultant</a></li>
            <li><a href="/services">JoobSeekers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </section>
      
        <div className="admin-login">
        <Link to="/login" className="footer-link">
              ADMIN LOGIN
            </Link>
        </div>
   
    </footer>
  );
};

export default Footer;
