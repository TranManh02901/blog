import React from "react";
import { Helmet } from "react-helmet";
import {Heading,Flex,useColorModeValue,Text,Grid,chakra,Img,shouldForwardProp} from "@chakra-ui/react";
import GoToTop from "../components/gototop";
import { motion, isValidMotionProp } from "framer-motion";
import packedaway from "../media/cyberapo/packedaway.png"
import packedaway3 from "../media/cyberapo/packedaway3.png"
import boxcutter from "../media/cyberapo/boxcutter.png"
import boxcutter2 from "../media/cyberapo/boxcutter2.png"
import lootstash from "../media/cyberapo/lootstash.png"
import lootstash2 from "../media/cyberapo/lootstash2.png"
import followthepath from "../media/cyberapo/followthepath.png"
import followthepath2 from "../media/cyberapo/followthepath2.png"
import followthepath3  from "../media/cyberapo/followthepath3.png"
import followthepath4 from "../media/cyberapo/followthepath4.png"
import followthepath5 from "../media/cyberapo/followthepath5.png"
import quickscan from "../media/cyberapo/quickscan.png"
import quickscan1 from "../media/cyberapo/quickscan1.png"
import quickscan2 from "../media/cyberapo/quickscan2.png"
import Giscus from '@giscus/react';

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});
const Title = () =>{
    return(
        <Flex
        justifyContent="center">
        <Heading
        fontFamily="Anurati"
        marginTop="20"
        fontSize="40"
        color={useColorModeValue('blackAlpha.700','white')}
        >
            CYBER APOCALYPSE
        </Heading>
        </Flex>
    )
}
const Content = () =>{
    return(
        <Flex
        justifyContent="center"
        marginTop="10">
            <Grid
            w={{
                base:"95%",
                sm:"80%",
                md:"70%",
                lg:"60%",
                xl:"60%"
            }}>
            <Text as="b">1. PackedAway</Text>
            <Text>Bài này khá đơn giản, chỉ là một file được pack bằng UPX, unpack ra rồi ném vào Ghidra, dùng chức năng String Search là ra ngay flag.</Text>
            <Img justifySelf="center" borderRadius={10} src={packedaway} alt="packedaway" marginTop="10" marginBottom="10"/>
            <Img justifySelf="center" borderRadius={10} src={packedaway3} alt="packedaway3" marginTop="10" marginBottom="10"/>
            <Text as="b">2. BoxCutter</Text>
            <Img justifySelf="center" borderRadius={10} src={boxcutter} alt="boxcutter" marginTop="10" marginBottom="10"/>
            <Text>Với mỗi byte trong biến local_28 sẽ được đem XOR với 0x37. Nếu lười cả làm toán thì cứ quẳng vào gdb, set breakpoint ở nơi gọi hàm "open" trong main là được.</Text>
            <Img justifySelf="center" borderRadius={10} src={boxcutter2} alt="boxcutter2" marginTop="10" marginBottom="10"/>
            <Text as="b">3. LootStash</Text>
            <Img justifySelf="center" borderRadius={10} src={lootstash} alt="lootstash" marginTop="10" marginBottom="10"/>
            <Text>Dùng hàm rand() để lấy ra một giá trị bất kỳ từ mảng gear, rồi in (gear[i] % 0x7f8 &gt;&gt; 3) * 8 ra màn hình.</Text>
            <Text>Tương tự như bài trước, có thể dùng gdb để kiểm tra tất cả giá trị trong mảng gear[] sau khi đã thực hiện phép tính trên và flag là một trong các phần tử.</Text>
            <Img justifySelf="center" borderRadius={10} src={lootstash2} alt="lootstash2" marginTop="10" marginBottom="10"/>
            <Text as="b">4. FollowThePath</Text>
            <Text>Lần này là 1 file exe, yêu cầu người dùng nhập flag, nếu chính xác sẽ trả về dòng "Correct!"</Text>
            <Img justifySelf="center" borderRadius={10} src={followthepath} alt="followthepath" marginTop="10" marginBottom="10"/>
            <Text>Hình trên là hàm xử lý đã được mình đổi tên lại cho dễ nhìn.</Text>
            <Img justifySelf="center" borderRadius={10} src={followthepath2} alt="followthepath2" marginTop="10" marginBottom="10"/>
            <Text>Hàm check() kiểm tra ký tự đầu tiên có phải là "H" hay không, nếu không thì sẽ thực hiện lệnh jmp tới địa chỉ được lưu trong r10 (local_a8). Nếu đã pass thì sẽ đến tới bước check tiếp theo, ở đây chức năng decompile không thể hoạt động chính xác vì text section ở vùng này là một chuỗi mã assembly không hợp lệ. Để muốn biết chương trình thực sự làm gì ở đây, ta cần phải dùng tới chức năng debug.</Text>
            <Img justifySelf="center" borderRadius={10} src={followthepath3} alt="followthepath3" marginTop="10" marginBottom="10"/>
            <Img justifySelf="center" borderRadius={10} src={followthepath4} alt="followthepath4" marginTop="10" marginBottom="10"/>
            <Text>Pattern ở đây là: Đoạn mã thực hiện check từng ký tự trong input + đoạn mã giải mã cho đoạn mã check + giải mã tiếp theo bằng cách xor 0x39 ký tự tiếp đó với một số bất kỳ.</Text>
            <Text>Set conditional breakpoint ở cuối mỗi vòng lặp giải mã với điều kiện rdx == 0x39 + follow input in dump để patch lại chuỗi input nếu cần thiết để giải mã từng đoạn mã check chuỗi flag.</Text>
            <Img justifySelf="center" borderRadius={10} src={followthepath5} alt="followthepath5" marginTop="10" marginBottom="10"/>
            <Text as="b">5. QuickScan</Text>
            <Text>Bài này không cung cấp binary để phân tích, thay vào đó server sẽ gửi rất nhiều binary được base64 encoding với chức năng chung đều là load một giá trị ngẫu nhiên vào stack, và nhiệm vụ của ta là gửi đi tất cả các giá trị đó trong thời gian 2 phút.</Text>
            <Img justifySelf="center" borderRadius={10} src={quickscan} alt="quickscan" marginTop="10" marginBottom="10"/>
            <Text>Ở hàm trên, ta thấy giá trị sẽ được load vào stack sẽ là 0x18 bytes từ vị trí 0x080482e4 (vị trí này cùng vị trí của hàm entry cũng sẽ được thay đổi với mỗi binary). </Text>
            <Text>Khác với hiển thị trên Ghidra, địa chỉ chứa giá trị được load vào stack được truyền vào rsi theo cú pháp LEA RSI, [RIP+0x15e], ta đem giá trị RIP hiện tại (0x804817f) + 0x15e (giá trị này cũng sẽ random) + thêm 7 bytes sẽ bằng 0x80482e4.</Text>
            <Text>Ở đây mình có viết một đoạn code gồm một vòng lặp sẽ gửi đi dòng hex string hợp lệ, sau đó thêm arg DEBUG của pwntools khi chạy để đọc flag.</Text>
            <Img justifySelf="center" borderRadius={10} src={quickscan1} alt="quickscan1" marginTop="10" marginBottom="10"/>
            <Img justifySelf="center" borderRadius={10} src={quickscan2} alt="quickscan2" marginTop="10" marginBottom="10"/>
            </Grid>
            </Flex>
    )
}

