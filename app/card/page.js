"use client"
import { useState, useEffect } from 'react';
import CardExploreAI from '@/components/Card/card';
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <div className='content'>
            <div className='content-box bg-transparent shadow-none'><CardExploreAI /></div>

            <div className="content-blog">
                
                <h1 className="content-header">Card</h1>
                <div className="content-description">
                    <p>Uniquely crafted 3D preview cards for showcasing any type of content in a beautiful way</p>
                </div>


                <h1 className="content-subheader">Code</h1>
                <div className="content-description">
                    <p>The code for this component is <a href='https://github.com/tanaydesai/uiaftersex/tree/main/components/Card' className="text-black link">here</a>. This was made with:</p>
                    <li><code >React + Next.js</code></li>
                    <li><code >framer-motion</code></li>
                    <li><code >Tailwind CSS</code></li>
                </div>      

            </div>
        </div>
    )

}

export default Home