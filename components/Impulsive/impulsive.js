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
                        <h1 className="z-10 text-3xl text-left w-fit text-[#e4ae8c] font-Gucci">BLOOM</h1>
                        <h1 className="z-10 text-sm text-left w-fit text-[#e4ae8c] font-Gucci">GUCCI</h1>
                    </div>
                    <Image src={gucci} className="-z-[0] absolute -right-0 top-0"/>
                    <Button price={200} color={"#cd9f82"} />
            </motion.div>

            <motion.div  className="relative overflow-hidden bg-[#efd9cb] [&::-webkit-scrollbar]:hidden snap-center mt-3 h-[300px] w-[250px] rounded-[20px] p-3">
                    <div className="z-10 absolute top-3 w-fit left-3">
                        <h1 className="z-10 text-3xl text-left w-fit text-[#676565] font-Zara">ZARA</h1>
                    </div>
                    <Image src={zara} className="-z-[0] absolute -right-0  top-0"/>
                    <Button price={80} color={"#6291b2"} />
            </motion.div>


            <motion.div  className="relative overflow-hidden bg-[#efd9cb] [&::-webkit-scrollbar]:hidden snap-center mt-3 h-[300px] w-[250px] rounded-[20px] p-3">
                    <div className="z-10 absolute top-3 w-fit left-3">
                        <h1 className="z-10 text-3xl text-left w-fit text-[#cf9977] font-NTW">Mokka</h1>
                        <h1 className="z-10 text-sm text-left w-fit text-[#cf9977] font-NTW">notwoways</h1>
                    </div>
                    <Image src={mokka2} className="-z-[0] absolute -right-0  top-0"/>
                    <Button price={100} color={"#cd9f82"} />
            </motion.div>

            <motion.div  className="relative overflow-hidden bg-[#efd9cb] [&::-webkit-scrollbar]:hidden snap-center mt-3 h-[300px] w-[250px] rounded-[20px] p-3">
                    <div className="z-10 absolute top-3 w-fit left-3">
                        <h1 className="z-10 text-3xl text-left w-fit text-[#ffffff] font-NTW">floe</h1>
                        <h1 className="z-10 text-sm text-left w-fit text-[#ffffff] font-NTW">notwoways</h1>
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
                <motion.p animate={{opacity:hover ? 0 : 1}} onAnimationComplete={() => {isDone ? setTimeout(() => {setIsDone(false); setHover(false);setWidth(220)}, 3000) : null}} transition={{duration:0.1}}>{isDone ? "Added" : "Order"} {isDone ? "" : <h1 className="absolute right-2.5 bottom-2.5 text-[#dbdad9] text-sm">${price}</h1>}</motion.p>
            </motion.div>
        </div>
        )
}


export default Implusive