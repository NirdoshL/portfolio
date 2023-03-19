import { Link, Button, Flex, Image } from '@chakra-ui/react'
import React from 'react';
import error from "../assets/404.gif";


export default function Notuser() {
    return (
        <React.Fragment>
            <Link href="/">
                <Button>Go Back</Button>
            </Link>
            <Flex flexDirection={"row"} h={"90vh"} justifyContent={"center"}>
                <Image position={"fixed"} src={error} aria-label='error' objectFit={"cover"} />
            </Flex>
        </React.Fragment>
    )
}