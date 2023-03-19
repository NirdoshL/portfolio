import { Stack, Avatar, Flex, useColorMode, useMediaQuery, Box, Text, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import React from 'react';
import NirdoshImage from '../assets/nir1.jpg';


export default function Header() {
    const { colorMode } = useColorMode();
    const isdark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)')
    const animation = {
        h1: {
            initial: {
                x: '-100%',
                opacity: 0
            },
            whileInView: {
                x: 0,
                opacity: 1
            }
        }
    };
    return (
        <React.Fragment>
            <Stack h={"100vh"}>
                <Avatar src={NirdoshImage}
                    position='absolute'
                    boxShadow={isdark ? "10px 20px 40px rgba(0, 255, 255, 1)" : "10px 20px 40px rgba(143,188,143, 1)"}
                    height={"250px"}
                    width={"250px"}
                    mt={"45"}
                    mr={isNotSmallerScreen ? "10" : "0"}
                    bgSize={"cover"}
                    bgPosition={"left"}
                    opacity="0.9" alignSelf={"flex-end"} />
                <Flex
                    direction={isNotSmallerScreen ? 'row' : 'column'}
                    p={isNotSmallerScreen ? "32" : "0"}
                    align='self-start'>
                    <Box mt={isNotSmallerScreen ? "0" : "16"} alignSelf={"flex-start"}>
                        <motion.h1 {...animation.h1}>
                            <Text color={isdark ? "cyan.100" : "cyan.400"}
                                fontSize={isNotSmallerScreen ? "5xl" : "3xl"} fontWeight={"semibold"}>Hi, I am</Text>
                            <Text fontSize={isNotSmallerScreen ? "5xl" : "3xl"} bgClip={"text"}
                                bgGradient={"linear(to-r,cyan.400,blue.500,purple.600)"}
                                fontWeight={"semibold"}>Nirdosh</Text>
                            <Text fontSize={isNotSmallerScreen ? "5xl" : "3xl"} bgClip={"text"}
                                bgGradient={"linear(to-r,cyan.400,blue.500,purple.600)"}
                                mb={isNotSmallerScreen ? "10" : "20"}
                                fontWeight={"semibold"}>Lamichhane</Text>
                        </motion.h1>
                        <Typewriter
                            options={
                                {
                                    strings: ["Node Js", "React Js", "Flutter"],
                                    autoStart: true,
                                    loop: true,
                                    cursor: "",
                                    wrapperClassName: "typewriterpara",
                                }} />
                        <Button ml='2' mt={isNotSmallerScreen ? "10" : "20"} colorScheme='green' borderWidth={'1px'} borderColor={"cyan.400"} onClick={() => window.open("mailto:nirdoshlamixane001@gmail.com")}>Hire Me</Button>
                    </Box>
                </Flex>
            </Stack>
        </React.Fragment>
    )
}