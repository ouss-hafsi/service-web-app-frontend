///////Navigation.js
import {useState} from 'react'
import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
// import {ImGithub} from 'react-icons/im'

const Navigation = ({getData}) => {
	const [active, setActive] = useState('nav-menu')
	const[toggleIcon, setToggleIcon] = useState('nav-toggle')
	const navToggle = () => {
		active === 'nav-menu' ? setActive('nav-menu nav-active') : setActive('nav-menu')
		
			// Toggle Animation
			toggleIcon === 'nav-toggle' 
			? setToggleIcon('nav-toggle toggle')
			: setToggleIcon('nav-toggle')
	
	}


	

	
	return (
		
		<>
		<nav className='nav'>
		<Link to='/' className='brand'>Movie <span>App</span></Link>
		<ul className={active}>
			<li className='nav-item'><Link to='/home' className='nav-link'>Home</Link></li>
			<li className='nav-item'><Link to='/about' className='nav-link'>About</Link></li>
			<li className='nav-item'><Link to='/Movies' onClick={getData} className='nav-link'>Movies</Link></li>
			<li className='nav-item'><Link to='/Favorite' className='nav-link'>Favorite</Link></li>
			<li className='nav-item'><Link to='/Contact' className='nav-link'>Contact</Link></li>
        </ul>
      
		<div onClick={navToggle} className={toggleIcon}>
             <div className='line1'></div>
			 <div className='line2'></div>
			 <div className='line3'></div>
		</div>


		</nav>
		</>
	);
};

export default Navigation;
