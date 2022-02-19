import React, { useState, useEffect } from "react";
import "./category-group.css";
import catalogResponse from "../../services/responses";

import CategoryGroupItem from "./CategoryGroupItem";

export default function CategoryGroup(props) {
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  useEffect(() => {
    catalogResponse(setFilteredCatalog)
  }, [])

  return (
    (filteredCatalog.filter((item) => item.type.toLowerCase().includes(`${props.filter}`))).length !== 0 ? 
    (
      <section className="category-group-wrapper">
        <h2><b>{props.title}</b></h2>
        <div className="category-group-items-wrapper">
        {filteredCatalog
            .filter((item) => item.type.toLowerCase().includes(`${props.filter}`))
            .map((item) => 
            <CategoryGroupItem key={item.id} src={item.images[1]} price={item.price.value} name={item.name}/>
          )}
        </div>
      </section>
    ) : (
      <section className="category-group-wrapper">
        <h2><b>{props.title}</b></h2>
        <h2>No products found</h2>
      </section>
    )
  )
}
