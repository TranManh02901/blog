import React from "react";
import { Button, Flex, Grid, GridItem, Highlight, Heading, Img, Text, useColorModeValue, chakra, shouldForwardProp } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { motion, isValidMotionProp } from "framer-motion";
import { Helmet } from "react-helmet";

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export const TemplateDetail = ({ name, link, link_name, git_link, git_link_name, temp_title, temp_description, image, prev, next }) => {
    const title = name.replace(/_/g, " ");
    const textColor = useColorModeValue('blackAlpha.700', 'white');

    return (
        <ChakraBox
            transition={{ duration: 1 }}
            initial={{ marginTop: 20, opacity: 0 }}
            animate={{ marginTop: 0, opacity: 1 }}
            exit={{ marginTop: 20 }}>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={`Website template preview - ${title}`} />
                <meta property="og:title" content={title} />
                <meta property="og:url" content={`https://tranmanh02901.github.io/blog/#/works/templates/${name}`} />
                <meta property="og:image" content={image} />
                <meta name="twitter:image" content={image} />
                <link rel="canonical" href={`https://tranmanh02901.github.io/blog/#/works/templates/${name}`} />
            </Helmet>
            <Flex justifyContent="center">
                <Heading
                    fontFamily="Anurati"
                    marginTop="20"
                    fontSize="30"
                    color={textColor}>
                    {title.toUpperCase()}
                </Heading>
            </Flex>
            <Flex
                direction="column"
                alignItems="center"
                textAlign="center"
                px="4"
                mt="4">
                <Heading
                    size="lg"
                    color={textColor}
                    mb="2">
                    {temp_title}
                </Heading>

                <a style={{
                    marginBottom: '5px',
                }} href={link} target="_blank">Link Website
                </a>
                <a style={{
                    marginBottom: '5px',
                }} href={git_link} target="_blank">Link Github
                </a>
            </Flex>

            <Flex justifyContent="center" marginTop="5" marginBottom="2">
                <Grid bgColor="#333F50" h={{
                    base: 300,
                    sm: 350,
                    md: 300,
                    lg: 300,
                    xl: 300
                }} border="1px"
                    w={{
                        base: "90%",
                        sm: "90%",
                        md: "60%",
                        lg: "60%",
                        xl: "40%"
                    }}
                    templateColumns='repeat(24, 1fr)'
                    templateRows='repeat(24, 1fr)'>
                    <GridItem
                        colStart="4" colEnd="20"
                        rowStart="3" rowEnd="5"
                    >
                        <ChakraBox
                            transition={{
                                delay: 1,
                                duration: 0.1
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}>
                            <Text color="purple.500" fontSize="14">{'>'} <Highlight query="bio" styles={{ color: "blue.400" }}>description</Highlight></Text>
                        </ChakraBox>
                    </GridItem>
                    <GridItem
                        colStart="4" colEnd="24"
                        rowStart="6" rowEnd="24">
                        <ChakraBox
                            transition={{
                                delay: 1.5,
                                duration: 0.1
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}>
                            <Text
                                color="whitesmoke"
                                maxW="800px"
                                fontSize={{
                                    base: "14px",
                                    md: "16px"
                                }}>
                                {temp_description}
                            </Text>
                        </ChakraBox>
                    </GridItem>

                    <GridItem colStart="2" colEnd="3"
                        rowStart="6" rowEnd="9">
                        <ChakraBox
                            transition={{
                                delay: 1.5,
                                duration: 0.1
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}>
                            <Text fontFamily="Hack">{`>`}</Text>
                        </ChakraBox>
                    </GridItem>
                </Grid>
            </Flex>

            <Flex justifyContent="center" marginTop="10" marginBottom="10">
                <Flex padding="20px" background="gray"
                    maxW={{
                        base: "95%",
                        sm: "80%",
                        md: "70%",
                        lg: "60%",
                        xl: "60%"
                    }}>
                    <Img
                        src={image}
                        alt={name} />
                </Flex>
            </Flex>
            <Flex justifyContent="space-between" maxW={{
                base: "95%",
                md: "80%",
                lg: "60%"
            }} margin="0 auto" paddingBottom="10">
                {prev ? (
                    <Link to={prev.link}>
                        <Button marginTop="10" shadow="dark-lg" leftIcon={<FaAngleDoubleLeft />} marginBottom="10">
                            <Text color={textColor} fontSize={{
                                base: '12px',
                                md: '14px',
                                lg: '14px',
                            }}>{prev.label}</Text>
                        </Button>
                    </Link>
                ) : <div />}
                {next ? (
                    <Link to={next.link}>
                        <Button marginTop="10" shadow="dark-lg" rightIcon={<FaAngleDoubleRight />} marginBottom="10">
                            <Text color={textColor} fontSize={{
                                base: '12px',
                                md: '14px',
                                lg: '14px',
                            }}>{next.label}</Text>
                        </Button>
                    </Link>
                ) : <div />}
            </Flex>
        </ChakraBox >
    );
};
