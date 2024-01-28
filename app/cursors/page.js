"use client"
import Cursors from "@/components/lab/Cursors/cursors"
import {Codeblock, Codeline} from "@/components/app/Block/block"

const Home = () => {

    return(
        <div className="content">
           <div className="content-box bg-transparent shadow-none overflow-auto static"><Cursors /></div>


           <div className="content-blog">
                <h1 className="content-header">Cursors</h1>
                <div className="content-description">
                    <p>A collection of customisable, theme-specific cursors enabling integrations with whole websites or specific areas.</p>
                </div>

                <h1 className="content-subheader">Code</h1>
                <Codeline code="npm i framer-motion"/>
                <Codeblock component="cursors"/>
                <div className="content-description">
                    <p>The code for this component is <a href='https://github.com/tanaydesai/uiaftersex/tree/main/components/lab/Cursors' className="text-black link">here</a>. Some libraries used are:</p>
                    <li><code >Next.js</code></li>
                    <li><code >framer-motion</code></li>
                    <li><code >tailwindcss</code></li>
                    <p>Inspired by this <a href='https://twitter.com/60fpsdesign/status/1698342261577175357' className="text-black link">tweet</a>.</p>
                </div>      
            </div>
        </div>
    )
}

export default Home