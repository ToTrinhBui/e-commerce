import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [inputSearch, setInputSearch] = useState('');

    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const searchForm = (event) => {
        event.preventDefault();
        event.stopPropagation()
        navigate(`/search?${inputSearch}`);
    }

    return (
        <div className='navbar container'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
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
                                <Link to='/categories/electronic'><li>Electronic</li></Link>
                                <Link to='/categories/bag'><li>Bag</li></Link>
                                <Link to='/categories/accessory'><li>Accessory</li></Link>
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
            </div>
            <div>
                <form className="form-search" onSubmit={searchForm}>
                    <div className="search">
                        <input type="text" placeholder="Enter" value={inputSearch} onChange={(e) => { setInputSearch(e.target.value) }} />
                        <button type='submit' className="btn-search">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
