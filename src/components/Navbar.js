import React, { useState } from 'react';
import Logo from '../photos/pizzaLogo.png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@material-ui/icons/Reorder';
//import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import '../styles/Navbar.css';

function Navbar() {
	const [openLinks, setOpenLinks] = useState(false);

	const toggleNavbar = () => {
		setOpenLinks(!openLinks);
	};
	return (
		<div className='navbar'>
			<div className='leftSide' id={openLinks ? 'open' : 'close'}>
				<img src={Logo} />;
				<div className='hiddenLinks'>
					<Link to='/'>Home</Link>
					<Link to='/menu'> Menu </Link>
					<Link to='/profil'> Profil </Link>
				</div>
			</div>
			<div className='rightSide'>
				<Link to='/'> Home </Link>
				<Link to='/menu'> Menu </Link>
				<Link to='/profil'> Profil </Link>
				<Link to='/order'> Order </Link>

				<button onClick={toggleNavbar}>
					<ReorderIcon />
				</button>
			</div>
		</div>
	);
}

export default Navbar;
