import React from "react";
import { BrowserRouter as Route, Link, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/cart";
import "./styles/sale.css";
import ProductPage from "../ProductPage/ProductPage"

export default function SaleItem(props) {
  const dispatch = useDispatch();
  const handleAddToCart = () => { dispatch(addToCart(`${props.id}`)) }

  return (

    <>
      <div className="sale-item-wrapper">
        <Link to={`/${props.type.toLowerCase()}/${props.id}`}>
          <img src={`${props.src}`} className="sale-item-img" alt={props.name}/>
        </Link>
        <span className="add-to-favorite"></span>
        <div className="add-to-bag" onClick={handleAddToCart}>ADD TO BAG</div>
        <p className="sale-item-price">$ {`${props.price}`}</p>
      </div>

      <Switch >
        <Route path={`/${props.type.toLowerCase()}/:id`} component={ProductPage}></Route>
      </Switch>
    </>
  );
}
