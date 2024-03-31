import React, {useState, useEffect}from 'react'
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
import Main from '../../Components/Main/Main'



const SideScrollArea = ({ onMenuClick }) => {
    const handleMenuClick = (category) => {
        // Call the 'onMenuClick' function passed from the parent
        onMenuClick(category);
    };





    return (
        <div className="side-scroll-area">
            <img className="logo" src={mcdoLogo} alt="" />
            <div className="categories burgers" onClick={() => handleMenuClick("burger")}>
                <img src={burgersIcon} alt="" />
                <h3>Burgers</h3>
            </div>
            <div className="categories chicken" onClick={() => handleMenuClick("chicken")}>
                <img src={chickenIcon} alt="" />
                <h3>Chicken & Fish</h3>
            </div>
            <div className="categories rice-bowl" onClick={() => handleMenuClick("rice-bowl")}>
                <img src={riceBowlIcon} alt="" />
                <h3>Rice Bowls</h3>
            </div>
            <div className="categories coffee" onClick={() => handleMenuClick("spaghetti")}>
                <img src={spaghettiIcon} alt="" />
                <h3>Spaghetti</h3>
            </div>
            <div className="categories fries" onClick={() => handleMenuClick("fries")}>
                <img src={friesIcon} alt="" />
                <h3>Fries & Snacks</h3>
            </div>
            <div className="categories dessert" onClick={() => handleMenuClick("dessert")}>
                <img src={dessertIcon} alt="" />
                <h3>Desserts</h3>
            </div>
            <div className="categories coffee" onClick={() => handleMenuClick("coffee")}>
                <img src={coffeeIcon} alt="" />
                <h3>Coffee</h3>
            </div>
        </div>
    );
};

export default SideScrollArea;