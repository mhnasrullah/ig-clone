import Card from "../components/Card";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-50 px-4">
      <div className="main mt-14">
        {/* status */}
        <Card _for="status"/>
      </div>
    </div>
  )
}
