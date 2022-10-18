import '../styles/globals.css'
import Nav from "../sections/Nav";
import { WindowCtx } from '../context';
import { useEffect, useState } from 'react';
import { screenSize } from '../utils/func';
import { getAuthUser } from '../utils/filterData';
import Auth from '../components/Auth';

function MyApp({ Component, pageProps }) {
  const [windowSize,setWindowSize] = useState(screenSize());
  const [auth,setAuth] = useState({});
  const [user,setUser] = useState([]);
  const [suggest,setSuggest] = useState([]);

    const ctxVal = {
        "size" : {
          "get" : windowSize,
          "set" : setWindowSize
        },
        "auth" : {
          "get" : auth,
          "set" : setAuth
        },
        "dataUser" : {
          "get" : user,
          "set" : setUser
        },
        "suggest" : {
          "get" : suggest,
          "set" : setSuggest
        }
    }

    useEffect(()=>{
        window.addEventListener("resize",()=>{
          setWindowSize(screenSize())
        })
      })
  
  return (
    <WindowCtx.Provider value={ctxVal}>
      <div className='flex font-rob'>
        <Auth/>
        <Nav/>
        <Component {...pageProps} />
      </div>
    </WindowCtx.Provider>
  )
}

export default MyApp
