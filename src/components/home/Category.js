import React from 'react';
import Slider from "react-slick";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Category(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(props.data.slice(0, 10));
    }, [props.data]);

    const settings = {
        dots: true, // Show navigation dots
        infinite: true, // Enable infinite scrolling
        speed: 500, // Transition speed in milliseconds
        slidesToShow: 3, // Number of slides to show at a time
        slidesToScroll: 3, // Number of slides to scroll at a time
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return (
        <div className='category container'>
            <h1>Top Categories</h1>
            <div className='list-categories'>
                <Slider {...settings}>
                    {products.map((product) => (
                        <div key={product.id}>
                            <div className='card-category'>
                                <div className='round'>
                                    <img src={product.image}
                                        alt='featured-img' />
                                    <Link to={`/detail/${product.id}`}>
                                        <div className="btn-detail">View Details</div>
                                    </Link>
                                </div>
                                <div>
                                    <h5>{product.name}</h5>
                                    <p>${product.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider >
            </div>
        </div>
    )
}