import React,{useState,useContext,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark as X } from '@fortawesome/free-regular-svg-icons';
import { WindowCtx } from '../context';
import { getUserByName } from '../utils/filterData';
import Link from 'next/link';
import Image from 'next/image';

export default function SearchBig({show,setShow,refValue,setActive}) {
    const[search,setSearch] = useState("");
    const {dataUser : {get : User}} = useContext(WindowCtx)
    const [data,setData] = useState([])

    useEffect(()=>{
        if(search){
            setData(getUserByName(search,User));
        }
    },[search])

  return (
    <div className={`hidden md:block h-screen fixed transition-all top-0 z-40 ${show ? 'left-0' : '-left-full'} bg-white rounded-lg w-2/3 lg:w-2/5`}>
        <div className='w-5/6 lg:w-9/12 ml-auto pt-10 pr-6'>
            <div className='flex mb-10 items-center justify-between'>
                <h1 className='text-2xl font-medium'>Search</h1>
                <button onClick={()=>{
                    setActive(refValue);
                    setShow(!show)}}>
                    <FontAwesomeIcon size='xl' icon={X} className="text-gray-500"/>
                </button>
            </div>

            <div className='bg-gray-100 border-[1px] flex items-center space-x-2 border-[#00000011] rounded-lg p-2'>
                <FontAwesomeIcon icon={faSearch} size="sm" className='text-gray-400'/>
                <input type="text" className='outline-none bg-transparent w-full' value={search} placeholder='Search' onChange={(e)=>setSearch(e.currentTarget.value)}/>
                {search ? (
                    <button onClick={()=>setSearch("")}>
                        <FontAwesomeIcon icon={faCircleXmark} size="sm" className='text-gray-400'/>
                    </button>
                ) : false}
            </div>
        </div>
        <hr className='mt-10'/>
        {search ? (
            <div className='w-5/6 ml-auto pt-6 pr-6'>
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
