import React from 'react';
import { Link } from 'react-router-dom';

import promotion1 from '../../images/promotion1.png';
import promotion2 from '../../images/promotion2.png';
export default function Promotion() {
    return (
        <div className='promotion'>
            {/* With a 50% size reduction (1/0.8=1.25) */}
            <img className='promotion-img1' srcSet={`${promotion1} 1.5x`} alt='promotion' />
            <div className='promotion-text'>
                <h4 className='pink'>Best Furniture For Your Castle...</h4>
                <h1>New Furniture Collection Trends in 2023</h1>
                <p className='gray'>Embrace 2023's hottest furniture trends with our new collection, blending style, comfort, and functionality for an elevated living experience.</p>
                <Link to='/categories/funiture'><button>Shop Now</button></Link>
            </div>
            <img srcSet={`${promotion2} 1.75x`} alt='promotion' className='promotion-img2' />
        </div>
    )
}