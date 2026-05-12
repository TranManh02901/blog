import React from "react";
import { Helmet } from "react-helmet";
import {Heading,Flex,useColorModeValue,Text,Grid,chakra,Img,shouldForwardProp,Link,Box} from "@chakra-ui/react";
import GoToTop from "../components/gototop";
import { motion, isValidMotionProp } from "framer-motion";
import Giscus from '@giscus/react';
import thumb from "../media/balatro/thumb.jpg";
import balatro1 from "../media/balatro/balatro1.png";
import balatro2 from "../media/balatro/balatro2.png"
import balatro3 from "../media/balatro/balatro3.png"
import balatro4 from "../media/balatro/balatro4.png"
import balatro5 from "../media/balatro/balatro5.png"
import balatro6 from "../media/balatro/balatro6.png"
import balatro7 from "../media/balatro/balatro7.png"
import balatro8 from "../media/balatro/balatro8.png"
import balatro9 from "../media/balatro/balatro9.png"
import balatro10 from "../media/balatro/balatro10.png"
import balatro11 from "../media/balatro/balatro11.png"
import balatro12 from "../media/balatro/balatro12.png"
import balatro13 from "../media/balatro/balatro13.png"
import balatro14 from "../media/balatro/balatro14.png"
import balatro15 from "../media/balatro/balatro15.png"
import balatro16 from "../media/balatro/balatro16.png"
import balatro17 from "../media/balatro/balatro17.mkv"
import balatro18 from "../media/balatro/balatro18.png"
import balatro19 from "../media/balatro/balatro19.png"
import code1 from "../media/balatro/code1.png"
import code2 from "../media/balatro/code2.png"

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
            BALATRO
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
                <Text>Recently I found Balatro - a Poker (actually Big Two) based card game. I'm usually not good at all types of video games, and with curiosity, I decided to find out how this game was made.</Text>
                <Text>Based on wikipedia and google, this game was made by Löve - a framework that helps users program games using Lua. You can learn more about it <Link color={useColorModeValue("#a6637b","#61ba68")} href="https://love2d.org/">here.</Link></Text>
                <Text>The game directory only includes an executable file and some dll files, no folders. So my guess at the moment is that all the assets and logic of the game are packaged inside that exe file.</Text>
                <Img justifySelf="center" borderRadius={10} src={balatro1} alt="balatro1" marginTop="10" marginBottom="10"/>
                <Text>Continue searching on google with the keywords "Love2D", "windows", "executable" and I found a <Link color={useColorModeValue("#a6637b","#61ba68")} href="https://love2d.org/wiki/Game_Distribution#Creating_a_Windows_Executable/">link</Link> to love2d's wiki about creating exe file.</Text>
                <Text as="i" marginTop="10" color={useColorModeValue('gray.400','#656648')}>Windows</Text>
                <Text as="i" color={useColorModeValue('gray.400','#656648')}>To create your game executable under windows use the command line to run</Text>
                <Text as="i" marginBottom="10" color={useColorModeValue('gray.400','#656648')}>copy /b love.exe+SuperGame.love SuperGame.exe</Text>
                <Text>This information is really helpful. The command "copy /b ..." simply merges the binary of the two files together. In other words, if we have file A with the content "love" and file B with the content "2d", the command "copy /b A+B C" will create a file C with the content "love2d".</Text>
                <Text>The official file "love.exe" when opened alone will look like this:</Text>
                <Img justifySelf="center" borderRadius={10} src={balatro2} alt="balatro2" marginTop="10" marginBottom="10"/>
                <Text>With that in mind, let's try to unpack the game.</Text>
                <Text><Link color={useColorModeValue("#a6637b","#61ba68")} href="https://www.garykessler.net/library/file_sigs.html?ref=esecurityinstitute.com/">This link</Link> contains some information about file signatures - which will be extremely helpful in distinguishing between love.exe and the rest (the zip file).</Text>
                <Text>Accordingly, the exe file will start with "\x4d\x5a" (MZ) and the zip file will usually be "\x50\x4b\x03\x04" (PK....)</Text>
                <Text>First, we open the game's original exe file (Balatro.exe) in the hex editor to analyze.</Text>
                <Img justifySelf="center" borderRadius={10} src={balatro3} alt="balatro3" marginTop="10" marginBottom="10"/>
                <Text>Actually, we don't need to care whether the file starts with "MZ" or not because that's obvious. The "copy" command also creates an exe file, and for that exe file to be considered valid, it must begin with "MZ", and "MZ" is the beginning of "love.exe" anyway. So the remaining thing we need to find is where the zip file begins.</Text>
                <Text>Try searching "5b 40 03 04" and we get a lot of results: </Text>
                <Img justifySelf="center" borderRadius={10} src={balatro4} alt="balatro4" marginTop="10" marginBottom="10"/>
                <Text>But after trying to find out if there is a case where there are multiple zip files packed or not, it seems that there is usually only 1 zip file like the command on the wiki. And almost all the results (because I haven't looked at them all) are between a lot of garbages while only the first result is after "\x00\x00\x00\x00..."</Text>
                <Text marginBottom="10">Considering that the first result will be the start of the zip file, I wrote a python script to extract it.</Text>
                <Img justifySelf="center" borderRadius={10} src={code1} alt="code1" marginTop="10" marginBottom="10"/>
                <Text marginTop="10">The exe file we just extracted needs some dlls (located in the original game folder), so we need to copy them to the same folder. Now test the exe file and what is displayed is exactly the same as the official "love.exe" file.</Text>
                <Img justifySelf="center" borderRadius={10} src={balatro5} alt="balatro5" marginTop="10" marginBottom="10"/>
                <Text>The next step is unzip the zip file. Our file was successfully recognized as a zip file and extracted without any error:</Text>
                <Img justifySelf="center" borderRadius={10} src={balatro6} alt="balatro6" marginTop="10" marginBottom="10"/>
                <Text>After looking around the code for a while, I believe we can do a lot of things with it, like creating new logic or modifying one or more existing logic, creating a new card with completely new effects, Change text in game, etc.</Text>
                <Text>As the two examples below, I will try to do the following two things: 1. Modifying the number of chips received to 1337; 2. Do the same thing, but for the money I would have received after each round.</Text>
                <Text>The number of chips will basically be calculated based on our hand (not including jokers and tarot cards). The evaluate_poker_hand function seems to be what performs the function of analyzing the hand and then returning the result as to what type it is.</Text>
                <Img justifySelf="center" borderRadius={10} src={balatro7} alt="balatro7" marginTop="10" marginBottom="10"/>
                <Img justifySelf="center" borderRadius={10} src={balatro8} alt="balatro8" marginTop="10" marginBottom="10"/>
                <Img justifySelf="center" borderRadius={10} src={balatro9} alt="balatro9" marginTop="10" marginBottom="10"/>
                <Text>The function evaluate_play calls 2 interesting functions: mod_mult and mod_chips.</Text>
                <Img justifySelf="center" borderRadius={10} src={balatro10} alt="balatro10" marginTop="10" marginBottom="10"/>
                <Img justifySelf="center" borderRadius={10} src={balatro11} alt="balatro11" marginTop="10" marginBottom="10"/>
                <Text>Change the return of mod_chips from _chips to 1337 and leave it there for now.</Text>
                <Text>Next, we'll try to modify the money. The amount to be added to the existing amount is always displayed next to the text "Cash out".</Text>
                <Img justifySelf="center" borderRadius={10} src={balatro12} alt="balatro12" marginTop="10" marginBottom="10"/>
                <Img justifySelf="center" borderRadius={10} src={balatro13} alt="balatro13" marginTop="10" marginBottom="10"/>
                <Img justifySelf="center" borderRadius={10} src={balatro14} alt="balatro14" marginTop="10" marginBottom="10"/>
                <Img justifySelf="center" borderRadius={10} src={balatro15} alt="balatro15" marginTop="10" marginBottom="10"/>
                <Img justifySelf="center" borderRadius={10} src={balatro16} alt="balatro16" marginTop="10" marginBottom="10"/>
                <Text>The way to win each blind is to have chips &gt;= a certain number of chips in each blind (G.GAME.chips (our chips) &gt;= G.GAME.blind.chips). Then it'll recalculate our money (dollar) by adding with G.GAME.blind.dollars. Let's change it to 1337 as well.</Text>
                <Text marginBottom="10">Now the next step is pack the game back again. I also wrote a script to do that.</Text>
                <Img justifySelf="center" borderRadius={10} src={code2} alt="packedaway" marginTop="10" marginBottom="10"/>
                <Text marginTop="10">Now go to the directory that contains our patched game and run it.</Text>
                <Box
                    marginBottom="10"
                    marginTop="10"
                    as='video'
                    controls
                    src={balatro17}
                    poster=''
                    alt='pwned'
                    objectFit='contain'
                    sx={{
                      aspectRatio: '16/9'
                    }}
                />
                <Text>The chips became 1337 as expected, but the money was 1340 instead of 1337 because I modified it at the wrong place. The money is also modified with the number of hands/discards left + some bonuses.</Text>
                <Text>I test the game in the first round so there won't be any bonuses (from tarot or joker cards). So just modify the amount in case hand/discard left.</Text>
                <Img justifySelf="center" borderRadius={10} src={balatro18} alt="balatro18" marginTop="10" marginBottom="10"/>
                <Img justifySelf="center" borderRadius={10} src={balatro19} alt="balatro19" marginTop="10" marginBottom="10"/>
                <Text as="b">Conclusion? I guess</Text>
                <Text marginTop="10" marginBottom="10">Well... Nothing much to say about this. Love2D is an open-source so anyone can learn about it more easily than ever. The way a complete game file is created is just simply by joining two files together, absolutely no obfuscation. Most of the time we spend is to understand the logic of the game from the extracted source. The bigger the game, the more time it takes to understand it. Finally, the main reason I want to share this with everyone is because I personally think it's quite interesting for those who want to learn about how software like video games are made.</Text>
            </Grid>
            </Flex>
    )
}

