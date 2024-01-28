"use client"
import Implusive from "@/components/lab/Impulsive/impulsive";
import {Codeblock, Codeline} from "@/components/app/Block/block"

const Home = () => {

    return(
        <div className="content">
            <div className="content-box bg-transparent pt-[80px] shadow-none"><Implusive /></div>

            <div className="content-blog">
                <h1 className="content-header">Impulsive</h1>
                <div className="content-description">
                    <p>In a world which is ever so hungry for dopamine, this interface aims to exploit one of the most impulsive human traits - shopping. In the form of a fluid concept that tiktok-ifys the shopping experience, miles away from whatever the hell Amazon UI has been for decades.</p>
                    <p>Also accompanied by some old freinds from <a href="https://uiaftersex.vercel.app/buttons" className="text-black link">Buttons</a>.</p>
                </div>

                <h1 className="content-subheader">Gist</h1>
                <div className="content-description">
                    <p>Impulsive is meant to be a <a href="https://twitter.com/laurentdelrey/" className="text-black link">@laurentdelrey</a>'s <a href="https://twitter.com/laurentdelrey/status/1712467248768749789" className="text-black link">"ship to friends"</a> concept brought-to-life for personaly satisfaction. This component tries to demonstrate a more personalized, quality-driven, addictive, seamless, and carefully curated shopping flow.</p>
                    <p>Conveyed by some of my guilty wishlist items:)</p>
                </div>
                
                <h1 className="content-subheader">Code</h1>
                <Codeline code="npm i framer-motion react-epic-spinners"/>
                <Codeblock component="impulsive" />
                <div className="content-description">
                    <p>The code for this component is <a href='https://github.com/tanaydesai/uiaftersex/tree/main/components/lab/Impulsive' className="text-black link">here</a>. Some libraries used are:</p>
                    <li><code >Next.js</code></li>
                    <li><code >framer-motion</code></li>
                    <li><code >tailwindcss</code></li>
                    <li><code >react-epic-spinners</code></li>
                    <p>Inspired by the legendary designer <a href="https://twitter.com/laurentdelrey/" className="text-black link">@laurentdelrey</a>'s <a href="https://twitter.com/laurentdelrey/status/1712467248768749789" className="text-black link">"ship to friends"</a> concept.</p>
                </div>   
            </div> 
        </div>
    )
}

export default Home