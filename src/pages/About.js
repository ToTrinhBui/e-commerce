import React from "react";
import Service from "../components/Service";
import Information from "../components/about/Information";
import InTouch from "../components/about/InTouch";
import Footer from "../components/Footer";
import '../style/index.css';
import '../style/about.css';
import Review from "../components/about/Review";
import { Header } from "../components/Header";

export default function About() {
    return (
        <div className="page-container">
            <Header />
            <div className="content-wrap">
                <Information />
                <InTouch />
                <Review />
                <Service />
            </div>
            <Footer />
        </div>
    )
}