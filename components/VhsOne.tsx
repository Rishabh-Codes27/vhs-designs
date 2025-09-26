
"use client";
import React from "react";
import { Cormorant_Garamond } from "next/font/google";
import "./style.css";
import { motion } from "motion/react";
import Noise from "./Noise";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  variable: "--font-cormorant",
});

const text = "RETROWAVE";

const aboveText = (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    whileInView={{  opacity: 1, y: 0 }}
    transition={{delay: 0.5, duration: 1, ease: "easeOut" }}
    className="flex items-center gap-1 justify-center mb-[-8px]"
  >
    <div className="flex space-x-0.5">
      {[...Array(10)].map((_, i) => (
        <span
          key={i}
          className="text-[#ff2020] text-[14px] relative glow-secondarytext leading-none"
        >
          ★
        </span>
      ))}
    </div>

    <div className="text-[#FF991C] text-sm uppercase ml-1 font-semibold tracking-widest relative glow-secondarytext leading-none">
      WE OPERATE IN SILENCE
    </div>

    <div className="text-[#FF991C] text-sm font-mono ml-1 relative glow-secondarytext leading-none">
      清华 教育保持不一样
    </div>
  </motion.div>
);

const belowText = (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{delay: 0.5,  duration: 1, ease: "easeOut" }}
    className="flex items-center justify-center text-white gap-1 mt-[-8px]"
  >
    <div className="glow-text relative flex flex-col text-[10px] gap-0 leading-tight">
      <span>est. 2020</span>
      <span>343/365</span>
    </div>

    {/* <div className="glow-text relative text-sm ml-1">AUTHENTIC PRODUCT</div> */}

    <div className="ml-2 flex space-x-0.5">
      {[...Array(25)].map((_, i) => (
        <span
          key={i}
          className=" text-[14px] text-white relative glow-text leading-none"
        >
          |
        </span>
      ))}
    </div>

    <div className="text-[#ff2020] glow-secondarytext relative ml-2 text-sm font-mono leading-tight">
       社交 媒体.COM
    </div>
  </motion.div>
)

const VhsOne = () => {
  return (
    <div className="h-screen container mx-auto bg-black text-white flex flex-col items-center justify-center relative space-y-0">
      {/* Noise overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 9999,
          overflow: "hidden",
        }}
      >
        <Noise
          patternSize={300}
          patternScaleX={2}
          patternScaleY={2}
          patternRefreshInterval={4}
          patternAlpha={25}
        />
      </div>

      {/* Main content */}
      {aboveText}

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1, ease: "easeInOut" }}
        className={`${cormorant.className} text-[100px] font-bold glow-text relative z-10 mb-[-20px] pb-[25px] pt-[15px]`}
        data-text={text}
        style={{ lineHeight: 1 }}
      >
        <h1 className="leading-none">
          <span className="color-shift italic">{text}</span>
        </h1>
      </motion.div>

      {belowText}
    </div>
  );
};

export default VhsOne;
