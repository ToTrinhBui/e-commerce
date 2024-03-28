import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { LikeContext } from "../../context/LikeContext";

export default function Focus(props) {
    const [product, setProduct] = useState('');
    const { addToCart } = useContext(CartContext);
    const { like, unlike, isLiked } = useContext(LikeContext);

    useEffect(() => {
        setProduct(props.data);
    }, [props.data])

    const settings = {
        customPaging: function (i) {
            return (
                <div className="img-dot">
                    <Link>
                        <img src={product.image}
                            alt='product' />
                    </Link>
                </div>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="focus container">
            <div className="outside">
                <div className="focus-left">
                    <Slider {...settings}>
                        <div>
                            <div className="img-focus">
                                <img src={product.image}
                                    alt='product' />
                            </div>
                        </div>
                        <div>
                            <div className="img-focus">
                                <img src={product.image}
                                    alt='product' />
                            </div>
                        </div>
                        <div>
                            <div className="img-focus">
                                <img src={product.image}
                                    alt='product' />
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="focus-right">
                    <h1>{product.name}</h1>
                    <p>${product.price} <span>${product.price * 1.2}</span></p>
                    <div className="focus-text">
                        <div className="tags-box">
                            <h5>Status:</h5>
                            <div className="tag">{product.available}</div>
                        </div>
                        <div className="tags-box">
                            <h5>Category:</h5>
                            <Link to={`/categories/${product.category}`}><div className="tag">{product.category}</div></Link>
                            <div className="tag">Relax</div>
                        </div>
                        <div className="tags-box">
                            <h5>Tags:</h5>
                            <div className="tag">Comfortable</div>
                            <div className="tag">Relax</div>
                        </div>
                    </div>
                    <div className="focus-option">
                        <button onClick={() => addToCart(product.id)}>Add to Cart</button>
                        {isLiked(product.id) ? (
                            <div className='btn' onClick={() => unlike(product.id)}>
                                <svg width="18px" height="18px" viewBox="0 0 24 24" fill="#ff0066" xmlns="http://www.w3.org/2000/svg" stroke="#ff0066"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#ff0066" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            </div>) : (
                            <div className='btn' onClick={() => like(product.id)}>
                                <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0084ff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#0084ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}