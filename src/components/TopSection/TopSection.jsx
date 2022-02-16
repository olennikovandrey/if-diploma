import React from "react";
import "./styles/top-section.css";

import Header from "./Header";
import TopContent from "./TopContent";

export default function TopSection() {
    return (
        <section className="top-section">
            <Header margin={"40px 119px 0 120px"} position={"fixed"} color={"#fff"} height={"70px"}/>
            <TopContent />
        </section>
    )
}
