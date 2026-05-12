import React from "react";
import {Button,Heading,Flex,useColorModeValue,Text, Img,Grid,Code,chakra, shouldForwardProp} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {FaAngleDoubleLeft,FaAngleDoubleRight} from "react-icons/fa";
import GoToTop from "../components/gototop";
import { motion, isValidMotionProp } from "framer-motion";
import IRchatlog from "../media/alamode/IRchatlog.png"
import summary from "../media/alamode/summary.png"
import GetFlag from "../media/alamode/GetFlag.png"
import textsection from "../media/alamode/textsection.png"
import loadoption from "../media/alamode/loadoption.png"
import loadasnet from "../media/alamode/loadasnet.png"
import textentry from "../media/alamode/textentry.png"
import cor20header from "../media/alamode/cor20header.png"
import flags from "../media/alamode/flags.png"
import cor20func from "../media/alamode/cor20func.png"
import callmain from "../media/alamode/100016e4.png"
import main from "../media/alamode/main.png"
import decryptfuncdbg from "../media/alamode/decryptfuncdbg.png"
import decryptfuncida from "../media/alamode/decryptfuncida.png"
import decryptflag from "../media/alamode/decryptflag.png"
import KSA from "../media/alamode/KSA.png"
import PRGA from "../media/alamode/PRGA.png"
import inputkey from "../media/alamode/inputkey.png"
import keystreamgen from "../media/alamode/keystreamgen.png"
import RC4 from "../media/alamode/RC4.png"
import javascript from "../media/alamode/javascript.png"
import python from "../media/alamode/python.png"
import output from "../media/alamode/output.png"
import decryptflag2 from "../media/alamode/decryptflag2.png"
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
            ALAMODE
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
            textAlign="center" as="i" >FLARE FACT #824: Disregard flare fact #823 if you are a .NET Reverser too.
            We will now reward your fantastic effort with a small binary challenge. You've earned it kid!
            </Code> 
            <Text color={useColorModeValue('blackAlpha.700','white')} fontSize="14">Solving this challenge with very poor experience & knowledge of .NET is never easy. But in the end, I solved it and learned a lot from it. This write-up's quality may not be good as the one made by other people who know better at .NET as well as mixed-mode assembly. But I did my best, and hopefully, you enjoy reading it.</Text>
            <Text color={useColorModeValue('blackAlpha.700','white')} marginTop="10" fontSize="14">Extract the file, we get a dll file and a text file.</Text>
            <Img justifySelf="center" src={IRchatlog} alt="IRchatlog" marginTop="10"/>
            <Text color={useColorModeValue('blackAlpha.700','white')} marginTop="10" fontSize="14">So maybe there's another file that can work with this dll and we don't have any chance to get this. Analyze the dll file with CFF and we know that it's a PE 32 .NET Assembly file. Good, now we can just use dnSpy to get more info.</Text>
            <Text color={useColorModeValue('blackAlpha.700','white')} marginTop="10" fontSize="14">The file name is "HowDoesThisWork.dll", but when we throw it to DnSpy then it becomes "FlareOnx86.dll". The summary also let us know this file contains some unmanaged code.</Text>
            <Img justifySelf="center" src={summary} alt="summary" marginTop="10"/>
            <Text color={useColorModeValue('blackAlpha.700','white')} marginTop="10" fontSize="14">DnSpy found a "GetFlag" function.</Text>
            <Img justifySelf="center" src={GetFlag} alt="GetFlag" marginTop="10"/>
            <Text color={useColorModeValue('blackAlpha.700','white')} marginTop="10" fontSize="14">The text section shows that VirtualAddress is 0x1000, which will be 0x10001000 in IDA, but when we load the dll file with the first option (as a .NET file) then the file just looks empty.</Text>
            <Img justifySelf="center" src={textsection} alt="textsection" marginTop="10"/>
            <Img justifySelf="center" src={loadoption} alt="loadoption" marginTop="10"/>
            <Img justifySelf="center" src={loadasnet} alt="loadasnet" marginTop="10"/>
            <Text color={useColorModeValue('blackAlpha.700','white')} marginTop="10" fontSize="14">Load the file again with the second option and now we get more functions, the image below is the function at 0x10001000</Text>
            <Img justifySelf="center" src={textentry} alt="textentry" marginTop="10"/>
            <Img justifySelf="center" src={cor20header} alt="cor20header" marginTop="10"/>
            <Text color={useColorModeValue('blackAlpha.700','white')} marginTop="10" fontSize="14">The Flags is 0x10 and NativeEntryPoint is checked to mean this sample contains C++ code (the unmanaged code has been found by dnSpy summary and we're working with it).</Text>
            <Img justifySelf="center" src={flags} alt="flags" marginTop="10"/>
            <Text color={useColorModeValue('blackAlpha.700','white')} marginTop="10" fontSize="14">The Cor20 header entry point is 0x181A, trace to that address in IDA and it looks like a function but not being recognized as a function by IDA. In the image below, I already marked it as a function to be easier to follow.</Text>
            <Img justifySelf="center" src={cor20func} alt="cor20func" marginTop="10"/>
            <Text color={useColorModeValue('blackAlpha.700','white')} marginTop="10" fontSize="14">It calls the sub_100016E4, traces to that function and we know it makes a call with another sub_10001163 (I'll call this function "main" from now on).</Text>
            <Img justifySelf="center" src={callmain} alt="callmain" marginTop="10"/>
            <Img justifySelf="center" src={main} alt="main" marginTop="10"/>
            <Text color={useColorModeValue('blackAlpha.700','white')} marginTop="10" fontSize="14">The first function sub_100012F1 uses sub_100014AE to decrypt the given string by xor with 0x17, then use sub_1000125C to convert the string to a named function in kernel32.dll. Ex: CreateThread to kernel32.CreateThread.</Text>
            <Img justifySelf="center" src={decryptfuncdbg} alt="decryptfuncdbg" marginTop="10"/>
            <Img justifySelf="center" src={decryptfuncida} alt="decryptfuncida" marginTop="10"/>
            <Text color={useColorModeValue('blackAlpha.700','white')} marginTop="10" fontSize="14">After return back from sub_100012F1 to the main function, the dword_10015A30 has been decrypted to CreateThread with lpStartAddress is 10001094, and dwCreationFlags is 0 make the thread runs immediately after creation. Anyways, if you're debugging this sample with x32dbg will realize that it doesn't work properly and keep crashing. So from now I'll use IDA as the main and only checking dbg when needed. Go to thread entry at 10001094, after calling named pipe functions, it then calls another function at sub_10001000, by reading the code I know this's a strings decrypt function using the RC4 Algorithm.</Text>
            <Img justifySelf="center" src={decryptflag} alt="decryptflag" marginTop="10"/>
            <Img justifySelf="center" src={decryptflag2} alt="decryptflag2" marginTop="10"/>
            <Text color={useColorModeValue('blackAlpha.700','white')} marginTop="10" fontSize="14">First of all, let me explain quickly what is RC4 and how it works:</Text>
            <Code colorScheme="red" marginTop="10"
            maxWidth="90%"
            justifySelf="center"
            textAlign="center" as="i">In cryptography, RC4 (Rivest Cipher 4, also known as ARC4 or ARCFOUR), meaning Alleged RC4,  is a stream cipher. While it is remarkable for its simplicity and speed in software, multiple vulnerabilities have been discovered in RC4, rendering it insecure. - Wikipedia</Code>
            <Text color={useColorModeValue('blackAlpha.700','white')} marginTop="10" fontSize="14">The RC4 Algorithm can be divided into 2 main parts:</Text>
            <Text as="b" color={useColorModeValue('blackAlpha.700','white')} marginTop="10" fontSize="14">1. Key-scheduling Algorithm (KSA):</Text>
            <Img justifySelf="center" src={KSA} alt="KSA" marginTop="10"/>
            <Text as="b" color={useColorModeValue('blackAlpha.700','white')} marginTop="10" fontSize="14">2. Pseudo-random generation algorithm (PRGA):</Text>
            <Img justifySelf="center" src={PRGA} alt="PRGA" marginTop="10"/>
            <Text color={useColorModeValue('blackAlpha.700','white')} marginTop="10" fontSize="14">After these 2 steps, we'll get a key stream generated based on the input key. XOR the key stream with plain text will give us cipher text and vice versa, cipher text will give us back the plain text.</Text>
            <Text color={useColorModeValue('blackAlpha.700','white')} marginTop="10" fontSize="14">The first function call (I named as keystream_gen) takes 3 parameters: S array, input key, and key length.</Text>
            <Text color={useColorModeValue('blackAlpha.700','white')} marginTop="10" fontSize="14">Jump to the input key on the data section, we can see that IDA recognized it as a function but the actual input key is just the opcode array [0x55,0x8b,0xec,0x83,0xec,0x20,0xeb,0xfe]</Text>
            <Img justifySelf="center" src={inputkey} alt="inputkey" marginTop="10"/>
            <Text color={useColorModeValue('blackAlpha.700','white')} marginTop="10" fontSize="14">IDA didn't recognize the key as a char array so the decompiler didn't work correctly, but we still can see it pretty similar to the RC4 Algorithm above:</Text>
            <Img justifySelf="center" src={keystreamgen} alt="keystreamgen" marginTop="10"/>
            <Text color={useColorModeValue('blackAlpha.700','white')} marginTop="10" fontSize="14">Then later, two functions I named RC4 will be called and do the rest of decrypting the encoded string. It also takes 3 parameters: the S array, the encrypted string, and the string length.</Text>
            <Img justifySelf="center" src={RC4} alt="RC4" marginTop="10"/>
            <Text color={useColorModeValue('blackAlpha.700','white')} marginTop="10" fontSize="14">This function is called 2 times to decrypt encrypted strings. Now with that we can just write a program to decrypt these 2 strings without running the binary. But remember the counter variable used in decrypting function is global, after the first RC4 function has been called, it won't be reset to 0 so make sure to change the index properly, or just split 2 strings into 1 as I do.</Text>
            <Text color={useColorModeValue('blackAlpha.700','white')} marginTop="10" fontSize="14">The 2 images below are solutions written in JavaScript and Python. The first 9 characters in the password are the first encrypted strings, and the rest 31 characters are the second.</Text>
            <Img justifySelf="center" src={javascript} alt="javascript" marginTop="10"/>
            <Text color={useColorModeValue('blackAlpha.700','white')} marginTop="10" fontSize="14">I wrote the solution in python after the javascript one. As you can see it shorter and make me can be able to fully understand the code in binary which has been wroten in an even shorter way.</Text>
            <Img justifySelf="center" src={python} alt="python" marginTop="10"/>
            <Text color={useColorModeValue('blackAlpha.700','white')} marginTop="10" fontSize="14">And here's the output: </Text>
            <Img justifySelf="center" src={output} alt="output" marginTop="10"/>
            <Code colorScheme="green" marginTop="10"
            maxWidth="60%"
            justifySelf="center"
            textAlign="center" >M1x3d_M0de_4_l1f3@flare-on.com</Code>
            <Flex justifyContent="space-between">
            <Link to="../works/flareon9/05">
            <Button marginTop="10"
            shadow="dark-lg"
            leftIcon={<FaAngleDoubleLeft/>}   
            marginBottom="10">
                <Text
                color={useColorModeValue('blackAlpha.700','white')} fontSize="14">T8</Text>
            </Button>
            </Link>
            <Link to="../works/flareon9/07">
            <Button marginTop="10"
            shadow="dark-lg"
            leftIcon={<FaAngleDoubleRight/>}   
            marginBottom="10">
                <Text
                color={useColorModeValue('blackAlpha.700','white')} fontSize="14">Anode</Text>
            </Button>
            </Link>
            </Flex>
            </Grid>
        </Flex>
    )
}

