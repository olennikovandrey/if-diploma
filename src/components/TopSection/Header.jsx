import React from "react";
import "./styles/header.css"

export default function Header() {
    return (
        <header>
            <div className="header-part left">
                <nav>NEW ARRIVALS</nav>
                <nav>SHOP</nav>
                <nav>COLLECTIONS</nav>
            </div>
            <p className="logo">MODNIKKY</p>
            <div className="header-part right">
                <nav>SEARCH</nav>
                <nav>SIGN IN</nav>
                <nav>BAG (0)</nav>
                <nav></nav>
            </div>
        </header>
    )
}
