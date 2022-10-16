import Image from 'next/image';
import React, { useState } from 'react'

const User = ({data,big}) => {
    const{displayname,username,photo,follower} = data;
    const[follow,setFollow] = useState(false);

    return(
        <div className='flex items-center w-full justify-between mb-4'>
            <div className='flex items-center space-x-4'>
                <Image src={photo} width={big?60 : 50} height={big?60 : 50} layout="fixed" className='rounded-full'/>
                <div>
                    <h1 className='font-medium text-xl'>{username}</h1>
                    <p className='text-gray-500'>{big ? displayname : `have ${follower}++ follower`}</p>
                </div>
            </div>
            <button className={`${follow ? 'text-gray-500': 'text-blue-500'} font-medium`}
            onClick={()=>{
                if(!big){
                    setFollow(!follow)
                }
            }}
            >{big ?'Switch' : (follow ? 'Followed' : 'Follow')}</button>
        </div>
    )
}
export default function List({_for,...props}) {
  
    if(_for == "userSuggest"){
        return <User {...props}/>
    }

}
