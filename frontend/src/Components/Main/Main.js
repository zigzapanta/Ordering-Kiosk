import React from 'react'
import all_data from '../../Assets/all_data'
import Product from "../Product/Product"


const Main = (props) => {
	return(
		<div className="Main">
			{all_data.map((product, i) =>{
				if(product.category.includes(props.category)){
					return <Product key={i} id={product.id} name={product.name} image={product.image} price={product.price} />;
				} else {
					return null;
				}
			})}
		</div>
	);
}

export default Main;