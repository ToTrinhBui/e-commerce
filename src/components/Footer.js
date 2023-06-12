import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(){
    return(
        <div className='footer'>
            <div className='footer-part long'>
                <h1>MyMy</h1>
                <p>Contact Infor:</p>
                <p>1234 XXXX Street, Ba Dinh District, Ha Noi, Viet Nam.</p>
            </div>
            <div className='footer-part'>
                <h4>Categories</h4>
                <Link to='/products'><p>All products</p></Link>
                <Link to='/categories/furniture'><p>Furniture</p></Link>
                <Link to='/categories/electronics'><p>Electronics</p></Link>
                <Link to='/categories/bag'><p>Bag</p></Link>
                <Link to='/categories/accessories'><p>Accessories</p></Link>
            </div>
            <div className='footer-part'>
                <h4>Customer Care</h4>
                <p>24/7 Support</p>
                <p>Shipping Support</p>
                <p>Technical Assistance</p>
            </div>
            <div className='footer-part'>
                <h4>Pages</h4>
                <p>Pre-Built Pages</p>
                <p>Category</p>
                <p>Detail</p>
                <p>Cart</p>
                <p>Wishlist</p>
            </div>
        </div>
    )
}