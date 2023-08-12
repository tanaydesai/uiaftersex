"use client"
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import peek from "@/assests/images/peekdemo.png"
import time from "@/assests/images/tmdemo.png"
import cmdk from "@/assests/images/cdmkboxdemo.png"
import card from "@/assests/images/carddemo.png"
import quickie from "@/assests/images/quickiedemo.png"
import sggallery from "@/assests/images/sgdemo.png"
import uiaftersex from "@/assests/svgs/uiaftersex-white.svg"
import rose from "@/assests/svgs/rose.svg"
import { motion } from 'framer-motion'
import { Fade } from "react-awesome-reveal";
import { ParallaxProvider, useParallax, Parallax } from 'react-scroll-parallax';
import {AiFillGithub} from "react-icons/ai"

const boxes = [
  {Name:"Peek",Link:"/peek",Image:peek,Date:"23.05.23",Description:"A simple and accessible way to view a website from a link without the need to open it in a new tab."}, 
  {Name:"Timemachine",Link:"/timemachine",Image:time,Date:"20.07.23",Description:"A quirky way to view your search history, TimeMachine allows you to smoothly switch between tabs & keep'em well organised."},
  {Name:"Quickie",Link:"/quickie",Image:quickie,Date:"10.08.23",Description:"A boucy, fluid and quick component that acts as a sudo-navbar for links, socials, etc."}, 
  {Name:"Spring Gallery",Link:"/springgallery",Image:sggallery,Date:"22.08.23",Description:"A sprigy and non-boring way to display images on your webstie."},
  {Name:"CmdkBox",Link:"/cmdkbox",Image:cmdk,Date:"25.05.23",Description:"Cmdkbox combines a ⌘ + K box & Arc's site search feature into a quick & easy way to broswe the web."}, 
  {Name:"Card",Link:"/card",Image:card,Date:"20.07.23",Description:"Uniquely crafted 3D preview cards for showcasing any type of content in a beautiful way."}
]


export default function Page() {
  return <ParallaxProvider><Home /></ParallaxProvider>
}

export function Home() {
  const [progress, setProgress] = useState(0)

  const mage = useParallax({
    scale: [0.9, 1.2, 'easeInQuad'],
    onProgressChange:(num) => {setProgress(num)}
  })

  return (
      <div className='p-5 md:p-10 overflow-x-hidden'>

        <div className='intro top-10' ref={mage.ref}>
            <Image src={rose} className='absolute m-auto -rotate-45' width={700} height={600}></Image>
            <Fade  className='w-full h-auto'><Image className='w-full h-auto' src={uiaftersex} alt="Uiaftersex" /></Fade>
        </div>

        <Parallax scale={[1.2,0.85 , 'easeInQuad']} className='w-full' >
          <motion.div initial={{opacity:0,transition:{duration:0.3}}}animate={{opacity:progress > 0.85 ? 1 : 0,transition:{duration:0.3}}} >
              <div className='intro w-full'>
                  <h1 className='title-description'>an <a href='https://github.com/tanaydesai/uiaftersex' className='link w-fit inline-flex items-center gap-2'>open-source <AiFillGithub className='inline' /></a> intuitive laboratory that showcases uniquely crafted user interfaces, interactions & components that make you wanna (hopefully) come back to, after sex.❤️‍🩹<br/> <br/> <br/> -by Tanay Desai.</h1>      
              </div>
            </motion.div>
        </Parallax>

        <svg>
            <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox"><path d="M0.153,0.007 L0.794,0 C0.794,0,0.979,0.005,0.981,0.1 C0.981,0.1,0.987,0.311,0.989,0.354 C0.991,0.394,0.985,0.667,0.983,0.716 C0.981,0.765,0.999,0.812,1,0.895 C1,0.895,1,1,0.771,0.996 C0.482,1,0.207,1,0.207,1 C0.207,1,0.016,0.987,0.024,0.892 C0.033,0.796,0.003,0.144,0.003,0.116 C0.003,0.088,-0.012,0.009,0.153,0.007"></path></clipPath>
        </svg>
        
        <h1 className='header'>Components</h1>
        <Fade><p className='header-description'>all pieces are <a href='https://github.com/tanaydesai/uiaftersex' className='link w-fit inline-flex items-center gap-2'>open-source <AiFillGithub className='inline' /></a> that aim to feel good, inspire to build more or just some "fuck-it why not"s.</p></Fade>

        <div className='gridBox'>
          {boxes.map(box => (
              <div className='box'>
                <div className='[filter:drop-shadow(0_16px_20px_rgba(0,0,0,0.1))]'><div style={{clipPath: "url(#my-clip-path)"}} className='blob'><motion.div whileHover={{scale:1.02,transition:{duration:0.3}}}><a href={box.Link}><Image src={box.Image} className='blob-image'/></a></motion.div></div></div>
                <h1 className='box-title'><Link href={box.Link} className='link'>{box.Name}</Link></h1>
                <Fade><p className='box-description'>{box.Description}</p></Fade>
                <p className='box-date'>{box.Date}</p>
              </div>
          ))}
        </div>
      </div>
  )
}