import React from "react";
import { connect } from "react-redux";
import { removeItem, addQuantity, removeQuantity } from "../../actions/cart";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MasterCard from "../../assets/images/cart/maestro-logo.svg";
import Visa from "../../assets/images/cart/visa-logo.svg";
import "./cart.css";

function Cart (props) {

}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems
  };
};

const mapDispatchToProps = (state) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    removeQuantity: (id) => {
      dispatch(removeQuantity(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);