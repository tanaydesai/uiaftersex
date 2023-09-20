"use client"
import { useState, useEffect } from 'react';
import CardExploreAI from '@/components/Card/card';

const Home = () => {
    return (
        <div className='content'>
            <div className='content-box bg-transparent shadow-none'><CardExploreAI /></div>

            <div className="content-blog">
                <h1 className="content-header">Card</h1>
                <div className="content-description">
                    <p>Uniquely crafted 3D theme-specific hoverable preview cards for showcasing any type of content in a beautiful way.</p>
                    <p>Try hovering over the card:)</p>
                </div>

                <h1 className="content-subheader">Gist</h1>
                <div className="content-description">
                    <p>Cards can act as tickets, tokens, rewards inside games, invite links, etc. Some similar cards can be found in apps such as Artifact & Arc browser.</p>
                </div>

                <h1 className="content-subheader">Code</h1>
                <div className="content-description">
                    <p>The code for this component is <a href='https://github.com/tanaydesai/uiaftersex/tree/main/components/Card' className="text-black link">here</a>. Some libraries used are:</p>
                    <li><code >Next.js</code></li>
                    <li><code >framer-motion</code></li>
                    <li><code >tailwindcss</code></li>
                </div>      
            </div>
        </div>
    )

}

export default Home