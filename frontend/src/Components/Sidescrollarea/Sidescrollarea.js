import React from 'react'
import { Link } from 'react-router-dom'
import "./Sidescrollarea.css"
import burgersIcon from '../../Assets/burgersIcon.png'
import chickenIcon from '../../Assets/chickenIcon.png'
import riceBowlIcon from '../../Assets/riceBowlIcon.png'
import spaghettiIcon from '../../Assets/spaghettiIcon.png'
import friesIcon from '../../Assets/friesIcon.png'
import dessertIcon from '../../Assets/dessertIcon.png'
import coffeeIcon from '../../Assets/coffeeIcon.png'
import mcdoLogo from '../../Assets/mcdoLogo.png'



const SideScrollArea = () => {
	return(

	<div className="side-scroll-area">
		<img className="logo" src={mcdoLogo} alt="" />
		<Link style={{textDecoration: 'none'}} to="/burger" >
		<div className="categories burgers">
		<img src={burgersIcon} alt=""/>
		<h3>Burgers</h3>
		</div>
		</Link>
		<div className="categories chicken">
		<img src={chickenIcon} alt=""/>
		<h3>Chicken & Fish</h3>
		</div>
		<div className="categories rice-bowl">
		<img src={riceBowlIcon} alt=""/>
		<h3>Rice Bowls</h3>
		</div>
		<div className="categories coffee">
		<img src={spaghettiIcon} alt=""/>
		<h3>Spaghetti</h3>
		</div>
		<div className="categories fries">
		<img src={friesIcon} alt=""/>
		<h3>Fries & Snacks</h3>
		</div>
		<div className="categories dessert">
		<img src={dessertIcon} alt=""/>
		<h3>Desserts</h3>
		</div>
		<div className="categories coffee">
		<img src={coffeeIcon} alt=""/>
		<h3>Coffee</h3>
		</div>
	
	</div>

   )
}


export default SideScrollArea