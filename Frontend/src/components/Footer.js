import React from "react";
import { Link } from "react-router-dom";
import { 
  BsLinkedin, 
  BsGithub, 
  BsYoutube, 
  BsInstagram, 
  BsTelephone, 
  BsEnvelope, 
  BsGeoAlt,
  BsArrowRight
} from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Newsletter Section */}
      <footer className="py-5" style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-12 col-lg-5 mb-4 mb-lg-0">
              <div className="footer-top-data d-flex align-items-center gap-3">
                <div className="newsletter-icon bg-white p-3 rounded-circle">
                  <BsEnvelope className="text-primary fs-4" />
                </div>
                <div>
                  <h2 className="mb-1 text-white fw-bold">Sign Up for Newsletter</h2>
                  <p className="mb-0 text-white-50">Get updates about new products and special offers</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control py-3 px-4"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <button className="btn btn-light px-4" type="button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Main Footer */}
      <footer className="py-5" style={{ backgroundColor: 'var(--color-dark)' }}>
        <div className="container-xxl">
          <div className="row">
            {/* Contact Info */}
            <div className="col-12 col-lg-4 mb-4 mb-lg-0">
              <div className="d-flex align-items-center gap-2 mb-4">
                <FaShoppingBag className="text-primary fs-3" />
                <h4 className="text-white mb-0 fw-bold">eTrade</h4>
              </div>
              <p className="text-white-50 mb-4">
                Your one-stop destination for all your electronic needs. Quality products, competitive prices, and excellent service.
              </p>
              <div className="contact-info">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <BsGeoAlt className="text-primary" />
                  <div>
                    <p className="text-white mb-0 fw-semibold">Address</p>
                    <p className="text-white-50 mb-0 small">
                      Hno : Daiict college, Reliance Cross Rd, <br />
                      Gandhinagar, Gujarat - 382007
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <BsTelephone className="text-primary" />
                  <div>
                    <p className="text-white mb-0 fw-semibold">Phone</p>
                    <a href="tel:+91 8264954234" className="text-white-50 text-decoration-none">
                      +91 8264954234
                    </a>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3 mb-4">
                  <BsEnvelope className="text-primary" />
                  <div>
                    <p className="text-white mb-0 fw-semibold">Email</p>
                    <a href="mailto:devjariwala8444@gmail.com" className="text-white-50 text-decoration-none">
                      devjariwala8444@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="social_icons d-flex align-items-center gap-3">
                <a className="text-white bg-primary p-2 rounded-circle d-flex align-items-center justify-content-center" href="#" style={{ width: '40px', height: '40px' }}>
                  <BsLinkedin />
                </a>
                <a className="text-white bg-primary p-2 rounded-circle d-flex align-items-center justify-content-center" href="#" style={{ width: '40px', height: '40px' }}>
                  <BsInstagram />
                </a>
                <a className="text-white bg-primary p-2 rounded-circle d-flex align-items-center justify-content-center" href="#" style={{ width: '40px', height: '40px' }}>
                  <BsGithub />
                </a>
                <a className="text-white bg-primary p-2 rounded-circle d-flex align-items-center justify-content-center" href="#" style={{ width: '40px', height: '40px' }}>
                  <BsYoutube />
                </a>
              </div>
            </div>

            {/* Information */}
            <div className="col-6 col-lg-2 mb-4 mb-lg-0">
              <h5 className="text-white mb-4 fw-bold">Information</h5>
              <div className="footer-link d-flex flex-column">
                <Link to="/privacy-policy" className="text-white-50 py-2 mb-1 text-decoration-none d-flex align-items-center gap-2 hover-link">
                  <BsArrowRight className="text-primary" />
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-white-50 py-2 mb-1 text-decoration-none d-flex align-items-center gap-2 hover-link">
                  <BsArrowRight className="text-primary" />
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-white-50 py-2 mb-1 text-decoration-none d-flex align-items-center gap-2 hover-link">
                  <BsArrowRight className="text-primary" />
                  Shipping Policy
                </Link>
                <Link to="/term-conditions" className="text-white-50 py-2 mb-1 text-decoration-none d-flex align-items-center gap-2 hover-link">
                  <BsArrowRight className="text-primary" />
                  Terms & Conditions
                </Link>
                <Link to="/blogs" className="text-white-50 py-2 mb-1 text-decoration-none d-flex align-items-center gap-2 hover-link">
                  <BsArrowRight className="text-primary" />
                  Blogs
                </Link>
              </div>
            </div>

            {/* Account */}
            <div className="col-6 col-lg-2 mb-4 mb-lg-0">
              <h5 className="text-white mb-4 fw-bold">Account</h5>
              <div className="footer-link d-flex flex-column">
                <Link to="/about" className="text-white-50 py-2 mb-1 text-decoration-none d-flex align-items-center gap-2 hover-link">
                  <BsArrowRight className="text-primary" />
                  About Us
                </Link>
                <Link to="/contact" className="text-white-50 py-2 mb-1 text-decoration-none d-flex align-items-center gap-2 hover-link">
                  <BsArrowRight className="text-primary" />
                  FAQ
                </Link>
                <Link to="/contact" className="text-white-50 py-2 mb-1 text-decoration-none d-flex align-items-center gap-2 hover-link">
                  <BsArrowRight className="text-primary" />
                  Contact
                </Link>
                <Link to="/my-profile" className="text-white-50 py-2 mb-1 text-decoration-none d-flex align-items-center gap-2 hover-link">
                  <BsArrowRight className="text-primary" />
                  My Account
                </Link>
                <Link to="/my-orders" className="text-white-50 py-2 mb-1 text-decoration-none d-flex align-items-center gap-2 hover-link">
                  <BsArrowRight className="text-primary" />
                  My Orders
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-6 col-lg-2 mb-4 mb-lg-0">
              <h5 className="text-white mb-4 fw-bold">Quick Links</h5>
              <div className="footer-link d-flex flex-column">
                <Link to="/product" className="text-white-50 py-2 mb-1 text-decoration-none d-flex align-items-center gap-2 hover-link">
                  <BsArrowRight className="text-primary" />
                  Laptops
                </Link>
                <Link to="/product" className="text-white-50 py-2 mb-1 text-decoration-none d-flex align-items-center gap-2 hover-link">
                  <BsArrowRight className="text-primary" />
                  Headphones
                </Link>
                <Link to="/product" className="text-white-50 py-2 mb-1 text-decoration-none d-flex align-items-center gap-2 hover-link">
                  <BsArrowRight className="text-primary" />
                  Tablets
                </Link>
                <Link to="/product" className="text-white-50 py-2 mb-1 text-decoration-none d-flex align-items-center gap-2 hover-link">
                  <BsArrowRight className="text-primary" />
                  Smart Watches
                </Link>
                <Link to="/product" className="text-white-50 py-2 mb-1 text-decoration-none d-flex align-items-center gap-2 hover-link">
                  <BsArrowRight className="text-primary" />
                  Cameras
                </Link>
              </div>
            </div>

            {/* Categories */}
            <div className="col-6 col-lg-2">
              <h5 className="text-white mb-4 fw-bold">Categories</h5>
              <div className="footer-link d-flex flex-column">
                <Link to="/product" className="text-white-50 py-2 mb-1 text-decoration-none d-flex align-items-center gap-2 hover-link">
                  <BsArrowRight className="text-primary" />
                  Phones
                </Link>
                <Link to="/product" className="text-white-50 py-2 mb-1 text-decoration-none d-flex align-items-center gap-2 hover-link">
                  <BsArrowRight className="text-primary" />
                  Computers
                </Link>
                <Link to="/product" className="text-white-50 py-2 mb-1 text-decoration-none d-flex align-items-center gap-2 hover-link">
                  <BsArrowRight className="text-primary" />
                  Accessories
                </Link>
                <Link to="/product" className="text-white-50 py-2 mb-1 text-decoration-none d-flex align-items-center gap-2 hover-link">
                  <BsArrowRight className="text-primary" />
                  Gaming
                </Link>
                <Link to="/product" className="text-white-50 py-2 mb-1 text-decoration-none d-flex align-items-center gap-2 hover-link">
                  <BsArrowRight className="text-primary" />
                  Networking
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <footer className="py-3" style={{ backgroundColor: 'var(--color-dark)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                <p className="text-center text-md-start mb-2 mb-md-0 text-white-50 mb-0">
                  &copy; {new Date().getFullYear()} eTrade. All rights reserved.
                </p>
                <div className="d-flex gap-3">
                  <Link to="/privacy-policy" className="text-white-50 text-decoration-none small">Privacy</Link>
                  <Link to="/term-conditions" className="text-white-50 text-decoration-none small">Terms</Link>
                  <Link to="/contact" className="text-white-50 text-decoration-none small">Support</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .hover-link:hover {
          color: var(--color-primary) !important;
          transform: translateX(5px);
          transition: all 0.3s ease;
        }
        
        .newsletter-icon {
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .social_icons a:hover {
          transform: translateY(-3px);
          transition: all 0.3s ease;
        }
      `}</style>
    </>
  );
};

export default Footer;
