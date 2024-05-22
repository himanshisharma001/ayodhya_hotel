import React from "react";

const Footer = () => {
  return (
    <footer className="footer-bg-clr mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mt-4">
            <h3 className="footer-title-name">Get In Touch</h3>
            <div className="ftr-tagline"></div>
            <p className="footer-linkvw">
              <i className="bi bi-geo-alt-fill"></i> 123 Street, New York, USA
            </p>
            <p className="footer-linkvw">
              <i className="bi bi-telephone-fill"></i> +012 345 67890
            </p>
            <p className="footer-linkvw">
              <i className="bi bi-envelope-fill"></i> info@example.com
            </p>

            <div className="mt-4 d-flex">
              <a href="#">
                <div className="">
                  <i className="bi bi-facebook ftr-socialicon"></i>
                </div>
              </a>
              <a href="#">
                <div className="">
                  <i className="bi bi-twitter ftr-socialicon ms-2"></i>
                </div>
              </a>
              <a href="#">
                <div className="">
                  <i className="bi bi-instagram ftr-socialicon ms-2"></i>
                </div>
              </a>
              <a href="#">
                <div className="">
                  <i className="bi bi-linkedin ftr-socialicon ms-2"></i>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-3 mt-4">
            <h3 className="footer-title-name">Quick Links</h3>
            <div className="ftr-tagline"></div>
            <p className="footer-linkvw">About Us</p>
            <p className="footer-linkvw">Contact Us</p>
            <p className="footer-linkvw">Our Services</p>
            <p className="footer-linkvw">Privacy Policy</p>
            <p className="footer-linkvw">Terms & Condition</p>
          </div>

          <div className="col-md-3 mt-4">
            <h3 className="footer-title-name">Services</h3>
            <div className="ftr-tagline"></div>

            <p className="footer-linkvw">Family Experience</p>

            <p className="footer-linkvw">Events</p>

            <p className="footer-linkvw">Weddings</p>

            <p className="footer-linkvw">Tours</p>
          </div>

          <div className="col-md-3 mt-4">
            <h3 className="footer-title-name">Newsletter</h3>
            <div className="ftr-tagline"></div>
            <p className="mt-2" style={{ color: "#c7c7c7" }}>
              Dolor amet sit justo amet elitr clita ipsum elitr est.
            </p>

            <form action="">
              <input
                type="email"
                className="ftr-frm-input"
                placeholder="Enter your email address"
              />
              <div>
                <button className="ftr-frm-button">
                  <i className="bi bi-arrow-right fs-5"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="ftr-topline-vw"></div>
        <p className="ftr-copy-fntvw">
          <i className="bi bi-c-circle-fill"></i> Hotel, All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
