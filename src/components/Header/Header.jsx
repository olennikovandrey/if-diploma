import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./header.css";

import CreateAccount from "../CreateAccount/CreateAccount";
import Search from "../Search/Search";

function Header(props) {
    const [isSignUpHidden, setSignUpIsHidden] = useState(true);
    const [isSearchHidden, setSearchIsHidden] = useState(true);
    const [signUpTitle, setSignUpTitle] = useState("SIGN UP");
    const items = useSelector(state => state.addedItemsToCart.length)

    const signUpOut = () => {
        if (isSignUpHidden === true && signUpTitle === "SIGN UP") {
            setSignUpIsHidden(false);
        } else {
            setSignUpTitle("SIGN UP");
        }
    };

    const closeModal = () => setSignUpIsHidden(true);
    const openSearch = () => setSearchIsHidden(false);
    const closeSearch = () => setSearchIsHidden(true);
    const signUpChanger = () => setSignUpTitle("SIGN OUT");
    const onEscapeKeydown = (e) => {
        if (e.code === "Escape") {
            closeModal(),
            closeSearch();
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", onEscapeKeydown);
        return () => document.removeEventListener("keydown", onEscapeKeydown), [];
    });

    window.addEventListener("scroll", (() => {
        let header = document.getElementById("header");
        if (scrollY > 900) {
            header.style.background = "#ede7f0";
            header.style.color = "#000";
            header.style.boxShadow = "0px 0px 20px #000";
        } else {
            header.style.background = "none";
            header.style.color = props.color;
            header.style.boxShadow = "none";
        }
    }));

    const HeaderWrapper = styled.header`
        max-width: 2880px;
        width: 2640px;
        height: ${props.height};
        margin: ${props.margin};
        position: ${props.position};
        left: 0;
        right: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 2;
        background: none;
        color: ${props.color};
        transition: all 0.6s linear;
    `;

    return (
        <HeaderWrapper id="header">
            <div className="header-part left">
                <nav>NEW ARRIVALS</nav>
                <nav>SHOP</nav>
                <nav>COLLECTIONS</nav>
            </div>
            <Link to={"/"}><p className="logo">MODNIKKY</p></Link>
            <div className="header-part right">
                <nav className="search" onClick={openSearch}>SEARCH</nav>
                <nav onClick={signUpOut}>{signUpTitle}</nav>
                <Link to={"/bag"}><nav className="bag">BAG ({items})</nav></Link>
                <nav></nav>
            </div>
            <CreateAccount hiddenModal={isSignUpHidden} closeModal={closeModal} signUpChanger={signUpChanger}/>
            <Search hiddenSearch={isSearchHidden} closeSearch={closeSearch} />
        </HeaderWrapper>
    );
}

const mapStateToProps = (state) => {
    return {
        addedItemsToCart: state.addedItemsToCart
    }
}

export default connect(mapStateToProps)(Header)
