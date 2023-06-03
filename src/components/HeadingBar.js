import React from "react";
import { Link } from "react-router-dom";

export default function HeadingBar() {
    return (
        <div className="heading-bar container">
            <ul>
                <li>Login<img src={require("../images/login.png")} alt="login" /></li>
                <Link to='/liked'><li>Wishlist<img src={require("../images/heart.png")} alt="heart" /></li></Link>
                <Link to='/cart'><li><img src={require("../images/cart.png")} alt="cart" /></li></Link>
            </ul>
        </div>
    )
}