import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../style/index.css';
import '../style/productList.css';
import { products } from "../data";
import Footer from "../components/Footer";
import Grid from "../components/productList/Grid";
import Title from "../components/productList/Title";
import Loading from "../components/Loading";
import { Header } from "../components/Header";

export default function Category() {
    const { category } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        setProduct(products.filter((item) => item.category === category));
    }, [category])


    if (!product || !category) {
        return <Loading />;
    }
    return (
        <div className="page-container">
            <Header />
            <div className="content-wrap">
                <Title title={category} />
                <Grid data={product} />
            </div>
            <Footer />
        </div>
    )
}