import React from "react";

export default function HeadingBar(){
    return(
        <div className="heading-bar container">
            <ul>
                <li>Login <img src={require("../images/login.png")} alt="login"/></li>
                <li>Wishlist <img src={require("../images/heart.png")} alt="heart"/></li>
                <li><img src={require("../images/cart.png")} alt="cart"/></li>
            </ul>
        </div>
    )
}