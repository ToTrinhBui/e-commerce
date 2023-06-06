import React from 'react';
import {Link} from 'react-router-dom';

export default function Update(){
    return(
        <div className='update'>
            <h1>Get Leatest Update</h1>
            <Link to='/products'><button>Shop Now</button></Link>
        </div>
    )
}