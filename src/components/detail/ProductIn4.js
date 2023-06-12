import React from "react";
import { useState, useEffect } from 'react';

export default function ProductIn4(props) {
    const [product, setProduct] = useState('');

    useEffect(() => {
        setProduct(props.data);
    }, [props.data])

    return (
        <div className="product-in4">
            <h3>Description</h3>
            <h5>Simple description</h5>
            <p>{product.description}</p>
            <h5>More details</h5>
            <ul>
                <li>Contact with us for more details</li>
            </ul>
        </div>
    )
}