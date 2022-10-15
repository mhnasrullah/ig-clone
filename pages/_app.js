import '../styles/globals.css'
import Nav from "../sections/Nav";
import { WindowCtx } from '../context';
import { useEffect, useState } from 'react';
import { screenSize } from '../utils/func';
import { getAuthUser } from '../utils/filterData';

function MyApp({ Component, pageProps }) {
  const [windowSize,setWindowSize] = useState(screenSize());
  const [auth,setAuth] = useState({});

    const ctxVal = {
        "size" : {
          "get" : windowSize,
          "set" : setWindowSize
        },
        "auth" : {
          "get" : auth,
          "set" : setAuth
        }
    }

    useEffect(()=>{
        window.addEventListener("resize",()=>{
          setWindowSize(screenSize())
        })

        setAuth(getAuthUser())
      })
  
  return (
    <WindowCtx.Provider value={ctxVal}>
      <div className='flex font-rob'>
        <Nav/>
        <Component {...pageProps} />
      </div>
    </WindowCtx.Provider>
  )
}

export default MyApp
