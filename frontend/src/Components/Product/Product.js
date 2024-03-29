import React from 'react'



const Product = (props) => {
	return(
		<div className="product">
		<img src={props.image} alt=""/>
		<p>{props.name}</p>
		<div className="item-prices">
			<div className="item-price-new">
				₱{props.price}
			</div>
				
		</div>

		</div>

	)
}


export default Product