const Comment = () => {
    return (
        <Giscus
        id="comments"
        repo="0ji54n/-utterances-storage"
        repoId="R_kgDOLnA4zQ"
        category="General"
        categoryId="DIC_kwDOLnA4zc4CeUWJ"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={useColorModeValue('noborder_light','noborder_dark')}
        lang="en"
        loading="lazy"/>
    )
}

export class Balatro extends React.Component{
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
                    <title>Balatro - Playing around with Love2D game</title>
                    <meta name="author" content="0ji54n"/>
                    <meta name="copyright" content="0ji54n"/>
                    <meta name="format-detection" content="telephone=no"/>
                    <meta name="theme-color" content="#0d0d0d"/>
                    <meta name="description" content="Recently I found Balatro - a Poker (actually Big Two) - based card game. I'm usually not good at all types of video games, and with curiosity, I decided to find out how this game was made."/>
                    <meta property="og:type" content="article"/>
                    <meta property="og:title" content="Balatro - Playing around with Love2D game"/>
                    <meta property="og:url" content="https://0ji54n.space/works/balatro"/>
                    <meta property="og:site_name" content="0ji54n"/>
                    <meta property="og:description" content="Recently I found Balatro - a Poker (actually Big Two) - based card game. I'm usually not good at all types of video games, and with curiosity, I decided to find out how this game was made."/>
                    <meta property="og:locale" content="en_US"/>
                    <meta property="og:image" content={thumb}/>
                    <meta property="article:author" content="0ji54n"/>
                    <meta property="article:tag" content="reverse engineering"/>
                    <meta name="twitter:card" content="summary"/>
                    <meta name="twitter:image" content={thumb}/>
                    <link rel="canonical" href="https://0ji54n.space/works/balatro"/>
                    </Helmet>
                </div>
                <GoToTop/>
                <Title/>
                <Content/>
                <Flex justifyContent="center">
                <Grid
                    w={{
                        base:"95%",
                        sm:"80%",
                        md:"70%",
                        lg:"60%",
                        xl:"60%"
                    }}>
                    <Comment/>
                </Grid>
                </Flex>
            </ChakraBox>
        )
    }
}