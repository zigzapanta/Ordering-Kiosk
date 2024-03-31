import React, {useState} from 'react'
import './Product.css'
import Modal from '../Modal/Modal'



const Product = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to toggle the modal
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="product" onClick={toggleModal}>
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <div className="product-bottom">
                <div className="product-price">₱{props.price}</div>
            </div>
            {/* Render the Modal component */}
            <Modal isOpen={isModalOpen} onClose={toggleModal} name={props.name} price={props.price} image={props.image}>
            </Modal>
        </div>
    );
};

export default Product;