import React from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Avt from "./avt"
import { BiHomeCircle, BiUser, BiFolderOpen, BiNews } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FiGithub, FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import Clock from "./Cock";
import { MusicMinimize } from "./musicterminal";
import { FaRedditAlien, FaPinterest, FaLinkedin } from 'react-icons/fa';
import { motion } from "framer-motion";
import Tooltip from "./Tooltip";

const socialIconClass =
  "inline-flex h-10 w-10 items-center justify-center rounded-md bg-transparent transition-colors hover:bg-[rgba(52,52,52,0.2)]";

const Inner1 = () => {
  return (
    <div className="grid h-10 grid-cols-12 gap-8">
      <div
        className="w-full rounded-md bg-[#2C3038] col-span-12 sm:col-span-12 md:[grid-column:span_13/span_13] lg:col-span-12 xl:col-span-4"
      >
        <div className="flex justify-center">
          <div className="grid grid-cols-5 gap-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{
                y: 12,
                opacity: 0
              }}>
              <ColorModeSwitcher />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <Tooltip label="Home">
                <Link to="/">
                  <button type="button" className={`${socialIconClass} text-[#FFFF00]`}>
                    <BiHomeCircle />
                  </button>
                </Link>
              </Tooltip>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <Tooltip label="About me">
                <Link to="about">
                  <button type="button" className={`${socialIconClass} text-[#F69C9C]`}>
                    <BiUser />
                  </button>
                </Link>
              </Tooltip>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <Tooltip label="Folder">
                <Link to="works">
                  <button type="button" className={`${socialIconClass} text-[#DEEBF7]`}>
                    <BiFolderOpen />
                  </button>
                </Link>
              </Tooltip>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <Tooltip label="News">
                <Link to="blogs">
                  <button type="button" className={`${socialIconClass} text-[#3e8cf5]`}>
                    <BiNews />
                  </button>
                </Link>
              </Tooltip>
            </motion.div>
          </div>
        </div>

      </div>
      <div
        className="col-start-5 col-end-9 rounded-md bg-[#2C3038] hidden xl:block"
      >
        <div className="flex justify-center">
          <div className="grid grid-cols-6 gap-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <button
                type="button"
                className={`${socialIconClass} text-blue-600`}
                onClick={() => {
                  window.open("https://www.linkedin.com/in/manh-tran-7a8b903bb/")
                }}>
                <FaLinkedin />
              </button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <button
                type="button"
                className={`${socialIconClass} text-orange-600`}
                onClick={() => {
                  window.open("https://www.reddit.com/user/Congaffff/")
                }}>
                <FaRedditAlien />
              </button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <button
                type="button"
                className={`${socialIconClass} text-blue-200`}
                onClick={() => {
                  window.open("https://x.com/Just_Congaf")
                }}>
                <FaXTwitter />
              </button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <button
                type="button"
                className={`${socialIconClass} text-white`}
                onClick={() => {
                  window.open("https://github.com/TranManh02901")
                }}>
                <FiGithub />
              </button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <button
                type="button"
                className={`${socialIconClass} text-blue-500`}
                onClick={() => {
                  window.open("https://www.facebook.com/tmanh020901")
                }}>
                <FiFacebook />
              </button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <button
                type="button"
                className={`${socialIconClass} text-red-600`}
                onClick={() => {
                  window.open("https://www.pinterest.com/Congaf0/")
                }}>
                <FaPinterest />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      <div
        className="col-start-10 col-end-13 rounded-md bg-[#2C3038] hidden xl:block"
      >
        <div className="flex justify-center mt-2 font-['Hack']">
          <Clock />
        </div>
      </div>
    </div>
  )
}
export const VeryBottom = () => {
  return (
    <div className="flex justify-center">
      <div className="grid h-10 rounded-md bg-[#1E222A] shadow-dark-lg md:w-3/5 lg:w-1/2 xl:w-1/2">
        <Inner1 />
      </div>
    </div>
  );
};

export const NavigationBar = () => {
  return (
    <div>
      <div className="fixed z-[2] mt-4 w-full">
        <VeryBottom />
      </div>
      <div>
        <div className="flex justify-center">
          <div className="flex justify-center mt-40 w-[40%] h-[150px]">
            <Avt />
            <div className="hidden xl:grid ml-20">
              <iframe
                title="Spotify Embed: Recommendation Playlist "
                src={`https://open.spotify.com/embed/track/0a32EBPjqAe47cYDPE5Ia5?utm_source=generator`}
                width="100%"
                height="152px"
                style={{ borderRadius: '12px' }}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              />
            </div>
          </div>
        </div>
        <MusicMinimize />
      </div>
    </div>
  )
}
