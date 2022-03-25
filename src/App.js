import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Profil from './components/Profil';
import Menu from './components/Menu';
import Basket from './components/Basket';
import Reservation from './components/Reservation';
import { Routes, Route } from 'react-router-dom';
import { getAllCategories } from './api/api.js';

function App() {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getAllCategories(setCategories);
	}, []);

	return (
		<div className='App'>
			{/* <header className='App-header'>
				<ul>{categories ? categories.map((cat) => <li key={cat.idCategory}>{cat.strCategory}</li>) : 'Loading data...'}</ul>
			</header> */}
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/profil' element={<Profil />} />
				<Route path='/menu' element={<Menu />} />
				<Route path='/order' element={<Basket />} />
				<Route path='/reserve' element={<Reservation />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
