import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Grid(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(props.data);
    }, [props.data]);
    return (
        <div className='grid-product container'>
            {[...products].reverse().map(product => (
                <div key={product.id} className='card-grid'>
                    <div className='card-grid-img'>
                        <div className="card-grid-icon-hover">
                            <img src={require('../../images/Group 28.png')}
                                alt='cart' />
                            <img src={require('../../images/uil_heart-alt.png')}
                                alt='heart' />
                            <Link to={`/detail/${product.id}`}>
                                <img src={require('../../images/uil_search-plus.png')}
                                    alt='search' style={{'width': '18px'}}/>
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