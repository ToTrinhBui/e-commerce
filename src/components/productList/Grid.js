import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import { LikeContext } from '../../context/LikeContext';

export default function Grid(props) {
    const [products, setProducts] = useState([]);
    const { addToCart } = useContext(CartContext);
    const { like, unlike, isLiked } = useContext(LikeContext);

    useEffect(() => {
        setProducts(props.data);
    }, [props.data]);
    return (
        <div className='grid-product container'>
            {[...products].reverse().map(product => (
                <div key={product.id} className='card-grid'>
                    <div className='card-grid-img'>
                        <div className="card-grid-icon-hover">
                            <div className='btn' onClick={() => addToCart(product.id)}>
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
                            <Link to={`/detail/${product.id}`}>
                                <img src={require('../../images/uil_search-plus.png')}
                                    alt='search' style={{ 'width': '18px' }} />
                            </Link>
                        </div>
                        <div className=''>
                            <img src={product.image}
                                alt='product' style={{ width: '150px', height: '150px' }} className='card-grid-product-img' />
                        </div>
                    </div>
                    <Link to={`/detail/${product.id}`}>
                        <div className='card-grid-text'>
                            <h5>{product.name}</h5>
                            <div className='decor-box'>
                                <div className='decor'></div>
                                <div className='decor'></div>
                                <div className='decor'></div>
                            </div>
                            <p>${product.price} <span>${product.price * 1.2}</span></p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}