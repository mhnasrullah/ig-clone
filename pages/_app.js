import '../styles/globals.css'
import Nav from "../sections/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <div className='flex'>
      <Nav/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
