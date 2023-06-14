import { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter, Heading, Grid, GridItem, Button } from '@chakra-ui/react'
import { Icon } from "leaflet";

export default function Place({name, description, ups, downs}){

return (<>
    <Card>
        <CardHeader>
            <Heading>{name}</Heading>
            {/* category icon*/}
        </CardHeader>
        <CardBody>
            <Grid templateColumns='repeat(3, 1fr)' templateRows='repeat(2, 1fr)'>
                <GridItem colSpan={2} rowSpan={2} h='100%'>{description}</GridItem>
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
    </Card></>);
}