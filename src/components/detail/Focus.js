import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function Focus() {
    const settings = {
        customPaging: function (i) {
            return (
                <div className="img-dot">
                    <Link>
                        <img src={require(`../../images/products/product${i + 1}.png`)}
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
                                <img src={require('../../images/products/product1.png')}
                                    alt='product' />
                            </div>
                        </div>
                        <div>
                            <div className="img-focus">
                                <img src={require('../../images/products/product2.png')}
                                    alt='product' />
                            </div>
                        </div>
                        <div>
                            <div className="img-focus">
                                <img src={require('../../images/products/product3.png')}
                                    alt='product' />
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="right">
                    <h1>Playwood arm chair</h1>
                    <p>$32.00 <span>$52.00</span></p>
                    <div className="focus-text">
                        <div className="tags-box">
                            <h5>Color:</h5>
                            <div className="tag">White</div>
                        </div>
                        <div className="tags-box">
                            <h5>Category:</h5>
                            <div className="tag">Couch</div>
                            <div className="tag">Relax</div>
                        </div>
                        <div className="tags-box">
                            <h5>Tags:</h5>
                            <div className="tag">Couch</div>
                            <div className="tag">Relax</div>
                        </div>
                    </div>

                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}