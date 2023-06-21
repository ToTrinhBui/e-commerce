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
        <div className="item container">
            {products.map((product) => (
                <div key={product.id} className="card-item">
                    <div className="item-img">
                        <img src={product.image}
                            alt='product' />
                    </div>
                    <div className="item-in4">
                        <div className="item-title">
                            <h3>{product.name}</h3>
                            <div className='decor-box'>
                                <div className='decor'></div>
                                <div className='decor'></div>
                                <div className='decor'></div>
                            </div>
                            <div className="btn item-liked" onClick={() => props.unlike(product.id)}>
                                <img src={require("../../images/full-heart.png")} alt="heart" />
                            </div>
                        </div>
                        <p>${product.price} <span>${product.price * 1.2}</span></p>
                        <div className="item-option">
                            <div className='btn' onClick={() => addToCart(product.id)}>
                                <img src={require("../../images/cart-color.png")} alt="cart" />
                            </div>
                            <Link to={`/detail/${product.id}`}>
                                <img src={require("../../images/search-color.png")} alt="search" />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}