import React from "react";
import {Button,Heading,Flex,useColorModeValue,Text, Img,Grid,Code,Highlight,chakra, shouldForwardProp} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {FaAngleDoubleLeft,FaAngleDoubleRight} from "react-icons/fa";
import GoToTop from "../components/gototop";
import { motion, isValidMotionProp } from "framer-motion";
import folder from "../media/darnmice/folder.jpg"
import HxD from "../media/darnmice/HxD.jpg"
import IDA from "../media/darnmice/IDA.jpg"
import Input from "../media/darnmice/input.jpg"
import Firstbp from "../media/darnmice/Firstbp.jpg"
import Firsthalf from "../media/darnmice/Firsthalf.jpg"
import Secondhalf from "../media/darnmice/Secondhalf.jpg"
import ebptable from "../media/darnmice/ebptable.jpg"
import program from "../media/darnmice/program.png"
import output from "../media/darnmice/output.jpg"
import winner from "../media/darnmice/winner.jpg"
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
        fontSize="40"
        color={useColorModeValue('blackAlpha.700','white')}
        >
            DARN MICE
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
            textAlign="center" as="i" >"If it crashes its user error."
            </Code> 
            <Text marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14"><Highlight query="flare" styles={{color:"green.500"}}>Again, extract the file with the "flare" password.</Highlight></Text>
            <Img justifySelf="center" src={folder} alt="folder" marginTop="10"/>
            <Text marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14">This time we only get an exe file. Double-click to run it, a windows pop up and closes right away. Open HxD to find interesting strings, and there are.</Text>
            <Img justifySelf="center" src={HxD} alt="HxD" marginTop="10"/>
            <Text marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14">Next, open IDA to static analysis before throwing it into the debugger. We can see the cmp [ebp+argc], 2, if ZF is 0 then it'll just jump to loc_4011F0 and end the program.</Text>
            <Img justifySelf="center" src={IDA} alt="IDA" marginTop="10"/>
            <Text marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14">Argc already contains 1 element is the program itself, so it asks us to parse one more argument. Open PowerShell, run the program with only one argument and it does not crash anymore.</Text>
            <Img justifySelf="center" src={Input} alt="input" marginTop="10"/>
            <Code colorScheme="blue" marginTop="10"
            maxWidth="90%"
            justifySelf="center"
            textAlign="center" as="i" >"On your plate, you see four olives.
            You leave the room, and a mouse EATS one!"</Code>
            <Text marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14">But then what? It still just closed and nothing happened. Maybe now is the time debugger comes to play. Run the program inside dbg with argument by typing in the command <Code>{`InitDebug <Path_to_file>,<argument>`}</Code>. I set a breakpoint where the first string  "On your plate, you see four olives." be pushed onto the stack.</Text>
            <Img justifySelf="center" src={Firstbp} alt="Firstbp" marginTop="10"/>
            <Text marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14">Keep pressing F7 and F8 and the program crash when it calls dword ptr ss:[ebp-34]. Let's be a little slowdown and see what exactly happens from the first breakpoint.</Text>
            <Img justifySelf="center" src={Firsthalf} alt="FHalf" marginTop="10"/>
            <Img justifySelf="center" src={Secondhalf} alt="SHalf" marginTop="10"/>
            <Text marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14">1.mov eax, dword ptr ss:[ebp+8]: move the argument string from [ebp+8] to eax, push eax onto the stack and call _strlen.</Text>
            <Text marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14">2.mov dword ptr ss:[ebp-30], eax: move the result of _strlen is the length of argument string be stored in eax to [ebp-30] and then compare with 0 to check the string is empty or not. If the string is empty, it then jumps to #####0DD which pushes the string "No, never mind", prints it out to the screen, jumps to the end, calls __security_check_cookie function, and returns.</Text>
            <Text marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14">3. cmp dword ptr ss:[ebp-30], 0x23: After checking the length is not zero, now it checks if the length exceeds 35 characters or not. If it is, again the function print out the "No, never mind" string and jump to the end of the function.</Text>
            <Text marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14"><Highlight query="abc" styles={{color:"red.500"}}>In this case, the parsed argument is "abc", the length is not 0 and doesn't exceed 35 as well, then it'll jump to function print out the next string "You leave the room, and a mouse EATS one!"</Highlight></Text>
            <Text marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14">4.mov dword ptr ss:[ebp-2C], ecx; cmp dword ptr ss:[ebp-2C], 24: We're gonna jump to a for loop 35 times, and [ebp-2C] will work as a counter variable.</Text>
            <Text marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14">5.mov edx, dword ptr ss:[ebp-2C]: move the counter value to edx; movzx eax, byte ptr ss:[ebp+edx-28]: at the first loop counter value will be 0, so in this case [ebp+edx-28] = [ebp-28], the next loop will be [ebp-27] and so on.</Text>
            <Text marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14">Scroll up to the beginning of this function and we can see these value has been defined.</Text>
            <Img justifySelf="center" src={ebptable} alt="ebptable" marginTop="10"/>
            <Text marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14"><Highlight query="mov dword ptr ss:[ebp-34], eax" styles={{color:"blue.500"}}>6. Next, the VirtualAlloc will be called and return the base address of the memory chunk that we can access, this base address value is moved to [ebp-34] with mov dword ptr ss:[ebp-34], eax.</Highlight></Text>
            <Text marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14">7.mov eax, dword ptr ss:[ebp-2C]; movzx ecx, byte ptr ss:[ebp+eax-28]: This one work the same as movzx eax, byte ptr ss:[ebp+edx-28] at step 5.</Text>
            <Text marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14">8.mov edx, dword ptr ss:[ebp+8]; add edx, dword ptr ss:[ebp-2C]; movsx eax, byte ptr ds:[edx]: store a single character from parsed argument to eax and [ebp-2C] work like an index, ex: [ebp-2C] = 0 then the character is the argument[0].</Text>
            <Text marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14">9. add ecx, eax: add the character that has been taken from step 8 with the value from step 7.</Text>
            <Text marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14">10.mov edx, dword ptr ss:[ebp-34]; mov byte ptr ds:[edx], cl: First, make edx and [ebp-34] point to the same address has been created by Virtual Alloc, then move the value of cl (lower 8 bits version of ecx) to [edx], which means to the value of the base address. Ecx value is the result of adding ecx and eax at the previous step. The old ecx value before the add is fixed (defined array), but eax is the character in our input. In another word, the program crash because we type the input containing the character which adding to ecx will become an invalid opcode, and later will be the value of the base address. And the solution is to find an input containing a character array which adding to the ecx array will return the valid opcode, making us can escape safely from the function [ebp-34].</Text>
            <Text marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14"><Highlight query="C3" styles={{color:"red.500"}}>We don't want to do anything in that function, we only want to escape from it and continue executing the binary, so the best choice when choosing a valid opcode is C3(return). I wrote a simple program that returns a result from</Highlight><Text>{`C3 subtracting with <defined array>.`}</Text></Text>
            <Img justifySelf="center" src={program} alt="program" marginTop="10"/>
            <Text marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14">The output is:</Text>
            <Img justifySelf="center" src={output} alt="output" marginTop="10"/>
            <Text marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14"><Highlight query="see three, C3 C3 C3 C3 C3 C3 C3! XD" styles={{color:"yellow.500"}}>Conver them to ASCII, we get the correct input is "see three, C3 C3 C3 C3 C3 C3 C3! XD". Run the program without a debugger with this string as an argument</Highlight></Text>
            <Img justifySelf="center" src={winner} alt="winner" marginTop="10"/>
            <Code colorScheme="green" marginTop="10"
            maxWidth="60%"
            justifySelf="center"
            textAlign="center" >i_w0uld_l1k3_to_RETurn_this_joke@flare-on.com</Code>
            <Flex justifyContent="space-between">
            <Link to="../works/flareon9/03">
            <Button marginTop="10"
            shadow="dark-lg"
            leftIcon={<FaAngleDoubleLeft/>}   
            marginBottom="10">
                <Text
                color={useColorModeValue('blackAlpha.700','white')} fontSize="14">Magic 8 Ball</Text>
            </Button>
            </Link>
            <Link to="../works/flareon9/05">
            <Button marginTop="10"
            shadow="dark-lg"
            leftIcon={<FaAngleDoubleRight/>}   
            marginBottom="10">
                <Text
                color={useColorModeValue('blackAlpha.700','white')} fontSize="14">T8</Text>
            </Button>
            </Link>
            </Flex>
            </Grid>
            </Flex>
    )
}
export class DarnMice extends React.Component{
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
                    <title>Flare-On 9 - darn_mice</title>
                    <meta name="author" content="0ji54n"/>
                    <meta name="copyright" content="0ji54n"/>
                    <meta name="format-detection" content="telephone=no"/>
                    <meta name="theme-color" content="#0d0d0d"/>
                    <meta name="description" content="Again, extract the file with the flare password."/>
                    <meta property="og:type" content="article"/>
                    <meta property="og:title" content="Flare-On 9 - darn_mice"/>
                    <meta property="og:url" content="https://0ji54n.space/works/flareon9/04"/>
                    <meta property="og:site_name" content="0ji54n"/>
                    <meta property="og:description" content="Again, extract the file with the flare password."/>
                    <meta property="og:locale" content="en_US"/>
                    <meta property="og:image" content={flareon}/>
                    <meta property="article:author" content="0ji54n"/>
                    <meta property="article:tag" content="reverse engineering"/>
                    <meta name="twitter:card" content="summary"/>
                    <meta name="twitter:image" content={flareon}/>
                    <link rel="canonical" href="https://0ji54n.space/works/flareon9/04"/>
                    </Helmet>
                </div>
                <GoToTop/>
                <Title/>
                <Content/>
            </ChakraBox>
        )
    }
}