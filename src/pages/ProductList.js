import React from "react";

import '../style/index.css';
import '../style/productList.css';

import { products } from "../data";

import HeadingBar from "../components/HeadingBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Grid from "../components/productList/Grid";

export default function ProductList() {
    return (
        <>
            <HeadingBar />
            <Navbar />
            <Grid data={products}/>
            <Footer/>
        </>
    )
}