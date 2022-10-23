import React from 'react'
import Tooltip from '../components/Tooltip';

export default function test({data}) {
  return (
    <div className='w-1/2 ml-auto p-5 bg-black h-screen'>
      <Tooltip _for="nav"/>
    </div>
  )
}
export async function getStaticProps(){

  const data = await fetch("https://sampleapiaul.vercel.app/api/ig/suggest")
  const res = await data.json();

  return {
    props : {
      data : res
    }
  }
}