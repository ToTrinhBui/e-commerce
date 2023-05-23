import React from "react";
import Slider from "react-slick";


export default function FeaturedProduct() {
    const cards = [1, 2, 3, 4, 5, 6];
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
                {cards.map((card, index) => (
                    <div key={index}>
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
                                <img src={require('../../images/products/product1.png')}
                                    alt='featured-img' />
                                <div className="btn-detail">View Details</div>
                            </div>
                            <div className='featured-card-in4'>
                                <h4 className="pink">Cantilever chair</h4>
                                <img src={require('../../images/line.png')}
                                    alt='line-decor' />
                                <p>Code - Y52320</p>
                                <p>$42.00</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}