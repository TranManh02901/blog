import React from 'react';
import { Img, Flex, Text, Heading, Grid, GridItem, Highlight, chakra, shouldForwardProp, Box, useColorModeValue } from "@chakra-ui/react";
import almondblossom from "../media/almondblossom.jpg";
import { motion, isValidMotionProp } from "framer-motion";
import GoToTop from "../components/gototop"
import { Helmet } from 'react-helmet';
import { useState } from 'react';
const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export const Learn = () => {
    const gift = [
        {
            id: 1,
            name: 'lua chon 1'
        },
        {
            id: 2,
            name: 'lua chon 2'
        },
        {
            id: 3,
            name: 'lua chon 3'
        },
    ]

    const [checked, setChecked] = useState();

    const handleCheck = () => {
        setChecked() => {
            const isChecked = checked.icludes(id);
        }
    }

    const handleUpdate = () => {
        console.log({ id: checked });
    }
    return (
        <div className='congaf' style={{ padding: 20 }}>
            {gift.map(gift => (
                <div key={gift.id}>
                    <input
                        type='checkbox'
                        checked={checked === gift.id}
                        onChange={() => handleCheck(gift.id)} />
                    <label>{gift.name}</label>
                </div>
            ))}
            <button onClick={handleUpdate}>Click button</button>
        </div>
    )
}

