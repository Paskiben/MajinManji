import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import Map from "../components/mapa/Index.js";
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Switch } from '@chakra-ui/react'
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
} from '@chakra-ui/react'
import LoginButton from "../components/auth/LoginButton.js";
import LogoutButton from "../components/auth/LogoutButton.js";
import { useAuth0 } from "@auth0/auth0-react";


const Home = () =>{
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();
	const [filtros, setFiltros] = useState([]);
	//load data from database
	const [categoryResponse, setCategories] = useState([]);
	useEffect(() => {
		async function getCategories()
		{
		const response = await fetch('https://majinvaldi.000webhostapp.com/category');
		const res = await response.json();
		setCategories(res);
		}
		getCategories();
	}, []);

	const { user, isAuthenticated, isLoading } = useAuth0();
	useEffect(() => {
		console.log(user);
	}, [user])
  
  	return(<>
	<Button ref={btnRef} colorScheme='teal' onClick={onOpen}>Filtros</Button>
	{(!isAuthenticated)?<LoginButton />: <LogoutButton />}
	<Drawer
		isOpen={isOpen}
		placement='right'
		onClose={onClose}
		finalFocusRef={btnRef}
	>
		<DrawerOverlay />
		<DrawerContent>
			<DrawerCloseButton />
			<DrawerHeader>Aplicacion de Filtros</DrawerHeader>
			<DrawerBody>
			<Stack direction={'column'} spacing='10px'>
			{categoryResponse.map((cat) => {
				return (
				<Fragment key={cat.id}>
					<FormLabel htmlFor={cat.name} mb='0'>{cat.name}</FormLabel>
					<Switch defaultChecked={filtros.includes(cat.id)} id={cat.name} onChange={(change) => {
					if(change.target.checked && !filtros.includes(cat.id)){
						filtros.push(cat.id);
						setFiltros([...filtros]);
					}
					else if(!change.target.checked && filtros.includes(cat.id)){
						let i = filtros.indexOf(cat.id);
						filtros.splice(i, 1);
						setFiltros([...filtros]);
					}
					}}
					/>
				</Fragment>
				);
			})}
			</Stack>
			</DrawerBody>

			<DrawerFooter>
				{/*<Button variant='outline' mr={3} onClick={onClose}>Cancel</Button>*/}
				<Button colorScheme='blue' onClick={onClose}>Save</Button>
			</DrawerFooter>
		</DrawerContent>
	</Drawer>
	<Map filtros={filtros}/>
</>);
}
export default Home;

