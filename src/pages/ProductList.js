import React from "react";
import '../style/index.css';
import '../style/productList.css';
import { products } from "../data";
import Footer from "../components/Footer";
import Grid from "../components/productList/Grid";
import Title from "../components/productList/Title";
import { Header } from "../components/Header";

export default function ProductList() {
    return (
        <div className="page-container">
            <Header />
            <div className="content-wrap">
                <Title title='All products' />
                <Grid data={products} />
            </div>
            <Footer />
        </div>
    )
}