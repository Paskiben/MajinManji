import { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter, Heading, Grid, GridItem, Button, FormControl, Input } from '@chakra-ui/react'
import { useAuth0 } from "@auth0/auth0-react";

export default function Place({pid, name, description, ups, downs}){
    const { user, isAuthenticated, isLoading } = useAuth0();
    return (<>
        <Card>
            <CardHeader>
                <Heading>{name}</Heading>
                {/* category icon*/}
            </CardHeader>
            <CardBody>
                <Grid templateColumns='repeat(4, 1fr)' templateRows='repeat(2, 1fr)'>
                    <GridItem colSpan={3} rowSpan={2} h='100%'>{description}</GridItem>
                    <GridItem>
                        {ups}
                        <Button>⬆</Button>
                    </GridItem>
                    <GridItem>
                        {downs}
                        <Button>⬇</Button>
                    </GridItem>
                </Grid>
            </CardBody>
            <CardFooter>
            {(isAuthenticated)?
                <form method='post' action='https://majinvaldi.000webhostapp.com/admin/comment/add'>
                    <Input type="hidden" name='user' value={user.sub}/>
                    <Input type="hidden" name='place' value={pid}/>
                    <Input name='comment' placeholder="Comentario..."></Input>
                    <button type="submit">💬</button>
                </form>:<p className="whisper">Para poder comentar haz log in!</p>}
            </CardFooter>
        </Card></>);
    }