import React from "react";

export default function Information() {
    return (
        <div className="in4 container">
            <div className="about left">
                <h1>Information About us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                <div className="decor-bullet">
                    <div className="bullet"></div>
                    <div className="bullet"></div>
                    <div className="bullet"></div>
                </div>
            </div>
            <div className="right">
                <h1>Contact Way</h1>
                <div className="contact">
                    <div className="contact-part">
                        <p>Tel: 877-67-88-99</p>
                        <p>E-Mail: shop@store.com</p>
                    </div>
                    <div className="contact-part">
                        <p>20 Margaret st, London Great britain, 3NM98-LK</p>
                    </div>
                    <div className="contact-part">
                        <p>Support Forum</p>
                    </div>
                    <div className="contact-part">
                        <p>Free standard shipping on all orders.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}