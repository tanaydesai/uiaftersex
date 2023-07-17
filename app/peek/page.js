"use client"
import Peek from "@/components/Peek/peek"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import {BsChevronDown, BsChevronUp} from 'react-icons/bs'
import { Fade } from "react-awesome-reveal";

const Home = () => {
    const [open, setOpen] = useState(false);

    return(
        <div className="content">

            <div className="content-box"><Peek /></div>

            <div className="content-blog">

                
                <h1 className="content-header">Peek</h1>
                <div className="content-description">
                    <p>A simple and accessible way to view a website from a link without the need to open it in a new tab.</p>
                    <p>Just click on <span>spacex.com</span></p>
                    <motion.p whileHover={{backgroundColor:"#f0f0f0"}} onTap={() => setOpen(!open)} className='content-note'><span>Note</span>{!open && <BsChevronDown  style={{marginLeft:"5px"}} size={15}/>}{open && <BsChevronUp  style={{marginLeft:"5px"}} size={15}/>}</motion.p>
                    <div>{open && <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.4}} className='mt-5 leading-7 content-note'><span>The Website screenshot can be replaced by an actual webview in an Electron app, locally, after downloading the repo. Since React does not support webviews on web & due to laggyness it wasn't included here.</span></motion.p>}</div>
                </div>
                

                               
                <h1 className='content-subheader'>Gist</h1>  
                <div className="content-description">
                    <p>Peek allows you to quickly open & view links anywhere, to peek right through on the internet without clustering your tab bar.</p>
                </div>
                

                <h1 className="content-subheader">Code</h1>
                <div className="content-description">
                    <p>The code for this component is <a href='https://github.com/tanaydesai/uiaftersex/blob/main/components/Peek/peek.js' className="text-black link">here</a>. This was made with:</p>
                    <li><code >React + Next.js</code></li>
                    <li><code >framer-motion</code></li>
                    <li><code >Tailwind CSS</code></li>
                    <li><code >Electron.js</code> (for webview)</li>
                    <p>Inspired by <a href='https://thebrowser.company/' className="text-black link"> thebrowsercompany</a>'s (yes again, they make some cool shit) peek & iOS web previews ❤️‍🩹</p>
                </div>   
                   
                
            </div> 
        </div>
    )
}

export default Home