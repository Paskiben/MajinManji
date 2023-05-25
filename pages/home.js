import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";
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
import { Input } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Switch } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'


const Home = () =>{
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return(<>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Filtros
      </Button>
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
          <FormLabel htmlFor='F_SuperMercado' mb='0'>
            Super Mercado
          </FormLabel>
          <Switch id='F_SuperMercado' />
          <FormLabel htmlFor='F_Biblioteca' mb='0'>
            biblioteca
          </FormLabel>
          <Switch id='F_Biblioteca' />
          <FormLabel htmlFor='F_Discoteca' mb='0'>
            discoteca
          </FormLabel>
          <Switch id='F_Discoteca' />
          <FormLabel htmlFor='F_Comida' mb='0'>
            restoranes/picadas
          </FormLabel>
          <Switch id='F_Comida' />
          <FormLabel htmlFor='F_Lavanderias' mb='0'>
            lavanderias
          </FormLabel>
          <Switch id='F_Lavanderias' />
          <FormLabel htmlFor='F_Utilidades' mb='0'>
            tiendas de utilidades.
          </FormLabel>
          <Switch id='F_Utilidades' />
          <FormLabel htmlFor='F_Ferias' mb='0'>
            ubicacion de ferias.
          </FormLabel>
          <Switch id='F_Ferias' />
          <FormLabel htmlFor='F_Tecnicos' mb='0'>
            servicios tecnicos.
          </FormLabel>
          <Switch id='F_Tecnicos' />
          <FormLabel htmlFor='F_Medico' mb='0'>
            medico.
          </FormLabel>
          <Switch id='F_Medico' />
          </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    <Map/>
  </>);
}
export default Home;