export class Alamode extends React.Component {
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
                    <title>Flare-On 9 - à la mode</title>
                    <meta name="author" content="0ji54n"/>
                    <meta name="copyright" content="0ji54n"/>
                    <meta name="format-detection" content="telephone=no"/>
                    <meta name="theme-color" content="#0d0d0d"/>
                    <meta name="description" content="Solving this challenge with very poor experience & knowledge of .NET is never easy. But in the end, I solved it and learned a lot from it. This write-up's quality may not be good as the one made by other people who know better at .NET as well as mixed-mode assembly. But I did my best, and hopefully, you enjoy reading it."/>
                    <meta property="og:type" content="article"/>
                    <meta property="og:title" content="Flare-On 9 - à la mode"/>
                    <meta property="og:url" content="https://0ji54n.space/works/flareon9/06"/>
                    <meta property="og:site_name" content="0ji54n"/>
                    <meta property="og:description" content="Solving this challenge with very poor experience & knowledge of .NET is never easy. But in the end, I solved it and learned a lot from it. This write-up's quality may not be good as the one made by other people who know better at .NET as well as mixed-mode assembly. But I did my best, and hopefully, you enjoy reading it."/>
                    <meta property="og:locale" content="en_US"/>
                    <meta property="og:image" content={flareon}/>
                    <meta property="article:author" content="0ji54n"/>
                    <meta property="article:tag" content="reverse engineering"/>
                    <meta name="twitter:card" content="summary"/>
                    <meta name="twitter:image" content={flareon}/>
                    <link rel="canonical" href="https://0ji54n.space/works/flareon9/06"/>
                    </Helmet>
                </div>
                <GoToTop/>
                <Title/>
                <Content/>
            </ChakraBox>
        )
    };
};