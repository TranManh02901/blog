import React from 'react';
import { Img, Flex, Text, Heading, Grid, GridItem, Highlight, chakra, shouldForwardProp, Box, useColorModeValue } from "@chakra-ui/react";
import almondblossom from "../media/flower2.jpg";
import { motion, isValidMotionProp } from "framer-motion";
import { Helmet } from 'react-helmet';
import { useState } from 'react';
// import { Todoapp } from './todo';
// import { ContentMain } from './vd_usecontext';

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

// export const ToggleBtn = () => {
//     const [show, setShow] = useState(false)

//     return (
//         <div style={{ padding: 30 }}>
//             <button
//                 className='btn btn-primary mb-3'
//                 onClick={() => setShow(!show)}>
//                 Toggle
//             </button>

//             {show && <Learning />}
//         </div>
//     )
// }

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
                color={useColorModeValue('blackAlpha.700', 'white')}>TRAN DUC MANH</Heading>
        </Flex>
    );
};
export const AboutMe = () => {
    return (
        <Flex justifyContent="center" >
            <Text
                color={useColorModeValue('blackAlpha.700', 'white')}
                fontSize={{ base: "12", sm: "12", md: "13", lg: "15", xl: "15" }} fontFamily='Calibri Light' shadow="2xl" borderRadius="3xl" maxWidth="500" textAlign="center" margin="10" padding="5">
                Front-end Developer with 2+ years of experience working on real-world client projects. Skilled in converting Figma designs and templates into responsive, user-friendly web interfaces using HTML, CSS, JavaScript, jQuery. Also experienced in basic PHP backend tasks, including creating, updating, and managing data.
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
                        <Text fontSize="14" color="purple.500">{'>'}<Highlight query="personal_info" styles={{ color: "green.500" }}> personal_info</Highlight></Text>
                    </ChakraBox>
                </GridItem>
                <GridItem
                    rowStart="6" rowEnd="22"
                    colStart={{
                        base: "3",
                        xl: "3"
                    }} colEnd={{
                        base: "9",
                        xl: "8"
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
                                    My personal information
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
                                <Highlight query='Name' styles={{ color: '#A9D18E' }}>
                                    Name: Tran Duc Manh
                                </Highlight>
                            </Text>
                            <Text fontSize={{
                                base: "8",
                                sm: "10",
                                md: "10",
                                lg: "10",
                                xl: "10"
                            }} marginLeft="5" fontFamily="Hack" color='white'>
                                <Highlight query='Day of birth' styles={{ color: '#A9D18E' }}>
                                    Day of birth: 02/09/2001
                                </Highlight>
                            </Text>
                            <Text fontSize={{
                                base: "8",
                                sm: "10",
                                md: "10",
                                lg: "10",
                                xl: "10"
                            }} marginLeft="5" fontFamily="Hack" color='white'>
                                <Highlight query='Address' styles={{ color: '#A9D18E' }}>
                                    Address: Hanoi, Vietnam
                                </Highlight>
                            </Text>
                            <Text fontSize={{
                                base: "8",
                                sm: "10",
                                md: "10",
                                lg: "10",
                                xl: "10"
                            }} marginLeft="5" fontFamily="Hack" color='white'>
                                <Highlight query='Email' styles={{ color: '#A9D18E' }}>
                                    Email: tranducmanh02901@gmail.com
                                </Highlight>
                            </Text>
                            <Text fontSize={{
                                base: "8",
                                sm: "10",
                                md: "10",
                                lg: "10",
                                xl: "10"
                            }} marginLeft="5" fontFamily="Hack" color='white'>
                                <Highlight query='Website' styles={{ color: '#A9D18E' }}>
                                    Website: https://tranmanh02901.github.io/blog/#/
                                </Highlight>
                            </Text>
                            <Text fontSize={{
                                base: "8",
                                sm: "10",
                                md: "10",
                                lg: "10",
                                xl: "10"
                            }} marginLeft="5" fontFamily="Hack" color='white'>
                                <Highlight query='Occupation' styles={{ color: '#A9D18E' }}>
                                    Occupation: Front-end Developer
                                </Highlight>
                            </Text>
                            <Text fontSize={{
                                base: "8",
                                sm: "10",
                                md: "10",
                                lg: "10",
                                xl: "10"
                            }} marginLeft="5" fontFamily="Hack" color='white'>
                                <Highlight query='Experience' styles={{ color: '#A9D18E' }}>
                                    Experience: 2+ years
                                </Highlight>
                            </Text>
                            <Text fontSize={{
                                base: "8",
                                sm: "10",
                                md: "10",
                                lg: "10",
                                xl: "10"
                            }} marginLeft="5" fontFamily="Hack" color='white'>
                                <Highlight query='Languages' styles={{ color: '#A9D18E' }}>
                                    Languages: Vietnamese, Japanese
                                </Highlight>
                            </Text>
                            <Text fontSize={{
                                base: "8",
                                sm: "10",
                                md: "10",
                                lg: "10",
                                xl: "10"
                            }} marginLeft="5" fontFamily="Hack" color='white'>
                                <Highlight query='Frontend' styles={{ color: '#A9D18E' }}>
                                    Frontend: HTML, CSS, JavaScript, ReactJS
                                </Highlight>
                            </Text>
                            <Text fontSize={{
                                base: "8",
                                sm: "10",
                                md: "10",
                                lg: "10",
                                xl: "10"
                            }} marginLeft="5" fontFamily="Hack" color='white'>
                                <Highlight query='Backend' styles={{ color: '#A9D18E' }}>
                                    Backend: PHP, MySQL
                                </Highlight>
                            </Text>
                        </Box>
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
                        <link rel="canonical" href="https://tranmanh02901.github.io/blog/#/" />
                    </Helmet>
                </div>
                <Name />
                <AboutMe />
                <Neofetch />
            </ChakraBox>
        )
    };
};