import React, { useState, useEffect } from "react";
import { BrowserRouter as Link } from "react-router-dom"; 
import catalogResponse from "../../services/responses";
import "./search.css";

import SearchPreviewItem from "./SearchPreviewItem";

export default function Search( props ) {
  const [searchValue, setSearchValue] = useState("");
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  useEffect(() => {
    catalogResponse(setCatalog);
  }, []);

  useEffect(() => {
    setFilteredCatalog(catalog.filter((item) => 
    item.type.toLowerCase().includes(`${searchValue}`) ||
    item.name.toLowerCase().includes(`${searchValue}`) ||
    item.color.name.toLowerCase().includes(`${searchValue}`)));
  }, [searchValue]);

  return (
  (searchValue && filteredCatalog.length > 0) ?
  (
    <>
      <div className="search-wrapper" hidden={props.hiddenSearch}>
        <form className="search-form">
          <div className="close-search-button" onClick={props.closeSearch}></div>
          <input type="text" className="search-input" placeholder="ENTER SEARCH TERMS" onChange={e => setSearchValue(e.target.value)}/>
        </form>
        <div className="product-preview-wrapper">
          {filteredCatalog
          .map((item) => 
            <SearchPreviewItem key={item.id}
              id={item.id}
              src={item.images[0]}
              name={item.name}
              type={item.type}
              description={item.description}
              color={item.color.hex}
              sizes={item.availableSizes}
              price={item.price.value}
              icon={item.type.toLowerCase()}
            />
          )}
        </div>
      </div>
    </>
  ) : (
    <div className="search-wrapper" hidden={props.hiddenSearch}>
      <form className="search-form">
        <div className="close-search-button" onClick={props.closeSearch}></div>
        <input type="text" className="search-input" placeholder="ENTER SEARCH TERMS" onChange={e => setSearchValue(e.target.value)}/>
      </form>
      <div className="no-products-wrapper">
        {searchValue && <span className="no-products-title">Oooops! Nothing found for your request! Try something else</span>}
        {searchValue && <img src="http://liubavyshka.my1.ru/_ph/81/2/28502808.gif?1645264785" width="200px" height="150px"/>}
      </div>
    </div>
  )
);}
