import React, { useContext,useEffect } from 'react'
import { WindowCtx } from '../context'
import { getAuthUser } from '../utils/filterData';

export default function Auth() {

    const {
        auth : {
            set : setAuth
        },
        dataUser : {
            get : getUser
        }
    } = useContext(WindowCtx);

    useEffect(()=>{
        setAuth(getAuthUser(getUser));
    },[getUser])

  return (
    <></>
  )
}
