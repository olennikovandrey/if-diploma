import React from "react";
import "./styles/top-section.css";

import Header from "./Header";
import TopContent from "./TopContent";

export default function TopSection() {
    return (
        <section className="top-section">
            <Header />
            <TopContent />
        </section>
    )
}
