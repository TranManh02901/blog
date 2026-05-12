import React from "react";
import { Flex, Grid, GridItem, Text, Highlight, SimpleGrid,Box,chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import GoToTop from "../components/gototop"
import { Helmet } from "react-helmet";
const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Txt = () => {
    return(
        <Flex justifyContent="center" marginTop = "5">
        <Grid bgColor="#333F50" h={{
            base:150,
            sm:150,
            md:120,
            lg:120,
            xl:120
        }} border="1px"
        templateColumns='repeat(24, 1fr)'
        templateRows='repeat(24, 1fr)'
        w={{
            base:"80%",
            sm:"70%",
            md:"40%",
            lg:"40%",
            xl:"30%"
        }}>
            <GridItem
            colStart="4" colEnd="20"
            rowStart="3" rowEnd="5"
            >
                <ChakraBox
                transition={{delay:1,
                duration:0.1}}
                initial={{opacity:0}}
                animate={{opacity:1}}>
                    <Text color="purple.500" fontSize="12">0ji54n@TAKO $~ <Highlight query="cat" styles={{color:"blue.400"}}>cat </Highlight><Highlight query="readme.txt" styles={{color:"whitesmoke"}}>readme.txt</Highlight></Text>
                </ChakraBox>
            </GridItem>
            <GridItem
            colStart="4" colEnd="24"
            rowStart="7" rowEnd="24"
            >
                <ChakraBox
                transition={{delay:1.5,
                duration:0.1}}
                initial={{opacity:0}}
                animate={{opacity:1}}>
                <Box>
                <Text color="whitesmoke" fontFamily="Hack" fontSize="12">
                    Name: Le Xuan Nghia
                </Text>
                <Text color="whitesmoke" fontFamily="Hack" fontSize="12" marginTop="2">
                    Date of Birth: 2001/??/??
                </Text>
                <Text color="whitesmoke" fontFamily="Hack" fontSize="12" marginTop="2">
                    Language: English, Vietnamese, 日本語
                </Text>
                </Box>
                </ChakraBox>
            </GridItem>
            <GridItem colStart="2" colEnd="3"
            rowStart="6" rowEnd="9">
                <ChakraBox
                transition={{delay:1.5,
                duration:0.1}}
                initial={{opacity:0}}
                animate={{opacity:1}}>
                <Text fontFamily="Hack">{`>`}</Text>
                </ChakraBox>
            </GridItem>
        </Grid>
        </Flex>
    )
}
const Skill = () => {
    return(
        <Flex justifyContent="center" marginTop = "5">
        <Grid bgColor="#333F50" h={{
            base:200,
            sm:200,
            md:170,
            lg:150,
            xl:130
        }} border="1px"
        w={{
            base:"100%",
            sm:"80%",
            md:"50%",
            lg:"50%",
            xl:"40%"
        }}
        templateColumns='repeat(24, 1fr)'
        templateRows='repeat(24, 1fr)'>
            <GridItem
            colStart="4" colEnd="20"
            rowStart="3" rowEnd="5"
            >
                <ChakraBox
                transition={{delay:1,
                duration:0.1}}
                initial={{opacity:0}}
                animate={{opacity:1}}>
                <Text color="purple.500" fontSize="13">0ji54n@TAKO $~ <Highlight query="cd" styles={{color:"green.400"}}>cd </Highlight><Highlight query="skills" styles={{color:"blue.400"}}>skills </Highlight><Highlight query=";ls" styles={{color:"green.400"}}>;ls</Highlight></Text>
                </ChakraBox>
            </GridItem>    
            <GridItem
            colStart="4" colEnd="24"
            rowStart="7" rowEnd="24">
                <ChakraBox
                transition={{delay:1.5,
                duration:0.1}}
                initial={{opacity:0}}
                animate={{opacity:1}}>
                <SimpleGrid
                columns={3} spacing={2}
                marginTop="1">
                     <Box height='16px'>
                        <Text fontFamily="Hack" fontSize="13" color="blue.400">C</Text>
                     </Box>
                     <Box height='16px'><Text fontFamily="Hack" color="blue.400" fontSize="13" >Assembly</Text></Box>
                     <Box height='16px'><Text fontFamily="Hack" color="blue.400" fontSize="13" >Python</Text></Box>
                     <Box height='16px'><Text fontFamily="Hack" color="blue.400" fontSize="13" >Javascript</Text></Box>
                     <Box height='16px'><Text fontFamily="Hack" color="blue.400" fontSize="13" >ReactJS</Text></Box>
                     <Box height='16px'><Text fontFamily="Hack" color="blue.400" fontSize="13" >Linux</Text></Box>
                     <Box height='16px'><Text fontFamily="Hack" color="blue.400" fontSize="13" >RE</Text></Box>
                     <Box height='16px'><Text fontFamily="Hack" color="blue.400" fontSize="13" >Pwnable</Text></Box>
                     <Box height='16px'><Text fontFamily="Hack" color="blue.400" fontSize="13" >Mal_Analyst</Text></Box>
                     <Box height='16px'><Text fontFamily="Hack" color="blue.400" fontSize="13" >Network</Text></Box>
                     <Box height='16px'><Text fontFamily="Hack" color="blue.400" fontSize="13" >Java</Text></Box>
                     <Box height='16px'><Text fontFamily="Hack" color="blue.400" fontSize="13" >MySQL</Text></Box>
                </SimpleGrid>
                </ChakraBox>
            </GridItem>
            <GridItem colStart="2" colEnd="3"
            rowStart="8" rowEnd="9">
                <ChakraBox
                transition={{delay:1.5,
                duration:0.1}}
                initial={{opacity:0}}
                animate={{opacity:1}}>
                <Text fontFamily="Hack">{`>`}</Text>
                </ChakraBox>
            </GridItem>
        </Grid>
        </Flex>
    )
}
const Bio = () => {
    return(
        <Flex justifyContent="center" marginTop = "5" marginBottom="2">
        <Grid bgColor="#333F50" h={{
            base:500,
            sm:500,
            md:400,
            lg:400,
            xl:400
        }} border="1px"
        w={{
            base:"90%",
            sm:"90%",
            md:"60%",
            lg:"60%",
            xl:"40%"
        }}
        templateColumns='repeat(24, 1fr)'
        templateRows='repeat(24, 1fr)'>
            <GridItem
            colStart="4" colEnd="20"
            rowStart="3" rowEnd="5"
            >
                <ChakraBox
                transition={{delay:1,
                duration:0.1}}
                initial={{opacity:0}}
                animate={{opacity:1}}>
                <Text color="purple.500" fontSize="14">0ji54n@TAKO $~ <Highlight query="./bio" styles={{color:"orange.700"}}>./bio</Highlight></Text>
                </ChakraBox>
            </GridItem>
            <GridItem
            colStart="4" colEnd="24"
            rowStart="6" rowEnd="24">
                <ChakraBox
                transition={{delay:1.5,
                duration:0.1}}
                initial={{opacity:0}}
                animate={{opacity:1}}>
                <Box>
                <Text color="whitesmoke" fontFamily="Hack" fontSize="13">
                2019 Oct -{`>`} エール学園日本語教育学科
                (EHLE Japanese Language School)
                </Text>
                <Text color="whitesmoke" fontFamily="Hack" fontSize="13">|</Text>
                <Text color="whitesmoke" fontFamily="Hack" fontSize="13">2021 Feb -{`>`} Pass N2 Japanese-Language Proficiency Test (JLPT)</Text>
                <Text color="whitesmoke" fontFamily="Hack" fontSize="13">|</Text>
                <Text color="whitesmoke" fontFamily="Hack" fontSize="13">2021 Mar -{`>`} Graduate</Text>
                <Text color="whitesmoke" fontFamily="Hack" fontSize="13">|</Text>
                <Text color="whitesmoke" fontFamily="Hack" fontSize="13">2021 Oct – 2023 Jan -{`>`} Self-taught programming/hacking</Text>
                <Text color="whitesmoke" fontFamily="Hack" fontSize="13">|</Text>
                <Text color="whitesmoke" fontFamily="Hack" fontSize="13">2023 Jan – 2023 Apr -{`>`} Freelance Game Translator</Text>
                <Text color="whitesmoke" fontFamily="Hack" fontSize="13">|</Text>
                <Text color="whitesmoke" fontFamily="Hack" fontSize="13">2023 Apr - Present - {`>`} Bridge System Engineer at ARIS VIETNAM CO., LTD</Text>
                </Box>
                </ChakraBox>
            </GridItem>
            <GridItem colStart="2" colEnd="3"
            rowStart="6" rowEnd="9">
                <ChakraBox
                transition={{delay:1.5,
                duration:0.1}}
                initial={{opacity:0}}
                animate={{opacity:1}}>
                <Text fontFamily="Hack">{`>`}</Text>
                </ChakraBox>
            </GridItem>
        </Grid>
        </Flex>
    )
}
export class AboutMe extends React.Component {
    render(){
        return(
            <ChakraBox
            transition={{
               duration: 1,
               ease:"linear"
            }}
            initial={{ 
                marginTop: 40,
                opacity: 0 }}
            animate={{
                marginTop: 0, 
                opacity: 1 }}
            exit={{ opacity:0 }}>
                <div>
                    <Helmet>
                        <title>About me</title>
                        <link rel="canonical" href="https://0ji54n.space/about" />
                    </Helmet>
                </div>
                <GoToTop/>
                <Txt/>
                <Skill/>
                <Bio/>
            </ChakraBox>
        )
    };
};