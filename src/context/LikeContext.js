import React from "react";
import { createContext, useState, useEffect } from "react";
import { products } from "../data";

export const LikeContext = createContext(null);

function getDefaultList() {
    let defaultList = {};
    for (let i = 0; i < products.length; i++) {
        defaultList[i] = 0;
    }
    return defaultList;
};

export default function LikeContextProvider(props) {
    const [likedItems, setlikedItems] = useState(() => {
        // Retrieve like items from localStorage or use default like if not present
        const storedlikedItems = localStorage.getItem("likedItems");
        return storedlikedItems ? JSON.parse(storedlikedItems) : getDefaultList();
    });

    useEffect(() => {
        // Update localStorage whenever likeItems change
        localStorage.setItem("likedItems", JSON.stringify(likedItems));
    }, [likedItems]);

    function like(itemId) {
        setlikedItems((prev) => ({ ...prev, [itemId]: 1 }));
    };

    function unlike(itemId) {
        setlikedItems((prev) => ({ ...prev, [itemId]: 0 }));
    };

    function isLiked(itemId) {
        if (likedItems[itemId] === 1)
            return true;
        else return false;
    }

    const contextValue = {
        likedItems,
        like,
        unlike,
        isLiked,
    };
    // console.log(likedItems)
    return (
        <LikeContext.Provider value={contextValue}>
            {props.children}
        </LikeContext.Provider>
    )
}