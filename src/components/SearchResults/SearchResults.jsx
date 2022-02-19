import React, { useState, useEffect } from "react";
import "./search-results.css";

import SearchResultsItem from "./SearcResultsItem";

export default function SearchResults(props) {
  const [filteredCatalog, setfilteredCatalog] = useState([]);

  useEffect(async () => {
    await fetch("https://modnikky-api.herokuapp.com/api/catalog")
    .then(res => res.json())
    .then((result) => setfilteredCatalog(result)
    );
  }, []);

  return (
    (filteredCatalog.filter((item) => item.type.toLowerCase().includes(`${props.filter}`))).length !== 0 ? 
    (
      <section className="search-results-wrapper">
        <h2><b>Search results</b></h2>
        <div className="search-results-items-wrapper">
        {filteredCatalog
            .filter((item) => item.type.toLowerCase().includes(`${props.filter}`))
            .map((item) => 
            <SearchResultsItem key={item.id} src={item.images[1]} price={item.price.value} name={item.name}/>
          )}
        </div>
      </section>
    ) : (
      <section className="search-results-wrapper">
        <h2><b>Search results</b></h2>
        <h2>No products found</h2>
      </section>
    )
  )
}
