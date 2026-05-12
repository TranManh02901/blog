import React, {useState} from "react";
import {Text,Grid,GridItem,Input,SimpleGrid,Link,chakra,shouldForwardProp,VStack} from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import balatro from "../media/balatro/thumb.jpg";
import cyberaporev from "../media/cyberapo/lootstash2.png"
import { motion, isValidMotionProp} from "framer-motion";
const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const PostList = [
    {
        "title":"Balatro - Playing around with Love2D game",
        "thumb":balatro,
        "description":"Recently I found Balatro - a Poker (actually Big Two) - based card game. I'm usually not good at all types of video games, and with curiosity, I decided to find out how this game was made.",
        "link":"works/another/balatro"
    },
    {
        "title":"Cyber Apocalypse 2024's writeup",
        "thumb":cyberaporev,
        "description":"Đây là năm đầu tiên mình tham gia Cyber Apocalypse, theo đánh giá chung thì khá dễ thở với mức chênh lệch số điểm giữa các challenge dễ khó khác nhau là không nhiều. Vì tham gia một mình nên mình phải làm toàn bộ các danh mục để kiếm được nhiều điểm nhất có thể, nhưng trong đó vẫn tập trung vào 3 thứ mình dành thời gian nhiều nhất: rev, pwn và crypto.",
        "link":"works/another/cyberaporev"
    }
]

const Content = () =>{
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };
    return(
        <VStack direction={['column', 'row']} spacing='24px' justifyContent="center">
        <Text textAlign="center">Another way to read my posts in case you don't like how I organize them in "Folder".</Text>
        <Text textAlign="center">Some old posts (like Flare-on 9's write-ups won't be display here <Text as="s">bc I'm lazy)</Text>.</Text>
        <Input
        w={{
            base:"80%",
            sm:"80%",
            md:"60%",
            lg:"50%",
            xl:"50%"
        }} 
        placeholder="Search..."
        inputMode="search"
        focusBorderColor="gray.900"
        bgColor="gray.800" 
        fontFamily="Hack"
        onChange={inputHandler}/>
        <SimpleGrid columns={1} w={{
            base:"80%",
            sm:"80%",
            md:"60%",
            lg:"50%",
            xl:"50%"
        }} gap={2}>
            {
            PostList.filter(item =>{
                if (inputText === ""){
                    return item;
                }
                else if (item.title.toLowerCase().includes(inputText.toLowerCase())){
                    return item;
                }    
                return false;
            }).map((item, index) => (
                <ChakraBox
                whileHover={{scale:1.025}}
                whileTap={{y:12,
                opacity:0}}
                key={index} boxShadow="dark-lg" p='6' rounded='md'>
                <Link href={item.link}>
                <Grid
                templateRows='repeat(4, 1fr)'
                templateColumns='repeat(7, 1fr)'
                gap={1}>
                    <GridItem
                    colStart={{
                        base:"3",
                        sm:"3",
                        md:"3",
                        lg:"1",
                        xl:"1",
                    }}
                    colEnd={{
                        base:"6",
                        sm:"6",
                        md:"6",
                        lg:"3",
                        xl:"3",
                    }}
                    rowStart={{
                        base:"1",
                        sm:"1",
                        md:"1",
                        lg:"1",
                        xl:"1",
                    }}
                    rowEnd={{
                        base:"3",
                        sm:"3",
                        md:"3",
                        lg:"5",
                        xl:"5",
                    }}
                    bgImage={item.thumb}
                    bgPosition="center"
                    bgSize="200%"
                    ></GridItem>
                    <GridItem
                    colStart={{
                        base:"1",
                        sm:"1",
                        md:"1",
                        lg:"3",
                        xl:"3"
                    }}
                    colEnd={8}
                    rowStart={{
                        base:"3",
                        sm:"3",
                        md:"3",
                        lg:"1",
                        xl:"1"
                    }}
                    rowEnd={{
                        base:"4",
                        sm:"4",
                        md:"4",
                        lg:"2",
                        xl:"2"
                    }}><Text as="b">{item.title}</Text></GridItem>
                    <GridItem
                    colStart={{
                        base:"1",
                        sm:"1",
                        md:"1",
                        lg:"3",
                        xl:"3"
                    }}
                    colEnd={8}
                    rowStart={{
                        base:"4",
                        sm:"4",
                        md:"4",
                        lg:"2",
                        xl:"2"
                    }}
                    rowEnd={{
                        base:"5",
                        sm:"5",
                        md:"5",
                        lg:"5",
                        xl:"5"
                    }}><Text noOfLines={3}>{item.description}</Text></GridItem>
                </Grid>
                </Link>
                </ChakraBox>
            ))
            }
        </SimpleGrid>
        </VStack>
    )
}

export class Post extends React.Component {
    render(){
        return(
            <ChakraBox
            transition={{
                duration: 1 
             }}
             initial={{ 
                 marginTop: 60,
                 opacity: 0 }}
             animate={{
                 marginTop: 40, 
                 opacity: 1 }}
             exit={{
                 marginTop: 60}}
             >
                <div>
                    <Helmet>
                        <title>Posts</title>
                    </Helmet>
                </div>
                <Content/>
            </ChakraBox>
        )
    };
};