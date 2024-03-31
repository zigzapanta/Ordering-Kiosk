import React from 'react'
import Data from '../Data.js'
import all_product from '../../Assets/all_data'
import Product from "../Product/Product"
import './Main.css'



const Main = ({menu}) => {
    return (
        <div className="main-component">
            {all_product.map((product) => (
                product.category.includes(menu) && product.category.includes("ala-carte") ? (
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