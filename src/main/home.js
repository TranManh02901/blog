import React from 'react';
import almondblossom from "../media/flower2.jpg";
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
import HighlightText from '../components/HighlightText';

const infoLine = (query, children) => (
    <p className="break-all text-[8px] sm:text-[10px] ml-0 sm:ml-8 font-['Hack'] text-white">
        <HighlightText query={query} className="text-[#A9D18E]">
            {children}
        </HighlightText>
    </p>
);

export const Name = () => {
    return (
        <div className="flex justify-center">
            <h1
                className="mt-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Anurati'] text-blackAlpha-700 dark:text-white">
                TRAN DUC MANH
            </h1>
        </div>
    );
};
export const AboutMe = () => {
    return (
        <div className="flex justify-center">
            <p
                className="text-blackAlpha-700 dark:text-white text-[12px] md:text-[13px] lg:text-[15px] font-['Calibri_Light'] shadow-2xl rounded-3xl max-w-[500px] text-center m-10 p-5">
                Front-end Developer with 2+ years of experience working on real-world client projects. Skilled in converting Figma designs and templates into responsive, user-friendly web interfaces using HTML, CSS, JavaScript, jQuery. Also experienced in basic PHP backend tasks, including creating, updating, and managing data.
            </p>
        </div>
    )
}
export const Neofetch = () => {
    return (
        <div className="flex justify-center mt-10 mb-10">
            <div
                className="flex flex-col bg-[#333F50] border w-[90%] md:w-[80%] lg:w-[60%] xl:w-[40%] p-4 sm:p-12 overflow-hidden"
            >
                <motion.div
                    transition={{
                        delay: 1,
                        duration: 0.1
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}>
                    <p className="text-[14px] text-purple-500 ml-4 sm:ml-8">{'>'}<HighlightText query=" personal_info" className="text-green-500"> personal_info</HighlightText></p>
                </motion.div>
                <div className="flex flex-1 items-start gap-2 sm:gap-4 mt-4 overflow-hidden">
                    <motion.div
                        transition={{
                            delay: 1.5,
                            duration: 0.1
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}>
                        <p className="font-['Hack']">{'>'}</p>
                    </motion.div>
                    <motion.div
                        transition={{
                            delay: 1.5,
                            duration: 0.1
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-2/5 sm:w-3/12 flex-shrink-0">
                        <img src={almondblossom} alt="almondblossom"
                            className="w-full h-auto" />
                    </motion.div>
                    <motion.div
                        transition={{
                            delay: 1.5,
                            duration: 0.1
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-1 gap-2 overflow-auto">
                        <div>
                            <p className="text-[8px] sm:text-[10px] xl:text-[10px] ml-0 sm:ml-8 font-['Hack'] text-[#F4B183]">
                                <HighlightText query='TAKO' className="text-[#A9D18E]">
                                    My personal information
                                </HighlightText>
                            </p>
                            <p className="text-[8px] sm:text-[10px] xl:text-[15px] ml-0 sm:ml-8 font-['Hack'] text-white">
                                ----------------------
                            </p>
                            {infoLine('Name', 'Name: Tran Duc Manh')}
                            {infoLine('Day of birth', 'Day of birth: 02/09/2001')}
                            {infoLine('Address', 'Address: Hanoi, Vietnam')}
                            {infoLine('Email', 'Email: tranducmanh02901@gmail.com')}
                            {infoLine('Website', 'Website: https://tranmanh02901.github.io/blog/#/')}
                            {infoLine('Occupation', 'Occupation: Front-end Developer')}
                            {infoLine('Experience', 'Experience: 2+ years')}
                            {infoLine('Languages', 'Languages: Vietnamese, Japanese')}
                            {infoLine('Frontend', 'Frontend: HTML, CSS, JavaScript, ReactJS')}
                            {infoLine('Backend', 'Backend: PHP, MySQL')}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export const Home = () => {
    return (
        <motion.div
            transition={{
                duration: 1
            }}
            initial={{
                y: 20,
                opacity: 0
            }}
            animate={{
                y: 0,
                opacity: 1
            }}
            exit={{
                y: -20,
                opacity: 0
            }}>
            <div>
                <Helmet>
                    <title>Home Page</title>
                    <link rel="canonical" href="https://tranmanh02901.github.io/blog/#/" />
                </Helmet>
            </div>
            <Name />
            <AboutMe />
            <Neofetch />
        </motion.div>
    )
};
