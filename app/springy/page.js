"use client"
import Spring from "@/components/Springy/spring"

const Home = () => {

    return(
        <div className="content">
            <div className="content-box flex justify-center items-center"><Spring /></div>

            <div className="content-blog">
                <h1 className="content-header">Springy</h1>
                <div className="content-description">
                    <p>A sprigy, bouncy and non-boring way to display images on a webstie.</p>
                    <p>Try dragging an image around:)</p>
                </div>
                
                <h1 className="content-subheader">Gist</h1>
                <div className="content-description">
                    <p>Images displayed here inlude logos to some of my apps, some medicore 3D concepts of all things Starship and the very first images i created using DALLE-2.</p>
                </div>
                
                <h1 className="content-subheader">Code</h1>
                <div className="content-description">
                    <p>The code for this component is <a href='https://github.com/tanaydesai/uiaftersex/blob/main/components/Springy/spring.js' className="text-black link">here</a>. Some libraries used are:</p>
                    <li><code >Next.js</code></li>
                    <li><code >framer-motion</code></li>
                    <li><code>@popmotion/popcorn</code> (for distance)</li>
                    <li><code >tailwindcss</code></li>
                    <p>Inspired by the<code>framer-motion</code><code>useSpring</code><a href="https://www.framer.com/motion/use-spring/" className="text-black link">docs</a> lol.</p>
                </div>   
            </div> 
        </div>
    )
}

export default Home