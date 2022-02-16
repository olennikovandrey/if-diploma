import React from "react";
import "./category-group.css";

export default function CategoryGroupItem(props) {
  return (
    <div className="category-group-item-wrapper">
      <img src={`${props.src}`} className="category-group-item-img" alt={props.name}/>
      <span className="add-to-favorite"></span>
      <div className="add-to-bag-cat-item">ADD TO BAG</div>
      <p className="category-group-item-price">$ {props.price}</p>
    </div>
  )
}
