"use client"
import styles from "./gradient.module.css"
import React,{useState, useEffect, useRef} from 'react';
import Image from "next/image";
import img from "@/assests/images/arc.png"

const CardExploreAI = () => {  
    return (  
        <div className={styles.rotateCard}>
            <div className="w-full rounded-[20px] h-full flex flex-wrap gap-1 items-center justify-items-center my-10">
                <div className="min-w-[400px] max-w-2/6 mx-auto">
                        <div className="w-[260px] h-[400px] shadow-[0_16px_70px_rgb(0_0_0_/_20%)] [transform-style:preserve-3d] bg-paper bg-contain overflow-hidden m-auto p-2.5 rounded-[15px]">
                            <div className={styles.gradient}><div className={styles.circles}></div></div>
                            <div className="[&::-webkit-scrollbar]:hidden overflow-y-auto w-[95%] h-[200px] m-auto rounded-[15px]"><Image src={img} className='max-w-full h-auto' alt="" /></div>
                            <div className="relative text-left mt-[13px] p-2.5">
                                <p className="[font-family:'LufgaLight'] text-[#868686] text-[10px]">22.09.23</p>
                                <h2 className="[font-family:'Maglite'] text-lg text-[black] mt-[6px]">Explore AI</h2>
                                <p className="[font-family:'LufgaLight'] text-[#868686] text-[11px] leading-[18px] mt-[10px]">An AI Powered Search for Youtube Videos. Enables search for answers directly inside thousands of YouTube videos, free-of-cost, easy-to-navigate and fast.</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>  
    )
}

export default CardExploreAI