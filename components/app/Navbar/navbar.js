"use client";
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io"
import Link from "next/link";
import { useRouter } from "next/navigation";
import {AiFillGithub, AiOutlineTwitter} from "react-icons/ai"

const NavBar = () => {
    const [hover, setHover] = useState(false)
    const router = useRouter()
    const components = ["Impulsive", "Timemachine","Cmdkbox","Card","quickie","peek","springy","Cursors","Buttons"]

    const variants = {
        expanded:{
            height:[40,40,100,150,180,150],
            width:"350px",
            transition:{
                duration:0.4,
                type:"spring",
                stiffness:120,
                // duration:0.4
            }
        },
        collapsed:{
            width:"250px",
            height:"40px",
            transition:{
                duration:0.4,
                type:"spring",
                stiffness:100,
                damping:14,
            }
        }
    }


    return (
        <motion.div variants={variants} initial="collapsed" animate={hover ? "expanded" : "collapsed"} className="navbar">
            <div className="navbar-box gap-1 p-0 hover:opacity-100 hover:bg-[#F7F7F2]/[.60] inline-flex items-center">
                <p className="navbar-box" onClick={() => {router.push('/')
                    setHover(false)}}>Home</p>
                <motion.p className="navbar-box w-fit pl-0">{!hover ? <IoIosArrowDown onClick={() => setHover(!hover)} className='inline ml-2' /> : <IoIosArrowUp onClick={() => setHover(!hover)} className='inline ml-2' />}</motion.p>
            </div>
            <Link href="https://tanaydesai.vercel.app/"><p className="navbar-box">Tanay Desai →</p></Link>
            {hover && 
            <motion.div className="inline w-full my-2">
                {components.map(item => (
                    <p onClick={() => {
                        router.push(`/${item.toLocaleLowerCase()}`)
                        setHover(false)
                    }} className="navbar-box w-full my-0.5">{item}</p>
                ))}
               <Link href="https://github.com/tanaydesai/uiaftersex"><p className="navbar-box w-full mt-5 flex items-center gap-1"><AiFillGithub className="inline" /> GitHub</p></Link>
               <Link href="https://twitter.com/tanaydesaii"><p className="navbar-box w-full my-0.5 flex items-center gap-1"><AiOutlineTwitter className="inline" /> Twitter</p></Link>
             </motion.div>}   
        </motion.div>
    )
}

export default NavBar