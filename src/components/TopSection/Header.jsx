import React, { useState, useEffect } from "react";
import "./styles/header.css";

import CreateAccount from "../CreateAccount/CreateAccount";
import Search from "../Search/Search";

export default function Header() {
    const [isSignUpHidden, setSignUpIsHidden] = useState(true);
    const [isSearchHidden, setSearchIsHidden] = useState(true);
    const [signUpTitle, setSignUpTitle] = useState("SIGN UP");

    const openModal = () => setSignUpIsHidden(false);
    const closeModal = () => setSignUpIsHidden(true);
    const openSearch = () => setSearchIsHidden(false);
    const closeSearch = () => setSearchIsHidden(true);
    const signUpChanger = () => setSignUpTitle("SIGN OUT");

    const onEscapeKeydown = (e) => {
        if (e.code === "Escape") {
            closeModal(),
            closeSearch()
        }
    };

    const onEnterKeydown = (e) => {
        if (e.code === "Enter") {
            closeSearch()
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", onEscapeKeydown);
        return () => document.removeEventListener("keydown", onEscapeKeydown), []
    });

    useEffect(() => {
        document.addEventListener("keydown", onEnterKeydown);
        return () => document.removeEventListener("keydown", onEnterKeydown), []
    });

    window.addEventListener("scroll", (() => {
        let header = document.getElementById("header");
        if (scrollY > 1000) {
            header.style.background = "#ede7f0";
            header.style.color = "#000";
            header.style.boxShadow = "0px 0px 20px #000";
        } else {
            header.style.background = "none";
            header.style.color = "#fff";
            header.style.boxShadow = "none";
        }
    }))

    return (
        <header id="header">
            <div className="header-part left">
                <nav>NEW ARRIVALS</nav>
                <nav>SHOP</nav>
                <nav>COLLECTIONS</nav>
            </div>
            <p className="logo">MODNIKKY</p>
            <div className="header-part right">
                <nav onClick={openSearch}>SEARCH</nav>
                <nav onClick={openModal}>{signUpTitle}</nav>
                <nav>BAG (0)</nav>
                <nav></nav>
            </div>
            <CreateAccount hiddenModal={isSignUpHidden} closeModal={closeModal} signUpChanger={signUpChanger}/>
            <Search hiddenSearch={isSearchHidden} closeSearch={closeSearch} />
        </header>
    )
}
