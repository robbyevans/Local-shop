import React from 'react';
import React, { useState } from 'react'
import '../SIdebar/Sidebar.css'
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaSignOutAlt
}from "react-icons/fa";

const Sidebar = () => {

    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            // path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/product",
            name:" Add Item",
            icon:<FaShoppingBag/>
        },
        {
            path:"/product",
            name:"Inventory",
            icon:<FaShoppingBag/>
        },
        {
            path:"/comment",
            name:"Request Item",
            icon:<FaCommentAlt/>
        },

        {
            path:"/productList",
            name:"Log out",
            icon:<FaSignOutAlt/>
        }
    ]

    return (
        <div className="container">
    <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
        <div className="top_section">
            <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Local Shop</h1>
            <div style={{marginLeft: isOpen ? "70px" : "0px"}} className="bars">
                <FaBars onClick={toggle}/>
            </div>
        </div>
        {
            menuItem.map((item, index)=>(
                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                    <div className="icon">{item.icon}</div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                </NavLink>
            ))
        }
    </div>
 <main>{children}</main>
 </div>
    );
}

export default Sidebar;
