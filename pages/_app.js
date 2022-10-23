import '../styles/globals.css'
import Nav from "../sections/Nav";
import { WindowCtx } from '../context';
import { useEffect, useState } from 'react';
import { screenSize } from '../utils/func';
import { getAuthUser } from '../utils/filterData';
import Auth from '../components/Auth';
import Loading from '../sections/Loading';

function MyApp({ Component, pageProps }) {
  const [windowSize,setWindowSize] = useState(screenSize());
  const [auth,setAuth] = useState({});
  const [user,setUser] = useState([]);
  const [suggest,setSuggest] = useState([]);
  const [post,setPost] = useState([]);
  const [load,setLoad] = useState(true);

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
        },
        "post" : {
          "get" : post,
          "set" : setPost
        },
        "loading" : {
          "get" : load,
          "set" : setLoad
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
        {load ? <Loading/> :
        (
          <>
            <Auth/>
            <Nav/>
            <div className='w-full'>
              <Component {...pageProps} />
            </div>
          </>
        )}
      </div>
    </WindowCtx.Provider>
  )
}

export default MyApp
