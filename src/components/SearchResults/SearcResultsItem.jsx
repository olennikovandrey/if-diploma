import React from "react";
import "./search-results.css";

export default function SearchResultsItem(props) {
  return (
    <div className="search-results-item-wrapper">
      <img src={`${props.src}`} className="search-results-item-img" alt={props.name}/>
      <span className="add-to-favorite"></span>
      <div className="add-to-bag-cat-item">ADD TO BAG</div>
      <p className="search-results-item-price">$ {props.price}</p>
    </div>
  )
}
