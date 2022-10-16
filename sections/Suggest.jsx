import React, { useContext, useEffect, useState } from 'react'
import List from '../components/List'
import { WindowCtx } from '../context'
import { getAllSuggest } from '../utils/filterData';

export default function Suggest() {
  const {auth : { get : auth}} = useContext(WindowCtx);
  const [suggest,setSuggest] = useState([]);

  useEffect(()=>{
    setSuggest(getAllSuggest());
  },[suggest])

  return (
    <div className='mt-4'>
      <List
      _for="userSuggest"
      big
      data={auth}/>

      <h1 className='font-medium text-xl text-gray-500 mt-6'>Suggestions For You</h1>

      <div className='mt-6'>
        {suggest.length != 0 ?
        suggest.map((e,i)=>(
          <div key={i}>
            <List
            _for="userSuggest"
            data={e}
            />
          </div>
        ))
        :false}
      </div>

      <p className='mt-6 text-gray-400'>© cloned by Hasan Nasrullah</p>
    </div>
  )
}
