import React from "react";
import "../assets/styles/general.css";
import "../assets/styles/fonts.css";

import TopSection from "./TopSection/TopSection";
import Category from "./Category/Category";
import Shop from "./Shop/Shop";
import Sale from "./Sale/Sale";

export default function AppWrapper() {
  return (
    <>
      <TopSection />
      <Category />
      <Sale />
      <Shop />
    </>
  );
};
