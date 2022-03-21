import React from "react";
import "./styles/category-item.css";

export default function Item(props) {
  return (
    <div className="category-item">
      <div className="category-icon" style={{ backgroundImage: `url(${props.background})` }}></div>
      <p>{props.value}</p>
    </div>
  );
}
