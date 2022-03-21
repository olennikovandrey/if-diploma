import React from "react";
import "./bag-item.css";
import { useSelector } from "react-redux";

export default function BagItem() {
  const price = useSelector(state => state.addedItemsToCart.price)
  return (
    <div className="bag-item-wrapper">
      <div className="bag-img-info-wrapper">
        <img className="product-img" src="{}" alt=""/>
        <div className="product-info">
          <p>WHITE BEAUTY MRS BLONDES MID LENGTH DENIM SHORT</p>
          <p>USD $ {price}</p>
          <p>COLOR: </p>
          <p>SIZE: </p>
          <p>QUANTITY: </p>
        </div>
      </div>
      <span>REMOVE</span>
    </div>
  )
}
