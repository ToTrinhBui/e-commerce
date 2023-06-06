import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import '../style/index.css';
import '../style/productList.css';

import HeadingBar from "../components/HeadingBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Grid from "../components/productList/Grid";
import Loading from "../components/Loading";

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://172.29.118.113:6001/getproduct/');
                const data = response.data.data;
                setProducts(data);

            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    if (products.length === 0) {
        return <Loading />;
    }

    return (
        <>
            <HeadingBar />
            <Navbar />
            <Grid data={products} />
            <Footer />
        </>
    )
}