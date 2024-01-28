"use client"
import Peek from "@/components/lab/Peek/peek"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import {BsChevronDown, BsChevronUp} from 'react-icons/bs'
import {Codeblock, Codeline} from "@/components/app/Block/block"


const Home = () => {
    const [open, setOpen] = useState(false);

    return(
        <div className="content">
            <div className="content-box"><Peek /><div className="content-box-decoration"/></div>

            <div className="content-blog">   
                <h1 className="content-header">Peek</h1>
                <div className="content-description">
                    <p>Effortlessly preview websites without the need to open new tabs, a simple and accessible way to peek.</p>
                    <p>Just click on <span>arc.com</span></p>
                    <motion.p whileHover={{backgroundColor:"#f0f0f0"}} onTap={() => setOpen(!open)} className='content-note'><span>Note</span>{!open && <BsChevronDown  style={{marginLeft:"5px"}} size={15}/>}{open && <BsChevronUp  style={{marginLeft:"5px"}} size={15}/>}</motion.p>
                    <div>{open && <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.4}} className='mt-5 leading-7 content-note'><span>The site screenshot can be replaced by an actual webview in an Electron app. Unfortunately React/Next.js does not support webviews.</span></motion.p>}</div>
                </div>
                
                <h1 className='content-subheader'>Gist</h1>  
                <div className="content-description">
                    <p>Peek allows you to quickly open & view links anywhere, to peek right through the internet without clustering your tab bar.</p>
                </div>
                
                <h1 className="content-subheader">Code</h1>
                <Codeline code="npm i framer-motion"/>
                <Codeblock component="peek" />
                <div className="content-description">
                    <p>The code for this component is <a href='https://github.com/tanaydesai/uiaftersex/tree/main/components/lab/Peek' className="text-black link">here</a>. Some libraries used are:</p>
                    <li><code >Next.js</code></li>
                    <li><code >framer-motion</code></li>
                    <li><code >tailwindcss</code></li>
                    <li><code >Electron.js</code> (for webview)</li>
                    <p>Inspired by <a href='https://thebrowser.company/' className="text-black link"> thebrowsercompany</a>'s (yes again, they make some cool shit) peek & iOS web previews ❤️‍🩹</p>
                </div>   
            </div> 
        </div>
    )
}

export default Home