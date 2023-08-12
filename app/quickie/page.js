"use client"
import Quickie from "@/components/Quickie/quickie"

const Home = () => {

    return(
        <div className="content">
            <div className="content-box"><Quickie /></div>

            <div className="content-blog">
                <h1 className="content-header">Quickie</h1>
                <div className="content-description">
                    <p>A boucy, fluid and quick component that acts as a sudo-navbar for links, socials, etc.</p>
                </div>
                
                <h1 className="content-subheader">Code</h1>
                <div className="content-description">
                    <p>The code for this component is <a href='https://github.com/tanaydesai/uiaftersex/blob/main/components/Quickie/quickie.js' className="text-black link">here</a>. This was made with:</p>
                    <li><code >React + Next.js</code></li>
                    <li><code >framer-motion</code></li>
                    <li><code >Tailwind CSS</code></li>
                </div>   
            </div> 
        </div>
    )
}

export default Home