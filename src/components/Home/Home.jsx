import React from "react";
import "../../assets/styles/general.css";
import "../../assets/styles/fonts.css";
import TopSection from "../TopSection/TopSection";
import Category from "../Category/Category";
import Shop from "../Shop/Shop";
import Sale from "../Sale/Sale";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
  <>
    <Header margin={"30px auto"} position={"fixed"} color={"#fff"} height={"70px"} />
    <TopSection />
    <Category />
    <Sale />
    <Shop />
    <Footer />
  </>
  )
}
