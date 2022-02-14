import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "./styles/swiper.css";
import "./styles/sale.css";

import SaleItem from "./SaleItem";

SwiperCore.use([Navigation]);

export default class Sale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      catalog: []
    };
  }

  componentDidMount() {
    fetch("https://modnikky-api.herokuapp.com/api/catalog")
    .then(res => res.json())
    .then((result) => { this.setState ({ catalog: result }) },
      (error) => { this.setState ({ error: error })}
    );
  }

  render () {
    return (
      <section className="sale-wrapper">
        <h2>#MODNIKKY_<b>Sale</b></h2>
        <div className="sale-items-wrapper">
        <Swiper
          navigation={true}
          effect={"cube"}
          slidesPerView={4}
          loop={false}
          mousewheel={true}
        >
          {this.state.catalog.map((item) => 
          <SwiperSlide>
            <SaleItem key={item.id} src={item.images[0]} price={item.price.value} name={item.name}/>
          </SwiperSlide>
          )}
        </Swiper>
        </div>
      </section>
    )
  }
}
