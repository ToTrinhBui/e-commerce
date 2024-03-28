import React from "react";
import { Link } from 'react-router-dom';

import '../style/index.css';

import HeadingBar from "../components/HeadingBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Done() {
    return (
        <div className="page-container">
            <div className="content-wrap">
                <HeadingBar />
                <Navbar />
                <div className="done container">
                    
                    <img src={require('../images/done.png')} alt="done" />
                    <h1 style={{ lineHeight: 'normal' }}>Your Order Is Completed!</h1>
                    <p>Thank you for your order! Your order is being processed and will be completed within 3-6
                        hours. You will receive an email confirmation when your order is completed.
                    </p>
                    <Link to='/products'><button>Continue Shopping</button></Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}