import React, { useContext} from 'react'
import List from '../components/List'
import { WindowCtx } from '../context'

export default function Suggest() {
  const {
    auth : { get : auth},
    suggest : {get : suggest}
  } = useContext(WindowCtx);

  return (
    <div className='mt-4'>
      {auth ? (
        <List
        _for="userSuggest"
        big
        data={auth}/>
      ) : (<div>Loading...</div>)}

      <h1 className='font-medium text-xl text-gray-500 mt-6'>Suggestions For You</h1>

      <div className='mt-6'>
        {suggest?.length != 0 ?
        suggest?.map((e,i)=>(
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


