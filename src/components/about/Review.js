import React from "react";

export default function Review() {
    return (
        <div className="review">
            <div className="review-content" style={{width: '60%', margin:'auto'}}>
                <h1>Our Clients say!</h1>
                <img src={require('../../images/Group 200.png')} alt="review" />
                <h4>Chiefs At ABC Digital</h4>
                <p>Unlock your e-commerce website's potential with our trusted supplier services. Experience seamless integration and superior product sourcing tailored to your specific needs. Elevate your online store's performance and customer satisfaction with our reliable solutions.</p>
            </div>
        </div>
    )
}