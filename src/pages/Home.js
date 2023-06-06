import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import HeadingBar from "../components/HeadingBar";
import FeaturedProduct from "../components/home/FeaturedProduct";
import Promotion from "../components/home/Promotion";
import Navbar from "../components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/index.css';
import '../style/home.css';
import Service from "../components/Service";
import Category from "../components/home/Category";
import Update from "../components/home/Update";
import Footer from "../components/Footer";
import Unique from "../components/home/Unique";
import Loading from "../components/Loading";

export default function Home() {
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
            <Promotion />
            <FeaturedProduct data={products}/>
            <Update />
            <Category data={products}/>
            <Unique />
            <Service />
            <Footer />
        </>
    )
}