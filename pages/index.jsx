import { useEffect,useContext } from "react";
import Card from "../components/Card";
import Search from "../components/Search";
import { WindowCtx } from "../context";
import Suggest from "../sections/Suggest";

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
    <div className="flex w-5/6 md:w-11/12 min-h-screen bg-gray-50 px-4 lg:justify-center lg:space-x-16 pt-14">
      <div className="main w-full lg:w-5/12">
        <Search />
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

