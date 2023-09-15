"use client"
import Button1 from "@/components/Buttons/button1"
import Button2 from "@/components/Buttons/button2"
import Button3 from "@/components/Buttons/button3"

const Home = () => {

    return(
        <div className="content">
            <div className="content-box grid gap-3 justify-center items-center">
                <Button1 />
                <Button2 />
                <Button3 />
            </div>

            <div className="content-blog">   
                <h1 className="content-header">Buttons</h1>
                <div className="content-description">
                    <p>A collection of beautifully desgined buttons with fluid interactions and svg animations that can be used to begin/end doapamine-releasing web actions.</p>
                </div>

                <h1 className='content-subheader'>Gist</h1>  
                <div className="content-description">
                    <p>Completing a transaction, signing up, adding to cart, etc. are tasks so mundane yet deeply personal to us. Actions so frequent, yet that mean so much to us. It is only fair they are acompained by beautifully crafted buttons to express the true feelings, invisible behind these interactions.</p>
                </div>
                
                <h1 className="content-subheader">Code</h1>
                <div className="content-description">
                    <p>The code for this component is <a href='https://github.com/tanaydesai/uiaftersex/blob/main/components/Buttons' className="text-black link">here</a>. This was made with:</p>
                    <li><code >React + Next.js</code></li>
                    <li><code >framer-motion</code></li>
                    <li><code >Tailwind CSS</code></li>
                </div> 

            </div>
        </div>
    )
}

export default Home