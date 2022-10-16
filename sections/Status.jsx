import Image from 'next/image'
import React from 'react'
import style from './style.module.css'
import { stringOverflow } from '../utils/func'
import Link from 'next/link'

export default function StatusCom({photo,name,...props}) {
  return (
    <Link href={"/"}>
      <a className='inline-block'>
        <div className='flex-col flex items-center space-y-2' {...props}>
          <div className={`relative ${style.gradientShape}`}>
            <div
            className={`relative z-[1] flex p-1 rounded-full bg-white`}>
              <Image src={photo} layout="fixed" width={50} height={50} className="rounded-full" objectFit="cover" objectPosition={"center"}/>
            </div>
          </div>
            <p className='text-center'>{stringOverflow(name)}</p>
        </div>
      </a>
    </Link>
  )
}
