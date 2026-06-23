import React from 'react';
import { IconButton, Flex, useDisclosure, Collapse, useColorModeValue } from "@chakra-ui/react";
import { FiShare2 } from 'react-icons/fi';
import { FiGithub, FiTwitter, FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaRedditAlien, FaPinterest, FaLinkedin } from 'react-icons/fa';

export const MusicMinimize = () => {
    const { isOpen, onToggle } = useDisclosure()
    return (
        <>
            <Flex justifyContent="center" marginTop="4" paddingBottom="4"
                display={{
                    base: "flex",
                    sm: "flex",
                    md: "flex",
                    lg: "flex",
                    xl: "none"
                }}>
                <IconButton onClick={onToggle}
                    variant="ghosts"
                    icon={<FiShare2 />}
                    color={useColorModeValue('blackAlpha.700', 'white')}
                    _hover={{
                        bgColor: 'rgba(52, 52, 52, 0.2)'
                    }}
                    colorScheme='rgba(52, 52, 52, 0.2)' />
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <Flex marginTop="5" justifyContent="center" paddingBottom="12"
                    display={{
                        base: "flex",
                        sm: "flex",
                        md: "flex",
                        lg: "flex",
                        xl: "none"
                    }}>
                    <Flex justifyContent="center" gap={4}
                        bgColor="#2C3038" borderRadius="md"
                        shadow="dark-lg">
                        <IconButton
                            color="blue.600"
                            variant="ghost"
                            icon={<FaLinkedin />}
                            _hover={{
                                bgColor: 'rgba(52, 52, 52, 0.2)'
                            }}
                            colorScheme='rgba(52, 52, 52, 0.2)'
                            onClick={() => {
                                window.open("https://www.linkedin.com/in/manh-tran-7a8b903bb/")
                            }} />
                        <IconButton
                            color="orange.600"
                            variant="ghost"
                            icon={<FaRedditAlien />}
                            _hover={{
                                bgColor: 'rgba(52, 52, 52, 0.2)'
                            }}
                            colorScheme='rgba(52, 52, 52, 0.2)'
                            onClick={() => {
                                window.open("https://www.reddit.com/user/Congaffff/")
                            }} />
                        <IconButton
                            color="blue.200"
                            variant="ghost"
                            icon={<FaXTwitter />}
                            _hover={{
                                bgColor: 'rgba(52, 52, 52, 0.2)'
                            }}
                            colorScheme='rgba(52, 52, 52, 0.2)'
                            onClick={() => {
                                window.open("https://x.com/Just_Congaf")
                            }} />
                        <IconButton
                            color="white"
                            variant="ghost"
                            icon={<FiGithub />}
                            _hover={{
                                bgColor: 'rgba(52, 52, 52, 0.2)'
                            }}
                            colorScheme='rgba(52, 52, 52, 0.2)'
                            onClick={() => {
                                window.open("https://github.com/TranManh02901")
                            }} />
                        <IconButton
                            color="blue.500"
                            variant="ghost"
                            icon={<FiFacebook />}
                            _hover={{
                                bgColor: 'rgba(52, 52, 52, 0.2)'
                            }}
                            colorScheme='rgba(52, 52, 52, 0.2)'
                            onClick={() => {
                                window.open("https://www.facebook.com/tmanh020901")
                            }} />
                        <IconButton
                            color="red.600"
                            variant="ghost"
                            icon={<FaPinterest />}
                            _hover={{
                                bgColor: 'rgba(52, 52, 52, 0.2)'
                            }}
                            colorScheme='rgba(52, 52, 52, 0.2)'
                            onClick={() => {
                                window.open("https://www.pinterest.com/Congaf0/")
                            }} />
                    </Flex>
                </Flex>
            </Collapse>
        </>
    )
}