import React, { useEffect, useRef, useState } from 'react'
import StatusCom from '../sections/Status'
import { getHasStatus } from '../utils/filterData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Status = () => {
    const [data,setData] = useState([]);
    const [scroll,setScroll] = useState(0);
    const ref = useRef();

    useEffect(()=>{
        ref.current.scrollLeft = scroll
        ref.current.addEventListener('scroll',()=>{
            setTimeout(()=>{
                setScroll(ref.current.scrollLeft)
            },1000)
        })
    })
    useEffect(()=>{
        setData(getHasStatus());
    },[])
    return (
        <div className='relative'>
            <div ref={ref} className={`flex space-x-6 w-full overflow-x-hidden scroll-smooth bg-white py-4 border-[1px] px-4 border-[#00000011] rounded-lg`}>
                {data?.map((e,i)=>(
                    <StatusCom
                    key={i}
                    photo={e.photo}
                    name={e.username}/>
                ))}
            </div>
            <div className={scroll <= 20 ?'hidden' : 'absolute inset-y-0 left-0 z-10 flex items-center'}>
                <button className='w-10 h-10 ml-4 rounded-full border-[1px] border-[#00000011] bg-white'
                onClick={()=>{
                    if((ref.current.scrollLeft - ref.current.offsetWidth) < 0){
                        setScroll(0)
                    }else{
                        setScroll(ref.current.scrollLeft - ref.current.offsetWidth);
                    }
                }}>
                    <FontAwesomeIcon icon={faAngleLeft} size="lg"/>
                </button>
            </div>
            <div className='absolute inset-y-0 right-0 z-10 flex items-center'>
                <button
                onClick={()=>{
                    setScroll(ref.current.scrollLeft + ref.current.offsetWidth);
                }}
                className='w-10 h-10 mr-4 rounded-full border-[1px] border-[#00000011] bg-white'>
                    <FontAwesomeIcon icon={faAngleRight} size="lg"/>
                </button>
            </div>
        </div>
    )
}

const Feed = () => {
    return (
        <div>Feed</div>
    )
}

export default function Card({_for,...props}) {
    if(_for == "status"){
        return (
          <Status/>
        )
    }else if(_for == "feed"){
        return (
            <Feed {...props}/>
        )
    }
}
