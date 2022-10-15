import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCircle,faCompass,faMessage,faHeart,faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'
import Anchor from '../components/Anchor'
import Image from 'next/image'

const navIcon = [
    {
        "id" : 1,
        "icon" : faCircle,
        "href" : "/"
    },
    {
        "id" : 2,
        "icon" : faMagnifyingGlass,
        "href" : "/"
    },
    {
        "id" : 3,
        "icon" : faCompass,
        "href" : "/"
    },
    {
        "id" : 4,
        "icon" : faMessage,
        "href" : "/"
    },
    {
        "id" : 5,
        "icon" : faHeart,
        "href" : "/"
    },
    {
        "id" : 6,
        "icon" : faSquarePlus,
        "href" : "/"
    },
];

export default function Nav() {

    const [active,setActive] = useState(1);

  return (
    <nav className='flex flex-col w-16 h-screen pt-16 border-r-[1px] border-r-[#00000011]'>
        <FontAwesomeIcon icon={faInstagram} size="2x" className='mb-16'/>

        <div className='flex flex-col space-y-10'>
            {navIcon.map((e,i)=>(
                <Anchor type={"link"} setActive={(e)=>setActive(e)} id={e.id} key={e.id} href={e.href} active={active==e.id} className="text-center">
                    <FontAwesomeIcon icon={e.icon} size="2x"/>
                </Anchor>
            ))}
            <div className='relative flex justify-center'>
                <Image src={"https://picsum.photos/200"} className="rounded-full" width={40} objectFit="cover" height={40}/>
            </div>
        </div>

        <Anchor type={"link"} setActive={()=>setActive(6)} href={"/"} active={active==6} className="text-center mt-16">
            <FontAwesomeIcon icon={faBars} size="2x"/>
        </Anchor>

    </nav>
  )
}
