import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useState, useEffect } from "react";

export default function Focus(props) {
    const [product, setProduct] = useState('');

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
                <div className="left">
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
                <div className="right">
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
                        <button>Add to Cart</button>
                        <img src={require('../../images/heart-color.png')}
                            alt='like' />
                    </div>
                </div>
            </div>
        </div>
    )
}