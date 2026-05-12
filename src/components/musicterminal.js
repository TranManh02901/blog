import React from 'react';
import { IconButton,Flex, useDisclosure, Collapse,useColorModeValue} from "@chakra-ui/react";
import { FiShare2 } from 'react-icons/fi';
import { FiGithub, FiTwitter, FiFacebook } from "react-icons/fi";
import { FaRedditAlien,FaPinterest,FaLinkedin } from 'react-icons/fa';

export const MusicMinimize = () =>{
    const { isOpen, onToggle } = useDisclosure()
    return (
        <>
        <Flex justifyContent="center" marginTop="4"
        display={{
            base:"flex",
            sm:"flex",
            md:"flex",
            lg:"flex",
            xl:"none"
        }}>
          <IconButton onClick={onToggle}
          variant="ghosts"
          icon={<FiShare2/>}
          color = {useColorModeValue('blackAlpha.700','white')}
          _hover={{
            bgColor : 'rgba(52, 52, 52, 0.2)'
          }}
          colorScheme='rgba(52, 52, 52, 0.2)'/>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
            <Flex  marginTop="5" justifyContent="center"
            display={{
                base:"flex",
                sm:"flex",
                md:"flex",
                lg:"flex",
                xl:"none"
            }}>
                 <Flex justifyContent="center" gap={4}
                 bgColor="#2C3038" borderRadius="md"
                 shadow="dark-lg">
                    <IconButton
                    color="blue.600"
                    variant="ghost"
                    icon={<FaLinkedin/>}
                    _hover={{
                        bgColor : 'rgba(52, 52, 52, 0.2)'
                      }}
                      colorScheme='rgba(52, 52, 52, 0.2)'
                    onClick={()=>{
                        window.open("https://www.linkedin.com/in/le-xuan-nghia-998a7b215/")
                    }}/>
                    <IconButton
                    color="orange.600"
                    variant="ghost"
                    icon={<FaRedditAlien/>}
                    _hover={{
                        bgColor : 'rgba(52, 52, 52, 0.2)'
                      }}
                      colorScheme='rgba(52, 52, 52, 0.2)'
                    onClick={()=>{
                        window.open("https://www.reddit.com/user/lenghia143")
                    }}/>
                    <IconButton
                    color="blue.200"
                    variant="ghost"
                    icon={<FiTwitter/>}
                    _hover={{
                        bgColor : 'rgba(52, 52, 52, 0.2)'
                      }}
                      colorScheme='rgba(52, 52, 52, 0.2)'
                    onClick={()=>{
                        window.open("https://twitter.com/0ji54n")
                    }}/>
                    <IconButton
                    color="white"
                    variant="ghost"
                    icon={<FiGithub/>}
                    _hover={{
                        bgColor : 'rgba(52, 52, 52, 0.2)'
                      }}
                      colorScheme='rgba(52, 52, 52, 0.2)'
                    onClick={()=>{
                        window.open("https://github.com/0ji54n/")
                    }}/>
                    <IconButton
                    color="blue.500"
                    variant="ghost"
                    icon={<FiFacebook/>}
                    _hover={{
                        bgColor : 'rgba(52, 52, 52, 0.2)'
                      }}
                      colorScheme='rgba(52, 52, 52, 0.2)'
                    onClick={()=>{
                        window.open("https://www.facebook.com/q8.LeNghia/")
                    }}/>
                    <IconButton
                    color="red.600"
                    variant="ghost"
                    icon={<FaPinterest/>}
                    _hover={{
                        bgColor : 'rgba(52, 52, 52, 0.2)'
                      }}
                      colorScheme='rgba(52, 52, 52, 0.2)'
                    onClick={()=>{
                        window.open("https://www.pinterest.jp/lexuannghia143/")
                    }}/>
                </Flex>           
            </Flex>         
        </Collapse>
        </>
    )
}