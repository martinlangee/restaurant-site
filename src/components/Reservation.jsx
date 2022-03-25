import React, { useState } from 'react';
import './Reservation.css';
import 'react-datetime-picker';
import DateTimePicker from 'react-datetime-picker/dist/DateTimePicker';
import { Button, MenuItem, Select, TextField } from '@mui/material';

export default function Reservation() {
	const [name, setName] = useState('');
	const [date, setDate] = useState(new Date());
	const [persons, setPersons] = useState(1);
	const [contact, setContact] = useState('');

	const handleNameChange = (e) => {
		setName(e.target.value);
	};
	const handlePersonsChange = (e) => {
		setPersons(e.target.value);
	};
	const handleContactChange = (e) => {
		setContact(e.target.value);
	};
	const handleSubmit = (e) => {
		//SEND TO API HERE
	};

	return (
		<div className='Reservation'>
			<h2>Reservation</h2>
			<div className='Reservation-Input-Container'>
				<div className='Reservation-Label'>
					<label>Name:</label>
				</div>
				<div className='Reservation-Input'>
					<TextField variant='outlined' value={name} placeholder='Max Musterman' onChange={handleNameChange} />
				</div>
				<div className='Reservation-Label'>
					<label>Date:</label>
				</div>
				<div className='Reservation-Input'>
					<DateTimePicker value={date} onChange={setDate} clearIcon={null} />
				</div>
				<div className='Reservation-Label'>
					<label>Persons:</label>
				</div>
				<div className='Reservation-Input'>
					<Select id='personSelect' value={persons} onChange={handlePersonsChange}>
						<MenuItem value={1}>1 Person</MenuItem>
						<MenuItem value={2}>2 Persons</MenuItem>
						<MenuItem value={3}>3 Persons</MenuItem>
						<MenuItem value={4}>4 Persons</MenuItem>
						<MenuItem value={5}>5 Persons</MenuItem>
						<MenuItem value={6}>6 Persons</MenuItem>
						<MenuItem value={7}>7 Persons</MenuItem>
						<MenuItem value={8}>8 Persons</MenuItem>
					</Select>
				</div>
				<div className='Reservation-Label'>
					<label>Contact:</label>
				</div>
				<div className='Reservation-Input'>
					<TextField variant='outlined' value={contact} placeholder='E-Mail/Phone' onChange={handleContactChange} />
				</div>
				<div></div>
				<div></div>
				<div></div>
				<div>
					<div className='Submit'>
						<Button id='subButton' variant='outlined' onClick={handleSubmit}>
							Submit
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
