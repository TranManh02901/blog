import React from "react";
import { motion } from "framer-motion";
import profile from "../media/main-avt.jpg";

export default function Avt() {
  return (
    <div className="flex justify-center z-[1]">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
          delay: 1,
        }}
        className="w-full h-[120px]"
      >
        <img
          className="h-[120px] w-[120px] rounded-full shadow-dark-lg"
          src={profile}
          alt="profile"
        />
      </motion.div>
    </div>
  );
}
