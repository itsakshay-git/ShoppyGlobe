/**
 * @component Footer
 * @desc Displays the footer of the website with company information, product categories, customer service links, and legal policies.
 * Includes links to FAQ, shipping and returns, privacy policy, terms & conditions, and various product categories.
 * @uses React Router (Link) for navigation to different pages (like Privacy Policy and Terms & Conditions).
 */


import { Link } from "react-router";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="logo">
            Shoppy<span className="highlight">Globe</span>
          </h2>
          <p>
            Explore. Shop. Enjoy. The best products <br />
            from around the globe, delivered <br />
            to your doorstep.
          </p>
        </div>

        <div className="footer-right">
          <div className="footer-links">
            <h3>Customer Services</h3>
            <ul>
              <li><Link href="#">FAQ</Link></li>
              <li><Link href="#">Refer and Earn</Link></li>
              <li><Link href="#">Shipping and Return</Link></li>
              <li><Link href="#">About Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3>Products</h3>
            <ul>
              <li><Link href="#">Beauty</Link></li>
              <li><Link href="#">Fragrances</Link></li>
              <li><Link href="#">Groceries</Link></li>
              <li><Link href="#">Furniture</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div>
          <p className="copyright">
              Copyright © 2024. All rights reserved to Communion
          </p>
        </div>
        <div className="footer-policy">
          <Link to="#">Privacy Policy</Link>
          <span>|</span>
          <Link to="#">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
