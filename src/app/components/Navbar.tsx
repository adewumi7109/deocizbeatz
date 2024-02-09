"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineInfo, AiTwotoneControl } from 'react-icons/ai';
import { FaQuestion, FaUser } from "react-icons/fa";
import { FaCartShopping } from 'react-icons/fa6';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdHome } from 'react-icons/io';
import { SlMusicTone } from 'react-icons/sl';
const Links = [
    {name:"Home", url:"/", icon:<IoMdHome size={25}/>},
    {name:"About", url:"/about", icon:<AiOutlineInfo size={25}/>},
    {name:"Beats", url:"/beats", icon:<SlMusicTone size={25}/>},
    {name:"Sound Kits", url:"/soundkits", icon:<AiTwotoneControl size={25}/>},
    {name:"Faq", url:"/faq", icon:<FaQuestion size={25}/>},
]

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = ()=>{
    setToggle(!toggle)
  }
  return (
  <div className='h-[10vh] px-5 w-full bg-black text-textColor flex justify-between items-center'>
   <div className='flex  gap-3 items-center'>
   <GiHamburgerMenu onClick={handleToggle} className='md:hidden' size={25} />
   <span className='w-[1px] h-9 md:hidden bg-gray-700'></span>
    <div>
        <h1 className=' md:text-3xl text-primaryColor text-2xl font-bold'>Deocizbeatz</h1>
    </div>

   </div>
    <div className='flex gap-6 items-center'>
        <ul className='md:flex gap-6 hidden items-center'>
        {Links.map((link, index)=>(
 <li key={index}><Link href={link.url} >{link.name}</Link></li>
        ))}
        </ul>
      <div className='flex items-center gap-2 md:gap-6'>
      <span className='w-[1px] h-9 hidden md:visible bg-gray-700'></span>
        <div className='flex gap-2 items-center'><FaCartShopping size={25}/> <span className='hidden md:block font-bold'>0.00</span> </div>
        <span className='w-[1px] hidden md:visible h-9 bg-gray-700'></span>
        <div className='  md:flex gap-2 items-center'><FaUser className='hidden md:block' size={25}/> <span className=' font-bold'>Login</span></div>
      </div>
       
    </div>
    <ul className={`${toggle ? 'translate-x-0' : '-translate-x-full'} md:hidden pt-6 px-5 flex flex-col gap-6 absolute bg-black top-[10vh] left-0 w-[50%] z-40 h-[100vh] transition-transform duration-300`}>
        {Links.map((link, index)=>(
 <li key={index} ><Link href={link.url} className='flex gap-2 items-center'>
  {link.icon}
  <span>{link.name}</span>
  </Link>
  </li>
        ))}
        </ul>
  </div>
  )
}

export default Navbar