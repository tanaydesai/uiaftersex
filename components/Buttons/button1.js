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