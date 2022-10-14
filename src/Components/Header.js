import React from "react";
import {NavLink} from 'react-router-dom'
import "../App.css"
import maize from "../images/maize.jpeg"
function Header(){

    return(
        <div className="Header">
            <div className="upheader">
                <div className="nav-section">
                <NavLink to = '/' exact="true" style={{textDecoration : "none", color :"white", fontSize:20}}>Home </NavLink>
                <NavLink to = '/farmers' exact="true" style={{textDecoration : "none", color :"white", fontSize:20}}>Farmer</NavLink>
                <NavLink to = '/inputs' exact="true" style={{textDecoration : "none", color :"white", fontSize:20}}>Farmer Input</NavLink>
                <NavLink to = '/contacts' exact="true" style={{textDecoration : "none", color :"white", fontSize:20}}>Contact Us</NavLink>
                <NavLink to = '/signup' exact="true" style={{textDecoration : "none", color :"white", fontSize:20}}>Create an Account</NavLink>

                </div>

            </div>
            <div className="header">
            </div>


        </div>
    )
}
export default Header
