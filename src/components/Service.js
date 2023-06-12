import React from 'react';

export default function Service(){
    return(
        <div className='service container'>
            <h1>What Shopex Offer!</h1>
            <div className='list-services'>
                <div className='card-service'>
                    <img src={require('../images/services/free-delivery 1.png')} alt='service'/>
                    <h4>24/7 Support</h4>
                    <p>Customers will be taken care of 24/7</p>
                </div>
                <div className='card-service'>
                    <img src={require('../images/services/cashback 1.png')} alt='service'/>
                    <h4>24/7 Support</h4>
                    <p>Customers will be taken care of 24/7</p>
                </div>
                <div className='card-service'>
                    <img src={require('../images/services/premium-quality 1.png')} alt='service'/>
                    <h4>24/7 Support</h4>
                    <p>Customers will be taken care of 24/7</p>
                </div>
                <div className='card-service'>
                    <img src={require('../images/services/24-hours-support 1.png')} alt='service'/>
                    <h4>24/7 Support</h4>
                    <p>Customers will be taken care of 24/7</p>
                </div>
            </div>
        </div>
    )
}