import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>MovieQuest</div>
            <div className='menu'>
                <ul>
                    <li><Link to='/fav'>Favorites</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
