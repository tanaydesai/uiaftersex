"use client"
import Quickie from "@/components/lab/Quickie/quickie"
import {Codeblock, Codeline} from "@/components/app/Block/block"

const Home = () => {

    return(
        <div className="content">
            <div className="content-box z-[1]"><Quickie /><div className="content-box-decoration"/></div>

            <div className="content-blog">
                <h1 className="content-header">Quickie</h1>
                <div className="content-description">
                    <p>A boucy, fluid, speedy & hoverable component for displaying links or socials.</p>
                    <p>Try hovering over the links:)</p>
                </div>
                
                <h1 className="content-subheader">Code</h1>
                <Codeline code="npm i framer-motion react-icons"/>
                <Codeblock component="quickie" />
                <div className="content-description">
                    <p>The code for this component is <a href='https://github.com/tanaydesai/uiaftersex/tree/main/components/lab/Quickie' className="text-black link">here</a>. Some libraries used are:</p>
                    <li><code >Next.js</code></li>
                    <li><code >framer-motion</code></li>
                    <li><code >tailwindcss</code></li>
                    <li><code >react-icons</code></li>
                </div>   
            </div> 
        </div>
    )
}

export default Home