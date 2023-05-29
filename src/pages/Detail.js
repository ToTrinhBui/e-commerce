import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/index.css';
import '../style/detail.css';

import HeadingBar from "../components/HeadingBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Focus from '../components/detail/Focus';
import ProductIn4 from '../components/detail/ProductIn4';
import Related from '../components/detail/Related';

export default function Detail() {
    return (
        <>
            <HeadingBar />
            <Navbar />
            <Focus />
            <ProductIn4 />
            <Related />
            <Footer />
        </>
    )
}