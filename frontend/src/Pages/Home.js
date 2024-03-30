import React from 'react'
import "../CSS/Home.css"
import Sidescrollarea from '../Components/Sidescrollarea/Sidescrollarea'
import Main from '../Components/Main/Main'

const Home = ({menu}) => {
	return(

	<div className="home">
		<div className ="scroll-area">
		<Sidescrollarea/>

		</div>
		<div className="right-side">
			<div className="banner">
			</div>
			<div className="main">
			<Main menu={menu}/>

			</div>
		</div>



	</div>

   )
}


export default Home