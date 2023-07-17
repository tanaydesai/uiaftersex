import { Command } from 'cmdk'
import "./main.scss"
import React from 'react'
import { useRouter } from 'next/navigation';
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
            {pages.map((p) => (
              <div key={p} cmdk-vercel-badge="">
                {p}
              </div>
            ))}
          </div>
  
          <div style={{ marginBottom: "16px"}}> 
          {site && <div id="site" style={{display:"inline-block",margin:"auto",flexWrap:"wrap",fontSize:"17px",flexDirection:"row",position:"relative",
    backgroundColor:site === "Youtube" ? '#FF0000' : site === "Spotify" ? "#1DB954" : site === "Twitter" ? "#1DA1F2" : site === "GitHub" ? "#575554" : "grey",
    borderRadius:"7px",padding:"5px"}}>
            {site}
          </div>}
  
          <Command.Input
            autoFocus
            placeholder="Search"
            value={inputValue}
            style={{display:"inline-block",margin:"auto",flexWrap:"wrap",flexDirection:"row",position:"relative"}}
            onValueChange={(value) => {
              setInputValue(value)
            }}
          />
           </div>
          <Command.List>
            <Command.Empty>No results found.</Command.Empty>
            {activePage === 'home' && <Home searchProjects={() => {
              setPages([...pages, 'projects']) 
            setInputValue("")}} searchSites={(name) => {
            setPages([...pages, 'site search'])
            // setInputValue("")
            setSite(name)
          
            }} />}
            {activePage === 'projects' && <Projects />}
            {activePage === 'site search' && <Sites value={inputValue} searchWeb={() => {Web(inputValue,site)}} />}
          </Command.List>
        </Command>
      </div>
    )
  }
  
  function Home({ searchProjects, searchSites }) {
    const Web = (site) => {
      window.open(websites[site], '_blank',)
    }
  
    return (
      <>
        <Command.Group heading="Projects">
          <Item
            shortcut="S P"
            onSelect={() => {
              searchProjects()
            }}
          >
            <ProjectsIcon />
            Search Projects...
          </Item>
        </Command.Group>
  
        <Command.Group heading="Search Inside">
          <Item
            shortcut="S P"
            onSelect={() => {
              searchSites("Twitter")
            }}
          >
            <TwitterIcon />
            Twitter
          </Item>
          <Item
            shortcut="S P"
            onSelect={() => {
              searchSites("Youtube")
            }}
          >
            <YouTubeIcon />
            Youtube
          </Item>
          <Item
            shortcut="S P"
            onSelect={() => {
              searchSites("Spotify")
            }}
          >
            <SpotifyIcon />
            Spotify
          </Item>
          <Item
            shortcut="S P"
            onSelect={() => {
              searchSites("GitHub")
            }}
          >
            <GitHubIcon />
            GitHub
          </Item>
          <Item
            shortcut="S P"
            onSelect={() => {
              Web("Suprise")
            }}
          >
            <SearcIcon />
            Surpirse
          </Item>
        </Command.Group>
  
        
        <Command.Group heading="Social">
          <Item shortcut="⇧ D">
            <TwitterIcon />
            <a href='https://twitter.com/tanaydesaii' style={{margin:"0"}}>@tanaydesaii</a>
          </Item>
          <Item>
            <GitHubIcon />
            <a href='https://github.com/TanayDesai' style={{margin:"0"}}>@TanayDesai</a>
          </Item>
         
        </Command.Group>
      </>
    )
  }
  
  function Projects() {
    const router = useRouter();
    const handleButtonClick = (name) => {
      router.push(name);
    }
  
    return (
      <>
        <Item onSelect={() => {handleButtonClick("/peek")}}>Peek</Item>
        <Item onSelect={() => {handleButtonClick("/stack")}}>Stack</Item>
        <Item onSelect={() => {handleButtonClick("/linkpreviews")}}>Link Previews</Item>
      </>
    )
  }
  function Sites({searchWeb, value}) {
  
    return (
      <>
     <Item shortcut="S P"
            onSelect={() => {
              searchWeb()
            }}> <SearcIcon/>Searching... {value}</Item>
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
      <svg
        fill="none"
        height="24"
        shapeRendering="geometricPrecision"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M3 3h7v7H3z"></path>
        <path d="M14 3h7v7h-7z"></path>
        <path d="M14 14h7v7h-7z"></path>
        <path d="M3 14h7v7H3z"></path>
      </svg>
    )
  }
  
  function PlusIcon() {
    return (
      <svg
        fill="none"
        height="24"
        shapeRendering="geometricPrecision"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M12 5v14"></path>
        <path d="M5 12h14"></path>
      </svg>
    )
  }
  
  function TeamsIcon() {
    return (
      <svg
        fill="none"
        height="24"
        shapeRendering="geometricPrecision"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
        <path d="M16 3.13a4 4 0 010 7.75"></path>
      </svg>
    )
  }
  
  function CopyIcon() {
    return (
      <svg
        fill="none"
        height="24"
        shapeRendering="geometricPrecision"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z"></path>
      </svg>
    )
  }
  
  function DocsIcon() {
    return (
      <svg
        fill="none"
        height="24"
        shapeRendering="geometricPrecision"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path>
        <path d="M14 2v6h6"></path>
        <path d="M16 13H8"></path>
        <path d="M16 17H8"></path>
        <path d="M10 9H8"></path>
      </svg>
    )
  }
  
  function FeedbackIcon() {
    return (
      <svg
        fill="none"
        height="24"
        shapeRendering="geometricPrecision"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
      </svg>
    )
  }
  
  function ContactIcon() {
    return (
      <svg
        fill="none"
        height="24"
        shapeRendering="geometricPrecision"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <path d="M22 6l-10 7L2 6"></path>
      </svg>
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
  
  
  function SearcIcon (){
  
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="magician-cap"><path d="M53.23 7.1l-27 7.24h0l-7.47 2a6.29 6.29 0 01-.9-3.57l.09-1.6a1 1 0 00-.66-1 1 1 0 00-1.15.35l-.94 1.31a6.27 6.27 0 01-5.44 2.59l-1.6-.1a1 1 0 00-1 .67 1 1 0 00.36 1.14l1.3.94a6.26 6.26 0 012.59 5.44l-.09 1.6a1 1 0 00.66 1 1 1 0 00.34.06 1 1 0 00.81-.42l.94-1.3a6.91 6.91 0 01.94-1 2.93 2.93 0 001.53.44 2.82 2.82 0 00.75-.1l37.46-10A2.92 2.92 0 0056.8 9.17 2.91 2.91 0 0053.23 7.1zM11.05 16.37a8.15 8.15 0 004.84-2.3 8.38 8.38 0 00.87 2.8l-1 .27a2.93 2.93 0 00-2.07 3.57l.06.17c-.13.11-.28.21-.4.33A8.25 8.25 0 0011.05 16.37zm5.71 4.48a.92.92 0 11-.47-1.78l9.48-2.54.48 1.78zm38-10.47a.9.9 0 01-.56.43l-26 7L27.7 16 53.75 9a.9.9 0 011.12.65A.86.86 0 0154.78 10.38zM51.93 24.57L50.42 24a6.25 6.25 0 01-4-4.53l-.35-1.57a1 1 0 00-.91-.78 1 1 0 00-1 .66l-.54 1.51a6.25 6.25 0 01-4.53 4l-1.57.35a1 1 0 00-.12 1.92l1.51.55a6.24 6.24 0 011.88 1.1H15.56a3.33 3.33 0 100 6.66h1.73l.31 2A27.24 27.24 0 0115.21 52a3.49 3.49 0 003.14 5H45.49A3.42 3.42 0 0047 56.65 3.49 3.49 0 0048.63 52a27.16 27.16 0 01-2.39-16.17l.3-2h1.71A3.33 3.33 0 0049 27.28a6.4 6.4 0 011.27-.45l1.57-.35a1 1 0 00.78-.91A1 1 0 0051.93 24.57zm-11 .24a8.21 8.21 0 004-3.53 8.21 8.21 0 003.54 4 8.4 8.4 0 00-2.77 1.9H43.5A8.28 8.28 0 0040.89 24.81zm5.94 28.05A1.5 1.5 0 0146.89 54a1.45 1.45 0 01-.76.85 1.43 1.43 0 01-.64.15H18.35a1.49 1.49 0 01-1.49-1.49 1.47 1.47 0 01.15-.65A29.31 29.31 0 0019.89 38.8H44A29.08 29.08 0 0046.83 52.86zM44.26 35.5c-.07.43-.1.87-.15 1.3H19.73c-.05-.43-.09-.87-.16-1.3l-.25-1.64h25.2zm5.32-5a1.32 1.32 0 01-1.33 1.33H15.56a1.33 1.33 0 010-2.66H48.25A1.33 1.33 0 0149.58 30.53z" data-name="Magician hat"></path></svg>
    )
  }
  
  