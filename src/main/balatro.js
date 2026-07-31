import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Giscus from '@giscus/react';
import thumb from "../media/balatro/thumb.jpg";
import balatro1 from "../media/balatro/balatro1.png";
import balatro2 from "../media/balatro/balatro2.png"
import balatro3 from "../media/balatro/balatro3.png"
import balatro4 from "../media/balatro/balatro4.png"
import balatro5 from "../media/balatro/balatro5.png"
import balatro6 from "../media/balatro/balatro6.png"
import balatro7 from "../media/balatro/balatro7.png"
import balatro8 from "../media/balatro/balatro8.png"
import balatro9 from "../media/balatro/balatro9.png"
import balatro10 from "../media/balatro/balatro10.png"
import balatro11 from "../media/balatro/balatro11.png"
import balatro12 from "../media/balatro/balatro12.png"
import balatro13 from "../media/balatro/balatro13.png"
import balatro14 from "../media/balatro/balatro14.png"
import balatro15 from "../media/balatro/balatro15.png"
import balatro16 from "../media/balatro/balatro16.png"
import balatro17 from "../media/balatro/balatro17.mkv"
import balatro18 from "../media/balatro/balatro18.png"
import balatro19 from "../media/balatro/balatro19.png"
import code1 from "../media/balatro/code1.png"
import code2 from "../media/balatro/code2.png"
import { useColorModeValue } from "../hooks/useColorModeValue";

const linkClass = "text-[#a6637b] dark:text-[#61ba68]";
const imgClass = "justify-self-center rounded-[10px] mt-10 mb-10";

const Title = () => {
    return (
        <div className="flex justify-center">
            <h2
                className="font-['Anurati'] mt-20 text-[40px] text-blackAlpha-700 dark:text-white"
            >
                BALATRO
            </h2>
        </div>
    )
}
const Content = () => {
    return (
        <div className="flex justify-center mt-10">
            <div className="grid w-[95%] sm:w-4/5 md:w-[70%] lg:w-3/5">
                <p>Recently I found Balatro - a Poker (actually Big Two) based card game. I'm usually not good at all types of video games, and with curiosity, I decided to find out how this game was made.</p>
                <p>Based on wikipedia and google, this game was made by Löve - a framework that helps users program games using Lua. You can learn more about it <a className={linkClass} href="https://love2d.org/">here.</a></p>
                <p>The game directory only includes an executable file and some dll files, no folders. So my guess at the moment is that all the assets and logic of the game are packaged inside that exe file.</p>
                <img className={imgClass} src={balatro1} alt="balatro1" />
                <p>Continue searching on google with the keywords "Love2D", "windows", "executable" and I found a <a className={linkClass} href="https://love2d.org/wiki/Game_Distribution#Creating_a_Windows_Executable/">link</a> to love2d's wiki about creating exe file.</p>
                <p className="italic mt-10 text-gray-400 dark:text-[#656648]">Windows</p>
                <p className="italic text-gray-400 dark:text-[#656648]">To create your game executable under windows use the command line to run</p>
                <p className="italic mb-10 text-gray-400 dark:text-[#656648]">copy /b love.exe+SuperGame.love SuperGame.exe</p>
                <p>This information is really helpful. The command "copy /b ..." simply merges the binary of the two files together. In other words, if we have file A with the content "love" and file B with the content "2d", the command "copy /b A+B C" will create a file C with the content "love2d".</p>
                <p>The official file "love.exe" when opened alone will look like this:</p>
                <img className={imgClass} src={balatro2} alt="balatro2" />
                <p>With that in mind, let's try to unpack the game.</p>
                <p><a className={linkClass} href="https://www.garykessler.net/library/file_sigs.html?ref=esecurityinstitute.com/">This link</a> contains some information about file signatures - which will be extremely helpful in distinguishing between love.exe and the rest (the zip file).</p>
                <p>Accordingly, the exe file will start with "\x4d\x5a" (MZ) and the zip file will usually be "\x50\x4b\x03\x04" (PK....)</p>
                <p>First, we open the game's original exe file (Balatro.exe) in the hex editor to analyze.</p>
                <img className={imgClass} src={balatro3} alt="balatro3" />
                <p>Actually, we don't need to care whether the file starts with "MZ" or not because that's obvious. The "copy" command also creates an exe file, and for that exe file to be considered valid, it must begin with "MZ", and "MZ" is the beginning of "love.exe" anyway. So the remaining thing we need to find is where the zip file begins.</p>
                <p>Try searching "5b 40 03 04" and we get a lot of results: </p>
                <img className={imgClass} src={balatro4} alt="balatro4" />
                <p>But after trying to find out if there is a case where there are multiple zip files packed or not, it seems that there is usually only 1 zip file like the command on the wiki. And almost all the results (because I haven't looked at them all) are between a lot of garbages while only the first result is after "\x00\x00\x00\x00..."</p>
                <p className="mb-10">Considering that the first result will be the start of the zip file, I wrote a python script to extract it.</p>
                <img className={imgClass} src={code1} alt="code1" />
                <p className="mt-10">The exe file we just extracted needs some dlls (located in the original game folder), so we need to copy them to the same folder. Now test the exe file and what is displayed is exactly the same as the official "love.exe" file.</p>
                <img className={imgClass} src={balatro5} alt="balatro5" />
                <p>The next step is unzip the zip file. Our file was successfully recognized as a zip file and extracted without any error:</p>
                <img className={imgClass} src={balatro6} alt="balatro6" />
                <p>After looking around the code for a while, I believe we can do a lot of things with it, like creating new logic or modifying one or more existing logic, creating a new card with completely new effects, Change text in game, etc.</p>
                <p>As the two examples below, I will try to do the following two things: 1. Modifying the number of chips received to 1337; 2. Do the same thing, but for the money I would have received after each round.</p>
                <p>The number of chips will basically be calculated based on our hand (not including jokers and tarot cards). The evaluate_poker_hand function seems to be what performs the function of analyzing the hand and then returning the result as to what type it is.</p>
                <img className={imgClass} src={balatro7} alt="balatro7" />
                <img className={imgClass} src={balatro8} alt="balatro8" />
                <img className={imgClass} src={balatro9} alt="balatro9" />
                <p>The function evaluate_play calls 2 interesting functions: mod_mult and mod_chips.</p>
                <img className={imgClass} src={balatro10} alt="balatro10" />
                <img className={imgClass} src={balatro11} alt="balatro11" />
                <p>Change the return of mod_chips from _chips to 1337 and leave it there for now.</p>
                <p>Next, we'll try to modify the money. The amount to be added to the existing amount is always displayed next to the text "Cash out".</p>
                <img className={imgClass} src={balatro12} alt="balatro12" />
                <img className={imgClass} src={balatro13} alt="balatro13" />
                <img className={imgClass} src={balatro14} alt="balatro14" />
                <img className={imgClass} src={balatro15} alt="balatro15" />
                <img className={imgClass} src={balatro16} alt="balatro16" />
                <p>The way to win each blind is to have chips &gt;= a certain number of chips in each blind (G.GAME.chips (our chips) &gt;= G.GAME.blind.chips). Then it'll recalculate our money (dollar) by adding with G.GAME.blind.dollars. Let's change it to 1337 as well.</p>
                <p className="mb-10">Now the next step is pack the game back again. I also wrote a script to do that.</p>
                <img className={imgClass} src={code2} alt="packedaway" />
                <p className="mt-10">Now go to the directory that contains our patched game and run it.</p>
                <video
                    className="mt-10 mb-10 object-contain aspect-video"
                    controls
                    src={balatro17}
                    poster=''
                />
                <p>The chips became 1337 as expected, but the money was 1340 instead of 1337 because I modified it at the wrong place. The money is also modified with the number of hands/discards left + some bonuses.</p>
                <p>I test the game in the first round so there won't be any bonuses (from tarot or joker cards). So just modify the amount in case hand/discard left.</p>
                <img className={imgClass} src={balatro18} alt="balatro18" />
                <img className={imgClass} src={balatro19} alt="balatro19" />
                <p className="font-bold">Conclusion? I guess</p>
                <p className="mt-10 mb-10">Well... Nothing much to say about this. Love2D is an open-source so anyone can learn about it more easily than ever. The way a complete game file is created is just simply by joining two files together, absolutely no obfuscation. Most of the time we spend is to understand the logic of the game from the extracted source. The bigger the game, the more time it takes to understand it. Finally, the main reason I want to share this with everyone is because I personally think it's quite interesting for those who want to learn about how software like video games are made.</p>
            </div>
        </div>
    )
}

const Comment = () => {
    const theme = useColorModeValue('noborder_light', 'noborder_dark');
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
            theme={theme}
            lang="en"
            loading="lazy" />
    )
}

