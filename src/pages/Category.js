import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import '../style/index.css';
import '../style/productList.css';

import { products } from "../data";

import HeadingBar from "../components/HeadingBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Grid from "../components/productList/Grid";
import Title from "../components/productList/Title";
import Loading from "../components/Loading";

export default function Category() {
    const { category } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        setProduct(products.filter((item) => item.category === category));
        console.log(products.filter((item) => item.category === category));
    }, [category])


    if (!product || !category) {
        return <Loading />;
    }
    return (
        <>
            <HeadingBar />
            <Navbar />
            <Title title={category}/>
            <Grid data={product}/>
            <Footer/>
        </>
    )
}