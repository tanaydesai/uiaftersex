const Quickie =  `
"use client";
import React, { useState,useRef } from "react";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import { motion,useMotionValue,useSpring,useTransform, } from "framer-motion";


const Quickie = () => {
    const [open, setOpen] = useState(false)
    let mouseX = useMotionValue(Infinity);
    const meun = ["Peek","Timemachine","Cmdkbox","Card"]
    const socials = ["X","Github"]

    return (
        <div className="w-full h-full flex justify-center items-center">
            <motion.div whileHover={open && {scale:1.3,transition:{duration:0.2}}} className="z-10">{!open ? <AiOutlineMenu onClick={() => setOpen(!open)} /> : <AiOutlineClose onClick={() => setOpen(!open)} />}</motion.div>
            {open && <motion.div animate={{opacity:[0,0.8],transition:{duration:0.2}}} className="fixed m-0 bottom-0 w-screen h-full bg-[#f1f1f1]" />}

            {open && 
                <motion.div animate={{y:-100,height:[50,50,100,150,180,150],transition:{type:"spring",stiffness:120,duration:0.4}}} className="z-10 flex gap-6 absolute mr-[110px]">
                    <motion.div onMouseMove={(e) => mouseX.set(e.pageY)} onMouseLeave={() => mouseX.set(Infinity)} >
                        {meun.map((item) => (
                            <Item  mouseX={mouseX} text={item} />
                        ))}
                    </motion.div>
                    <div className="w-[32px] rounded-[15px] bg-white">
                        {Array(meun.length).fill(0).map((item, index) => (
                            <motion.div whileHover={{scale:1.3,transition:{duration:0.2}}} className="bg-gray-500 mt-6 m-auto w-2 rounded-full h-2" />
                        ))}
                    </div>
                </motion.div>} 
            {open && 
                <motion.div animate={{y:70,height:[50,60,80,100,90],transition:{type:"spring",stiffness:120,duration:0.4}}} className="z-10 flex gap-6 absolute mr-[70px]">
                    <motion.div onMouseMove={(e) => mouseX.set(e.pageY)} onMouseLeave={() => mouseX.set(Infinity)} >
                        {socials.map((item) => (
                            <Item mouseX={mouseX} text={item} />
                        ))}
                    </motion.div>
                    <div className="w-[32px] rounded-[15px] bg-white">
                        {Array(socials.length).fill(0).map((item, index) => (
                            <motion.div whileHover={{scale:1.3,transition:{duration:0.2}}} className="bg-gray-500 mt-6 m-auto w-2 rounded-full h-2" />
                        ))}
                    </div>
                </motion.div>}
        </div>
    )
}

const Item = ({ mouseX, text }) => {
    let refLol = useRef(null);
   
    let distance = useTransform(mouseX, (val) => {
      let bounds = refLol.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
      return val - bounds.y - bounds.height / 2 ;
    });
  
    let widthSync = useTransform(distance, [-50, 0, 50], [1, 1.25, 1]);
    let scale = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 10 });

    return (
      <motion.div ref={refLol} style={{ scale}} className="cursor-pointer right-[50px] mt-4 text-xs uppercase text-gray-500 text-right">
        {text}
      </motion.div>
    );
  }

export default Quickie;
`
const peek = `
"use client"
import React, {useState} from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import peekImg from "@/assests/images/arc.png";
import { AiFillCloseCircle } from "react-icons/ai";

const Peek = () => {
  const [open , setOpen] = useState(false)

  const change = () => {
    setOpen(!open)
  }

  return (
   <div className='flex justify-center [font-family:"SupplyLRegular"] max-w-[623px] h-[500px] text-center text-[rgb(47,47,47)] m-auto p-8'>

      <p className="[mask:linear-gradient(to_bottom,rgba(0,0,0,1)_0,rgba(0,0,0,1)_20%,rgba(0,0,0,0)_85%,rgba(0,0,0,0)_0)_100%_100%_/_100%_100%_repeat-x]">
        Government bonds are typically bought by a wide range of investors, including individual investors, pension me, click <span className="bg-[bisque] cursor-default p-[3px] rounded-[10px] hover:opacity-70 inline" onClick={change}>arc.com</span> funds, mutual funds, hedge funds, and foreign governments. These investors are attracted to government bonds because they are considered to be a safe investment, backed by the full faith and credit of the government that issues them. As a result, they offer a relatively low risk of default and provide a steady stream of income through regular interest payments.
        In the case of government bonds, the borrowers are national governments, which issue the bonds to fund their operations and pay off existing debt. Governments issue bonds when they need to borrow money from investors to finance their budget deficits or to fund specific programs or projects. For example, a government might issue bonds to fund the construction of new infrastructure, such as roads, bridges, or airports.
        When a government issues bonds, it agrees to pay interest to investors at a predetermined rate, usually semi-annually or annually. The interest rate on government bonds is determined by the prevailing market interest rates, as well as the creditworthiness of the issuing government. The term of government bonds can vary widely, ranging from a few months to several decades, depending on the needs of the issuing government.
      </p>

      {open && <motion.div initial={{scale:0.7}} animate={{scale:[0.7,1.1,1]}} transition={{type:"ease" ,duration: 0.3,time:[0,0.7 ** 0.3,0.3 ]}}  className="fixed w-[70%] max-w-[500px] h-[430px] justify-center items-center z-[9999] rounded-[10px]">
        <button onClick={change} className='bg-transparent float-right border-transparent'><AiFillCloseCircle size={15}/></button>
        <div className='[&::-webkit-scrollbar]:hidden h-full overflow-y-auto  rounded-[10px]'>
          <Image className='max-w-full h-auto rounded-[17px]' src={peekImg} alt=""></Image>
        </div>
      </motion.div>}

    </div>
    )
}


export default Peek;
`
const card = `
"use client"
import styles from "./gradient.module.css"
import React,{useState, useEffect, useRef} from 'react';
import Image from "next/image";
import img from "@/assests/images/arc.png"
import {motion, useMotionValue, useTransform } from "framer-motion";

const CardExploreAI = () => {  
        const x = useMotionValue(200);
        const y = useMotionValue(200);
    
        const rotateX = useTransform(y, [0, 400], [15, -15]);
        const rotateY = useTransform(x, [0, 400], [-15, 15]);
    
        function handleMouse(event) {
            const rect = event.currentTarget.getBoundingClientRect();
    
            x.set(event.clientX - rect.left);
            y.set(event.clientY - rect.top);
        }

    return (  
        <div>
            <motion.div onMouseMove={handleMouse} style={{ perspective: 400, placeItems: "center"}} className="w-full rounded-[20px] h-full flex flex-wrap gap-1 items-center justify-items-center my-10">
                <motion.div className="min-w-[400px] max-w-2/6 mx-auto" style={{rotateX, rotateY}}>
                        <div className="w-[260px] h-[400px] shadow-[0_16px_70px_rgb(0_0_0_/_20%)] [transform-style:preserve-3d] bg-paper bg-contain overflow-hidden m-auto p-2.5 rounded-[15px]">
                            <div className={styles.gradient}><div className={styles.circles}></div></div>
                            <div className="[&::-webkit-scrollbar]:hidden overflow-y-auto w-[95%] h-[200px] m-auto rounded-[15px]"><Image src={img} className='max-w-full h-auto' alt="" /></div>
                            <div className="relative text-left mt-[13px] p-2.5">
                                <p className="[font-family:'LufgaLight'] text-[#868686] text-[10px]">22.09.23</p>
                                <h2 className="[font-family:'Maglite'] text-lg text-[black] mt-[6px]">Explore AI</h2>
                                <p className="[font-family:'LufgaLight'] text-[#868686] text-[11px] leading-[18px] mt-[10px]">An AI Powered Search for Youtube Videos. Enables search for answers directly inside thousands of YouTube videos, free-of-cost, easy-to-navigate and fast.</p>
                            </div>
                        </div>
                </motion.div>
            </motion.div>
        </div>  
    )
}

export default CardExploreAI
`
const timemachine = `
import React, { useRef,useState, useEffect } from "react";
import { motion } from "framer-motion";
import move from "lodash-move";
import Image from "next/image";
import spacex from "@/assests/images/spacex.png"
import tesla from "@/assests/images/tesla.png"
import apple from "@/assests/images/apple.png"
import arc from "@/assests/images/arc.png"
import {HiArrowSmallRight} from "react-icons/hi2";

const TimeMachine = () => {
    const CARD_OFFSET = 50; 
    const SCALE_FACTOR = 0.2;
    const CARD_COLORS = [{Name:"arc.net",Image:arc},{Name:"tesla.com",Image:tesla},{Name:"spacex.com",Image:spacex}, {Name:"apple.com",Image:apple}];
    const [cards, setCards] = useState(CARD_COLORS);
    const moveToEnd = from => {
        setCards(move(cards, from, 0));
    };

    return (
        <div>
            {cards.map((site, index) => {
                return (
                    <motion.div key={site.Name}
                        animate={{
                            marginTop:"220px",
                            top: index * -CARD_OFFSET,
                            scale: 1 - index * SCALE_FACTOR,
                            zIndex: CARD_COLORS.length - index,
                            transition:{duration:0.4}
                    }} whileHover={{scale: 1.02 - index * SCALE_FACTOR, transition:{duration:0.1}}} onTap={() => moveToEnd(index)} className='bg-[#f1f1f1] sm:min-w-[34%] sm:max-w-[50%] sm:left-[33%] shadow-[rgba(0,0,0,0.3)_0px_8px_30px_0px] absolute min-w-[63%] h-[300px] origin-[top_center] overflow-hidden m-auto rounded-[17px] left-[18%]'>
                        <div className="bg-[#f1f1f1] h-[45px] flex p-1 rounded-t-lg">
                            <div className='flex h-[15px] w-[55px] text-center justify-center m-auto'>
                                <div className='bg-[#bfbdbd] w-[10.5px] h-[10.5px] flex mx-1 m-auto rounded-[20px]'></div>
                                <div className='bg-[#bfbdbd] w-[10.5px] h-[10.5px] flex mx-1 m-auto rounded-[20px]'></div>
                                <div className='bg-[#bfbdbd] w-[10.5px] h-[10.5px] flex mx-1 m-auto rounded-[20px]'></div>
                            </div>
                            <div className='flex h-[30px] w-[70%] rounded text-black items-center text-xs bg-white m-auto p-[5px]'>{site.Name}</div>
                            <motion.div  whileHover={{scale: 1.1}} className='flex m-auto'><HiArrowSmallRight color='black' size={20}></HiArrowSmallRight></motion.div>
                        </div> 
                        <div className='[&::-webkit-scrollbar]:hidden overflow-y-auto absolute h-full m-auto'>
                            <Image src={site.Image} style={{maxWidth: "100%",height: "auto"}}></Image>
                        </div>
                    </motion.div> 
            );})}
        </div>
    )
}

export default TimeMachine;
`
const cursors = `
"use client"
import React, { useState } from "react"
import {motion} from "framer-motion";
import useMouse from "@react-hook/mouse-position";


const Cursors = () => {
    const ref = React.useRef(null);
    const [show, setShow] = useState(false);
    const mouse = useMouse(ref, {
        enterDelay: 50,
        leaveDelay: 50
    });

    let mouseXPosition = 0;
    let mouseYPosition = 0;

    if (mouse.x !== null) {
        mouseXPosition = mouse.pageX;
    }
    if (mouse.y !== null) {
        mouseYPosition = mouse.pageY;
    }

    const variants = {
        hidden: {
            opacity: 0,
            scale:0.1,
            x: mouseXPosition,
            y: mouseYPosition,
            transition: {duration:0.1}
        },
        visible: {
            opacity: 1,
            scale:1,
            x: mouseXPosition,
            y: mouseYPosition,
            transition: {duration:0.1}
        }
    }

    const types = {
        'first': "fixed rounded-[15px] text-[14px] font-Maglite flex items-center justify-center bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white w-[80px] h-6 top-0 left-0 cursor-none",
        'second': "fixed text-[30px] top-0 left-0",
        "third": "fixed rounded-[15px] backdrop-blur-[135px] px-2 bg-gray-500/[.60] text-[14px] font-SupplyLRegular text-white flex items-center justify-center w-[100px] h-6 top-0 left-0"
    }


    return (
        <div ref={ref} className="absolute mt-10 px-5 w-full left-0 overflow-auto [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-5 w-fit mx-auto items-center justify-center">
                {/* Cards */}
                <motion.div onMouseEnter={() => setShow('first')} onMouseLeave={() => setShow(false)}className="w-[280px] relative h-[400px] rounded-2xl bg-pink-500 flex bg-uiaftersex bg-cover cursor-none"></motion.div>
                <motion.div onMouseEnter={() => setShow("second")} onMouseLeave={() => setShow(false)} className="w-[280px] relative h-[400px] rounded-2xl bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 flex items-center justify-center cursor-none"><h1 className="font-Maglite text-white text-[30px]">Space Explorer</h1></motion.div>
                <motion.div onMouseEnter={() => setShow("third")} onMouseLeave={() => setShow(false)} className="w-[280px] relative h-[400px] rounded-2xl bg-whiteplaster flex bg-cover cursor-none items-center justify-center"><h1 className="font-Maglite px-2 text-white text-[20px] w-full">"whoever controls the cursors, controls the universe". <br/><br/> ~ no one.</h1></motion.div>

                {/* Cursors */}
                <motion.div initial="hidden" variants={variants} animate={show === 'first' ? "visible" : "hidden"} transition={{type: "spring",stiffness: 120}} className={types["first"]}>uiaftersex</motion.div>
                <motion.div initial="hidden" variants={variants} animate={show === 'second'? "visible" : "hidden"} transition={{type: "spring",stiffness: 120}} className={types["second"]}>🚀</motion.div>
                <motion.div initial="hidden" variants={variants} animate={show === 'third' ? "visible" : "hidden"} transition={{type: "spring",stiffness: 120}} className={types["third"]}>click me →</motion.div>
           </div>
        </div>
    )
}

export default Cursors
`
const springy = `
"use client";
import React, { useState,useRef } from "react";
import { motion,useMotionValue,useSpring,useTransform, } from "framer-motion";
import { distance } from "@popmotion/popcorn";
import Image from "next/image";
import { springimgs } from "./images";

const grid = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]];
const size = 60;
const gap = 10;

const Square = ({ active, setActive, colIndex, rowIndex, x, y }) => {
  const isDragging = colIndex === active.col && rowIndex === active.row;
  const diagonalIndex = (360 / 6) * (colIndex + rowIndex);
  const d = distance({ x: active.col, y: active.row },{ x: colIndex, y: rowIndex });
  const springConfig = {stiffness: Math.max(700 - d * 120, 0),damping: 20 + d * 5};
  const dx = useSpring(x, springConfig);
  const dy = useSpring(y, springConfig);

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
      dragElastic={1}
      onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
      style={{
        background: 'hsla(calc(var(--base-hue) + diagonalIndex), 80%, 60%, 1)',
        width: size,
        height: size,
        top: rowIndex * (size + gap),
        left: colIndex * (size + gap),
        position: "absolute",
        // borderRadius: "50%",
        x: isDragging ? x : dx,
        y: isDragging ? y : dy,
        zIndex: isDragging ? 1 : 0
      }}
      className="overflow-hidden"
    >
        <Image src={springimgs[colIndex * 4 + rowIndex]} className="w-full h-auto pointer-events-none"></Image>
    </motion.div>
  );
};

const Spring = () => {
  const [active, setActive] = useState({ row: 0, col: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <div className="flex items-center place-content-center place-items-center justify-center text-center">
      <motion.div transition={{ duration: 10, loop: Infinity, ease: "linear" }}  style={{ width: "100%", height: "100%" }}>
        <motion.div style={{display: "flex",width: (size + gap) * 4 - gap,height: (size + gap) * 4 - gap,transform: "translate(0%, 0%)",perspective: 500, position: "relative"}}>
          {grid.map((row, rowIndex) => 
            row.map((_item, colIndex) => (
              <Square x={x} y={y} active={active} setActive={setActive} rowIndex={rowIndex} colIndex={colIndex} key={rowIndex + colIndex}/>
            ))
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}


export default Spring
`
const impulsive = `
"use client"
import React, { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import gucci from "@/assests/images/gucci.jpg"
import zara from "@/assests/images/zara.jpg"
import mokka2 from "@/assests/images/mokka.jpg"
import flow from "@/assests/images/floe.jpeg"
import { HollowDotsSpinner } from 'react-epic-spinners'


export const Implusive = () => {

    return (
        <div className="bg-red-100/[0.6] shadow-[0px_10px_38px_-10px_rgba(22,23,24,0.35),0px_10px_20px_-15px_rgba(22,23,24,0.2)] rounded-[22px] snap-y h-[318px] w-fit mx-auto p-3 overflow-auto [&::-webkit-scrollbar]:hidden">
            <motion.div  className="relative overflow-hidden bg-[#efd9cb] [&::-webkit-scrollbar]:hidden snap-center mt-3 h-[300px] w-[250px] rounded-[20px] p-3">
                    <div className="z-10 absolute top-3 w-fit left-3">
                        <h1 className="text-3xl text-left w-fit text-[#e4ae8c] font-Gucci">BLOOM</h1>
                        <h1 className="text-sm text-left w-fit text-[#e4ae8c] font-Gucci">GUCCI</h1>
                    </div>
                    <Image src={gucci} className="-z-[0] absolute -right-0 top-0"/>
                    <Button price={200} color={"#cd9f82"} />
            </motion.div>

            <motion.div  className="relative overflow-hidden bg-[#efd9cb] [&::-webkit-scrollbar]:hidden snap-center mt-3 h-[300px] w-[250px] rounded-[20px] p-3">
                    <div className="z-10 absolute top-3 w-fit left-3">
                        <h1 className="text-3xl text-left w-fit text-[#676565] font-Zara">ZARA</h1>
                    </div>
                    <Image src={zara} className="-z-[0] absolute -right-0  top-0"/>
                    <Button price={80} color={"#6291b2"} />
            </motion.div>


            <motion.div  className="relative overflow-hidden bg-[#efd9cb] [&::-webkit-scrollbar]:hidden snap-center mt-3 h-[300px] w-[250px] rounded-[20px] p-3">
                    <div className="z-10 absolute top-3 w-fit left-3">
                        <h1 className="text-3xl text-left w-fit text-[#cf9977] font-NTW">Mokka</h1>
                        <h1 className="text-sm text-left w-fit text-[#cf9977] font-NTW">notwoways</h1>
                    </div>
                    <Image src={mokka2} className="-z-[0] absolute -right-0  top-0"/>
                    <Button price={100} color={"#cd9f82"} />
            </motion.div>

            <motion.div  className="relative overflow-hidden bg-[#efd9cb] [&::-webkit-scrollbar]:hidden snap-center mt-3 h-[300px] w-[250px] rounded-[20px] p-3">
                    <div className="z-10 absolute top-3 w-fit left-3">
                        <h1 className="text-3xl text-left w-fit text-[#ffffff] font-NTW">floe</h1>
                        <h1 className="text-sm text-left w-fit text-[#ffffff] font-NTW">notwoways</h1>
                    </div>
                    <Image src={flow} className="-z-[0] absolute -right-0   top-0"/>
                    <Button price={100} color={"#7ab1be"} />
            </motion.div>
        </div>
    )
}

const Button = ({price, color}) => {
    const [hover, setHover] = useState(false)
    const [isDone, setIsDone] = useState(false)
    const [ width, setWidth ] = useState(220)

    {hover && setTimeout(() => {
        setHover(false)
        setIsDone(true)
        setWidth(140)
    }, 2000)}

    const pathVariantsA = {
        hidden: {
            opacity:0,
            pathLength:0
        },
        visible: {
            opacity:1,
            pathLength:1,
            scale:[0.9,0.9,1,1.1,1.16,1.1,1],
            transition:{
                duration:0.7,
                fade:0.7
            }
        }
    }
    return (
        <div>
            <motion.div initial={{width:220}} animate={{width:width,backgroundColor:isDone ? "#00ff00" : color}} whileHover={{scale:0.93}} onTap={() => {setHover(true); setIsDone(false); setWidth(120)}} transition={{duration:0.2,type:"spring",stiffness:120,bounce:0.4}} className="bg-[#cd9f82]/[.6] overflow-hidden backdrop-blur-[30px] shadow-[0px_10px_38px_-10px_rgba(22,23,24,0.35),0px_10px_20px_-15px_rgba(22,23,24,0.2)] h-[40px] rounded-[18px] mx-auto mt-[235px] flex gap-2 items-center cursor-default text-xl justify-center text-white">
                {hover && <HollowDotsSpinner color="white" size={7} className='absolute'/>}
                {isDone && <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><motion.path variants={pathVariantsA} initial="hidden" animate={isDone ? "visible" : "hidden"} d="M7 12.5l3 3 7-7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></motion.path><motion.path variants={pathVariantsA} initial="hidden" animate={isDone ? "visible" : "hidden"} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></motion.path></svg>}
                <motion.p animate={{opacity:hover ? 0 : 1}} onAnimationComplete={() => {isDone ? setTimeout(() => {setIsDone(false); setHover(false);setWidth(220)}, 3000) : null}} transition={{duration:0.1}}>{isDone ? "Added" : "Order"} {isDone ? "" : <h1 className="absolute right-2.5 bottom-2.5 text-[#dbdad9] text-sm">{price}</h1>}</motion.p>
            </motion.div>
        </div>
        )
}


export default Implusive
`

