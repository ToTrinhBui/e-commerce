import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar container">
            <Link to="/">
                <h1>MyMy</h1>
            </Link>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <li className='dropdown' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                    <div onClick={toggleDropdown} className="dropdown-toggle">
                        Categories
                    </div>
                    {isOpen && (
                        <ul className="dropdown-menu">
                            <Link to='/products'><li>All products</li></Link>
                            <Link to='/categories/furniture'><li>Furniture</li></Link>
                            <Link to='/categories/electronics'><li>Electronics</li></Link>
                            <Link to='/categories/bag'><li>Bag</li></Link>
                            <Link to='/categories/accessories'><li>Accessories</li></Link>
                        </ul>
                    )}
                </li>
                <Link to="/products">
                    <li>Products</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
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
    );
}
