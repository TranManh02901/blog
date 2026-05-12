import React from "react";
import {Button,Heading,Flex,useColorModeValue,Text, Img,Grid,Code,Highlight,chakra, shouldForwardProp} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {FaAngleDoubleLeft,FaAngleDoubleRight} from "react-icons/fa";
import { motion, isValidMotionProp } from "framer-motion";
import folder from "../media/pixelpoker/folder.jpg"
import readme from "../media/pixelpoker/readme.jpg"
import gamewindows from "../media/pixelpoker/gamewindows.jpg"
import stringref from "../media/pixelpoker/stringref.jpg"
import debugx from "../media/pixelpoker/debugx.jpg"
import checky from "../media/pixelpoker/checky.jpg"
import winner from "../media/pixelpoker/winner.jpg"
import GoToTop from "../components/gototop";

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
            PIXEL POKER
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
                base:"80%",
                sm:"80%",
                md:"70%",
                lg:"60%",
                xl:"60%"
            }}>
            <Code colorScheme="yellow" marginTop="10" marginBottom="20"
            maxWidth="90%"
            justifySelf="center"
            textAlign="center" as="i" >I said you wouldn't win that last one. I lied. The last challenge was basically a captcha. Now the real work begins. Shall
            we play another game? </Code> 
            <Text 
            color={useColorModeValue('blackAlpha.700','white')} fontSize="14">
            Usually, the first challenge of flareon will always be much easier than the rest. Or in another word, the actual fun just begins from now on.</Text> 
            <Text 
            color={useColorModeValue('blackAlpha.700','white')} fontSize="14" marginTop="10">
            <Highlight query="flare" styles={{color:"green.400"}}>
            Extract the zip file with password flare again, and we get an exe file with readme.txt.
            </Highlight>
            </Text>
            <Img justifySelf="center" src={folder} alt="folder" marginTop="10"/>
            <Img justifySelf="center" src={readme} alt="readme" marginTop="10"/>
            <Text 
            color={useColorModeValue('blackAlpha.700','white')} fontSize="14" marginTop="10">As it said, the rule is simple, now just try to run the exe file.</Text>     
            <Img justifySelf="center" src={gamewindows} alt="gamewindows" marginTop="10"/>
            <Text 
            color={useColorModeValue('blackAlpha.700','white')} fontSize="14" marginTop="10">
            <Highlight query="PixelPoker" styles={{color:"yellow.500"}}>The noisy area is the play zone, when we move a cursor inside, two values besides the game title "PixelPoker" also change as well. So I guess that the 2 values are x and y. In addition, we have 10 tries, if non of them are the correct pixel the game will close.</Highlight>
            </Text>
            <Text 
            color={useColorModeValue('blackAlpha.700','white')} fontSize="14" marginTop="10">But how do we find the correct pixel? Let's open dbg and see what's going on. Anyways the file is PE32 so we must use x32dbg instead of 64.</Text>   
            <Text 
            color={useColorModeValue('blackAlpha.700','white')} fontSize="14" marginTop="10">
            <Highlight query="FLARE-On" styles={{color:"red.500"}}>
            Go find all string references in the PE file. And we can see "PixelPoker (%d,%d) - #%d/%d" with the 2 first digits must be x and y values as we guessed. Also, there's "FLARE-On" looks suspicious, let's jump there.
            </Highlight>
            </Text>
            <Img justifySelf="center" src={stringref} alt="stringref" marginTop="10"/>
            <Text 
            color={useColorModeValue('blackAlpha.700','white')} fontSize="14" marginTop="10">I set 2 breakpoints at 401477 and 40148C which mov dwords "FLARE-ON" and "E-On" to eax. Now run the binary.</Text>
            <Img justifySelf="center" src={debugx} alt="debugx" marginTop="10"/>
            <Text 
            color={useColorModeValue('blackAlpha.700','white')} fontSize="14" marginTop="10">Click random pixel (6,4), and reach the first breakpoint, as we expected it mov "FLARE-On" to eax, but what happens next is interesting.</Text>
            <Text 
            color={useColorModeValue('blackAlpha.700','white')} fontSize="14" marginTop="10">
            <Highlight query="40147C" styles={{color:"blue.500"}}>
            40147C: mov esi, dword ptr ds:[413280]: Check the Hide FPU tab and we know that is 'l' character.    
            </Highlight>
            </Text>
            <Text 
            color={useColorModeValue('blackAlpha.700','white')} fontSize="14" marginTop="10">
            <Highlight query="401482" styles={{color:"blue.500"}}>401482: div esi: because the divisor is dword so quotient will be stored in eax and the remainder in edx</Highlight>
            </Text>
            <Text 
            color={useColorModeValue('blackAlpha.700','white')} fontSize="14" marginTop="10">
            <Highlight query="401484" styles={{color:"blue.500"}}>401484: cmp edi, edx: the edx is the remainder value of div esi which is 0x5F, and guess what is the value of edi? Yes, it's the x value of the pixel I just clicked (6). So the value of x must be 0x5F(95).</Highlight>
            </Text>
            <Text 
            color={useColorModeValue('blackAlpha.700','white')} fontSize="14" marginTop="10">Look a little bit down and we can see it does the same compare to check y as well. Because if the x check is not passed then we won't be able to reach the next compare, so run the binary again and click the correct x.</Text>
            <Img justifySelf="center" src={checky} alt="checky" marginTop="10"/>
            <Text 
            color={useColorModeValue('blackAlpha.700','white')} fontSize="14" marginTop="10">
            <Highlight query="401499" styles={{color:"blue.500"}}>
            401499:div ecx : div 0x281 and the remainder is 0x139(313)
            </Highlight>
            </Text>
            <Text 
            color={useColorModeValue('blackAlpha.700','white')} fontSize="14" marginTop="10">Run the binary one last time with x=95, and y=313 without a debugger and the flag appears.
            </Text>
            <Img justifySelf="center" src={winner} alt="winner" marginTop="10"/>
            <Code colorScheme="green" marginTop="10"
            maxWidth="60%"
            justifySelf="center"
            textAlign="center" >w1nN3r_W!NneR_cHick3n_d1nNer@flare-on.com</Code>
            <Flex justifyContent="space-between">
            <Link to="../works/flareon9/01">
            <Button marginTop="10"
            shadow="dark-lg"
            leftIcon={<FaAngleDoubleLeft/>}   
            marginBottom="10">
                <Text
                color={useColorModeValue('blackAlpha.700','white')} fontSize="14">Flaredle</Text>
            </Button>
            </Link>
            <Link to="../works/flareon9/03">
            <Button marginTop="10"
            shadow="dark-lg"
            leftIcon={<FaAngleDoubleRight/>}   
            marginBottom="10">
                <Text
                color={useColorModeValue('blackAlpha.700','white')} fontSize="14">Magic 8 Ball</Text>
            </Button>
            </Link>
            </Flex>
            </Grid>
            </Flex>
    )
}
export class PixelPoker extends React.Component{
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
            <GoToTop/>
            <Title/>
            <Content/>
            </ChakraBox>
        )
    }
}