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
                                            <img src={require('../../images/full-heart.png')}
                                                alt='full-heart' style={{ 'width': '21px' }} />
                                        </div>) : (
                                        <div className='btn' onClick={() => like(product.id)}>
                                            <img src={require('../../images/uil_heart-alt.png')}
                                                alt='heart' />
                                        </div>)
                                    }
                                </div>
                                <img src={product.image} style={{ width: '180px', height: '180px' }}
                                    alt='featured-img' />
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