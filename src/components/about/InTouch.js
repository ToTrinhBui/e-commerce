import React from 'react';

export default function InTouch(){
    return(
        <div className='intouch container'>
            <div className='left'>
                <h1>Get In Touch</h1>
                <p>Feel free to reach out to our dedicated support team for any inquiries or assistance with your e-commerce needs.</p>
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