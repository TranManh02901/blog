import React from "react";
import {Button,Heading,Flex,useColorModeValue,Text, Img,Grid,Code,Highlight,chakra, shouldForwardProp} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {FaAngleDoubleLeft,FaAngleDoubleRight} from "react-icons/fa";
import GoToTop from "../components/gototop";
import { motion, isValidMotionProp } from "framer-motion";
import pcapfilepicture from "../media/t8/pcapfilepicture.jpg"
import firsttcpstream from "../media/t8/firsttcpstream.jpg"
import exealert from "../media/t8/exealert.jpg"
import runexe from "../media/t8/runexe.jpg"
import firstresponse from "../media/t8/firstresponse.jpg"
import sleep from "../media/t8/sleep.jpg"
import hashgenerate from "../media/t8/hashgenerate.jpg"
import get5number from "../media/t8/get5number.jpg"
import firstdebugresponse from "../media/t8/firstdebugresponse.jpg"
import correctrequestdata from "../media/t8/correctrequestdata.jpg"
import program from "../media/t8/program.png"
import winner from "../media/t8/winner.jpg"
import { Helmet } from "react-helmet";
import flareon from "../media/flareon9-emblem.png";


const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

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
            textAlign="center" as="i" >FLARE FACT #823: Studies show that C++ Reversers have fewer friends on average than normal people do. That's
            why you're here, reversing this, instead of with them, because they don't exist.
            </Code> 
            <Text color={useColorModeValue('blackAlpha.700','white')} fontSize="14">Extract the zip file, this time we get an exe file and a pcap file. The pcap file contains network traffic info so the best choice when we choose a program to open it is Wireshark for now.</Text> 
            <Img justifySelf="center" src={pcapfilepicture} alt="pcapfilepicture" marginTop="10"/>
            <Text  marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14">We don't need to care about SYN, ACK, and PSH, the interesting part is the HTTP POST method and the response from the server. Type "http" in the filter bar and there are only 4 lines left. Follow the HTTP stream of the first POST and the result is the picture below.</Text>   
            <Img justifySelf="center" src={firsttcpstream} alt="firsttcpstream" marginTop="10"/>
            <Text  marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14"><Highlight query="flare-on.com" styles={{color:"red.500"}}>It sends a random base64 encoded string to host "flare-on.com" and gets the response as another encoded string. Maybe this is what the exe file will do? Open another Wireshark window, choose wi-fi, and type "HTTP" in the filter box again. As long as we don't make any requests it will be empty. Now try to run the exe file. </Highlight></Text> 
            <Img justifySelf="center" src={exealert} alt="exealert" marginTop="10"/>
            <Img justifySelf="center" src={runexe} alt="runexe" marginTop="10"/>
            <Text  marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14"><Highlight query="flare-on.com" styles={{color:"red.500"}}>The binary sends another random string to flare-on.com as we thought. But the response looks different.</Highlight></Text>
            <Img justifySelf="center" src={firstresponse} alt="firstrespone" marginTop="10"/>
            <Text  marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14">Now open x32dbg again, and keep going slowly.</Text>
            <Img justifySelf="center" src={sleep} alt="sleep" marginTop="10"/>
            <Text  marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14">It compares the eax with F, after few research I know that the F will change depending on the first time we extract and open the file, and the eax value depends on the current day we open/debug the file. So if we open the file on a day not the same as the first day we open it, the Sleep function with 43200000 Millisecond = 12 hours will be called. We can change the system time or just patch the file later to make it still work normally.</Text>
            <Img justifySelf="center" src={hashgenerate} alt="hashgenerate" marginTop="10"/>
            <Text  marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14"><Highlight query="Hash_generate" styles={{color:"yellow.500"}}>The return of function with comment "Hash_generate" will return a "random" value with 5 digits. Just remember it for now. Looking further down we see the string "FO9", trace to that string to know where else it has been called and it took me here.</Highlight></Text>
            <Img justifySelf="center" src={get5number} alt="get5number" marginTop="10"/>
            <Text  marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14">The function takes our current system time (Minute, second, millisecond), and does some math with it to generate the seed that will be used later in the rand function, the result is the 5 number we get. So that 5 number depends on our system time and... magic from the random function? Anyways, let's continue executing by pressing F9 until the packet is sent and check Wireshark.</Text>
            <Img justifySelf="center" src={firstdebugresponse} alt="firstdebugrespone" marginTop="10"/>
            <Text  marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14"><Highlight query="0x2EAE" styles={{color:"yellow.500"}}>The response is still not what we want. But wait, see the last 5 digits at the end of User-Agent? Isn't it familiar to us? Later I know that when that 5 digits change, the data will be sent also change as well. So we can use that to make the exe file send the same data in the pcap. Set a breakpoint at the beginning of the generate 5 digits function, step down, and modify the value of eax to 0x2EAE = 11950 (5 digits in the first POST request in the pcap file).</Highlight></Text>
            <Img justifySelf="center" src={correctrequestdata} alt="correctrequestdata" marginTop="10"/>
            <Text  marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14">As we expected, the data has been sent now the same as the pcap. But we still don't get the correct response. So maybe in the pcap file, the data has been sent to another host also name "flare-on.com" and not this one? With that thought in my mind and I get an idea: We gonna do the same thing, making a fake server name "flare-on.com" and making the binary to communicate with it instead. With that, we can control both request and response data. And what did I do is open the hosts file in directory <Code>C:\Windows\System32\drivers\etc</Code>, open it with notepad, adding the line "127.0.0.2   flare-on.com". Now any request sent to flare-on.com will be redirect to 127.0.0.2 instead. Next, making a server response to POST request on 127.0.0.2</Text>
            <Img justifySelf="center" src={program} alt="program" marginTop="10"/>
            <Text  marginTop="10" color={useColorModeValue('blackAlpha.700','white')} fontSize="14">The set header is not necessary. Now run the server, and run the binary with the correct 5 digits. After modifying the data, keep pressing F9 and we get this.</Text>
            <Img justifySelf="center" src={winner} alt="winner" marginTop="10"/>
            <Code colorScheme="green" marginTop="10"
            maxWidth="60%"
            justifySelf="center"
            textAlign="center" >i_s33_you_m00n@flare-on.com</Code>
                        <Flex justifyContent="space-between">
            <Link to="../works/flareon9/04">
            <Button marginTop="10"
            shadow="dark-lg"
            leftIcon={<FaAngleDoubleLeft/>}   
            marginBottom="10">
                <Text
                color={useColorModeValue('blackAlpha.700','white')} fontSize="14">Darn mice</Text>
            </Button>
            </Link>
            <Link to="../works/flareon9/06">
            <Button marginTop="10"
            shadow="dark-lg"
            leftIcon={<FaAngleDoubleRight/>}   
            marginBottom="10">
                <Text
                color={useColorModeValue('blackAlpha.700','white')} fontSize="14">à la mode</Text>
            </Button>
            </Link>
            </Flex>
            </Grid>
            </Flex>
    )
}


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
            T EIGHT
        </Heading>
        </Flex>
    )
}
export class T8 extends React.Component{
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
                    <title>Flare-On 9 - T8</title>
                    <meta name="author" content="0ji54n"/>
                    <meta name="copyright" content="0ji54n"/>
                    <meta name="format-detection" content="telephone=no"/>
                    <meta name="theme-color" content="#0d0d0d"/>
                    <meta name="description" content="Extract the zip file, this time we get an exe file and a pcap file. The pcap file contains network traffic info so the best choice when we choose a program to open it is Wireshark for now."/>
                    <meta property="og:type" content="article"/>
                    <meta property="og:title" content="Flare-On 9 - T8"/>
                    <meta property="og:url" content="https://0ji54n.space/works/flareon9/05"/>
                    <meta property="og:site_name" content="0ji54n"/>
                    <meta property="og:description" content="Extract the zip file, this time we get an exe file and a pcap file. The pcap file contains network traffic info so the best choice when we choose a program to open it is Wireshark for now."/>
                    <meta property="og:locale" content="en_US"/>
                    <meta property="og:image" content={flareon}/>
                    <meta property="article:author" content="0ji54n"/>
                    <meta property="article:tag" content="reverse engineering"/>
                    <meta name="twitter:card" content="summary"/>
                    <meta name="twitter:image" content={flareon}/>
                    <link rel="canonical" href="https://0ji54n.space/works/flareon9/05"/>
                    </Helmet>
                </div>
            <GoToTop/>
            <Title/>
            <Content/>
            </ChakraBox>
        )
    }
}