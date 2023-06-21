import React from "react";
import { createContext, useState, useEffect } from "react";
import { products } from "../data";

export const CartContext = createContext(null);

function getDefaultCart() {
    let cart = {};
    for (let i = 0; i < products.length; i++) {
        cart[i] = 0;
    }
    return cart;
};

export default function CartContextProvider(props) {
    const [cartItems, setCartItems] = useState(() => {
        // Retrieve cart items from localStorage or use default cart if not present
        const storedCartItems = localStorage.getItem("cartItems");
        return storedCartItems ? JSON.parse(storedCartItems) : getDefaultCart();
      });
    
      useEffect(() => {
        // Update localStorage whenever cartItems change
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      }, [cartItems]);

    function getTotalCartAmount() {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = products.find((product) => product.id === item);
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    };

    function getCountItems() {
        let total = 0;
        for (const item in cartItems) {
            total += cartItems[item];
        }
        return total;
    }

    function addToCart(itemId) {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    function removeFromCart(itemId) {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    function deleteFromCart(itemId) {
        setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
    };

    function clearCart() {
        setCartItems(getDefaultCart());
    };

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        deleteFromCart,
        getTotalCartAmount,
        getCountItems,
        clearCart,
    };
    //    console.log(cartItems)
    return (
        <CartContext.Provider value={contextValue}>
            {props.children}
        </CartContext.Provider>
    )
}