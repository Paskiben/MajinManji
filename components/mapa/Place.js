import { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter, Heading, Grid, GridItem, Button, FormControl, Input } from '@chakra-ui/react'
import { useAuth0 } from "@auth0/auth0-react";

export default function Place({pid, name, description}){
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [votes, setVotes] = useState({"up":[], "down":[]})
    async function getVotes()
    {
        const response = await fetch('https://majinvaldi.000webhostapp.com/place?p='+pid);
        const res = await response.json();
        if(res.votes != null){
            setVotes(JSON.parse(res.votes));
        }
    }
    getVotes();
    return (<>
        <Card minW="40vw">
            <CardHeader>
                <Heading>{name}</Heading>
                {/* category icon*/}
            </CardHeader>
            <CardBody>
                <Grid templateColumns='repeat(4, 1fr)' templateRows='repeat(2, 1fr)'>
                    <GridItem colSpan={3} rowSpan={2} h='100%'>{description}</GridItem>
                    <GridItem>
                        {votes.up.length}
                        <Button>⬆</Button>
                    </GridItem>
                    <GridItem>
                        {votes.down.length}
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