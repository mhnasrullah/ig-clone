import { useEffect,useContext } from "react";
import Card from "../components/Card";
import Search from "../components/Search";
import { WindowCtx } from "../context";
import Suggest from "../sections/Suggest";

export default function Home({user,suggest}) {
  const {
    dataUser : {set : setUser},
    suggest : {set : setSuggest}
    } = useContext(WindowCtx);
  
  useEffect(()=>{
    setUser(user);
    setSuggest(suggest);
  },[])

  return (
    <div className="flex w-5/6 md:w-11/12 min-h-screen bg-gray-50 px-4 lg:justify-center lg:space-x-16 pt-14">
      <div className="main w-full lg:w-5/12">
        <Search />
        <Card _for="status"/>
      </div>
      <div className="side hidden lg:block lg:w-1/4 h-10">
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
  
  return {
    props : {
      user : userRes,
      suggest : suggestRes
    }
  }
}

