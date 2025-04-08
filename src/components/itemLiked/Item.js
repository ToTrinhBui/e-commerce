import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export default function Item(props) {
    const [products, setProducts] = useState([]);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        setProducts(props.data);
    }, [props.data]);

    return (
        <div className="list-item container">
            {products.length === 0 ?
                <h4>Your wishlist is empty. Go back <Link to={'/products'} style={{ color: '#0084ff' }}>the product list</Link> to find items you like.</h4>
                :
                products.map((product) => (
                    <div key={product.id} className="item">
                        <div className="card-item">
                            <div className="card-item-left">
                                <div className="item-img">
                                        <img src={product.image} alt='product' />
                                </div>
                                <div className="item-in4">
                                    <div className="item-title">
                                        <h3 className="truncate">{product.name}</h3>
                                        <div className='decor-box'>
                                            <div className='decor'></div>
                                            <div className='decor'></div>
                                            <div className='decor'></div>
                                        </div>
                                    </div>
                                    <p>${product.price} <span>${product.price * 1.2}</span></p>
                                    <div className="item-option">
                                        <div className='btn' onClick={() => addToCart(product.id)}>
                                            <div className="option-part">
                                                <img src={require("../../images/cart-color.png")} alt="cart" />
                                            </div>
                                        </div>
                                        <Link to={`/detail/${product.id}`}>
                                            <div className="option-part">
                                                <svg width="19px" height="19px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path stroke="#5c52ad" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m20 20-4.05-4.05m0 0a7 7 0 1 0-9.9-9.9 7 7 0 0 0 9.9 9.9zM8 11h3m3 0h-3m0 0V8m0 3v3"></path></g></svg>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="btn item-liked" onClick={() => props.unlike(product.id)}>
                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="#ff0066" xmlns="http://www.w3.org/2000/svg" stroke="#ff0066"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#ff0066" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}