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