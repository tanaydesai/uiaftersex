import { Command } from 'cmdk'
import "./main.scss"
import React from 'react'
import { useRouter } from 'next/navigation';
import {HiOutlineArrowUpRight} from "react-icons/hi2"
import {BsMagic} from "react-icons/bs"

const websites = {'Twitter':"https://twitter.com/search?q=", 'Youtube':"https://www.youtube.com/results?search_query=", 'Spotify':"https://open.spotify.com/search/", "GitHub":"https://github.com/search?q=","Suprise":"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
  
export default function Cmdkbox() {
    const ref = React.useRef(null)
    const [inputValue, setInputValue] = React.useState('')
    const [site, setSite] = React.useState(false)
    const [pages, setPages] = React.useState(['home'])
    const activePage = pages[pages.length - 1]
    const isHome = activePage === 'home'
  
    const popPage = React.useCallback(() => {
      setPages((pages) => {
        const x = [...pages]
        x.splice(-1, 1)
        return x
      })
    }, [])
  
    const onKeyDown = React.useCallback(
      (e) => {
        if (isHome || inputValue.length) {
          return
        }
        if (e.key === 'Backspace') {
          e.preventDefault()
          popPage()
          setSite(false)
        }
      },
      [inputValue.length, isHome, popPage],
    )
  
    function bounce() {
      if (ref.current) {
        ref.current.style.transform = 'scale(0.96)'
        setTimeout(() => {
          if (ref.current) {
            ref.current.style.transform = ''
          }
        }, 100)
  
        setInputValue('')
      }
    }
  
    const Web = (query = null,site) => {
      window.open(websites[site] + query, '_blank',)
    }
  
    return (
      <div className="vercel">
        <Command
          ref={ref}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              bounce()
            }
  
            if (isHome || inputValue.length) {
              return
            }

            if (e.key === 'Backspace') {
              e.preventDefault()
              popPage()
              bounce()
              setSite(false)
            }
          }}
        >
          <div>
            {pages.map((p) => (<div key={p} cmdk-vercel-badge="">{p}</div>))}
          </div>
  
          <div style={{ marginBottom: "16px"}}> 
            {site && <div id="site" style={{display:"inline-block",margin:"auto",flexWrap:"wrap",fontSize:"17px",flexDirection:"row",position:"relative", backgroundColor:site === "Youtube" ? '#FF0000' : site === "Spotify" ? "#1DB954" : site === "Twitter" ? "#1DA1F2" : site === "GitHub" ? "#575554" : "grey",borderRadius:"7px",padding:"5px"}}>{site}</div>}
            <Command.Input autoFocus placeholder="Search" value={inputValue} style={{display:"inline-block",margin:"auto",flexWrap:"wrap",flexDirection:"row",position:"relative"}} onValueChange={(value) => {setInputValue(value)}}/>
          </div>

          <Command.List>
            <Command.Empty>No results found.</Command.Empty>
            {activePage === 'home' && <Home searchSites={(name) => {setPages([...pages, 'site search'])
            setSite(name)}} />}
            {activePage === 'site search' && <Sites value={inputValue} searchWeb={() => {Web(inputValue,site)}} />}
          </Command.List>
        </Command>
      </div>
    )
  }
  
  function Home({ searchSites }) {
    const router = useRouter();

    const Web = (site) => {
      window.open(websites[site], '_blank',)
    }
    const handleButtonClick = (name) => {
      router.push(name);
    }

    return (
      <>
        <Command.Group heading="Components">
          <Item shortcut="⇧ C" onSelect={() => {handleButtonClick("/peek")}}><ProjectsIcon />Peek</Item>
          <Item shortcut="⇧ C" onSelect={() => {handleButtonClick("/buttons")}}><ProjectsIcon />Buttons</Item>
          <Item shortcut="⇧ C" onSelect={() => {handleButtonClick("/timemachine")}}><ProjectsIcon />Timemachine</Item>
          <Item shortcut="⇧ C" onSelect={() => {handleButtonClick("/cmdkbox")}}><ProjectsIcon />Cmdkbox</Item>
          <Item shortcut="⇧ C" onSelect={() => {handleButtonClick("/quickie")}}><ProjectsIcon />Quickie</Item>
          <Item shortcut="⇧ C" onSelect={() => {handleButtonClick("/cursors")}}><ProjectsIcon />Cursors</Item>
          <Item shortcut="⇧ C" onSelect={() => {handleButtonClick("/springy")}}><ProjectsIcon />Springy</Item>  
          <Item shortcut="⇧ C" onSelect={() => {handleButtonClick("/card")}}><ProjectsIcon />Card</Item>        
        </Command.Group>
  
        <Command.Group heading="Search Inside">
          <Item shortcut="S P" onSelect={() => {searchSites("Twitter")}}><TwitterIcon />Twitter</Item>
          <Item shortcut="S P" onSelect={() => {searchSites("GitHub")}}><GitHubIcon />GitHub</Item>
          <Item shortcut="S P" onSelect={() => {searchSites("Spotify")}}><SpotifyIcon />Spotify</Item>
          <Item shortcut="S P" onSelect={() => {searchSites("Youtube")}}><YouTubeIcon />Youtube</Item>
          <Item shortcut="S P" onSelect={() => {Web("Suprise")}}><SearchIcon />Surpirse</Item>
        </Command.Group>
        
        <Command.Group heading="Social">
          <Item shortcut="⇧ S" onSelect={() => {window.open("https://twitter.com/tanaydesaii", '_blank')}}><TwitterIcon /><a href='https://twitter.com/tanaydesaii' style={{margin:"0"}}>@tanaydesaii</a></Item>
          <Item shortcut="⇧ S" onSelect={() => {window.open("https://github.com/tanaydesai", '_blank')}}><GitHubIcon /><a href='https://github.com/tanaydesai' style={{margin:"0"}}>@tanaydesai</a></Item>
        </Command.Group>
      </>
    )
  }
  
  function Sites({searchWeb, value}) {
  
    return (
      <>
     <Item shortcut="S P" onSelect={() => {searchWeb()}}><SearchIcon/>Searching... {value}</Item>
      </>
    )
  }
  
  
  function Item({
    children,
    shortcut,
    onSelect = () => {},
  }) {
    return (
      <Command.Item onSelect={onSelect}>
        {children}
        {shortcut && (
          <div cmdk-vercel-shortcuts="">
            {shortcut.split(' ').map((key) => {
              return <kbd key={key}>{key}</kbd>
            })}
          </div>
        )}
      </Command.Item>
    )
  }
  
  function ProjectsIcon() {
    return (
      <HiOutlineArrowUpRight size={20} />
    )
  }
   
  function YouTubeIcon() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="youtube"><path fill-rule="evenodd" d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438zM6 11.5v-6l5 3-5 3z" clip-rule="evenodd"></path></svg>
    )
  }
  
  function TwitterIcon() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="twitter"><path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"></path></svg>
    )
  }
  
  function SpotifyIcon() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="spotify"><path d="M8 0C3.589 0 0 3.589 0 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm3.67 11.548a.499.499 0 0 1-.696.122c-1.875-1.318-4.994-1.391-7.1-.9a.5.5 0 0 1-.226-.975c2.315-.536 5.775-.438 7.9 1.057a.5.5 0 0 1 .122.696zm.976-1.951a.5.5 0 0 1-.698.114C9.773 8.15 7.101 7.762 3.535 8.49a.5.5 0 1 1-.201-.98c3.857-.787 6.779-.347 9.197 1.388a.502.502 0 0 1 .115.699zm.986-2.62a.5.5 0 0 1-.695.133c-2.757-1.871-6.948-1.88-9.661-.92a.5.5 0 1 1-.333-.944C5.894 4.203 10.467 4.225 13.5 6.282a.502.502 0 0 1 .132.695z"></path></svg>
    )
  }
  
  function GitHubIcon() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="github"><path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path></svg>
    )
  }
  
  function SearchIcon (){
    return (
      <BsMagic size={20}/>
    )
  }