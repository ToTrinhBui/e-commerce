import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Total(props) {
    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        setProducts(props.data);
    }, [props.data]);

    return (
        <div className="cart container">
            <div className="cart-left">
                {products.length === 0 ? <h4>Your Cart Is Empty</h4> :
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr key={product.id}>
                                        <td className="product-description">
                                            <Link to={`/detail/${product.id}`}>
                                                <img src={product.image} alt='product' />
                                            </Link>
                                            <div className="product-description-text">
                                                <Link to={`/detail/${product.id}`}>
                                                    <h5 className="truncate">{product.name}</h5>
                                                </Link>
                                                <Link to={`/categories/${product.category}`}>
                                                    <p>Category: {product.category}</p>
                                                </Link>
                                            </div>
                                        </td>
                                        <td>${product.price}</td>
                                        <td>
                                            <div className="flex">
                                                <div className="btn quantity" onClick={() => { props.removeFromCart(product.id); }}>-</div>
                                                <div>{product.quantity}</div>
                                                <div className="btn quantity" onClick={() => { props.addToCart(product.id); }}>+</div>
                                            </div>
                                        </td>
                                        <td>${product.price * product.quantity}</td>
                                        <td>
                                            <button className="delete" onClick={() => { props.deleteFromCart(product.id); }}>X</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button onClick={props.clearCart}>
                            Clear Cart
                        </button>
                    </div>
                }
            </div>
            <div className="cart-right">
                <h3>Cart Totals</h3>
                <div className="calculate">
                    <div className="calculate-part">
                        <h4>Subtotal:</h4>
                        <h4>${props.total}</h4>
                    </div>
                    <div className="calculate-part">
                        <h4>Shipping:</h4>
                        {products.length === 0 ? <h4>$0</h4> : <h4>$10</h4>}
                    </div>
                    <div className="calculate-part">
                        <h4>Total:</h4>
                        {products.length === 0 ? <h4>$0</h4> : <h4>${props.total + 10}</h4>}
                    </div>
                    <div className="to-checkout"
                        onClick={() => {
                            props.clearCart();
                            navigate("/success");
                        }} >
                        Proceed To Checkout
                    </div>
                </div>
            </div>
        </div>
    )
}