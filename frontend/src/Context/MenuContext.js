import React, {createContext, useState } from 'react'
import all_data from '../Assets/all_product'


export const MenuContext = createContext(null);

const getDefaultCart = () =>{
	let cart=[]
	for (let index = 0; index < all_product.length+1; index++){
			cart[index] = 0;
		}
		return cart;
}