import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box } from '@mui/system';
import { Card, CardContent, CardMedia, Typography, Tab, Tabs } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}));

const Menu = () => {
	const [meals, setMeals] = useState([]);
	const [category, setCategory] = useState('Pasta');
	const [tab, setTab] = useState(0);

	useEffect(() => {
		axios
			.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
			.then(({ data }) => setMeals(data.meals))
			.catch((err) => console.error(err));
	}, [category]);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Box>
				<Search>
					<SearchIconWrapper>
						<SearchIcon />
					</SearchIconWrapper>
					<StyledInputBase placeholder='Search' inputProps={{ 'aria-label': 'search' }} />
				</Search>
				<Tabs value={tab}>
					<Tab
						label='Pasta'
						onClick={() => {
							setCategory('Pasta');
							setTab(0);
						}}
					/>
					<Tab
						label='Seafood'
						onClick={() => {
							setCategory('Seafood');
							setTab(1);
						}}
					/>
					<Tab
						label='Vegan'
						onClick={() => {
							setCategory('Vegan');
							setTab(2);
						}}
					/>
					<Tab
						label='Vegetarian'
						onClick={() => {
							setCategory('Vegetarian');
							setTab(3);
						}}
					/>
					<Tab
						label='Dessert'
						onClick={() => {
							setCategory('Dessert');
							setTab(4);
						}}
					/>
				</Tabs>
			</Box>
			<Box>
				<Typography variant='h2' sx={{ textAlign: 'center' }}>
					Menu
				</Typography>
			</Box>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: '1fr 1fr 1fr 1fr',
					gridGap: '10px',
					maxWidth: '900px',
				}}
			>
				{meals.map((meal) => (
					<Card sx={{ maxWidth: 345 }}>
						<CardMedia component='img' height='200' image={meal.strMealThumb} />
						<CardContent>
							<Typography gutterBottom variant='h5'>
								{meal.strMeal}
								<ShoppingCartOutlinedIcon />
								<FavoriteBorderOutlinedIcon />
							</Typography>
							<StarBorderOutlinedIcon />
							<StarBorderOutlinedIcon />
							<StarBorderOutlinedIcon />
							<StarBorderOutlinedIcon />
							<StarBorderOutlinedIcon />
							<Typography>Price</Typography>
						</CardContent>
					</Card>
				))}
			</Box>
		</Box>
	);
};

export default Menu;
