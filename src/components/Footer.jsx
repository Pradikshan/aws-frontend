import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-8 p-5 bg-[#162032] text-white grid grid-cols-4 gap-3">
      <div>
        <p className="footer-heading">Quick Links</p>
        <div className="footer-link-container">
          <a href="/" className="footer-link">
            Home
          </a>
          <a href="/" className="footer-link">
            View Albums
          </a>
          <a href="/" className="footer-link">
            Subcription Info
          </a>
          <a href="/" className="footer-link">
            About Us
          </a>
          <a href="/" className="footer-link">
            Contact Us
          </a>
        </div>
      </div>

      <div>
        <p className="footer-heading">Social media Links</p>
        <div className="flex flex-row">
          <img src="/public/images/instagram.png" className="footer-sm-icon" />
          <img src="/public/images/facebook.png" className="footer-sm-icon" />
          <img src="/public/images/twitter.png" className="footer-sm-icon" />
          <img src="/public/images/youtube.png" className="footer-sm-icon" />
        </div>
      </div>

      <div>
        <p className="footer-heading">Legal Links</p>
        <div className="footer-link-container">
          <a href="/" className="footer-link">
            Terms & Conditions
          </a>
          <a href="/" className="footer-link">
            Privacy Policy
          </a>
        </div>
      </div>

      <div>
        <p className="footer-heading">Sign Up For Our Newsletter</p>
        <div className="flex flex-row">
          <input className="rounded-xl p-2" placeholder="Enter your email" />
          <button className="p-3 font-semibold bg-gradient-to-r from-pink-500 to-violet-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 rounded-xl mx-3 hover:scale-110 transition-all ease-in-out duration-500">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
