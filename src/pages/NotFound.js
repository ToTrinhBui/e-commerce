import React from "react";
import { Link } from 'react-router-dom';

import '../style/index.css';

import HeadingBar from "../components/HeadingBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
    return (
        <>
            <HeadingBar />
            <Navbar />
            <div className="not-found container">
                <img src={require('../images/404.png')} alt="404" />
                <h3>Oops! The page you requested was not found!</h3>
                <Link to='/'><button>Back to Home</button></Link>
            </div>
            <Footer />
        </>
    )
}