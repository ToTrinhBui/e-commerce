import React from "react";
import HeadingBar from "../components/HeadingBar";
import Navbar from "../components/Navbar";
import Service from "../components/Service";
import Information from "../components/about/Information";
import InTouch from "../components/about/InTouch";
import Footer from "../components/Footer";

import '../style/index.css';
import '../style/about.css';
import Review from "../components/about/Review";

export default function About() {
    return (
        <>
            <HeadingBar />
            <Navbar />
            <Information />
            <InTouch/>
            <Review />
            <Service />
            <Footer />
        </>
    )
}