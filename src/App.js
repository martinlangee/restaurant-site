import React, { useState } from 'react';
import Navbar from './conponents/Navbar';
import Footer from './conponents/Footer';
import Home from './conponents/Home';
import Profil from './conponents/Profil';

import { Routes, Route } from 'react-router-dom';
function App() {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getAllCategories(setCategories);
	}, []);

	return (
		<div className='App'>
			<header className='App-header'>
				<ul>{categories ? categories.map((cat) => <li key={cat.idCategory}>{cat.strCategory}</li>) : 'Loading data...'}</ul>
			</header>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/profil' element={<Profil />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
