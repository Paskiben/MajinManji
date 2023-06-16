import React, { useState, useEffect, Fragment } from "react";
import { Card, CardHeader, CardBody, CardFooter, Heading, Stack, Button } from '@chakra-ui/react'
import {Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton } from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react";

export default function Comments({ place }){
    const { isOpen, onOpen, onClose } = useDisclosure(true);
	const btnRef = React.useRef();
    //load data from database
    const [commentsResponse, setComments] = useState([]);
    useEffect(() => {
    async function getComments()
    {
        const response = await fetch('https://majinvaldi.000webhostapp.com/comments?p='+place);
        const res = await response.json();
        console.log(res);
        setComments(res);
    }
    getComments();
    }, []);
    return (
    <Fragment>
        <Button ref={btnRef} onClick={onOpen}>Comentarios</Button>
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody>
                    <Stack top={'25'}>
                        {commentsResponse.map((comment) => {
                            return (
                            <Card key={comment.id}>
                                <CardBody>
                                    {comment.content}<br />
                                    {comment.timestamp}
                                </CardBody>
                            </Card>
                            )
                        })}
                    </Stack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </Fragment>
    )
}