import React from "react";
import { useEffect, useState } from "react";
import { products } from "../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/index.css';
import '../style/home.css';
import FeaturedProduct from "../components/home/FeaturedProduct";
import Promotion from "../components/home/Promotion";
import Service from "../components/Service";
import Category from "../components/home/Category";
import Update from "../components/home/Update";
import Footer from "../components/Footer";
import Unique from "../components/home/Unique";
import Loading from '../components/Loading';
import { Header } from "../components/Header";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false); // Set isLoading to false after the delay
        }, 1000);

        return () => {
            clearTimeout(timeoutId); // Cleanup timeout if component unmounts or changes
        };
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="page-container">
            <Header />
            <div className="content-wrap">
                <Promotion />
                <FeaturedProduct data={products} />
                <Update />
                <Category data={products} />
                <Unique />
                <Service />
            </div>
            <Footer />
        </div>
    )
}