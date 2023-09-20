"use client"
import Quickie from "@/components/Quickie/quickie"

const Home = () => {

    return(
        <div className="content">
            <div className="content-box"><Quickie /></div>

            <div className="content-blog">
                <h1 className="content-header">Quickie</h1>
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
                </div>   
            </div> 
        </div>
    )
}

export default Home