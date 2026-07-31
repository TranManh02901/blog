import React, { useState } from "react";
import { AiFillFolder } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import HighlightText from "../components/HighlightText";

const FolderName = [
    {
        "name": "Templates",
        "link": "./templates"
    },
    {
        "name": "Other",
        "link": "./another"
    }
]

const DolphinTer = () => {
    return (
        <div className="flex justify-center mt-10 mb-10">
            <div
                className="grid bg-[#333F50] border h-[50px] w-[80%] sm:w-[60%] md:w-1/2 lg:w-[40%] xl:w-[30%] grid-rows-[repeat(8,1fr)] grid-cols-[repeat(24,1fr)]"
            >
                <div className="[grid-column:4/24] [grid-row:5/5]">
                    <p className="text-purple-500 text-[14px]"> {' > '} <HighlightText query="projects" className="text-blue-400">projects</HighlightText> </p>
                </div>
            </div>
        </div>
    )
}
const Dolphin = () => {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    return (
        <div className="flex justify-center mt-10 mb-10">
            <div
                className="flex flex-col bg-[#333F50] border w-[90%] md:w-4/5 lg:w-[70%] xl:w-[40%] p-4"
            >
                <input placeholder="Search..."
                    inputMode="search"
                    onChange={inputHandler}
                    className="h-10 w-full rounded-md border border-gray-200 dark:border-whiteAlpha-300 bg-gray-800 px-4 text-base font-['Hack'] focus:outline-none focus:border-gray-900 focus:shadow-[0_0_0_1px_#171923]" />
                <div
                    className="mt-4 bg-gray-800">
                    <div className="flex flex-wrap">
                        {
                            FolderName.filter(item => {
                                if (inputText === "") {
                                    return item;
                                }
                                else if (item.name.toLowerCase().includes(inputText.toLowerCase())) {
                                    return item;
                                }
                                return false;
                            }).map((item, index) => (
                                <div className="w-1/2 lg:w-1/3 m-0 p-10 box-border" key={index}>
                                    <Link to={item.link}>
                                        <button
                                            type="button"
                                            className="inline-flex h-20 w-20 items-center justify-center rounded-md bg-transparent transition-colors hover:bg-[rgba(52,52,52,0.2)]"
                                        >
                                            <AiFillFolder size="80" />
                                        </button>
                                    </Link>
                                    <p className="font-['Hack']">{item.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Works = () => {
    return (
        <div>
            <div>
                <Helmet>
                    <title>Projects</title>
                    <link rel="canonical" href="https://tranmanh02901.github.io/blog/#/works/" />
                </Helmet>
            </div>
            <DolphinTer />
            <Dolphin />
        </div>
    )
};
