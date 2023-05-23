import React from 'react';
export default function Navbar() {
    return (
        <div className="navbar container">
            <h1>MyMy</h1>
            <ul>
                <li>Home</li>
                <li>Pages</li>
                <li>Products</li>
                <li>Blog</li>
                <li>Shop</li>
                <li>Contact</li>
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