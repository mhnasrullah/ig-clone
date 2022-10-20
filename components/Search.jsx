import { faCircleXmark, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { getUserByName } from '../utils/filterData'
import Image from 'next/image'
import Link from 'next/link'
import { WindowCtx } from '../context'

export default function Search() {
    const[search,setSearch] = useState("");
    const {dataUser : {get : User}} = useContext(WindowCtx)
    const [data,setData] = useState([])

    useEffect(()=>{
        if(search){
            setData(getUserByName(search,User));
        }
    },[search])

  return (
  <div className='relative w-full'>
    <div className='bg-gray-100 border-[1px] flex items-center space-x-2 border-[#00000011] rounded-lg p-2'>
        <FontAwesomeIcon icon={faSearch} size="sm" className='text-gray-400'/>
        <input type="text" className='outline-none bg-transparent w-full' value={search} placeholder='Search' onChange={(e)=>setSearch(e.currentTarget.value)}/>
        {search ? (
            <button onClick={()=>setSearch("")}>
                <FontAwesomeIcon icon={faCircleXmark} size="sm" className='text-gray-400'/>
            </button>
        ) : false}
    </div>
    {search ? (
        <div className='w-full py-10 h-96 bg-white absolute top-[120%] rounded-lg z-50'>
            {data.map((e,i)=>(
                <Link href="/" key={i}>
                    <a className='flex space-x-4 items-center px-4 py-4 hover:bg-[#00000009]' key={i}>
                        <Image src={e.photo} width={50} height={50} className="rounded-full" objectFit="cover" objectPosition={"center"}/>
                        <div>
                            <p className='font-medium text-xl'>{e.displayname}</p>
                            <p className="text-gray-700">{e.username}</p>
                        </div>
                    </a>
                </Link>
            ))}
        </div>
    ) : false}
  </div>
  )
}
