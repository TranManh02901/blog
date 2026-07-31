import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import HighlightText from "../components/HighlightText";

const Txt = () => {
    return (
        <div className="flex justify-center mt-5">
            <div
                className="flex flex-col bg-[#333F50] border w-[80%] sm:w-[70%] md:w-[40%] xl:w-[30%] p-4 sm:p-8"
            >
                <motion.div
                    transition={{
                        delay: 1,
                        duration: 0.1
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}>
                    <p className="text-purple-500 text-[12px]">{'>'} <HighlightText query="cat" className="text-green-400">cat </HighlightText><HighlightText query="readme.txt" className="text-[whitesmoke]">readme.txt</HighlightText></p>
                </motion.div>
                <div className="flex items-start gap-2 sm:gap-4 mt-4">
                    <motion.div
                        transition={{
                            delay: 1.5,
                            duration: 0.1
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}>
                        <p className="font-['Hack']">{`>`}</p>
                    </motion.div>
                    <motion.div
                        transition={{
                            delay: 1.5,
                            duration: 0.1
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}>
                        <div>
                            <p className="text-[whitesmoke] font-['Hack'] text-[12px]">
                                Name: Tran Duc Manh
                            </p>
                            <p className="text-[whitesmoke] font-['Hack'] text-[12px] mt-2">
                                Date of Birth: 2001/09/02
                            </p>
                            <p className="text-[whitesmoke] font-['Hack'] text-[12px] mt-2">
                                Language: Vietnamese, 日本語
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
const Skill = () => {
    return (
        <div className="flex justify-center mt-5">
            <div
                className="flex flex-col bg-[#333F50] border w-[90%] sm:w-[80%] md:w-1/2 xl:w-[40%] p-4 sm:p-8"
            >
                <motion.div
                    transition={{
                        delay: 1,
                        duration: 0.1
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}>
                    <p className="text-purple-500 text-[13px]">{'>'} <HighlightText query="cd" className="text-green-400">cd </HighlightText><HighlightText query="skills" className="text-blue-400">skills </HighlightText><HighlightText query=";ls" className="text-green-400">;ls</HighlightText></p>
                </motion.div>
                <div className="flex items-start gap-2 sm:gap-4 mt-4">
                    <motion.div
                        transition={{
                            delay: 1.5,
                            duration: 0.1
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}>
                        <p className="font-['Hack']">{`>`}</p>
                    </motion.div>
                    <motion.div
                        transition={{
                            delay: 1.5,
                            duration: 0.1
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex-1">
                        <div className="flex flex-wrap gap-y-2">
                            <div className="w-1/3"><p className="font-['Hack'] text-blue-400 text-[13px]">HTML</p></div>
                            <div className="w-1/3"><p className="font-['Hack'] text-blue-400 text-[13px]">CSS</p></div>
                            <div className="w-1/3"><p className="font-['Hack'] text-blue-400 text-[13px]">Javascript</p></div>
                            <div className="w-1/3"><p className="font-['Hack'] text-blue-400 text-[13px]">jQuery</p></div>
                            <div className="w-1/3"><p className="font-['Hack'] text-blue-400 text-[13px]">CakePHP</p></div>
                            <div className="w-1/3"><p className="font-['Hack'] text-blue-400 text-[13px]">phpMyAdmin</p></div>
                            <div className="w-1/3"><p className="font-['Hack'] text-blue-400 text-[13px]">ReactJS</p></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
const Bio = () => {
    return (
        <div className="flex justify-center mt-5 mb-2">
            <div
                className="flex flex-col bg-[#333F50] border w-[90%] md:w-[60%] xl:w-[40%] p-4 sm:p-8"
            >
                <motion.div
                    transition={{
                        delay: 1,
                        duration: 0.1
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}>
                    <p className="text-purple-500 text-[14px]">{'>'} <HighlightText query="cd" className="text-green-400">cd</HighlightText> <HighlightText query="bio" className="text-blue-400">bio</HighlightText></p>
                </motion.div>
                <div className="flex items-start gap-2 sm:gap-4 mt-4">
                    <motion.div
                        transition={{
                            delay: 1.5,
                            duration: 0.1
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}>
                        <p className="font-['Hack']">{`>`}</p>
                    </motion.div>
                    <motion.div
                        transition={{
                            delay: 1.5,
                            duration: 0.1
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}>
                        <div>
                            <p className="text-[whitesmoke] font-['Hack'] text-[13px]">2019 Sep -{`>`} Thuy Loi University</p>
                            <p className="text-[whitesmoke] font-['Hack'] text-[13px]">|</p>
                            <p className="text-[whitesmoke] font-['Hack'] text-[13px]">2024 Jun -{`>`} Working at WEBPX Software Co., Ltd</p>
                            <p className="text-[whitesmoke] font-['Hack'] text-[13px]">|</p>
                            <p className="text-[whitesmoke] font-['Hack'] text-[13px]">2025 May -{`>`} Graduate</p>
                            <p className="text-[whitesmoke] font-['Hack'] text-[13px]">|</p>
                            <p className="text-[whitesmoke] font-['Hack'] text-[13px]">2026 Feb -{`>`} Employee of the Year Award 2025</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
export const AboutMe = () => {
    return (
        <motion.div
            transition={{
                duration: 1,
                ease: "linear"
            }}
            initial={{
                marginTop: 40,
                opacity: 0
            }}
            animate={{
                marginTop: 0,
                opacity: 1
            }}
            exit={{ opacity: 0 }}>
            <div>
                <Helmet>
                    <title>About me</title>
                    <link rel="canonical" href="https://tranmanh02901.github.io/blog/#/about" />
                </Helmet>
            </div>
            <Txt />
            <Skill />
            <Bio />
        </motion.div>
    )
};
