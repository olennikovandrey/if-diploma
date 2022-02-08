import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/general.css";
import "./assets/styles/fonts.css";

import TopSection from "./components/TopSection/TopSection";
import Category from "./components/Category/Category";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <TopSection />
      <Category />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
