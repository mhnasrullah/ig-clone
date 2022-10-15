import { useEffect } from "react";
import { Head } from "next/document";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="w-5/6 md:w-11/12 min-h-screen bg-gray-50 px-4">
      <div className="main mt-14 w-full">
        <Card _for="status"/>
      </div>
    </div>
  )
}