const button1 = `
"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"


const Button1 = () => {
    const [ hover, setHover ] = useState(false)

    const pathVariantsA = {
        hidden: {
            opacity:0,
            pathLength:0
        },
        visible: {
            opacity:1,
            pathLength:1,
            scale:[0.9,0.9,1,1.1,1.12,1.1,1],
            transition:{
                duration:0.7,
                fade:0.7
            }
        }
    }
    const pathVariantsB = {
        hidden: {
            opacity:0,
            pathLength:0
        },
        visible: {
            opacity:1,
            pathLength:1,
            scale:[0.8,0.9,1,1.5,2,1.5,1],
            rotate:[0,30,45,60,90,120,135,150,180,210,240,270,300,330,360],
            transition:{
                duration:2,
                type:"spring",
                stiffness:120,
                bounce:1,
            }
            }
        }
    return (
        <div>
            <motion.div initial={{width:110}} whileHover={{width:135}} onHoverStart={() => setHover(true)} onHoverEnd={() => setHover(false)} transition={{duration:0.2,type:"spring",stiffness:120,bounce:0.2}} className="rounded-[15px] cursor-pointer mx-auto hover:bg-black hover:text-white flex gap-2 items-center justify-center border-solid border-[2px] border-[#000000] px-4 h-[35px]">
                {hover && 
                <motion.svg width="18px" height="18px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff">
                    <motion.path variants={pathVariantsA} initial="hidden" animate={hover ? "visible" : "hidden"} d="M21 13v3a4 4 0 01-4 4H7a4 4 0 01-4-4v-2.4a.6.6 0 01.6-.6H21zM16 20l1 2M8 20l-1 2M21 13V7a4 4 0 00-4-4h-5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></motion.path>
                    <motion.path variants={pathVariantsB} initial="hidden" animate={hover ? "visible" : "hidden"} d="M15.4 8H8.6c-.331 0-.596-.268-.56-.598C8.186 6.075 8.863 3 12 3s3.814 3.075 3.96 4.402c.036.33-.229.598-.56.598z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></motion.path>
                </motion.svg>}
                {!hover && 
                <svg width="18px" height="18px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                    <path d="M6.906 4.537A.6.6 0 006 5.053v13.894a.6.6 0 00.906.516l11.723-6.947a.6.6 0 000-1.032L6.906 4.537z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>}
                <p className="[font-family:'Calming'] text-[17px]">Start</p>
            </motion.div>
        </div>
        )
}


export default Button1
`
const button2 = `
"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { HollowDotsSpinner } from 'react-epic-spinners'


const Button2 = () => {
    const [hover, setHover] = useState(false)
    const [isDone, setIsDone] = useState(false)
    const [ width, setWidth ] = useState(150)


    {hover && setTimeout(() => {
        // Can add any function here
        // Run these after function runs/returns data successfully
        // Button will be 'loading' untill then
        setHover(false)
        setIsDone(true)
        setWidth(140)
    }, 2000)}

    const pathVariantsA = {
        hidden: {
            opacity:0,
            pathLength:0
        },
        visible: {
            opacity:1,
            pathLength:1,
            scale:[0.9,0.9,1,1.1,1.16,1.1,1],
            transition:{
                duration:0.7,
                fade:0.7
            }
        }
    }
    return (
        <div>
            {/* Color Time */}
            <motion.div initial={{width:150}} animate={{width:width,backgroundColor:isDone ? "#00ff00" : "black"}} onTap={() => {setHover(true)
            setIsDone(false)
            setWidth(80)}} transition={{duration:0.2,type:"spring",stiffness:120,bounce:0.4}} className="rounded-[15px] w-fit break-keep bg-black overflow-hidden cursor-pointer text-center flex gap-2 text-white mx-auto items-center justify-center px-4 h-[35px]">
                {hover && <HollowDotsSpinner color="white" size={7} className='absolute'/>}
                {isDone && <svg width="20px" height="20px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><motion.path variants={pathVariantsA} initial="hidden" animate={isDone ? "visible" : "hidden"} d="M7 12.5l3 3 7-7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></motion.path><motion.path variants={pathVariantsA} initial="hidden" animate={isDone ? "visible" : "hidden"} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></motion.path></svg>}
                {!isDone && <svg width="20px" height="20px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M18 22a3 3 0 100-6 3 3 0 000 6zM18 8a3 3 0 100-6 3 3 0 000 6zM6 15a3 3 0 100-6 3 3 0 000 6z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.5 6.5l-7 4M8.5 13.5l7 4" stroke="#ffffff" stroke-width="1.5"></path></svg>}
                <motion.p animate={{x:hover ? 200 : 0}} onAnimationComplete={() => {isDone ? setTimeout(() => {setIsDone(false) 
                    setHover(false)
                    setWidth(150)}, 3000) : null}} transition={{duration:0.3}} className="[font-family:'Maglite'] break-keep w-fit text-[17px] h-[20px]">{isDone ? "Secure" : "Transaction"}</motion.p>
            </motion.div>
        </div>
        )
}


export default Button2
`
const button3 = `
"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import {HiOutlineArrowUpRight} from "react-icons/hi2"

const Button3 = () => {
    const [hover, setHover] = useState(false)
    const [isDone, setIsDone] = useState(false)

    return (
        <div>
            <motion.div onHoverStart={() => setHover(true)} onHoverEnd={() => setHover(false)} className="h-[35px] mx-auto relative hover:bg-white hover:text-black hover:duration-700 cursor-default w-[200px] break-keep p-3 overflow-hidden rounded-2xl text-white gap-3 text-center flex items-center">
                <div class="relative flex h-3 w-3">
                    <div class="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></div>
                    <div class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></div>
                </div>
                <motion.p animate={{ y: hover ? -50 : 0}} className="[font-family:'Calming']">Work Email</motion.p>
                {hover && <motion.p initial={{ y: 50}} animate={{ y: 0 }} className="[font-family:'Calming'] absolute ml-7 flex gap-1 break-keep items-center">rob@gmail.com <HiOutlineArrowUpRight size={15} /></motion.p>}
            </motion.div>
        </div>
        )
}


export default Button3
`


export const components = {
  "quickie": {"code": Quickie, "path": "/components/lab/Quickie/quickie.js"},
  "timemachine": {"code": timemachine, "path": "/components/lab/Timemachine/timemachine.js"},
  "card": {"code": card, "path": "/components/lab/Card/card.js"},
  "impulsive": {"code": impulsive, "path": "/components/lab/Impulsive/impulsive.js"},
  "springy": {"code": springy, "path": "/components/lab/Springy/spring.js"},
  "peek": {"code": peek, "path": "/components/lab/Peek/peek.js"},
  "cursors": {"code": cursors, "path": "/components/lab/Cursors/cursors.js"},
  "button1": {"code": button1, "path": "/components/app/Buttons/button1.js"},
  "button2": {"code": button2, "path": "/components/app/Buttons/button2.js"},
  "button3": {"code": button3, "path": "/components/app/Buttons/button3.js"},
}