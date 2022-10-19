import React from 'react';
import React, { useState } from 'react'
import '../SIdebar/sidebar.css'
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
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
        <div>
            
        </div>
    );
}

export default Sidebar;
