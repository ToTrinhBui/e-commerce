import React from "react";

import '../style/index.css';
import '../style/itemLiked.css';

import HeadingBar from "../components/HeadingBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Item from "../components/itemLiked/Item";

export default function ProductList() {
    return (
        <>
            <HeadingBar />
            <Navbar />
            <Item/>
            <Footer/>
        </>
    )
}