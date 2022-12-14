import React, { useContext, useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import StatusCom from './Status'
import { getHasStatus } from '../utils/filterData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight,faEllipsis, faHeart as HeartSolid} from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faFaceSmile, faHeart, faMessage, faShareFromSquare } from '@fortawesome/free-regular-svg-icons';
import { WindowCtx } from '../context';
import { Pagination, Navigation } from 'swiper';
import parse from 'html-react-parser'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Status = () => {
    const {dataUser : {get : userData}} = useContext(WindowCtx);
    const [data,setData] = useState([]);
    const [scroll,setScroll] = useState(0);
    const ref = useRef();

    useEffect(()=>{
        ref.current.scrollLeft = scroll
    })
    useEffect(()=>{
        setData(getHasStatus(userData));
    },[userData])
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

const Feed = ({data}) => {

    const [liked,setLike] = useState(false);
    const [doubleLike,setDbl] = useState(false);
    const [more,setMore] = useState(false);
    
    useEffect(()=>{
        if(doubleLike){
            setTimeout(()=>{
                setDbl(false)
            },1000)
        }
    })
    
    if(!data){
        return <div>...</div>
    }else{
        const {
            account : {photo,username},
            content,
            like,
            caption,
            comments,
            time
        } = data

        return (
            <div className='w-full bg-white border-[1px] rounded-lg border-[#00000011] mt-4'>
                <div className="flex px-4 py-2 justify-between">
                    <div
                        className={`relative z-[1] flex p-1 items-center space-x-4 rounded-full bg-white`}>
                        <Image src={photo} layout="fixed" width={50} height={50} className="rounded-full" objectFit="cover" objectPosition={"center"}/>
                        <h1 className='font-medium text-xl'>{username}</h1>
                    </div>
                    <button>
                        <FontAwesomeIcon icon={faEllipsis} size="xl"/>
                    </button>
                </div>


                {content.length <= 1 ?
                (
                    <button className='w-full relative flex justify-center items-center'
                    onDoubleClick={()=>{
                        setLike(true)
                        setDbl(true)
                        }}>
                        <div className='w-full'>
                            <Image src={content[0]} layout="responsive" width={1} height={1} objectFit={"cover"} objectPosition="center" />
                        </div>
                        <FontAwesomeIcon icon={HeartSolid} size="10x" className={`absolute text-white ${doubleLike ? 'opacity-70' : 'opacity-0'} duration-300 transition ease-out`}/>
                    </button>
                ) :
                (<div>
                     <Swiper
                        modules={[Pagination, Navigation]}
                        navigation={{
                            nextEl : ".nextEl",
                            prevEl : ".prevEl"
                        }}
                        pagination
                        spaceBetween={0}
                        slidesPerView={1}>
                    {content.map((e,i)=>(
                        <SwiperSlide key={i}>
                            <button
                            onDoubleClick={()=>{
                                setLike(true)
                                setDbl(true)
                                }}
                            className='relative flex w-full items-center justify-center'>
                                <div className='w-full'>
                                    <Image src={e} layout="responsive" width={1} height={1} objectFit={"cover"} objectPosition="center" />
                                </div>
                                <FontAwesomeIcon icon={HeartSolid} size="10x" className={`absolute text-white ${doubleLike ? 'opacity-70' : 'opacity-0'} duration-300 transition ease-out z-[10]`}/>
                            </button>
                        </SwiperSlide>
                    ))}
                    <div className='absolute bottom-0 left-0 z-50 w-fit top-0 flex items-center'>
                        <button
                        className='w-10 h-10 transition-all ml-4 rounded-full border-[1px] prevEl border-[#00000011] bg-white opacity-50'>
                            <FontAwesomeIcon icon={faAngleLeft} size="lg"/>
                        </button>
                    </div>
                    <div className='absolute bottom-0 right-0 z-50 w-fit top-0 flex items-center'>
                        <button
                        className='w-10 h-10 transition-all mr-4 rounded-full border-[1px] nextEl border-[#00000011] bg-white opacity-50'>
                            <FontAwesomeIcon icon={faAngleRight} size="lg"/>
                        </button>
                    </div>
                    </Swiper>
                </div>)}

                <div className='flex py-4 px-6 items-center justify-between'>
                    <div className='flex space-x-6 items-center'>
                        <button onClick={()=>setLike(!liked)}>
                            <FontAwesomeIcon icon={liked ? HeartSolid : faHeart} className={`${liked ? 'text-red-500' : 'hover:text-gray-500'}`} size={"xl"}/>
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faMessage} size={"xl"} className="hover:text-gray-500"/>
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faShareFromSquare} size={"xl"} className="hover:text-gray-500"/>
                        </button>
                    </div>
                    <button>
                        <FontAwesomeIcon icon={faBookmark} size={"xl"} className="hover:text-gray-500"/>
                    </button>
                </div>

                <div className='pb-4 px-6'>
                    <p className="font-medium">{liked ? (like+1).toLocaleString('en-US') : like.toLocaleString('en-US')} Likes</p>
                    <div className='mt-3'>
                        <span className='font-medium inline-block mr-2'>{username}</span>
                        <span>{more ? parse(caption) : parse(caption).slice(0,1)}</span>
                        {parse(caption).length > 1 &&(
                            <span className={`ml-1 text-gray-500 ${more ? "hidden" : " "}`}>...
                                <button className='ml-1' onClick={()=>setMore(!more)}>
                                    more
                                </button>
                            </span>
                        )}
                    </div>
                </div>

                <button className='mx-6 text-gray-500 mb-4'>
                    {comments.length > 0 ? (
                        <p>View All {comments.length} Comments</p>
                    ):(
                        <p>No Comments</p>
                    )}
                </button>

                <p className='mx-6 text-gray-500 mb-4'>{time?.toUpperCase()}</p>

                <div className='px-6 py-4 border-t-[1px] border-[#00000011] flex space-x-4'>
                    <button>
                        <FontAwesomeIcon icon={faFaceSmile} size='xl'/>
                    </button>
                    <input placeholder='Add a Comment' className='w-full outline-none'/>
                    <button className='text-blue-600 font-medium'>Post</button>
                </div>

            </div>
        )
    }
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
