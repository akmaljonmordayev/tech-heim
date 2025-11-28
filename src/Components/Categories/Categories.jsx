import React from "react";
import "./Categories.css";
import card1 from "/public/card1.png";
import card2 from "/public/card2.png";
import card3 from "/public/card3.png";
import card4 from "/public/card4.png";
import card5 from "/public/card5.png";
import card6 from "/public/card6.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function Categories() {
  const productsOnSale = [
    {
      id: 1,
      title: "Logitech G502 Gaming Mouse",
      image: "/sale1.png",
      oldPrice: 38.6,
      newPrice: 19.0,
      sale: "-50%",
    },
    {
      id: 2,
      title: "NPET K10 Wired Gaming Keyboard, LED Backlit",
      image: "/sale2.jpg",
      oldPrice: 49.0,
      newPrice: 34.3,
      sale: "-30%",
    },
    {
      id: 3,
      title: "Apple Watch Series 7 (GPS, 41MM)",
      image: "/sale3.jpg",
      oldPrice: 289.0,
      newPrice: 231.2,
      sale: "-20%",
    },
    {
      id: 4,
      title: "Apple 2022 MacBook Air M2 (8GB RAM, 256GB SSD)",
      image: "/sale4.png",
      oldPrice: 950.22,
      newPrice: 712.66,
      sale: "-25%",
    },
    {
      id: 5,
      title: "Samsung Galaxy Buds Pro",
      image: "/sale5.png",
      oldPrice: 199.99,
      newPrice: 159.99,
      sale: "-20%",
    },
  ];

  return (
    <>
      <section className="sec1">
        <div className="container">
          <div className="category-cards">
            <div className="category-card">
              <img src={card1} alt="" />
              <p>Accessories</p>
            </div>
            <div className="category-card">
              <img id="camera" src={card2} alt="" />
              <p>Camera</p>
            </div>
            <div className="category-card">
              <img id="laptop" src={card3} alt="" />
              <p>Laptop</p>
            </div>
            <div className="category-card">
              <img src={card4} alt="" />
              <p>Smart Phone</p>
            </div>
            <div className="category-card">
              <img src={card5} alt="" />
              <p>Gaming</p>
            </div>
            <div className="category-card">
              <img src={card6} alt="" />
              <p>Smart Watch</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="sales">
            <div className="left">
              <h2>Products On Sale</h2>
              <p>Shop Now!</p>
              <a href="#">
                View all <i class="fa-solid fa-chevron-right"></i></a>
              
            </div>
            <div className="right">
              <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={20}
              slidesPerView={4}
              loop={true}
              >

              {productsOnSale.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="sale">
                    <span className="skd">{item.sale}</span>
                    <img src={item.image} alt="" />
                    <h4>{item.title}</h4>

                    <div className="prices">
                      <span className="old">${item.oldPrice}</span>
                      <span className="new">${item.newPrice}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Categories;
