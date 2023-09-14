"use client"
import { useState, useEffect } from 'react';
import CardExploreAI from '@/components/Card/card';
import Peek from '@/components/Peek/peek';
import Quickie from '@/components/Quickie/quickie';
import Cmdkbox from '@/components/Cmdkbox/command';
import Spring from '@/components/SpringGallery/spring';
import TimeMachine from '@/components/Timemachine/timemachine';
import Button1 from '@/components/Buttons/button1';
import Button2 from '@/components/Buttons/button2';
import Button3 from '@/components/Buttons/button3';

const Home = () => {
    const indivisual = [<Button1 />,<Button2 />]
    return (
        <div className='w-screen h-screen'>
            {indivisual.map((item, index) => (
                <div className='w-fit h-full m-10 my-[100px]'>{item}</div>
            ))}
            <div className="w-full relative h-full bg-[#e8e1d9]">
                <div className='right-5 bottom-1 absolute my-10'>
                    <Button3 />
                </div>
            </div>
        </div>
    )
}


export default Home;