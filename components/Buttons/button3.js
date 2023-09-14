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