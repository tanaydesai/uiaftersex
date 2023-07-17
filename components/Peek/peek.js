"use client"
import React, {useState} from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import peekImg from "@/assests/images/arc.png";

const Peek = () => {
  const [open , setOpen] = useState(false)

  const change = () => {
    setOpen(!open)
  }

  return (
   <div className='flex justify-center [font-family:"SupplyLRegular"] max-w-[623px] h-[500px] text-center text-[rgb(47,47,47)] m-auto p-8'>

      <p className="[mask:linear-gradient(to_bottom,rgba(0,0,0,1)_0,rgba(0,0,0,1)_20%,rgba(0,0,0,0)_85%,rgba(0,0,0,0)_0)_100%_100%_/_100%_100%_repeat-x]">
        Government bonds are typically bought by a wide range of investors, including individual investors, pension me <span className="bg-[bisque] p-[3px] rounded-[10px] hover:opacity-70 inline" onClick={change}>spacex.com</span> funds, mutual funds, hedge funds, and foreign governments. These investors are attracted to government bonds because they are considered to be a safe investment, backed by the full faith and credit of the government that issues them. As a result, they offer a relatively low risk of default and provide a steady stream of income through regular interest payments.
        In the case of government bonds, the borrowers are national governments, which issue the bonds to fund their operations and pay off existing debt. Governments issue bonds when they need to borrow money from investors to finance their budget deficits or to fund specific programs or projects. For example, a government might issue bonds to fund the construction of new infrastructure, such as roads, bridges, or airports.
        When a government issues bonds, it agrees to pay interest to investors at a predetermined rate, usually semi-annually or annually. The interest rate on government bonds is determined by the prevailing market interest rates, as well as the creditworthiness of the issuing government. The term of government bonds can vary widely, ranging from a few months to several decades, depending on the needs of the issuing government.
      </p>

      {open && <motion.div initial={{scale:0.7}} animate={{scale:[0.7,1.1,1]}} transition={{type:"ease" ,duration: 0.3,time:[0,0.7 ** 0.3,0.3 ]}}  className="fixed w-[70%] max-w-[500px] h-[430px] justify-center items-center z-[9999] rounded-[10px]">
        <button onClick={change} className='bg-transparent float-right border-transparent'>X</button>
        <div className='[&::-webkit-scrollbar]:hidden h-full overflow-y-auto  rounded-[10px]'>
          <Image className='max-w-full h-auto rounded-[17px]' src={peekImg} alt=""></Image>
        </div>
      </motion.div>}

    </div>
    )
}


export default Peek;