import React from "react";
import {NavLink} from 'react-router-dom'
import "../App.css"
function Header(){

    return(
        <div>
            <div className="upheader">
                <div className="nav-section">
                <p>Have a Question?<a href="mailto:kariukimarkbrian@gmail.com" > kariukimarkbrian@gmail</a></p>
                <NavLink to = '/' exact="true" style={{textDecoration : "none", color :"white", fontSize:20}}>Home </NavLink>
                <NavLink to = '/farmers' exact="true" style={{textDecoration : "none", color :"white", fontSize:20}}>Farmer</NavLink>
                <NavLink to = '/' exact="true" style={{textDecoration : "none", color :"white", fontSize:20}}>Farmers Input</NavLink>
                <NavLink to = '/contacts' exact="true" style={{textDecoration : "none", color :"white", fontSize:20}}>Contact Us</NavLink>
                <NavLink to = '/signup' exact="true" style={{textDecoration : "none", color :"white", fontSize:20}}>Create an Account</NavLink>

                </div>

            </div>
            <div className="header"></div>

        </div>
    )
}
export default Header
