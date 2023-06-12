import React from "react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function Related(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const randomProducts = getRandomElements(props.data, 4);
        setProducts(randomProducts);
    }, [props.data]);

    // Function to get random elements from an array
    const getRandomElements = (array, numElements) => {
        const shuffled = array.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, numElements);
    };

    const handleLinkClick = (event, productId) => {
        event.preventDefault();
        const newLink = `/detail/${productId}`;
        window.location.href = newLink;
    };

    return (
        <div className="related container">
            <h1>Related Products</h1>
            <div className="related-list">
                {products.map((product) => (
                    <Link to={`/detail/${product.id}`} key={product.id} onClick={(event) => handleLinkClick(event, product.id)}>
                        <div className="related-card">
                            <div className="related-card-img">
                                <img src={product.image}
                                    alt='product' />
                            </div>
                            <div className="related-card-text">
                                <h5>{product.name}</h5>
                                <p>${product.price}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}