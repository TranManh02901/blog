import React from "react";
import { motion } from "framer-motion";
import HighlightText from "../components/HighlightText";

const DolphinTer = () => {
    return (
        <div className="flex justify-center mt-10 mb-10">
            <div
                className="grid bg-[#333F50] border h-[50px] w-[80%] sm:w-[60%] md:w-1/2 lg:w-[40%] xl:w-[30%] grid-rows-[repeat(8,1fr)] grid-cols-[repeat(24,1fr)]"
            >
                <div className="[grid-column:4/24] [grid-row:5/5]">
                    <p className="text-purple-500 text-[14px]">0ji54n@TAKO $~ <HighlightText query="dolphin" className="text-green-500">dolphin </HighlightText><HighlightText query="works" className="text-blue-400">works</HighlightText> </p>
                </div>
            </div>
        </div>
    )
}
const Dolphin = () => {
    return (
        <div className="flex justify-center mt-10 mb-10">
            <div
                className="grid bg-[#333F50] border h-[1000px] sm:h-[700px] md:h-[500px] xl:h-[550px] w-[90%] md:w-[80%] lg:w-[70%] xl:w-[40%]"
            >
                <div className="m-10">
                    <p className="font-['Hack'] text-[13px] italic">
                        “The Front Line Advanced Research and Expertise (FLARE) team is an elite technical group of malware analysts, researchers, and hackers. We are looking to hire smart individuals interested in reverse engineering. We have created this series of binary challenges to test your skills. We encourage anyone to participate and practice their skills while having fun!”
                    </p>
                    <p className="mt-5 font-['Hack'] text-[13px]">
                        Starting in 2014, Template is a world-scale Reverse Engineering CTF challenge that attracts many participants every year. They could be a skilled, talented professional, or could just be a student who has interested in this kind of stuff and can join the fun.
                    </p>
                    <p className="font-['Hack'] text-[13px] mt-5">
                        This folder contains solutions for Template 2022 (Template 9) challenges (There were 11 challenges and I only solved 7). Even though the CTF has ended, you still be able to download the challenges of this year and the year before that and try it yourself anytime. So if you want to try it first, get out of here now and come back again when you’re completely stuck. Or if you’ve completed the challenge and want to know how I solved it or for any other reasons, enjoy reading my writeups and I hope you also enjoy reading my blog!
                    </p>
                </div>
            </div>
        </div>
    )
}

export const WhatIsTemplate = () => {
    return (
        <motion.div
            transition={{
                duration: 1
            }}
            initial={{
                y: 40,
                opacity: 0
            }}
            animate={{
                y: 0,
                opacity: 1
            }}
            exit={{
                y: -40
            }}>
            <DolphinTer />
            <Dolphin />
        </motion.div>
    )
};
