import React from 'react';

export default function Unique() {
    return (
        <div className='unique'>
            <img src={require('../../images/Group 153.png')} alt='product'/>
            <div className='unique-content'>
                <h1>Unique Features Of leatest & Trending Poducts</h1>
                <ul>
                    <li>All frames constructed with hardwood solids and laminates</li>
                    <li>Reinforced with double wood dowels, glue, screw - nails corner
                        blocks and machine nails</li>
                    <li>Arms, backs and seats are structurally reinforced</li>
                </ul>
                <div className='btn-add'>
                    <button>Add To Card</button>
                    <div>
                        <h5>B&B Italian Sofa</h5>
                        <p>$32.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}