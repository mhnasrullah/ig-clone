import React, { useContext, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCircle,faCompass,faMessage,faHeart,faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass, faBars, faEllipsis, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Anchor from '../components/Anchor'
import Image from 'next/image'
import { WindowCtx } from '../context'
import SearchBig from '../components/SearchBig'

const navIcon = [
    {
        "id" : 1,
        "icon" : faCircle,
        "href" : "/"
    },
    // {
    //     "id" : 2,
    //     "icon" : faMagnifyingGlass,
    //     "href" : "/"
    // },
    {
        "id" : 3,
        "icon" : faCompass,
        "href" : "/"
    },
    {
        "id" : 6,
        "icon" : faSquarePlus,
        "href" : "/"
    },
    {
        "id" : 4,
        "icon" : faMessage,
        "href" : "/"
    },
];

export default function Nav() {

    const [active,setActive] = useState(1);
    const [sizeWindow,setSize] = useState("sm");
    const [search,setSearch] = useState(false);
    const refActive = useRef(null)
    const {
        size : {get : windowSize},
        auth : {get : auth}
    } = useContext(WindowCtx);

    useEffect(()=>{
        setSize(windowSize)
    })

  return (
    <>
    <nav className={`ease-out py-6 bottom-0 px-6 h-fit items-center transition-all flex flex-row md:flex-col w-full md:w-1/12 md:h-screen md:pt-16 border-[1px] border-[#00000011] fixed z-[1000] bg-white`}>
        <FontAwesomeIcon icon={faInstagram} size="2x" className='hidden md:block mb-16'/>

        <div className='flex md:flex-col items-center md:space-y-6 justify-between w-full'>
            
            {sizeWindow == "sm" ? (
                <>
                    {navIcon.map(({id,href,icon},i)=>(
                        <div key={i}>
                            <Anchor type={"link"} setActive={(e)=>setActive(e)} id={id} key={id} href={href} className={`text-center p-2 ${active==id ? 'bg-gray-100 rounded-full' : 'bg-transparent'} `}>
                                <FontAwesomeIcon icon={icon} size={"2xl"}/>
                            </Anchor>
                        </div>
                    ))

                    }
                </>
                )
                    : (
                        <>
                            <Anchor type={"link"} id={1} setActive={(e)=>setActive(e)} href={"/"} className={`p-2 rounded-full ${active == 1 ? 'bg-gray-100' : 'bg-transparent'} text-center block`}>
                                <FontAwesomeIcon icon={faCircle} size={"2x"}/>
                            </Anchor>
                            <button className={`text-center block p-2 rounded-full ${active == 2 ? 'bg-gray-100' : 'bg-transparent'}`} onClick={()=>{
                                setSearch(!search);
                                if(active == 2){
                                    setActive(refActive.current)
                                }else{
                                    refActive.current = active
                                    setActive(2);
                                }
                            }}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} size={"2x"}/>
                            </button>
                            <Anchor type={"link"} setActive={(e)=>setActive(e)} href={"/"} className="text-center block p-2">
                                <FontAwesomeIcon icon={faCompass} size={"2x"}/>
                            </Anchor>
                            <Anchor type={"link"} setActive={(e)=>setActive(e)} href={"/"} className="text-center block p-2">
                                <FontAwesomeIcon icon={faMessage} size={"2x"}/>
                            </Anchor>
                            <button className='text-center block p-2'>
                                <FontAwesomeIcon icon={faHeart} size={"2x"}/>
                            </button>
                            <button className='text-center block p-2'>
                                <FontAwesomeIcon icon={faSquarePlus} size={"2x"}/>
                            </button>
                        </>
                    )
                }


            <div className='relative flex justify-center h-fit'>
                {auth ? (
                    <Image src={auth?.photo} className="rounded-full" width={windowSize == "sm" ?  35 : 40} layout="fixed" objectFit="cover" height={windowSize == "sm" ?  35 : 40}/>
                ) : false}
            </div>
        </div>
        <Anchor type={"link"} setActive={()=>setActive(6)} href={"/"} active={active==6} className="hidden md:block text-center mt-16">
            <FontAwesomeIcon icon={faBars} size={windowSize == "lg" ? "2x" : "xl" }/>
        </Anchor>
    </nav>
    <SearchBig refValue={refActive.current} setActive={(e)=>setActive(e)} show={search} setShow={(e)=>setSearch(e)}/>
    </>
  )
}


