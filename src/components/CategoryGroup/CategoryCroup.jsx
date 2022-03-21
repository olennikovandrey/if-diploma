import React, { useState, useEffect } from "react";
import "./category-group.css";
import catalogResponse from "../../services/responses";

import CategoryGroupItem from "./CategoryGroupItem";

export default function CategoryGroup(props) {
  const [catalog, setCatalog] = useState([]);

  const showLoading = () => {
    document.getElementById("spin").classList.remove("hide");
  };

  const hideLoading = () => {
    document.getElementById("spin").classList.add("hide");
  };

  useEffect(() => {
    catalogResponse(setCatalog, showLoading, hideLoading);
  }, []);

  return (
    (catalog.filter((item) => item.type.toLowerCase().includes(`${props.filter}`))).length !== 0 ?
    (
      <section className="category-group-wrapper">
        <h2><b>{props.title}</b></h2>
        <div className="category-group-items-wrapper">
        {catalog
            .filter((item) => item.type.toLowerCase().includes(`${props.filter}`))
            .map((item) =>
            <CategoryGroupItem
              key={item.id}
              src={item.images[1]}
              price={item.price.value}
              name={item.name}
              id={item.id}
              type={item.type}
            />
          )}
        </div>
        <div id="spin" className="category-group-spin-wrapper hide">
          <div className="category-group-spinner"></div>
        </div>
      </section>
    ) : (
      <section className="category-group-wrapper">
        <h2><b>{props.title}</b></h2>
        <h2>No products found</h2>
      </section>
    )
  );
}
