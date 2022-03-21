import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../assets/styles/general.css";
import "../assets/styles/fonts.css";
import ProductPage from "./ProductPage/ProductPage";
import Home from "../components/Home/Home";
import Bag from "./Bag/Bag";

export default function App() {
  return (
    <Router>
      <Route exact path={"/"}>
        <Home />
      </Route>

      <Switch>
        <Route path={"/:type/:id"} component={ProductPage} />
        <Route path={"/bag"} component={Bag} />
      </Switch>
    </Router>
  );
}
