import React, { useState } from 'react';
import "../CSS/Home.css"
import Sidescrollarea from '../Components/Sidescrollarea/Sidescrollarea'
import Main from '../Components/Main/Main'


const Home = () => {
    const [menu, setMenu] = useState("burger");

    // Function to fetch data
    const fetchData = async () => {
        try {
            const response = await fetch(`/data`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    };

    // Function to handle menu change
    const handleMenuChange = async (category) => {
        setMenu(category);
        // Fetch data when menu changes
        const data = await fetchData();
        if (data) {
            // Update Main component with fetched data
            // You might need to pass 'data' as a prop to Main component
        }
    };

	return(

	<div className="home">
		<div className ="scroll-area">
		<Sidescrollarea onMenuClick={handleMenuChange}/>

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