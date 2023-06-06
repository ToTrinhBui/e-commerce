import React from "react";
import Slider from "react-slick";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function FeaturedProduct(props) {
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
        <div className="featured container">
            <h1>Featured Product</h1>
            <Slider {...settings}>
                {products.map(product => (
                    <Link to={`/detail/${product.id}`} key={product.id}>
                        <div className="featured-card">
                            <div className="featured-card-img">
                                <div className="icon-hover">
                                    <img src={require('../../images/Group 28.png')}
                                        alt='cart' />
                                    <img src={require('../../images/uil_heart-alt.png')}
                                        alt='heart' />
                                    <img src={require('../../images/uil_search-plus.png')}
                                        alt='search' />
                                </div>
                                <img src={product.image} style={{ width: '180px', height: '200px'}}
                                    alt='featured-img' />
                                <div className="btn-detail">View Details</div>
                            </div>
                            <div className='featured-card-in4'>
                                <h4 className="pink">{product.product_name}</h4>
                                <img src={require('../../images/line.png')}
                                    alt='line-decor' />
                                <p>Code - {product.id}</p>
                                <p>${product.price}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </Slider>
        </div>
    )
}