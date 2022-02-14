import React from "react";
import "./styles/category.css";
import Item from "./Item";
import dress from "../../assets/images/сategory/dress.svg";
import tees from "../../assets/images/сategory/tees.svg";
import swimwear from "../../assets/images/сategory/swimwear.svg";
import denim from "../../assets/images/сategory/denim.svg";
import tops from "../../assets/images/сategory/tops.svg";
import beauty from "../../assets/images/сategory/beauty.svg";

export default function Category() {
  return (
    <section className="category">
      <h2>Shop by the <b>Category</b></h2>
      <div className="category-items">
        <nav><Item background={dress} value={"Dresses"} /></nav>
        <nav><Item background={tees} value={"Tees"} /></nav>
        <nav><Item background={swimwear} value={"Swimwear"} /></nav>
        <nav><Item background={denim} value={"Denim"} /></nav>
        <nav><Item background={tops} value={"Tops"} /></nav>
        <nav><Item background={beauty} value={"Beauty"} /></nav>
      </div>
    </section>
  )
}