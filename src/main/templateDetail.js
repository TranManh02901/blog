import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import HighlightText from "../components/HighlightText";

const buttonClass =
    "inline-flex h-10 min-w-[2.5rem] items-center justify-center whitespace-nowrap align-middle select-none rounded-md px-4 text-base font-semibold leading-[1.2] transition-colors bg-gray-100 dark:bg-whiteAlpha-200 hover:bg-gray-200 dark:hover:bg-whiteAlpha-300 shadow-dark-lg mt-10 mb-10";

export const TemplateDetail = ({ name, link, link_name, git_link, git_link_name, temp_title, temp_description, image, prev, next }) => {
    const title = name.replace(/_/g, " ");
    const textColorClass = "text-blackAlpha-700 dark:text-white";

    return (
        <motion.div
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
            <div className="flex justify-center">
                <h2 className={`text-center font-['Anurati'] mt-20 text-[30px] font-bold leading-[1.33] md:leading-[1.2] ${textColorClass}`}>
                    {title.toUpperCase()}
                </h2>
            </div>
            <div className="flex flex-col items-center text-center px-4 mt-4">
                <h1 className={`text-center font-sans font-bold text-2xl md:text-3xl leading-[1.33] md:leading-[1.2] mb-2 ${textColorClass}`}>
                    {temp_title}
                </h1>

                <a className="mb-[5px]" href={link} target="_blank" rel="noreferrer">Link Website
                </a>
                <a className="mb-[5px]" href={git_link} target="_blank" rel="noreferrer">Link Github
                </a>
            </div>

            <div className="flex justify-center mt-5 mb-2">
                <div
                    className="flex flex-col bg-[#333F50] border w-[90%] md:w-3/5 xl:w-[40%] p-4 sm:p-8"
                >
                    <motion.div
                        transition={{
                            delay: 1,
                            duration: 0.1
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}>
                        <p className="text-purple-500 text-[14px]">{'>'} <HighlightText query="bio" className="text-blue-400">description</HighlightText></p>
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
                            <p className="text-[whitesmoke] max-w-[800px] text-[14px] md:text-[16px]">
                                {temp_description}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-10 mb-10">
                <div className="flex p-[20px] bg-[gray] max-w-[95%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]">
                    <img
                        src={image}
                        alt={name} />
                </div>
            </div>
            <div className="flex justify-between max-w-[95%] md:max-w-[80%] lg:max-w-[60%] mx-auto pb-10">
                {prev ? (
                    <Link to={prev.link}>
                        <button type="button" className={buttonClass}>
                            <span className="mr-2"><FaAngleDoubleLeft /></span>
                            <span className={`text-[12px] md:text-[14px] ${textColorClass}`}>{prev.label}</span>
                        </button>
                    </Link>
                ) : <div />}
                {next ? (
                    <Link to={next.link}>
                        <button type="button" className={buttonClass}>
                            <span className={`text-[12px] md:text-[14px] ${textColorClass}`}>{next.label}</span>
                            <span className="ml-2"><FaAngleDoubleRight /></span>
                        </button>
                    </Link>
                ) : <div />}
            </div>
        </motion.div>
    );
};
