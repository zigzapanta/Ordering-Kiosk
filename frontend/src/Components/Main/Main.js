import React from 'react'
import Data from '../Data.js'
import all_data from '../../Assets/all_data'
import Product from "../Product/Product"
import './Main.css'


console.log(all_data)

const Main = ({ menu, all_data }) => {
	console.log("menu:", menu)
	console.log("data:", all_data)
    return (
        <div className="main-component">
            {all_data.map((product) => (
                product.category.includes(menu) ? (
                    <Product
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        image={product.image}
                        price={product.price}
                    />
                ) : null
            ))}
        </div>
    );
}

export default Main;