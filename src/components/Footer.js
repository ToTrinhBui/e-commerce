import React from 'react';

export default function Footer(){
    return(
        <div className='footer'>
            <div className='footer-part long'>
                <h1>MyMy</h1>
                <p>Contact Infor:</p>
                <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
            <div className='footer-part'>
                <h4>Categories</h4>
                <p>Laptops & Computers</p>
                <p>Cameras & Photography</p>
                <p>Smart Phones & Tablets</p>
                <p>Video Games & Consoles</p>
                <p>Waterproof Headphones</p>
            </div>
            <div className='footer-part'>
                <h4>Customer Care</h4>
                <p>My Account</p>
                <p>Discount</p>
                <p>Return</p>
                <p>Orders History</p>
                <p>Order Tracking</p>
            </div>
            <div className='footer-part'>
                <h4>Pages</h4>
                <p>Browse the Shop</p>
                <p>Category</p>
                <p>Pre-Built Pages</p>
                <p>Visual Composer Elements</p>
                <p>WooCommerce Pages</p>
            </div>
        </div>
    )
}