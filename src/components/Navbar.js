import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <div className="navbar container">
            <h1>MyMy</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li>Pages</li>
                <li>Products</li>
                <li>Blog</li>
                <li>Shop</li>
                <li><Link to='/about'>About</Link></li>
            </ul>
            <form className="form-search">
                <div className="search">
                    <input type="text" placeholder="Enter" />
                    <button className="btn-search">
                        <img src={require('../images/search.png')} alt="search" />
                    </button>
                </div>
            </form>

        </div>
    )
}