import React, {useState} from "react";
import {Flex,Grid,GridItem,SimpleGrid, Text, Highlight,Input, IconButton,Box} from "@chakra-ui/react"
import { AiFillFolder, AiFillFileText } from "react-icons/ai";
import { Link } from "react-router-dom";

const FolderName = [
    {
        "name" : "01_Flaredle",
        "link" : "./01"
    },
    {
        "name" : "02_Pixel_Poker",
        "link" : "./02"
    },
    {
        "name" : "03_Magic_8_Ball",
        "link" : "./03"
    },
    {
        "name" : "04_darn_mice",
        "link" : "./04"
    },
    {
        "name" : "05_T8",
        "link" : "./05"
    },
    {
        "name" : "06_à_la_mode",
        "link" : "./06"
    },
    {
        "name" : "07_anode",
        "link" : "./07"
    },
    {
        "name" : "WhatisFlareOn.txt",
        "link" : "./readme"
    },
]


const DolphinTer = () => {
    return (
        <Flex justifyContent="center" marginTop = "10" marginBottom = "10">
            <Grid bgColor="#333F50" h={50} border="1px"
            w={{
                base:"80%",
                sm:"60%",
                md:"50%",
                lg:"40%",
                xl:"30%"
            }}
            templateRows='repeat(8, 1fr)'
            templateColumns='repeat(24, 1fr)'>
                <GridItem colStart="4" colEnd="24"
                rowStart="5" rowEnd="5">
                    <Text color="purple.500" fontSize="14">0ji54n@TAKO $~ <Highlight query="dolphin" styles={{color:"green.500"}}>dolphin </Highlight><Highlight query="works" styles={{color:"blue.400"}}>works</Highlight> </Text>
                </GridItem>
            </Grid>
        </Flex>
    )
}
const Dolphin = () => {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };
    return (
        <Flex justifyContent="center" marginTop = "10" marginBottom = "10">
            <Grid bgColor="#333F50" h={{
                base:1050,
                sm:1000,
                md:800,
                lg:550,
                xl:550
            }} border="1px"
            w={{
                base:"90%",
                sm:"90%",
                md:"80%",
                lg:"70%",
                xl:"50%"
            }}
            templateColumns="repeat(24, 1fr)"
            templateRows="repeat(24, 1fr)">
                <GridItem
                colStart="3" colEnd="23"
                rowStart="2" rowEnd="4">
                    <Input placeholder="Search..."
                    focusBorderColor="gray.900"
                    bgColor="gray.800" 
                    onChange={inputHandler}
                    fontFamily="Hack"/>
                </GridItem>
                <GridItem
                colStart="2" colEnd="24"
                rowStart={{
                    base:4,
                    sm:4,
                    md:5,
                    lg:5,
                    xl:5
                }} rowEnd="24"
                bgColor="gray.800">
                    <SimpleGrid columns={{
                        base:2,
                        sm:2,
                        md:3,
                        lg:4,
                        xl:4,
                    }}>
                        {
                        FolderName.filter(item =>{
                            if (inputText === ""){
                                return item;
                            }
                            else if (item.name.toLowerCase().includes(inputText.toLowerCase())){
                                return item;
                            }     
                            return false;
                        }).map((item, index) => (
                        <Box margin="10" key={index}>
                            <Link to={item.link}>
                                <IconButton
                                _hover={{
                                    bgColor : 'rgba(52, 52, 52, 0.2)'
                                  }}
                                  colorScheme='rgba(52, 52, 52, 0.2)'
                                boxSize="20"
                                variant="ghost"
                                icon={item.name==="WhatisFlareOn.txt"?<AiFillFileText size="80"/>:<AiFillFolder size="80"/>}/>
                            </Link>
                            <Text fontFamily="Hack">{item.name}</Text>
                        </Box>
                        ))
                        }
                    </SimpleGrid>
                </GridItem> 
            </Grid>
        </Flex>
    )
}

export class FlareOn9 extends React.Component {
    render(){
        return(
            <Box>
                <DolphinTer/>
                <Dolphin/>
            </Box>
        )
    };
};