import React from "react";
import "../assets/styles/general.css";
import "../assets/styles/fonts.css";

import TopSection from "./TopSection/TopSection";
import Category from "./Category/Category";
import Footer from "./Footer/Footer";
import Shop from "./Shop/Shop";
import Sale from "./Sale/Sale";
import ProductPage from "./ProductPage/ProductPage";

export default function App() {
  return (
    <div>
      <TopSection />
      <Category />
      <Sale />
      <Shop />
      <Footer />
    </div>
  );
};
