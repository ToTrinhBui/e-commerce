import React from 'react';

import '../style/index.css';
import '../style/cart.css';

import HeadingBar from "../components/HeadingBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Total from '../components/cart/Total';

export default function Cart() {
    return (
        <>
            <HeadingBar />
            <Navbar />
            <Total />
            <Footer />
        </>
    )
}