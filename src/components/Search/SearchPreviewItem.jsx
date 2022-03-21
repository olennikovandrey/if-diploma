import React from "react";
import { BrowserRouter as Route, Link, Switch } from "react-router-dom";
import "./search.css";
import styled from "styled-components";

import ProductPage from "../ProductPage/ProductPage";
import dresses from "../../assets/images/сategory/dress.svg";
import tees from "../../assets/images/сategory/tees.svg";
import swimwear from "../../assets/images/сategory/swimwear.svg";
import denim from "../../assets/images/сategory/denim.svg";

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
        <Link to={`/${props.type.toLowerCase()}/${props.id}`}>
          <img className="product-preview-img" src={props.src} alt={props.name} />
        </Link>
        <span className="to-favorite"></span>
        <div className="to-bag">ADD TO BAG</div>
        <div className="product-details-wrapper">
          <Link to={`/${props.type.toLowerCase()}/${props.id}`}>
            <p className="product-title">{props.name} ({props.type})</p>
          </Link>
          <p className="product-description">{props.description}</p>
          <ColorDiv />
          <p className="product-sizes">Available sizes: {props.sizes}</p>
          <p className="product-price">Price: {props.price}$</p>
          {((props.type.toLowerCase()) === "dresses") && <img className="type-icon" src={dresses} />}
          {((props.type.toLowerCase()) === "tees") && <img className="type-icon" src={tees} />}
          {((props.type.toLowerCase()) === "swimwear") && <img className="type-icon" src={swimwear} />}
          {((props.type.toLowerCase()) === "denim") && <img className="type-icon" src={denim} />}
        </div>
      </div>
      <Switch >
        <Route path={`/${props.type.toLowerCase()}/:id`} component={ProductPage}></Route>
      </Switch>
    </>
  );
}
