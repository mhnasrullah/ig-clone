import React from 'react'

export default function test({data}) {
  console.log(data)
  return (
    <div>test</div>
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