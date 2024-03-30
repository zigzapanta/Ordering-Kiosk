import React from 'react'
import './Product.css'



const Product = (props) => {
	return(
		<div className="product">
		<img src={props.image} alt=""/>
		<p>{props.name}</p>
		<div className="product-bottom">
			<div className="product-price">
				₱{props.price}
			</div>
				
		</div>

		</div>

	)
}


export default Product