export const Name = () => {
    return (
        <Flex justifyContent="center">
            <Heading
                marginTop="10"
                fontSize={{
                    base: "4xl",
                    sm: "5xl",
                    md: "6xl",
                    lg: "7xl",
                    xl: "7xl"
                }}
                fontFamily='Anurati'
                color={useColorModeValue('blackAlpha.700', 'white')}>CONGAF</Heading>
        </Flex>
    );
};
export const AboutMe = () => {
    return (
        <Flex justifyContent="center" >
            <Text
                color={useColorModeValue('blackAlpha.700', 'white')}
                fontSize={{ base: "12", sm: "12", md: "13", lg: "15", xl: "15" }} fontFamily='Calibri Light' shadow="2xl" borderRadius="3xl" maxWidth="500" textAlign="center" margin="10">
                A Bridge System Engineer fluent in Japanese with a keen interest in the IT industry. Currently, I am actively engaged in bridging technical solutions and facilitating communication between Japanese and Vietnamese-speaking teams. Beyond my role, I am deeply fascinated by the realm of Cyber Security and am dedicated to expanding my knowledge and expertise in this field. With a passion for innovation and a commitment to continuous learning, I am eager to contribute my skills and insights to further enhance both the technological and security landscapes.
            </Text>
        </Flex>
    )
}
export const Neofetch = () => {
    return (
        <Flex justifyContent="center" marginTop="10" marginBottom="10">
            <Grid bgColor="#333F50" h={{
                base: 350,
                sm: 400,
                md: 400,
                lg: 400,
                xl: 400
            }} border="1px"
                w={{
                    base: "90%",
                    sm: "90%",
                    md: "80%",
                    lg: "60%",
                    xl: "40%"
                }}
                templateColumns='repeat(24, 1fr)'
                templateRows='repeat(24, 1fr)'>
                <GridItem
                    rowStart="3" rowEnd="3"
                    colStart="3" colEnd="20"
                    alignContent="center"
                >
                    <ChakraBox
                        transition={{
                            delay: 1,
                            duration: 0.1
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}>
                        <Text fontSize="14" color="purple.500"><Highlight query="neofetch" styles={{ color: "green.500" }}>0ji54n@TAKO $~ neofetch</Highlight></Text>
                    </ChakraBox>
                </GridItem>
                <GridItem
                    rowStart="6" rowEnd="20"
                    colStart={{
                        base: "3",
                        xl: "3"
                    }} colEnd={{
                        base: "9",
                        xl: "7"
                    }}
                    overflow="hidden">
                    <ChakraBox
                        transition={{
                            delay: 1.5,
                            duration: 0.1
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}>
                        <Flex>
                            <Img src={almondblossom} alt="almondblossom"
                                width="200%" height="100%"
                                objectFit="fill" />
                        </Flex>
                    </ChakraBox>
                </GridItem>
                <GridItem
                    colStart="2" colEnd="2"
                    rowStart="6" rowEnd="8">
                    <ChakraBox
                        transition={{
                            delay: 1.5,
                            duration: 0.1
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}>
                        <Text fontFamily="Hack">{'>'}</Text>
                    </ChakraBox>
                </GridItem>
                <GridItem
                    rowStart="6" rowEnd="20"
                    colStart={{
                        base: "10",
                        xl: "8"
                    }} colEnd="24">
                    <ChakraBox
                        transition={{
                            delay: 1.5,
                            duration: 0.1
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}>
                        <Box>
                            <Text fontSize={{
                                base: "8",
                                sm: "10",
                                md: "10",
                                lg: "10",
                                xl: "10"
                            }} marginLeft="5" fontFamily="Hack" color='#F4B183'>
                                <Highlight query='TAKO' styles={{ color: '#A9D18E' }}>
                                    0ji54n@TAKO
                                </Highlight>
                            </Text>
                            <Text fontSize={{
                                base: "8",
                                sm: "10",
                                md: "10",
                                lg: "10",
                                xl: "15"
                            }} marginLeft="5" fontFamily="Hack" color="white">
                                ----------------------
                            </Text>
                            <Text fontSize={{
                                base: "8",
                                sm: "10",
                                md: "10",
                                lg: "10",
                                xl: "10"
                            }} marginLeft="5" fontFamily="Hack" color='white'>
                                <Highlight query='OS' styles={{ color: '#A9D18E' }}>
                                    OS: Arch Linux
                                </Highlight>
                            </Text>
                            <Text fontSize={{
                                base: "8",
                                sm: "10",
                                md: "10",
                                lg: "10",
                                xl: "10"
                            }} marginLeft="5" fontFamily="Hack" color='white'>
                                <Highlight query='Host' styles={{ color: '#A9D18E' }}>
                                    Host: ASUSTeK COMPUTER INC. ROG Strix G512LI_G512LI
                                </Highlight>
                            </Text>
                            <Text fontSize={{
                                base: "8",
                                sm: "10",
                                md: "10",
                                lg: "10",
                                xl: "10"
                            }} marginLeft="5" fontFamily="Hack" color='white'>
                                <Highlight query='Kernel' styles={{ color: '#A9D18E' }}>
                                    Kernel: 10.0.22000
                                </Highlight>
                            </Text>
                            <Text fontSize={{
                                base: "8",
                                sm: "10",
                                md: "10",
                                lg: "10",
                                xl: "10"
                            }} marginLeft="5" fontFamily="Hack" color='white'>
                                <Highlight query='Uptime' styles={{ color: '#A9D18E' }}>
                                    Uptime: 1 day, 23 hours, 27 mins
                                </Highlight>
                            </Text>
                            <Text fontSize={{
                                base: "8",
                                sm: "10",
                                md: "10",
                                lg: "10",
                                xl: "10"
                            }} marginLeft="5" fontFamily="Hack" color='white'>
                                <Highlight query='Packages' styles={{ color: '#A9D18E' }}>
                                    Packages: pacman
                                </Highlight>
                            </Text>
                            <Text fontSize={{
                                base: "8",
                                sm: "10",
                                md: "10",
                                lg: "10",
                                xl: "10"
                            }} marginLeft="5" fontFamily="Hack" color='white'>
                                <Highlight query='Shell' styles={{ color: '#A9D18E' }}>
                                    Shell: zsh
                                </Highlight>
                            </Text>
                            <Text fontSize={{
                                base: "8",
                                sm: "10",
                                md: "10",
                                lg: "10",
                                xl: "10"
                            }} marginLeft="5" fontFamily="Hack" color='white'>
                                <Highlight query='Resolution' styles={{ color: '#A9D18E' }}>
                                    Resolution: 1920x1080
                                </Highlight>
                            </Text>
                            <Text fontSize={{
                                base: "8",
                                sm: "10",
                                md: "10",
                                lg: "10",
                                xl: "10"
                            }} marginLeft="5" fontFamily="Hack" color='white'>
                                <Highlight query='WM' styles={{ color: '#A9D18E' }}>
                                    WM: i3
                                </Highlight>
                            </Text>
                            <Text fontSize={{
                                base: "8",
                                sm: "10",
                                md: "10",
                                lg: "10",
                                xl: "10"
                            }} marginLeft="5" fontFamily="Hack" color='white'>
                                <Highlight query='Terminal' styles={{ color: '#A9D18E' }}>
                                    Terminal: Sakura
                                </Highlight>
                            </Text>
                            <Text fontSize={{
                                base: "8",
                                sm: "10",
                                md: "10",
                                lg: "10",
                                xl: "10"
                            }} marginLeft="5" fontFamily="Hack" color='white'>
                                <Highlight query='CPU' styles={{ color: '#A9D18E' }}>
                                    CPU: Intel i5-10300H (8) @ 2.500GHz
                                </Highlight>
                            </Text>
                            <Text fontSize={{
                                base: "8",
                                sm: "10",
                                md: "10",
                                lg: "10",
                                xl: "10"
                            }} marginLeft="5" fontFamily="Hack" color='white'>
                                <Highlight query='GPU' styles={{ color: '#A9D18E' }}>
                                    GPU: NVIDIA GeForce GTX 1650 Ti
                                </Highlight>
                            </Text>
                            <Text fontSize={{
                                base: "8",
                                sm: "10",
                                md: "10",
                                lg: "10",
                                xl: "10"
                            }} marginLeft="5" fontFamily="Hack" color='white'>
                                <Highlight query='Memory' styles={{ color: '#A9D18E' }}>
                                    Memory: 8947MiB / 16171MiB
                                </Highlight>
                            </Text>
                        </Box>
                    </ChakraBox>
                </GridItem>
                <GridItem
                    rowStart="22" rowEnd="23"
                    colStart="3" colEnd="20"
                    borderRadius="full">
                    <ChakraBox
                        transition={{
                            delay: 1.8,
                            duration: 0.1
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}>
                        <Text fontSize="14" color="purple.500">0ji54n@TAKO $~</Text>
                    </ChakraBox>
                </GridItem>
            </Grid>
        </Flex>
    )
}

export class Home extends React.Component {
    render() {
        return (
            <ChakraBox
                transition={{
                    duration: 1
                }}
                initial={{
                    y: 20,
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1
                }}
                exit={{
                    y: -20,
                    opacity: 0
                }}>
                <div>
                    <Helmet>
                        <title>Home Page</title>
                        <link rel="canonical" href="https://0ji54n.space/" />
                    </Helmet>
                </div>
                <GoToTop />
                <Learn />
                <Name />
                <AboutMe />
                <Neofetch />
            </ChakraBox>
        )
    };
};