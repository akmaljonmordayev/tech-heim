import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
          <div className="footer-top">
          <div className="container">
            <div className="footer-top2">
              <div className="top-left">
            <div className="left-top">
              <div className="ul-text">
                <ul>
                  <li>
                    <b>Company</b>
                  </li>
                  <li>
                    <a href="#">about us</a>
                  </li>
                  <li>
                    <a href="#">blog</a>
                  </li>
                  <li>
                    <a href="#">returns</a>
                  </li>
                  <li>
                    <a href="#">order status</a>
                  </li>
                </ul>
              </div>
              <div className="ul-text">
                <ul>
                  <li>
                    <b>Info</b>
                  </li>
                  <li>
                    <a href="#">How it works?</a>
                  </li>
                  <li>
                    <a href="#">our promises</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
              <div className="ul-text">
                <ul>
                  <li>
                    <b>Contact us</b>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa-solid fa-location-dot"></i> 123 Main Street,
                      Anytown,USA
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa-solid fa-phone"></i> +1 (555) 123-4567
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa-regular fa-message"></i> TechHeimSupport@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="left-botten"></div>
          </div>
          <div className="top-right">
            <div className="right-left">
              <b>Sign up for News and updates</b>
              <form>
                <i class="fa-regular fa-user"></i>
                <input required placeholder="E-mail Address" type="email" />
                <button>></button>
              </form>
              <div className="icons">
                <a href="#">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="right2">
              <button><i class="fa-regular fa-message"></i></button>
              <button>></button>
            </div>
          </div>
            </div>
          </div>
        </div>
        <div className="footer-botten">
         <div className="container">
          <div className="footer-botter">
             <p>
            <button>c</button>2023 Tech Heim.
          </p>
          <ul className="ol">
            <li>cookie settings</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Imprint</li>
          </ul>
          </div>
         </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
