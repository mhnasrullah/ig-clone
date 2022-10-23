
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

