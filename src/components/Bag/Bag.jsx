import React from "react";
import "./bag.css";
import Header from "../Header/Header";
import BagItem from "./BagItem";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";

export default function Bag() {
  const items = useSelector(state => state.addedItemsToCart.length)
  return (
    <>
      <Header margin={"0 auto"} position={"static"} color={"#000"} height={"112px"}/>
      <div className="bag-wrapper">
        <div className="title-wrapper">
          <p>BAG</p>
          <p>{items} items</p>
        </div>
        <BagItem />
        <BagItem />
        <div className="total-price-wrapper">
          <p>Total USD $</p>
          <button>PROCEED TO CHECKOUT</button>
          <div className="pay-systems">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
