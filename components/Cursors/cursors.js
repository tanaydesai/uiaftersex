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