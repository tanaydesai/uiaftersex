import React, { useRef,useState, useEffect } from "react";
import { motion } from "framer-motion";
import move from "lodash-move";
import Image from "next/image";
import spacex from "@/assests/images/spacex.png"
import tesla from "@/assests/images/tesla.png"
import apple from "@/assests/images/apple.png"
import arc from "@/assests/images/arc.png"
import {HiArrowSmallRight} from "react-icons/hi2";

const TimeMachine = () => {
    const CARD_OFFSET = 50; 
    const SCALE_FACTOR = 0.2;
    const CARD_COLORS = [{Name:"arc.net",Image:arc},{Name:"tesla.com",Image:tesla},{Name:"spacex.com",Image:spacex}, {Name:"apple.com",Image:apple}];
    const [cards, setCards] = useState(CARD_COLORS);
    const moveToEnd = from => {
        setCards(move(cards, from, 0));
    };

    return (
        <div>
            {cards.map((site, index) => {
                return (
                    <motion.div key={site.Name}
                        animate={{
                            marginTop:"220px",
                            top: index * -CARD_OFFSET,
                            scale: 1 - index * SCALE_FACTOR,
                            zIndex: CARD_COLORS.length - index,
                            transition:{duration:0.4}
                    }} whileHover={{scale: 1.02 - index * SCALE_FACTOR, transition:{duration:0.1}}} onTap={() => moveToEnd(index)} className='bg-[#f1f1f1] sm:min-w-[34%] sm:max-w-[50%] sm:left-[33%] shadow-[rgba(0,0,0,0.3)_0px_8px_30px_0px] absolute min-w-[63%] h-[300px] origin-[top_center] overflow-hidden m-auto rounded-[17px] left-[18%]'>
                        <div className="bg-[#f1f1f1] h-[45px] flex p-1 rounded-t-lg">
                            <div className='flex h-[15px] w-[55px] text-center justify-center m-auto'>
                                <div className='bg-[#bfbdbd] w-[10.5px] h-[10.5px] flex mx-1 m-auto rounded-[20px]'></div>
                                <div className='bg-[#bfbdbd] w-[10.5px] h-[10.5px] flex mx-1 m-auto rounded-[20px]'></div>
                                <div className='bg-[#bfbdbd] w-[10.5px] h-[10.5px] flex mx-1 m-auto rounded-[20px]'></div>
                            </div>
                            <div className='flex h-[30px] w-[70%] rounded text-black items-center text-xs bg-white m-auto p-[5px]'>{site.Name}</div>
                            <motion.div  whileHover={{scale: 1.1}} className='flex m-auto'><HiArrowSmallRight color='black' size={20}></HiArrowSmallRight></motion.div>
                        </div> 
                        <div className='[&::-webkit-scrollbar]:hidden overflow-y-auto absolute h-full m-auto'>
                            <Image src={site.Image} style={{maxWidth: "100%",height: "auto"}}></Image>
                        </div>
                    </motion.div> 
            );})}
        </div>
    )
}

export default TimeMachine;