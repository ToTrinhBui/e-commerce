import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function HeadingBar() {
    const { getCountItems } = useContext(CartContext);
    const countItem = getCountItems();

    return (
        <div className="heading-bar container">
            <ul>
                <li>Login<img src={require("../images/login.png")} alt="login" /></li>
                <Link to='/liked'><li>Wishlist<img src={require("../images/heart.png")} alt="heart" /></li></Link>
                <li className="icon-cart">
                    <Link to='/cart'>
                        <img src={require("../images/cart.png")} alt="cart" />
                    </Link>
                    <div className="cart-noti">
                        {countItem}
                    </div>
                </li>
            </ul>
        </div>
    )
}