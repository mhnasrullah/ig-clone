import Card from "../components/Card";
import Search from "../components/Search";
import Suggest from "../sections/Suggest";

export default function Home() {
  return (
    <div className="flex w-5/6 md:w-11/12 min-h-screen bg-gray-50 px-4 lg:justify-center lg:space-x-16 pt-14">
      <div className="main w-full lg:w-5/12">
        <Search />
        <Card _for="status"/>
      </div>
      <div className="side hidden lg:block lg:w-1/4 h-10">
        <Suggest/>
      </div>
    </div>
  )
}
