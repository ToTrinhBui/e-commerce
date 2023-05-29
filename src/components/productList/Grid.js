import React from 'react';

export default function Grid() {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return (
        <div className='grid-product container'>
            {cards.map((card, index) => (
                <div key={index} className='card-grid'>
                    <div className='card-grid-img'>
                        <div className="card-grid-icon-hover">
                            <img src={require('../../images/Group 28.png')}
                                alt='cart' />
                            <img src={require('../../images/uil_heart-alt.png')}
                                alt='heart' />
                            <img src={require('../../images/uil_search-plus.png')}
                                alt='search' />
                        </div>
                        <img src={require('../../images/products/product2.png')}
                            alt='product' style={{ width: '150px' }} className='card-grid-product-img' />
                    </div>
                    <div className='card-grid-text'>
                        <h5>Ultricies condimentum imperdiet</h5>
                        <div className='decor-box'>
                            <div className='decor'></div>
                            <div className='decor'></div>
                            <div className='decor'></div>
                        </div>
                        <p>$26.00 <span>$42.00</span></p>
                    </div>
                </div>
            ))}
        </div>
    )
}