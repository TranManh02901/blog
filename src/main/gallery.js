import React, { useState } from "react";
import { Helmet } from "react-helmet";
import balatro from "../media/balatro/thumb.jpg";
import cyberaporev from "../media/cyberapo/lootstash2.png"
import { motion } from "framer-motion";

const PostList = [
    {
        "title": "Balatro - Playing around with Love2D game",
        "thumb": balatro,
        "description": "Recently I found Balatro - a Poker (actually Big Two) - based card game. I'm usually not good at all types of video games, and with curiosity, I decided to find out how this game was made.",
        "link": "works/another/balatro"
    },
    {
        "title": "Cyber Apocalypse 2024's writeup",
        "thumb": cyberaporev,
        "description": "Đây là năm đầu tiên mình tham gia Cyber Apocalypse, theo đánh giá chung thì khá dễ thở với mức chênh lệch số điểm giữa các challenge dễ khó khác nhau là không nhiều. Vì tham gia một mình nên mình phải làm toàn bộ các danh mục để kiếm được nhiều điểm nhất có thể, nhưng trong đó vẫn tập trung vào 3 thứ mình dành thời gian nhiều nhất: rev, pwn và crypto.",
        "link": "works/another/cyberaporev"
    }
]

const Content = () => {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    return (
        <div className="flex flex-col sm:flex-row gap-[24px] justify-center">
            <p className="text-center">Another way to read my posts in case you don't like how I organize them in "Folder".</p>
            <p className="text-center">Some old posts (like Flare-on 9's write-ups won't be display here <s>bc I'm lazy)</s>.</p>
            <input
                className="w-[80%] md:w-3/5 lg:w-1/2 h-10 rounded-md border border-gray-200 dark:border-whiteAlpha-300 bg-gray-800 px-4 font-['Hack'] focus:outline-none focus:border-gray-900 focus:shadow-[0_0_0_1px_#171923]"
                placeholder="Search..."
                inputMode="search"
                onChange={inputHandler} />
            <div className="grid grid-cols-1 gap-2 w-[80%] md:w-3/5 lg:w-1/2">
                {
                    PostList.filter(item => {
                        if (inputText === "") {
                            return item;
                        }
                        else if (item.title.toLowerCase().includes(inputText.toLowerCase())) {
                            return item;
                        }
                        return false;
                    }).map((item, index) => (
                        <motion.div
                            whileHover={{ scale: 1.025 }}
                            whileTap={{
                                y: 12,
                                opacity: 0
                            }}
                            key={index} className="shadow-dark-lg p-6 rounded-md">
                            <a href={item.link}>
                                <div className="grid gap-1 grid-rows-[repeat(4,1fr)] grid-cols-[repeat(7,1fr)]">
                                    <div
                                        className="[grid-column:3/6] lg:[grid-column:1/3] [grid-row:1/3] lg:[grid-row:1/5]"
                                        style={{
                                            backgroundImage: `url(${item.thumb})`,
                                            backgroundPosition: 'center',
                                            backgroundSize: '200%',
                                        }}
                                    ></div>
                                    <div
                                        className="[grid-column:1/8] lg:[grid-column:3/8] [grid-row:3/4] lg:[grid-row:1/2]"><p className="font-bold">{item.title}</p></div>
                                    <div
                                        className="[grid-column:1/8] lg:[grid-column:3/8] [grid-row:4/5] lg:[grid-row:2/5]"><p className="line-clamp-3">{item.description}</p></div>
                                </div>
                            </a>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export const Post = () => {
    return (
        <motion.div
            transition={{
                duration: 1
            }}
            initial={{
                marginTop: 60,
                opacity: 0
            }}
            animate={{
                marginTop: 40,
                opacity: 1
            }}
            exit={{
                marginTop: 60
            }}
        >
            <div>
                <Helmet>
                    <title>Posts</title>
                </Helmet>
            </div>
            <Content />
        </motion.div>
    )
};
