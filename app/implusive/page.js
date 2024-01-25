"use client"
import Implusive from "@/components/Impulsive/impulsive";

const Home = () => {

    return(
        <div className="content">
            <div className="content-box bg-transparent pt-[80px] shadow-none"><Implusive /></div>

            <div className="content-blog">
                <h1 className="content-header">Implusive</h1>
                <div className="content-description">
                    <p>A boucy, fluid, speedy & hoverable component for displaying links or socials.</p>
                    <p>Try hovering over the links:)</p>
                </div>
                
                <h1 className="content-subheader">Code</h1>
                <div className="content-description">
                    <p>The code for this component is <a href='https://github.com/tanaydesai/uiaftersex/blob/main/components/Quickie/quickie.js' className="text-black link">here</a>. Some libraries used are:</p>
                    <li><code >Next.js</code></li>
                    <li><code >framer-motion</code></li>
                    <li><code >tailwindcss</code></li>
                    <p>inspired by the legendary designer <a href="https://twitter.com/laurentdelrey/status/1712467248768749789" className="text-black link">@saintlaurendelrey</a>'s "ship to friends" concept.</p>
                </div>   
            </div> 
        </div>
    )
}

export default Home