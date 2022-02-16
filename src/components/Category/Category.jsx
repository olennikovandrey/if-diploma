import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./styles/category.css";
import Item from "./Item";
import CategoryGroup from "../CategoryGroup/CategoryCroup";
import dress from "../../assets/images/сategory/dress.svg";
import tees from "../../assets/images/сategory/tees.svg";
import swimwear from "../../assets/images/сategory/swimwear.svg";
import denim from "../../assets/images/сategory/denim.svg";
import tops from "../../assets/images/сategory/tops.svg";
import beauty from "../../assets/images/сategory/beauty.svg";

export default function Category() {
  return (
    <Router>
      <section className="category-wrapper">
        <h2>Shop by the <b>Category</b></h2>
        <div className="category-items">
          <Link to="/dresses"><nav><Item background={dress} value={"Dresses"} /></nav></Link>
          <Link to="/tees"><nav><Item background={tees} value={"Tees"} /></nav></Link>
          <Link to="/swimwear"><nav><Item background={swimwear} value={"Swimwear"} /></nav></Link>
          <Link to="/denim"><nav><Item background={denim} value={"Denim"} /></nav></Link>
          <Link to="/tops"><nav><Item background={tops} value={"Tops"} /></nav></Link>
          <Link to="/beauty"><nav><Item background={beauty} value={"Beauty"} /></nav></Link>
        </div>
      </section>

      <Switch>
        <Route path="/dresses"><CategoryGroup title={"Dresses"} filter={"dresses"} /></Route>
        <Route path="/tees"><CategoryGroup title={"Tees"} filter={"tees"} /></Route>
        <Route path="/swimwear"><CategoryGroup title={"Swimwear"} filter={"swimwear"} /></Route>
        <Route path="/denim"><CategoryGroup title={"Denim"} filter={"denim"} /></Route>
        <Route path="/tops"><CategoryGroup title={"Tops"} filter={"tops"} /></Route>
        <Route path="/beauty"><CategoryGroup title={"Beauty"} filter={"beauty"} /></Route>
      </Switch>
    </Router>
  )
}