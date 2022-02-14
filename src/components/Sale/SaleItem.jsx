import React from "react";
import "./styles/sale.css";

export default function SaleItem(props) {
  return (
    <div className="sale-item-wrapper">
      <img src={`${props.src}`} className="sale-item-img" alt={props.name}/>
      <span className="add-to-favorite"></span>
      <div className="add-to-bag">ADD TO BAG</div>
      <p className="sale-item-price">$ {props.price}</p>
    </div>
  )
}
