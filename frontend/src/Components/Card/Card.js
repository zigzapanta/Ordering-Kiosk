import React, {useState} from 'react'
import './Card.css'
import all_product from '../../Assets/all_data'



const Card = (props) => {


    return (
        <div className="product">
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <div className="product-bottom">
                <div className="product-price">₱{props.price}</div>
            </div>
        </div>
    )

   }

export default Card;