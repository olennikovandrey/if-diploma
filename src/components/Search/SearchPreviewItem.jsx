import React from "react";
import "./search.css";
import styled from "styled-components";

export default function SearchPreviewItem(props) {
  const ColorDiv = styled.div`
    width: 50px;
    height: 50px;
    border: 1px solid #000;
    background: ${props.color};
    margin-bottom: 10px;
  `;

  return(
    <>
      <div className="product-preview-item-wrapper">
        <img className="product-preview-img" src={props.src} alt={props.name}/>
        <div className="product-details-wrapper">
          <p className="product-title">{props.name} ({props.type})</p>
          <p className="product-description">{props.description}</p>
          <ColorDiv />
          <p className="product-sizes">Available sizes: {props.sizes}</p>
          <p className="product-price">Price: {props.price}$</p>
        </div>
      </div>


     
    </>
  )
}

