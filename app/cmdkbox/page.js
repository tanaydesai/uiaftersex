"use client"
import Cmdkbox from '@/components/Cmdkbox/command';
import { useState, useEffect } from 'react';
import {ImCommand} from 'react-icons/im';

const Home = () => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const down = (e) => {
          if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
            e.preventDefault()
            setOpen((open) => !open)
          }
        }
    
        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
      }, [])

    return(
        <div className="content">
            <div className='content-box'>
                {open && <Cmdkbox state={open}/>}
                <h4 onClick={() => {setOpen(true)}} className='cursor-pointer' >Click me or <ImCommand className='inline' color='black' size={25}></ImCommand> + K</h4>
            </div>

            <div className='content-blog'>

                <h1 className="content-header">Cmdkbox</h1>
                <div className="content-description">
                    <p>Cmdkbox combines a<code><ImCommand className='inline' size={15}/></code> + <code>K</code> box & Arc's site search feature into a quick & easy way to broswe the web.</p>
                </div>

                <h1 className='content-subheader'>Gist</h1>
                <div className="content-description">
                    <p>Site search aims to <span>directly search inside your favioutre apps & websties </span> without switching tabs & opening links. You can add any number of sites you wish to browse in.</p>
                    <p>Plus there's always room for some <span> surprises:)</span></p>
                </div>

                <h1 className='content-subheader'>Code</h1>
                <div className="content-description">
                    <p>The code for this component is <a href='https://github.com/TanayDesai/uiaftersex/tree/main/components/sitesearch' className="text-black link">here</a>. This was made with:</p>
                    <li><a href='https://cmdk.paco.me/' className="text-black link">cdmk box </a>by paco.</li>
                    <li><code>React + Next.js</code> for implementation.</li>
                    <p>Inspired by <a href='https://thebrowser.company/' className="text-black link"> thebrowsercompany</a>'s site search ❤️‍🩹</p>
                </div>

            </div>
        </div>
    )
}

export default Home