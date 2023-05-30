import React from "react";
import { Link } from "react-router-dom";

export default function Total() {
    const cards = [1, 2, 3]
    return (
        <div className="cart container">
            <div className="left">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cards.map((card, index) => (
                            <tr key={index}>
                                <td className="product-description">
                                    <img src={require('../../images/products/product3.png')}
                                        alt='product' />
                                    <div className="product-description-text">
                                        <h5>Chair</h5>
                                        <p>Color: White</p>
                                    </div>
                                </td>
                                <td>$32.00</td>
                                <td>01</td>
                                <td>$64.00</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button>Clear Cart</button>
            </div>
            <div className="right">
                <h3>Cart Totals</h3>
                <div className="calculate">
                    <div className="calculate-part">
                        <h4>Subtotal:</h4>
                        <h5>$320.00</h5>
                    </div>
                    <div className="calculate-part">
                        <h4>Total:</h4>
                        <h5>$320.00</h5>
                    </div>
                    <Link to='/success'>
                        <div className="to-checkout">
                            Proceed To Checkout
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}