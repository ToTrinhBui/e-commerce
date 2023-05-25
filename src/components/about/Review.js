import React from "react";

export default function Review(){
    return(
        <div className="review">
            <h1>Our Clients say!</h1>
            <img src={require('../../images/Group 200.png')} alt="review"/>
            <h4>Chiefs At ABC Digital</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
        </div>
    )
}