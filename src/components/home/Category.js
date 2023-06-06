import React from 'react';
import Slider from "react-slick";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Category(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(props.data);
    }, [props.data]);

    const settings = {
        dots: true, // Show navigation dots
        infinite: true, // Enable infinite scrolling
        speed: 500, // Transition speed in milliseconds
        slidesToShow: 3, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll at a time
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
                        <Link to={`/detail/${product.id}`} key={product.id}>
                            <div className='card-category'>
                                <div className='round'>
                                    <img src={product.image}
                                        alt='featured-img' />
                                    <div className="btn-detail">View Details</div>
                                </div>
                                <div>
                                    <h5>{product.product_name}</h5>
                                    <p>${product.price}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Slider >
            </div>
        </div>
    )
}