import { useEffect,useContext } from "react";
import Card from "../components/Card";
import Search from "../components/Search";
import { WindowCtx } from "../context";
import Suggest from "../sections/Suggest";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import SearchBig from "../components/SearchBig";

export default function Home({user,suggest,post}) {
  const {
    dataUser : {set : setUser},
    suggest : {set : setSuggest},
    post : {
      get : getPost,
      set : setPost}
    } = useContext(WindowCtx);
  
  useEffect(()=>{
    setPost(post);
    setUser(user);
    setSuggest(suggest);
  },[])

  return (
    <div className="flex md:w-11/12 md:ml-auto min-h-screen bg-gray-50 px-4 lg:justify-center lg:space-x-16 pt-14">
      <div className="main w-full lg:w-5/12">

        <div className="flex items-center justify-between mb-4 md:hidden">
          <div className="relative w-20">
            <Image src={"/logo.svg"} width={84} height={30}/>
          </div>
          <button className='text-center block'>
              <FontAwesomeIcon icon={faHeart} size={"2x"}/>
          </button>
        </div>
        <div className="mb-4 md:hidden">
          <Search />
        </div>
        <Card _for="status"/>

        <div>
          {getPost.map((e,i)=>(
            <div key={i}>
              <Card _for="feed" data={e}/>
            </div>
          ))}
        </div>

      </div>

      <div className="side hidden lg:block lg:w-1/4">
        <Suggest />
      </div>
    </div>
  )
}

export async function getStaticProps(){

  const user = await fetch("https://sampleapiaul.vercel.app/api/ig");
  const userRes = await user.json();

  const suggest = await fetch("https://sampleapiaul.vercel.app/api/ig/suggest");
  const suggestRes = await suggest.json();

  const post = await fetch("https://sampleapiaul.vercel.app/api/ig/posts");
  const postRes = await post.json();
  
  return {
    props : {
      user : userRes,
      suggest : suggestRes,
      post : postRes
    }
  }
}

