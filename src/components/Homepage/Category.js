import React from 'react';
import Slider from "react-slick";

export default function Category() {
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
    const cards = [1, 2, 3, 4, 5, 6];
    return (
        <div className='category container'>
            <h1>Top Categories</h1>
            <div className='list-categories'>
                <Slider {...settings}>
                    {cards.map((card, index) => (
                        <div key={index}>
                            <div className='card-category'>
                                <div className='round'>
                                    <img src={require('../../images/products/product1.png')}
                                        alt='featured-img' />
                                    <div className="btn-detail">View Details</div>
                                </div>
                                <div>
                                    <h5>Mini LCW Chair</h5>
                                    <p>$56.00</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider >
            </div>
        </div>
    )
}