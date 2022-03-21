import React from "react";
import "./category-group.css";
import { BrowserRouter as  Route, Switch, Link } from "react-router-dom";

import ProductPage from "../ProductPage/ProductPage";

export default function CategoryGroupItem(props) {
  return (
    <>
      <div className="category-group-item-wrapper">
        <Link to={`/${(props.type).toLowerCase()}/${props.id}`}>
          <img src={`${props.src}`} className="category-group-item-img" alt={props.name} />
        </Link>
        <span className="add-to-favorite"></span>
        <div className="add-to-bag-cat-item">ADD TO BAG</div>
        <p className="category-group-item-price">$ {props.price}</p>
      </div>
      <Switch>
        <Route path={`/${(props.type).toLowerCase()}/:id`} component={ProductPage} />
      </Switch>
    </>
  );
}
