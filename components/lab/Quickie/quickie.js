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