import React from 'react';
import {Button,Heading,Flex,useColorModeValue,Text, Img,Grid,Code,Highlight,chakra, shouldForwardProp} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {FaAngleDoubleLeft,FaAngleDoubleRight} from "react-icons/fa";
import GoToTop from "../components/gototop";
import folder from "../media/magic8ball/folder.jpg"
import gamewindows from "../media/magic8ball/gamewindows.jpg"
import pressarrow from "../media/magic8ball/pressarrowkeytoshaketheball.jpg"
import UDLR from "../media/magic8ball/UDLR.jpg"
import winner from "../media/magic8ball/winner.jpg"
import { motion, isValidMotionProp } from "framer-motion";
import { Helmet } from "react-helmet";
import flareon from "../media/flareon9-emblem.png";


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
        fontSize="30"
        color={useColorModeValue('blackAlpha.700','white')}
        >
            MAGIC EIGHT BALL
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
            textAlign="center" as="i" >You got a question? Ask the 8 ball! 
            </Code> 
            <Text color={useColorModeValue('blackAlpha.700','white')} fontSize="14"><Highlight query="flare" styles={{color:"green.500"}}>Extract the zip file with the password "flare" again. And this time we get a folder, an exe file, and a bunch of dlls. </Highlight></Text>
            <Img justifySelf="center" src={folder} alt="folder" marginTop="10"/>
            <Text  marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14">libjpeg, libpng, libtiff, and libwepp dll files are just libraries for handling these image data formats. Zlib and SDL stand for Simple DirectMedia Layer, which is a library support for game/software development. The assets folder contain picture and fonts that will be used in the exe file. So the only thing we need to analyze is the exe file. Unlike last time, this game allows us to press the arrow button to shake the ball, type the question from the keyboard, and then the random answer will appear in the blue triangle inside the ball.</Text>
            <Img justifySelf="center" src={gamewindows} alt="gamewindows" marginTop="10"/>
            <Text  marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14"><Highlight query="Press arrow keys to shake the ball" styles={{color:"blue.500"}}>Let's not waste any more time and go debugging. Try to not overthink because this one should still be easy. Go to string reference windows again in x32dbg and set some breakpoints. In this case, I set one at the string "Press arrow keys to shake the ball".</Highlight></Text>
            <Img justifySelf="center" src={pressarrow} alt="pressarrow" marginTop="10"/>
            <Text  marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14"><Highlight query="gimme flag pls?" styles={{color:"red.500"}}>Look a little bit upper, we see the mov string "gimme flag pls?" to [edi+5C] which looks interesting. That string also is used later with lea eax, [edi+5C] so I decided to jump there.</Highlight></Text>
            <Img justifySelf="center" src={UDLR} alt="UDLR" marginTop="10"/>
            <Text  marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14"><Highlight query={["U, D, L, R","LLURULDUL","gimme flag pls?"]} styles={{color:"red.500"}}>The binary call a strncmp function take that string and ecx as arguments. But hold on, there's a huge cmp with "U, D, L, R" characters before that. Remember when we can press the arrow key to shake the ball in the binary, and these characters just remind me of "Up, Down, Left, Right". Run the binary until reaching the first compare and we know that our arrow input will be stored at esi, and later is ecx. Then it takes each character in there from left to right to compare with "LLURULDUL", pressing the correct order will take us to the last compare with the string "gimme flag pls?".</Highlight></Text>
            <Text  marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14">Run the binary without debugger, press the correct arrow keys, and type the correct input.</Text>
            <Img justifySelf="center" src={winner} alt="winner" marginTop="10"/>
            <Text  marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14">And we get the flag.</Text>
            <Code colorScheme="green" marginTop="10"
            maxWidth="60%"
            justifySelf="center"
            textAlign="center" >U_cRackeD_th1$_maG1cBaLL_!!_@flare-on.com</Code>
            <Flex justifyContent="space-between">
            <Link to="../works/flareon9/02">
            <Button marginTop="10"
            shadow="dark-lg"
            leftIcon={<FaAngleDoubleLeft/>}   
            marginBottom="10">
                <Text
                color={useColorModeValue('blackAlpha.700','white')} fontSize="14">Pixel Poker</Text>
            </Button>
            </Link>
            <Link to="../works/flareon9/04">
            <Button marginTop="10"
            shadow="dark-lg"
            leftIcon={<FaAngleDoubleRight/>}   
            marginBottom="10">
                <Text
                color={useColorModeValue('blackAlpha.700','white')} fontSize="14">Darn mice</Text>
            </Button>
            </Link>
            </Flex>
            </Grid>
            </Flex>
    )
}

export class Magic8Ball extends React.Component {
    render(){
        return(
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
                 marginTop: 20}}
             >
                <div>
                    <Helmet>
                    <meta charset="UTF-8"/>
                    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0,viewport-fit=cover"/>
                    <title>Flare-On 9 - Magic 8 Ball</title>
                    <meta name="author" content="0ji54n"/>
                    <meta name="copyright" content="0ji54n"/>
                    <meta name="format-detection" content="telephone=no"/>
                    <meta name="theme-color" content="#0d0d0d"/>
                    <meta name="description" content="Extract the zip file with the password flare again. And this time we get a folder, an exe file, and a bunch of dlls."/>
                    <meta property="og:type" content="article"/>
                    <meta property="og:title" content="Flare-On 9 - Magic 8 Ball"/>
                    <meta property="og:url" content="https://0ji54n.space/works/flareon9/03"/>
                    <meta property="og:site_name" content="0ji54n"/>
                    <meta property="og:description" content="Extract the zip file with the password flare again. And this time we get a folder, an exe file, and a bunch of dlls."/>
                    <meta property="og:locale" content="en_US"/>
                    <meta property="og:image" content={flareon}/>
                    <meta property="article:author" content="0ji54n"/>
                    <meta property="article:tag" content="reverse engineering"/>
                    <meta name="twitter:card" content="summary"/>
                    <meta name="twitter:image" content={flareon}/>
                    <link rel="canonical" href="https://0ji54n.space/works/flareon9/03"/>
                    </Helmet>
                </div>
                <GoToTop/>
                <Title/>
                <Content/>
            </ChakraBox>
        )
    }
}