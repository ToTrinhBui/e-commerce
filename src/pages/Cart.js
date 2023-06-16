import React, { useState, useContext, useEffect } from 'react';

import '../style/index.css';
import '../style/cart.css';

import { products } from "../data";

import { CartContext } from "../context/CartContext";

import HeadingBar from "../components/HeadingBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Total from '../components/cart/Total';

export default function Cart() {
    const [productInCart, setProductInCart] = useState([]);
    const { cartItems, getTotalCartAmount, clearCart,
        addToCart, removeFromCart, deleteFromCart } = useContext(CartContext);
    const totalAmount = getTotalCartAmount();

    useEffect(() => {
        const updatedProducts = products.map((product) => {
            const quantity = cartItems[product.id];
            return { ...product, quantity }; // Add quantity property to each product
        });

        const filteredProducts = updatedProducts.filter(
            (product) => product.quantity !== 0
        );

        setProductInCart(filteredProducts);
    }, [cartItems]);

    return (
        <>
            <HeadingBar />
            <Navbar />
            <Total
                data={productInCart} total={totalAmount}
                clearCart={clearCart} addToCart={addToCart}
                removeFromCart={removeFromCart} deleteFromCart={deleteFromCart}
            />
            <Footer />
        </>
    )
}