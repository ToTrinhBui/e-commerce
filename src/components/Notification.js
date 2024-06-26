import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import '../style/index.css'
import { CartContext } from '../context/CartContext';

export default function Notification() {
    const { showNotification } = useContext(CartContext)
    return (
        ReactDOM.createPortal(
            <div className='overlay'>
                <div className={showNotification ? "show-notification" : ""}>
                    <div className='notification'>
                        <div className='noti-content'>
                            <svg fill="#fff04d" width="40px" height="40px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" stroke="#fff04d"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M34.64355,74.10547a8.00344,8.00344,0,0,1-7.17089-11.53711A112.28357,112.28357,0,0,1,68.29688,17.22363a7.99959,7.99959,0,1,1,8.54,13.5293A96.29849,96.29849,0,0,0,41.82617,69.63867,8.002,8.002,0,0,1,34.64355,74.10547ZM228.52734,62.56836a112.28362,112.28362,0,0,0-40.82421-45.34473,7.9996,7.9996,0,1,0-8.54,13.5293,96.29849,96.29849,0,0,1,35.01074,38.88574,8.0002,8.0002,0,1,0,14.35351-7.07031Zm-7.71289,113.37109A15.99808,15.99808,0,0,1,207.0166,200H168a40,40,0,0,1-80,0H48.9834a15.99886,15.99886,0,0,1-13.79688-24.06445C41.124,165.7207,48.20313,146.33594,48.20313,112a79.89888,79.89888,0,0,1,79.79492-80c.2041,0,.40625.001.61035.002A79.70738,79.70738,0,0,1,207.80469,112C207.80469,146.33789,214.87988,165.72363,220.81445,175.93945ZM152,200H104a24,24,0,0,0,48,0Z"></path> </g></svg>
                            <p>You just added an item to your cart!</p>
                        </div>
                    </div>
                </div>
            </div>,
            document.getElementById('modal-root')
        )
    );
};
