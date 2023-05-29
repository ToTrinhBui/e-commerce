import React from "react";

export default function Related() {
    const cards = [1, 2, 3, 4];
    return (
        <div className="related container">
            <h1>Related Products</h1>
            <div className="related-list">
                {cards.map((card, index) => (
                    <div key={index} className="related-card">
                        <div className="related-card-img">
                            <img src={require('../../images/products/product1.png')}
                                alt='product' />
                        </div>
                        <div className="related-card-text">
                            <h5>White Chair</h5>
                            <p>$20.00</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}