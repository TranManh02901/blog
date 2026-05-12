import React from "react";
import {Button,Heading,Flex,useColorModeValue,Text, Img,Grid,Code,Highlight,chakra, shouldForwardProp} from "@chakra-ui/react";
import extract from "../media/flaredle/extract.jpg"
import { Link } from "react-router-dom";
import html from "../media/flaredle/html source.png"
import script from "../media/flaredle/script source.png"
import word from "../media/flaredle/word source.png"
import webserver from "../media/flaredle/webserver.jpg"
import flag from "../media/flaredle/flag.jpg"
import GoToTop from "../components/gototop";
import {FaAngleDoubleLeft,FaAngleDoubleRight} from "react-icons/fa";
import { motion, isValidMotionProp } from "framer-motion";
const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Title = () =>{
    return(
        <Flex
        justifyContent="center">
        <Heading
        fontFamily="Anurati"
        marginTop="20"
        fontSize="40"
        color={useColorModeValue('blackAlpha.700','white')} 
        >
            FLAREDLE
        </Heading>
        </Flex>
    )
}

const Content = () =>{
    return(
        <Flex
        justifyContent="center"
        marginTop="10">
            <Grid
            w={{
                base:"95%",
                sm:"80%",
                md:"70%",
                lg:"60%",
                xl:"60%"
            }}>
            <Code colorScheme="yellow" marginTop="10" marginBottom="20"
            maxWidth="90%"
            justifySelf="center"
            textAlign="center" as="i" >You probably won't win. Maybe you're like us and spent the year playing Wordle. We made our own version that is too
            hard to beat without cheating. </Code>
            <Text 
            color={useColorModeValue('blackAlpha.700','white')} fontSize="14">
            This's the very first challenge of FlareOn9. You could just do it on the site they provided or download and run it on your own web server. In this case, the server has been closed and the only way to do the challenge is downloading and run it locally.
            </Text>
            <Text 
            marginTop="10"
            color={useColorModeValue('blackAlpha.700','white')} fontSize="14">
            <Highlight query="flare" styles={{color: "green.400"}} >
            Extract the zip file with the password "flare", and we get:
            </Highlight>
            </Text>
            <Img justifySelf="center" src={extract} alt="extract" marginTop="10"/>
            <Text 
            marginTop="10"
            color={useColorModeValue('blackAlpha.700','white')} fontSize="14">
            So maybe it is just a normal HTML/CSS/js template, let's open and read all the files.
            </Text>
            <Img justifySelf="center" src={html} alt="html" marginTop="10"/>
            <Text 
            marginTop="10"
            color={useColorModeValue('blackAlpha.700','white')} fontSize="14">
            The HTML only displays a few buttons with alphabet characters. Go bit further down, we can see the line {' '}
            <Code>{`<script src="script.js" type="module"></script>`}</Code>
            </Text>
            <Text 
            marginTop="10"
            color={useColorModeValue('blackAlpha.700','white')} fontSize="14">
            <Highlight query="script.js" styles={{color:"yellow.400"}} >
            Guess the CSS is not interesting, so just go straight to script.js.
            </Highlight>
            </Text>
            <Img justifySelf="center" src={script} alt="script" marginTop="10"/>
            <Text 
            marginTop="10"
            color={useColorModeValue('blackAlpha.700','white')} fontSize="14">
            <Highlight query="words.js" styles={{color:"yellow.400"}} >
            By reading the source, we know that there're 6 times to guess the correct word that be imported from words.js, the correct word length should be 21, and CORRECTGUESS is set to 57 which means the rightGuessString will be WORDS[57]
            </Highlight>
            </Text>
            <Img justifySelf="center" src={word} alt="word" marginTop="10"/>
            <Text 
            marginTop="10"
            color={useColorModeValue('blackAlpha.700','white')} fontSize="14">
            <Highlight query="flareonisallaboutcats" styles={{color:"green.400"}} >
            The words.js is a huge array with random strings. Go find WORDS[57] and it is 'flareonisallaboutcats'
            </Highlight>
            </Text>   
            <Text 
            marginTop="10"
            color={useColorModeValue('blackAlpha.700','white')} fontSize="14">
            Now just run the local web server and try to type it in the board. I use http-server which is an npm package that can be installed with {<Code  >npm install http-server</Code>}. Go to the folder and run the command, the server will be set up on localhost with a specified port.
            </Text>
            <Text 
            marginTop="10"
            color={useColorModeValue('blackAlpha.700','white')} fontSize="14">
            The site looks like this.
            </Text>
            <Img justifySelf="center" src={webserver} alt="webserver" marginTop="10"/>
            <Text 
            marginTop="10"
            color={useColorModeValue('blackAlpha.700','white')} fontSize="14">
            Type in 'flareonisallaboutcats' and we get:
            </Text>
            <Img justifySelf="center" src={flag} alt="flag" marginTop="10"/>
            <Text 
            marginTop="10"
            color={useColorModeValue('blackAlpha.700','white')} fontSize="14">
            ...On the screen top-right and it's our first flag.
            </Text>
            <Code colorScheme="green" marginTop="10"
            maxWidth="60%"
            justifySelf="center"
            textAlign="center" >flareonisallaboutcats@flare-on.com</Code>
            <Flex justifyContent="space-between">
            <Link to="../works/flareon9/readme">
            <Button marginTop="10"
            shadow="dark-lg"
            leftIcon={<FaAngleDoubleLeft/>}   
            marginBottom="10">
                <Text
                color={useColorModeValue('blackAlpha.700','white')} fontSize="14">About FlareOn</Text>
            </Button>
            </Link>
            <Link to="../works/flareon9/02">
            <Button marginTop="10"
            shadow="dark-lg"
            leftIcon={<FaAngleDoubleRight/>}   
            marginBottom="10">
                <Text
                color={useColorModeValue('blackAlpha.700','white')} fontSize="14">Pixel Poker</Text>
            </Button>
            </Link>
            </Flex>
            </Grid>
        </Flex>
    )
}

export class Flaredle extends React.Component{
    render(){
        return (
            <ChakraBox
            transition={{
               duration: 1 
            }}
            initial={{ 
                marginTop: 20,
                opacity: 0 }}
            animate={{
                marginTop: 0, 
                opacity: 1 }}
            exit={{
                marginTop: 20}}>
            <GoToTop/>
            <Title/>
            <Content/>
            </ChakraBox>
        )
    }
}