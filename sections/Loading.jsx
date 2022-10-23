import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import { WindowCtx } from '../context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default function Loading() {

  const {loading : {set}} = useContext(WindowCtx)
  useEffect(()=>{
    setTimeout(()=>{
      set(false)
    },2000)
  },[])
  return (
    <div className='w-full h-screen bg-white flex items-center relative'>
      <div className="w-1/5 md:w-1/6 mx-auto lg:w-1/12">
        <Image src={"/logoic.png"} width={1} height={1} layout="responsive"/>
      </div>
      <div className='absolute inset-x-0 bottom-10'>
        <div className='w-fit mx-auto'>
          <FontAwesomeIcon icon={faSpinner} className="animate-spin text-gray-500" size='xl'/>
        </div>
        <p className='text-center text-gray-500 mt-20'>Cloned by<br/><b>Hasan Nasrullah</b></p>
      </div>
    </div>
  )
}
