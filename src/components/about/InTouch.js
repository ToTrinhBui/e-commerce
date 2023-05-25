import React from 'react';

export default function InTouch(){
    return(
        <div className='intouch container'>
            <div className='left'>
                <h1>Get In Touch</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
                <div className='input'>
                    <div>
                        <input placeholder='Your Name*' />
                    </div>
                    <div>
                        <input placeholder='Your E-mail' />
                    </div>
                    <div className='long'>
                        <input placeholder='Subject*' />
                    </div>
                    <div className='long'>
                        <textarea  placeholder='Type Your Message*' />
                    </div>
                </div>
                <button>Send Mail</button>
            </div>
            <div className='right'>
                <img src={require('../../images/Group 124.png')} alt='InTouch'/>
            </div>
        </div>
    )
}