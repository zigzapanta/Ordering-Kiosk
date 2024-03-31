import React, { useState } from 'react';
import './Modal.css';
import Card from '../Card/Card';
import all_product from '../../Assets/all_data'; // Import the all_product data
import Modal2 from './Modal2'; // Import Modal 2 component

const Modal = ({ isOpen, onClose, name, price, image }) => {
    const [clickedProduct, setClickedProduct] = useState(null); // State to hold details of clicked product
    const [isModal2Open, setIsModal2Open] = useState(false);

    // If the modal is not open, return null (don't render anything)
    if (!isOpen) return null;

    const handleCardClick = (product) => {
        onClose(); // Close the current modal
        setClickedProduct(product); // Set details of the clicked product
        setIsModal2Open(true); // Open Modal 2
    };

    return (
        <div className="modal">
            <span className="close" onClick={onClose}>&times;</span>
            <div className="modal-content">
                <div className="card-area">
                    {all_product
                        .filter(product => product.name.includes(name))
                        .map(product => (
                            <Card
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                image={product.image}
                                price={product.price}
                                onClick={() => handleCardClick(product)} // Pass the product to handleCardClick
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Modal;
