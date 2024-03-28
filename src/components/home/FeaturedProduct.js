import React from "react";
import Slider from "react-slick";
import { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import { LikeContext } from "../../context/LikeContext";


export default function FeaturedProduct(props) {
    const [products, setProducts] = useState([]);
    const { addToCart } = useContext(CartContext);
    const { like, unlike, isLiked } = useContext(LikeContext);

    useEffect(() => {
        const list = [...props.data].reverse();;
        setProducts(list.slice(0, 6));
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
                    <div key={product.id}>
                        <div className="featured-card" >
                            <div className="featured-card-img">
                                <div className="icon-hover">
                                    <div className="btn" onClick={() => addToCart(product.id)}>
                                        <img src={require('../../images/Group 28.png')}
                                            alt='cart' />
                                    </div>
                                    {isLiked(product.id) ? (
                                        <div className='btn' onClick={() => unlike(product.id)}>
                                            <svg width="18px" height="18px" viewBox="0 0 24 24" fill="#ff0066" xmlns="http://www.w3.org/2000/svg" stroke="#ff0066"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#ff0066" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                        </div>) : (
                                        <div className='btn' onClick={() => like(product.id)}>
                                            <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0084ff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#0084ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                        </div>)
                                    }
                                </div>
                                <img src={product.image} className="featured-img" alt='featured-img' />
                                <Link to={`/detail/${product.id}`}>
                                    <div className="btn-detail">View Details</div>
                                </Link>
                            </div>
                            <Link to={`/detail/${product.id}`}>
                                <div className='featured-card-in4'>
                                    <h4 className="pink">{product.name}</h4>
                                    <img src={require('../../images/line.png')}
                                        alt='line-decor' />
                                    <p>Code - {product.id}</p>
                                    <p>${product.price}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}