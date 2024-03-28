import React from "react";
import { useState, useEffect, useContext } from "react";
import { LikeContext } from "../context/LikeContext";

import { products } from "../data";

import '../style/index.css';
import '../style/itemLiked.css';

import HeadingBar from "../components/HeadingBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Item from "../components/itemLiked/Item";

export default function ProductList() {
    const [productInList, setProductInList] = useState([]);
    const { likedItems, unlike } = useContext(LikeContext);

    useEffect(() => {
        setProductInList(products.filter((product) => likedItems[product.id] === 1));
    }, [likedItems]);
    
    return (
        <div className="page-container">
            <div className="content-wrap">
                <HeadingBar />
                <Navbar />
                <Item data={productInList} unlike={unlike} />
            </div>
            <Footer />
        </div>
    )
}