export const Balatro = () => {
    return (
        <motion.div
            transition={{
                duration: 1
            }}
            initial={{
                marginTop: 20,
                opacity: 0
            }}
            animate={{
                marginTop: 0,
                opacity: 1
            }}
            exit={{
                marginTop: 20
            }}
        >
            <div>
                <Helmet>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0,viewport-fit=cover" />
                    <title>Balatro - Playing around with Love2D game</title>
                    <meta name="author" content="0ji54n" />
                    <meta name="copyright" content="0ji54n" />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="theme-color" content="#0d0d0d" />
                    <meta name="description" content="Recently I found Balatro - a Poker (actually Big Two) - based card game. I'm usually not good at all types of video games, and with curiosity, I decided to find out how this game was made." />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="Balatro - Playing around with Love2D game" />
                    <meta property="og:url" content="https://tranmanh02901.github.io/blog/#/works/balatro" />
                    <meta property="og:site_name" content="0ji54n" />
                    <meta property="og:description" content="Recently I found Balatro - a Poker (actually Big Two) - based card game. I'm usually not good at all types of video games, and with curiosity, I decided to find out how this game was made." />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:image" content={thumb} />
                    <meta property="article:author" content="0ji54n" />
                    <meta property="article:tag" content="reverse engineering" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:image" content={thumb} />
                    <link rel="canonical" href="https://tranmanh02901.github.io/blog/#/works/balatro" />
                </Helmet>
            </div>
            <Title />
            <Content />
            <div className="flex justify-center">
                <div className="grid w-[95%] sm:w-4/5 md:w-[70%] lg:w-3/5">
                    <Comment />
                </div>
            </div>
        </motion.div>
    )
}
