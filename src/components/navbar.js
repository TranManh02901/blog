import { Grid, GridItem, IconButton, Flex, Tooltip, SimpleGrid, chakra, shouldForwardProp,Box} from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Avt from "./avt"
import { BiHomeCircle, BiUser, BiFolderOpen, BiDetail  } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FiGithub, FiTwitter, FiFacebook } from "react-icons/fi";
import Clock from "./Cock";
import { MusicMinimize } from "./musicterminal";
import { FaRedditAlien, FaPinterest, FaLinkedin } from 'react-icons/fa';
import { motion, isValidMotionProp} from "framer-motion";
const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Inner1 = () =>{
    return(
        <Grid
        h = '40px'
        templateColumns='repeat(12, 1fr)'
        gap={8}
        >
            <GridItem bgColor="#2C3038" borderRadius="md"
            w={{base:"100%"}}
            gridColumn={{
                base: "span 12",
                sm: "span 12",//1x1
                md: "span 13",//2x2
                lg: "span 12",//3x3
                xl: "span 4"//3x3
            }}>
                 <Flex justifyContent="center">
                    <SimpleGrid columns={5} gap={3}>
                    <ChakraBox
                    whileHover={{scale:1.1}}
                    whileTap={{y:12,
                    opacity:0}}>
                    <ColorModeSwitcher/>
                    </ChakraBox>
                    <ChakraBox
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}>
                    <Tooltip label="Home" fontFamily="Calibri Light"
                    borderRadius="full">
                      <Link to="/">
                        <IconButton variant="ghost" icon={<BiHomeCircle/>}
                        _hover={{
                          bgColor : 'rgba(52, 52, 52, 0.2)'
                        }}
                        colorScheme='rgba(52, 52, 52, 0.2)'
                        color="#FFFF00"/>
                      </Link>
                    </Tooltip>
                    </ChakraBox>
                    <ChakraBox
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}>
                    <Tooltip label="About me" fontFamily="Calibri Light"
                    borderRadius="full">
                    <Link to="about">
                      <IconButton variant="ghost" icon={<BiUser/>}
                      _hover={{
                        bgColor : 'rgba(52, 52, 52, 0.2)'
                      }}
                      colorScheme='rgba(52, 52, 52, 0.2)'
                      color="#F69C9C"/>
                    </Link>
                    </Tooltip>
                    </ChakraBox>
                    <ChakraBox
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}>
                    <Tooltip label="Folder" fontFamily="Calibri Light"
                    borderRadius="full">
                    <Link to="works">
                      <IconButton variant="ghost" icon={<BiFolderOpen/>}
                      _hover={{
                        bgColor : 'rgba(52, 52, 52, 0.2)'
                      }}
                      colorScheme='rgba(52, 52, 52, 0.2)'
                      color="#DEEBF7"/>
                    </Link>
                    </Tooltip>
                    </ChakraBox>
                    <ChakraBox
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}>
                    <Tooltip label="Post" fontFamily="Calibri Light"
                    borderRadius="full">
                    <Link to="posts">
                      <IconButton variant="ghost" icon={<BiDetail/>}
                      _hover={{
                        bgColor : 'rgba(52, 52, 52, 0.2)'
                      }}
                      colorScheme='rgba(52, 52, 52, 0.2)'
                      color="#C5E0B4"/>
                    </Link>
                    </Tooltip>
                    </ChakraBox>
                    </SimpleGrid>
                </Flex>
                  
            </GridItem>
            <GridItem colStart={5} colEnd={9} bgColor="#2C3038" borderRadius="md"
            display={{
                base:"none",
                sm:"none",
                md:"none",
                lg:"none",
                xl:"block",
            }}>
                <Flex justifyContent="center">
                    <SimpleGrid columns={6} gap={2}>
                    <ChakraBox
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}>
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
                    </ChakraBox>
                    <ChakraBox
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}>
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
                    </ChakraBox>
                    <ChakraBox
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}>
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
                    </ChakraBox>
                    <ChakraBox
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}>
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
                    </ChakraBox>
                    <ChakraBox
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}>
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
                    </ChakraBox>
                    <ChakraBox
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}>
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
                    </ChakraBox>
                    </SimpleGrid>
                </Flex>           
            </GridItem>
            <GridItem colStart={10} colEnd={13} bgColor="#2C3038" borderRadius="md"
            display={{
                base: "none",
                sm:"none",
                md: "none",
                lg: "none",
                xl: "block"
            }}>
                <Flex justifyContent="center" fontFamily="Hack" marginTop="2">
                    <Clock/>
                </Flex>
            </GridItem>
        </Grid>
    )
}
export const VeryBottom = () =>{
    return (
      <Flex justifyContent="center">
        <Grid 
        h="40px" bgColor="#1E222A"
        borderRadius="md"
        boxShadow="dark-lg"
        w={{
            base: "50%%",
            sm:"50%%",
            md: "60%",
            lg: "50%",
            xl: "50%"
        }}>
          <Inner1/>
        </Grid>
        </Flex>
    );
};


export class NavigationBar extends React.Component {
    render(){
        return (
          <Box>
          <Box zIndex="2"
          marginTop="4"
          w="100%"
          position="fixed">
          <VeryBottom/>
          </Box>
          <Box>
          <Flex justifyContent="center">
          <Flex justifyContent="center" marginTop="40"
          w="40%" h={150}>
            <Avt/>
            {/* <MusicTimeLine/> */}
            <Flex 
            marginLeft={20} 
            display={{
              base:'none',
              sm:'none',
              md:'none',
              lg:'none',
              xl:'grid'
            }}>
            <iframe
              title="Spotify Embed: Recommendation Playlist "
              src={`https://open.spotify.com/embed/playlist/1kpfEvwq0X88vZLLefhkFX?utm_source=generator`}
              width="100%"
              height="152px"
              style={{borderRadius: '12px'}}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
            </Flex>
          </Flex>
          </Flex>
          <MusicMinimize/>
        </Box>
        </Box>
        )
    }
}