import React from "react";

export default function Item() {
    const cards = [1, 2, 3]
    return (
        <div className="item container">
            {cards.map((card, index) => (
                <div key={index} className="card-item">
                    <div className="item-img">
                        <img src={require('../../images/products/product3.png')}
                            alt='product' />
                    </div>
                    <div className="item-in4">
                        <div className="item-title">
                            <h3>Chair</h3>
                            <div className='decor-box'>
                                <div className='decor'></div>
                                <div className='decor'></div>
                                <div className='decor'></div>
                            </div>
                            <div className="item-liked">
                                <img src={require("../../images/full-heart.png")} alt="heart" />
                            </div>
                        </div>
                        <p>$26.00 <span>$52.00</span></p>
                        <div className="item-option">
                            <img src={require("../../images/cart-color.png")} alt="cart" />
                            <img src={require("../../images/search-color.png")} alt="search" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}