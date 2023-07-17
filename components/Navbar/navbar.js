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
    const components = ["Peek","Timemachine","Cmdkbox","Card"]

    const variants = {
        expanded:{
            height:"150px",
            width:"350px",
            transition:{
                duration:0.25
            }
        },
        collapsed:{
            width:"300px",
            height:"40px",
            transition:{
                duration:0.25
            }
        }
    }

    return (
        <motion.div variants={variants} initial="collapsed" animate={hover ? "expanded" : "collapsed"} className="navbar">
            <div className="navbar-box inline-flex items-center">
                <p onClick={() => {router.push('/')}}>Home</p>
                <p>{!hover ? <IoIosArrowDown onClick={() => setHover(!hover)} className='inline ml-2' /> : <IoIosArrowUp onClick={() => setHover(!hover)} className='inline ml-2' />}</p>
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
               <Link href="https://github.com/tanaydesai/"><p className="navbar-box w-full mt-5 flex items-center gap-1"><AiFillGithub className="inline" /> GitHub</p></Link>
               <Link href="https://twitter.com/tanaydesaii"><p className="navbar-box w-full my-0.5 flex items-center gap-1"><AiOutlineTwitter className="inline" /> Twitter</p></Link>
             </motion.div>}   
        </motion.div>
    )
}

export default NavBar