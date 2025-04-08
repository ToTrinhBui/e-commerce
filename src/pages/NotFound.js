import React from "react";
import { Link } from 'react-router-dom';
import '../style/index.css';
import Footer from "../components/Footer";
import { Header } from "../components/Header";

export default function NotFound() {
    return (
        <div className="page-container">
            <Header />
            <div className="content-wrap">
                <div className="not-found container">
                    <img src={require('../images/404.png')} alt="404" />
                    <h3>Oops! The page you requested was not found!</h3>
                    <Link to='/'><button>Back to Home</button></Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}