import React from "react";
import "./TopBrands.css";
import du from "/public/du.png"
import clock from "/public/clock.png"
function TopBrands() {
  return <>
    <div className="container">
      <div className="bot">
        <div className="top">
          <h2>
            Top Brands
          </h2>
          <br />
          <hr />
          <br />
          <div className="icons">
            <img src="https://static.vecteezy.com/system/resources/previews/020/927/489/non_2x/infinix-brand-logo-phone-symbol-name-black-design-china-mobile-illustration-free-vector.jpg" alt="" />
            <img src="https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png" alt="" />
            <img src="https://images.samsung.com/is/image/samsung/assets/uz_ru/about-us/brand/logo/mo/360_197_1.png?$720_N_PNG$" alt="" />
            <img src="https://1000logos.net/wp-content/uploads/2016/10/Canon-logo.jpg" alt="" />
            <img src="https://static.vecteezy.com/system/resources/previews/020/927/176/non_2x/huawei-brand-logo-phone-symbol-red-design-china-mobile-illustration-free-vector.jpg" alt="" />
            <img src="https://static.vecteezy.com/system/resources/previews/020/927/585/non_2x/lenovo-logo-brand-phone-symbol-name-white-design-china-mobile-illustration-with-black-background-free-vector.jpg" alt="" />
          </div>
        </div>
        <div className="bottom">
          <div className="g">
            <h2>SMART WATCH</h2>
            <p>Various designs and brands</p>
            <button>view</button>
          </div>
          <div className="d">
          <img className="clock" src={clock} alt="" />
          <img className="du" src={du} alt="" />
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default TopBrands;
