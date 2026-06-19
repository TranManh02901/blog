import React from "react";
import { Button, Flex, Heading, Img, Text, useColorModeValue, chakra, shouldForwardProp } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { motion, isValidMotionProp } from "framer-motion";
import { Helmet } from "react-helmet";

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export const TemplateDetail = ({ name, image, prev, next }) => {
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
            <Flex justifyContent="space-between" maxW="60%" margin="0 auto" paddingBottom="10">
                {prev ? (
                    <Link to={prev.link}>
                        <Button marginTop="10" shadow="dark-lg" leftIcon={<FaAngleDoubleLeft />} marginBottom="10">
                            <Text color={textColor} fontSize="14">{prev.label}</Text>
                        </Button>
                    </Link>
                ) : <div />}
                {next ? (
                    <Link to={next.link}>
                        <Button marginTop="10" shadow="dark-lg" rightIcon={<FaAngleDoubleRight />} marginBottom="10">
                            <Text color={textColor} fontSize="14">{next.label}</Text>
                        </Button>
                    </Link>
                ) : <div />}
            </Flex>
        </ChakraBox>
    );
};
