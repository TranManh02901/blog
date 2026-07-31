import React from 'react';
import { motion } from 'framer-motion';
import { FiShare2, FiGithub, FiFacebook } from 'react-icons/fi';
import { FaXTwitter } from "react-icons/fa6";
import { FaRedditAlien, FaPinterest, FaLinkedin } from 'react-icons/fa';
import { useDisclosure } from '../hooks/useDisclosure';

const socialIconClass =
  "inline-flex h-10 w-10 items-center justify-center rounded-md bg-transparent transition-colors hover:bg-[rgba(52,52,52,0.2)]";

export const MusicMinimize = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <div className="flex justify-center mt-4 pb-4 xl:hidden">
        <button
          type="button"
          onClick={onToggle}
          className={`${socialIconClass} text-blackAlpha-700 dark:text-white`}
        >
          <FiShare2 />
        </button>
      </div>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <div className="flex justify-center mt-5 pb-12 xl:hidden">
          <div className="flex justify-center gap-4 rounded-md bg-[#2C3038] shadow-dark-lg">
            <button
              type="button"
              className={`${socialIconClass} text-blue-600`}
              onClick={() => {
                window.open("https://www.linkedin.com/in/manh-tran-7a8b903bb/")
              }}
            >
              <FaLinkedin />
            </button>
            <button
              type="button"
              className={`${socialIconClass} text-orange-600`}
              onClick={() => {
                window.open("https://www.reddit.com/user/Congaffff/")
              }}
            >
              <FaRedditAlien />
            </button>
            <button
              type="button"
              className={`${socialIconClass} text-blue-200`}
              onClick={() => {
                window.open("https://x.com/Just_Congaf")
              }}
            >
              <FaXTwitter />
            </button>
            <button
              type="button"
              className={`${socialIconClass} text-white`}
              onClick={() => {
                window.open("https://github.com/TranManh02901")
              }}
            >
              <FiGithub />
            </button>
            <button
              type="button"
              className={`${socialIconClass} text-blue-500`}
              onClick={() => {
                window.open("https://www.facebook.com/tmanh020901")
              }}
            >
              <FiFacebook />
            </button>
            <button
              type="button"
              className={`${socialIconClass} text-red-600`}
              onClick={() => {
                window.open("https://www.pinterest.com/Congaf0/")
              }}
            >
              <FaPinterest />
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};
