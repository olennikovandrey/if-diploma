import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import catalogResponse from "../../services/responses"; //function for fetch
import "./styles/swiper.css";
import "./styles/sale.css";
import SaleItem from "./SaleItem";

SwiperCore.use([Navigation]);

export default function Sale() {
  const [catalog, setCatalog] = useState([]);
  const [loading, setLoading] = useState(false);
  const preloadedCatalog = JSON.stringify(catalog);
  sessionStorage.setItem("catalog", preloadedCatalog);

  useEffect(() => {
    setLoading(true);
    catalogResponse(setCatalog, setLoading);
  }, []);

  const Loading = () => {
    return (
        <div className="sale-spin-wrapper">
          <div className="sale-spinner"></div>
        </div>
    )
  }

  const ShowProducts = () => {
    return (
      <>
        <Swiper
          navigation={true}
          effect={"cube"}
          slidesPerView={4}
          loop={true}
          mousewheel={true}
        >
          {catalog.map((item) =>
          <SwiperSlide key={item.id}>
            <SaleItem
              key={item.id}
              src={item.images[0]}
              price={item.price.value}
              name={item.name}
              id={item.id}
              type={item.type}
              item={item}
            />
          </SwiperSlide>
          )}
        </Swiper>
      </>
    )
  }

  return (
    <section className="sale-wrapper">
      <h2>#MODNIKKY_<b>Sale</b></h2>
      <div className="sale-items-wrapper">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </section>
  );
}