const Comment = () => {
    return (
        <Giscus
        id="comments"
        repo="0ji54n/-utterances-storage"
        repoId="R_kgDOLnA4zQ"
        category="General"
        categoryId="DIC_kwDOLnA4zc4CeUWJ"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={useColorModeValue('noborder_light','noborder_dark')}
        lang="en"
        loading="lazy"/>
    )
}

export class CYBERAPO_REV extends React.Component{
    render(){
        return(
            <ChakraBox
            transition={{
                duration: 1 
             }}
             initial={{ 
                 marginTop: 20,
                 opacity: 0 }}
             animate={{
                 marginTop: 0, 
                 opacity: 1 }}
             exit={{
                 marginTop: 20}}
             >
                <div>
                    <Helmet>
                    <meta charset="UTF-8"/>
                    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0,viewport-fit=cover"/>
                    <title>Cyber Apocalypse 2024's writeup</title>
                    <meta name="author" content="0ji54n"/>
                    <meta name="copyright" content="0ji54n"/>
                    <meta name="format-detection" content="telephone=no"/>
                    <meta name="theme-color" content="#0d0d0d"/>
                    <meta name="description" content="Đây là năm đầu tiên mình tham gia Cyber Apocalypse, theo đánh giá chung thì khá dễ thở với mức chênh lệch số điểm giữa các challenge dễ khó khác nhau là không nhiều. Vì tham gia một mình nên mình phải làm toàn bộ các danh mục để kiếm được nhiều điểm nhất có thể, nhưng trong đó vẫn tập trung vào 3 thứ mình dành thời gian nhiều nhất: rev, pwn và crypto."/>
                    <meta property="og:type" content="article"/>
                    <meta property="og:title" content="Cyber Apocalypse 2024's writeup"/>
                    <meta property="og:url" content="https://0ji54n.space/works/cyberaporev"/>
                    <meta property="og:site_name" content="0ji54n"/>
                    <meta property="og:description" content="Đây là năm đầu tiên mình tham gia Cyber Apocalypse, theo đánh giá chung thì khá dễ thở với mức chênh lệch số điểm giữa các challenge dễ khó khác nhau là không nhiều. Vì tham gia một mình nên mình phải làm toàn bộ các danh mục để kiếm được nhiều điểm nhất có thể, nhưng trong đó vẫn tập trung vào 3 thứ mình dành thời gian nhiều nhất: rev, pwn và crypto."/>
                    <meta property="og:locale" content="en_US"/>
                    <meta property="og:image" content={followthepath5}/>
                    <meta property="article:author" content="0ji54n"/>
                    <meta property="article:tag" content="Rev"/>
                    <meta name="twitter:card" content="summary"/>
                    <meta name="twitter:image" content={followthepath5}/>
                    <link rel="canonical" href="https://0ji54n.space/works/cyberaporev"/>
                    </Helmet>
                </div>
                <GoToTop/>
                <Title/>
                <Content/>
                <Flex justifyContent="center">
                <Grid
                    w={{
                        base:"95%",
                        sm:"80%",
                        md:"70%",
                        lg:"60%",
                        xl:"60%"
                    }}>
                    <Comment/>
                </Grid>
                </Flex>
            </ChakraBox>
        )
    }
}