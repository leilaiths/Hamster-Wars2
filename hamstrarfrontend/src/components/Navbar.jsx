import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import './Battle';
import './Gallery';

function Navbar() {
    return (
		<> 
        <nav className = 'header'>
            <ul>
                <li>
                    <Link to='/'>
                        HOME
                    </Link>
                </li>
            
                <li>
                    <Link to='/Battle'>
                        BATTLE
                    </Link>
                </li> 
				<li>
                    <Link to='/Gallery'>
                        GALLERY
                    </Link>
                </li> 
            </ul>
        </nav> 
		</>
    )
}

export default Navbar;