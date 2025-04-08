import React from "react";
import { Link } from 'react-router-dom';
import '../style/index.css';
import Footer from "../components/Footer";
import { Header } from "../components/Header";

export default function Done() {
    return (
        <div className="page-container">
            <Header />
            <div className="content-wrap">
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