import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <div className="navbar container">
            <Link to='/'><h1>MyMy</h1></Link>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <li>Pages</li>
                <Link to='/products'><li>Products</li></Link>
                <li>Blog</li>
                <li>Shop</li>
                <Link to='/about'><li>About</li></Link>
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