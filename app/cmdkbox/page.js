"use client"
import Cmdkbox from '@/components/lab/Cmdkbox/command';
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
            <div className='content-box flex items-center justify-center'>
                <div className="content-box-decoration"/>
                {open && <Cmdkbox state={open}/>}
                <h4 onClick={() => {setOpen(true)}} className='cursor-pointer' >Click me or <ImCommand className='inline' color='black' size={25}></ImCommand> + K</h4>
            </div>

            <div className='content-blog'>
                <h1 className="content-header">Cmdkbox</h1>
                <div className="content-description">
                    <p>This component combines a traditional<code><ImCommand className='inline' size={15}/> + K</code>box & quick-search enabling direct search inside various websties.</p>
                    <p>Select any site from Twitter, Spotify, GitHub & Youtube and directly search for words, songs, repositories or videos.</p>
                </div>

                <h1 className='content-subheader'>Gist</h1>
                <div className="content-description">
                    <p>This component doubles as a Cmdkbox box & quick-search. Quick-search aims to <span>directly search inside websties </span> without the need to switch tabs or open links. You can add any number of sites you wish to browse in.</p>
                    <p>Plus there's always room for some <span> surprises:)</span></p>
                </div>

                <h1 className='content-subheader'>Code</h1>
                <div className="content-description">
                    <p>The code for this component is <a href='https://github.com/tanaydesai/uiaftersex/tree/main/components/lab/Cmdkbox' className="text-black link">here</a>. Some libraries used are:</p>
                    <li><a href='https://cmdk.paco.me/' className="text-black link">cdmk box </a>by paco.</li>
                    <li><code>Next.js</code> for quick-search.</li>
                    <p>Inspired by <a href='https://thebrowser.company/' className="text-black link"> thebrowsercompany</a>'s site search ❤️‍🩹</p>
                </div>
            </div>
        </div>
    )
}

export default Home