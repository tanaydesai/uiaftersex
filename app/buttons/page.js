"use client"
import Button1 from "@/components/lab/Buttons/button1"
import Button2 from "@/components/lab/Buttons/button2"
import Button3 from "@/components/lab/Buttons/button3"
import {Codeblock, Codeline} from "@/components/app/Block/block"


const Home = () => {

    return(
        <div className="content">
            <div className="content-box grid gap-3 justify-center items-center">
                <Button1 />
                <Button2 />
                <Button3 />
                <div className="content-box-decoration"/>                
            </div>

            <div className="content-blog">   
                <h1 className="content-header">Buttons</h1>
                <div className="content-description">
                    <p>A collection of beautifully desgined buttons with fluid micro-interactions and svg animations that can be used for the beginning or the end of a frequent web action.</p>
                </div>

                <h1 className='content-subheader'>Gist</h1>  
                <div className="content-description">
                    <p>Completing a transaction, signing up, adding to cart, viewing links, etc. are tasks so mundane yet deeply personal to us. Actions so frequent, yet that mean so much to us. It is only fair they are acompained by beautifully crafted micro-interactions to express their true feelings, invisible behind these interactions.</p>
                </div>
                
                <h1 className="content-subheader">Code</h1>
                <Codeline code="npm i framer-motion react-epic-spinners react-icons"/>
                <Codeblock component="button1" />
                <Codeblock component="button2" />
                <Codeblock component="button3" />
                <div className="content-description">
                    <p>The code for this component is <a href='https://github.com/tanaydesai/uiaftersex/tree/main/components/lab/Buttons' className="text-black link">here</a>. Some libraries used are:</p>
                    <li><code >Next.js</code></li>
                    <li><code >framer-motion</code></li>
                    <li><code >tailwindcss</code></li>
                    <li><code>react-epic-spinners</code></li>
                    <li><code>react-icons</code></li>
                </div> 

            </div>
        </div>
    )
}

export default Home