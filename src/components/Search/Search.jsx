import React, { useState } from "react";
import "./search.css";

export default function Search( props ) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="search-wrapper" hidden={props.hiddenSearch}>
     <div className="search-input-btn-wrapper">
        <div className="close-search-button" onClick={props.closeSearch}></div>
        <input type="text" className="search-input" placeholder="ENTER SEARCH TERMS" onChange={e => setSearchValue(e.target.value)}/>
     </div>
    </div>
  )
}
