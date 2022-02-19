import React from "react";

import Header from "./Header/Header";
import AppWrapper from "./AppWrapper";
import Footer from "./Footer/Footer";
import ProductPage from "./ProductPage/ProductPage";

export default function App() {
  return (
    <>
      <Header margin={"30px auto"} position={"fixed"} color={"#fff"} height={"70px"}/>
      <AppWrapper />
      <Footer />
    </>
  );
};
