import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "./styles/swiper.css";
import "./styles/sale.css";

import SaleItem from "./SaleItem";

SwiperCore.use([Navigation]);

export default function Sale() {
  const [errorMsg, setError] = useState(null);
  const [catalog, setCatalog] = useState([])

  useEffect(() => {
    fetch("https://modnikky-api.herokuapp.com/api/catalog")
    .then(res => res.json())
    .then((result) => setCatalog(result),
      (error) => setError(error)
    );
  }, [])

  return (
    <section className="sale-wrapper">
      <h2>#MODNIKKY_<b>Sale</b></h2>
      <div className="sale-items-wrapper">
      <Swiper
        navigation={true}
        effect={"cube"}
        slidesPerView={4}
        loop={true}
        mousewheel={true}
      >
        {catalog.map((item) => 
        <SwiperSlide>
          <SaleItem key={item.id} src={item.images[0]} price={item.price.value} name={item.name}/>
        </SwiperSlide>
        )}
      </Swiper>
      </div>
    </section>
  )
}

