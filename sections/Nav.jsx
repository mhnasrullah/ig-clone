import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCircle,faCompass,faMessage,faHeart,faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'
import Anchor from '../components/Anchor'
import Image from 'next/image'
import { WindowCtx } from '../context'

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
    const {
        size : {get : windowSize},
        auth : {get : auth}
    } = useContext(WindowCtx);

  return (
    <nav className='flex flex-col w-1/6 md:w-1/12 h-screen pt-16 border-r-[1px] border-r-[#00000011]'>
        <FontAwesomeIcon icon={faInstagram} size={windowSize == "lg" ? "2x" : "xl" } className='mb-16'/>

        <div className='flex flex-col space-y-10'>
            {navIcon.map((e,i)=>(
                <Anchor type={"link"} setActive={(e)=>setActive(e)} id={e.id} key={e.id} href={e.href} active={active==e.id} className="text-center">
                    <FontAwesomeIcon icon={e.icon} size={windowSize == "lg" ? "2x" : "xl" }/>
                </Anchor>
            ))}
            <div className='relative flex justify-center'>
                {auth ? (
                    <Image src={auth?.photo} className="rounded-full" width={35} objectFit="cover" height={35}/>
                ) : false}
            </div>
        </div>

        <Anchor type={"link"} setActive={()=>setActive(6)} href={"/"} active={active==6} className="text-center mt-16">
            <FontAwesomeIcon icon={faBars} size={windowSize == "lg" ? "2x" : "xl" }/>
        </Anchor>

    </nav>
  )
}
