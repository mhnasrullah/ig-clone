// import { useEffect,useContext } from "react";
// import Card from "../components/Card";
// import Search from "../components/Search";
// import { WindowCtx } from "../context";
// import Suggest from "../sections/Suggest";
// import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";
// import SearchBig from "../components/SearchBig";
import dynamic from "next/dynamic";
import Loading from "../sections/Loading";
const HomePage = dynamic(() => import('../routes/index'), {
  ssr: true,
  loading : ()=>(<Loading/>)
});


export default function Home({...props}) {
  return(<HomePage {...props}/>)
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

