"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import TimeMachine from '@/components/Timemachine/timemachine';
import {BsChevronDown, BsChevronUp} from 'react-icons/bs'

const Home = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='content'>
            <div className='content-box'><TimeMachine /></div>
            
            <div className="content-blog">
                <h1 className="content-header">TimeMachine</h1>
                <div className="content-description">
                    <p>A fluid and quirky way to view your search history. TimeMachine allows you to smoothly switch between tabs & keep'em well organised.</p>
                    <p>Click on any Tab & have some fun:)</p>
                    <motion.p whileHover={{backgroundColor:"#f0f0f0"}} onTap={() => setOpen(!open)} className='content-note'><span>Note</span>{!open && <BsChevronDown  style={{marginLeft:"5px"}} size={15}/>}{open && <BsChevronUp  style={{marginLeft:"5px"}} size={15}/>}</motion.p>
                    <div>{open && <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.4}} className='mt-5 leading-7 content-note'><span>The site screenshot can be replaced by an actual webview in an Electron app. Unfortunately React/Next.js does not support webviews. Although note for the lagginess.</span></motion.p>}</div>
                </div>

                <h1 className='content-subheader'>Gist</h1>
                <div className="content-description">
                    <p>TimeMachine is a concept which brings fluid animations & intuitive interactivity to your old & boring search histories to explore new & fun ways of broswering the web.</p>
                </div>

                <h1 className="content-subheader">Code</h1>
                <div className="content-description">
                    <p>The code for this component is <a href='https://github.com/tanaydesai/uiaftersex/blob/main/components/Timemachine/timemachine.js' className='link text-black'>here</a>. Some libraries used are:</p>
                    <li><code>Next.js</code></li>
                    <li><code>framer-motion</code></li>
                    <li><code >tailwindcss</code></li>
                    <li><code>Electron.js</code> (for webview)</li>
                    <p>Inspired by the original Apple MacOs Time-machine:)</p>
                </div>      
            </div> 
        </div>

    )
}

export default Home;