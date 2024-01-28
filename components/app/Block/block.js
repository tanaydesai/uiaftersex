"use client"
import React, { useState } from "react"
import { MdDone } from "react-icons/md";
import { RxCopy } from "react-icons/rx";
import { FaExpand } from "react-icons/fa";
import { CodeBlock } from 'react-code-block';
import { useCopyToClipboard } from 'react-use';
import { toast } from 'sonner'
import { components } from "./code";


export const Codeblock = ({component}) => {
  const [open, setOpen] = useState(false)
  const [state, copyToClipboard] = useCopyToClipboard();

  const code = components[component]["code"] ? components[component]["code"] : false
  const path = components[component]["path"] ? components[component]["path"] : false

    return (
      <>
        {code && <div className="my-5 relative">
          {path && <div className="w-full rounded-t-[6px] bg-gray-300 py-2 overflow-hidden truncate"><code className="text-gray-700 overflow-hidden bg-transparent font-SupplyLRegular">{path}</code></div>}
          <CodeBlock code={code} language="js">
            <CodeBlock.Code style={{minHeight:"50px",height: open ? "fit-content" : "300px"}} className={`[&::-webkit-scrollbar]:hidden  bg-[rgb(220,220,220)] ${path ? "rounded-t-[0px]" : ""} text-red-400 font-SupplyLRegular text-sm p-4 ${open ? "" : "[mask:linear-gradient(to_bottom,rgba(0,0,0,1)_0,rgba(0,0,0,1)_10%,rgba(0,0,0,0)_95%,rgba(0,0,0,0)_0)_0%_0%_/_100%_120%_repeat-x]"} rounded-lg overflow-auto shadow`}>
              <CodeBlock.LineContent>
                <CodeBlock.Token />
              </CodeBlock.LineContent>
            </CodeBlock.Code>
            <div onClick={() => { 
            const promise = new Promise((resolve) => {resolve(copyToClipboard(code))});
            toast.promise(promise, {
              loading: 'Loading...',
              success: () => {
                return `Copied to clipboard`;
              },
              error: 'Error',
            });
            }} className="absolute flex w-[25px] h-[25px] items-center rounded-[6px] justify-center right-3 top-2 text-gray-700">{state.value ? <MdDone /> : <RxCopy /> }</div>
            <button className="absolute w-[75px] rounded-[8px] bg-[#000000] text-[12px] font-LufgaLight text-white h-[30px] flex items-center justify-center gap-1 bottom-10 mx-auto left-[50%] translate-x-[-50%]" onClick={() => setOpen(!open)}><FaExpand /> {open ? "Collapse" : "Expand" }</button>
          </CodeBlock>
        </div>}
      </>
    )
}

export const Codeline = ({code}) => {
  const [state, copyToClipboard] = useCopyToClipboard();

    return (
      <>
        {code && <div className="my-10 relative">
          <CodeBlock code={code} language="js">
            <CodeBlock.Code style={{minHeight:"50px"}} className={`[&::-webkit-scrollbar]:hidden  bg-[rgb(220,220,220)] text-red-400 font-SupplyLRegular text-sm p-4 rounded-lg overflow-auto shadow`}>
              <CodeBlock.LineContent>
                <CodeBlock.Token />
              </CodeBlock.LineContent>
            </CodeBlock.Code>
            <div onClick={() => { 
            const promise = new Promise((resolve) => {resolve(copyToClipboard(code))});
            toast.promise(promise, {
              loading: 'Loading...',
              success: () => {
                return `Copied to clipboard`;
              },
              error: 'Error',
            });
            }} className="absolute flex w-[25px] h-[25px] items-center rounded-[6px] justify-center right-3 top-4 text-gray-700">{state.value ? <MdDone /> : <RxCopy /> }</div>
          </CodeBlock>
        </div>}
      </>
    )
}