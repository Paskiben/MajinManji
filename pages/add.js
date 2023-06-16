import { FormControl, FormLabel, Input, Button, Select, Center} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

function AddLocation() {
const [location, setLocation] = useState(null);

function handleLocationClick() {
	if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(success, error);
	} else {
	console.log("Geolocation not supported");
	}
}

function success(position) {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	setLocation({ latitude, longitude });
	console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
}

function error() {
	console.log("Unable to retrieve your location");
}

const [categoryResponse, setCategories] = useState([]);
useEffect(() => {
	async function getCategories()
	{
	const response = await fetch('https://majinvaldi.000webhostapp.com/category');
	const res = await response.json();
	console.log(res);
	setCategories(res);
	}
	getCategories();
}, []);
return (<>
	<div>
	{!location ? <Button onClick={handleLocationClick}>Get Location</Button> : <Center>
			<form method='post' action='https://majinvaldi.000webhostapp.com/admin/place/add'>
				<Input name='lat' type='hidden' value={location.latitude}></Input>
				<Input name='long' type='hidden' value={location.longitude}></Input>
				<FormLabel htmlFor='name'>Name&nbsp;&nbsp;</FormLabel>
				<Input name='name'></Input><br />
				<FormLabel htmlFor='description'>Description&nbsp;&nbsp;</FormLabel>
				<Input name='description'></Input><br />
				<FormLabel htmlFor='category'>Category&nbsp;&nbsp;</FormLabel>
				<Select name='category'>
					{categoryResponse.map((cat) => {
						return (<option key={cat.id} value={cat.id}>{cat.name}</option>);
					})}
				</Select><br />
				<Button type='submit'>submit</Button>
			</form>
		</Center>}
	</div></>
);
}

export default AddLocation;