import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Pages } from './components/Pages/Pages'
import './App.scss'

function App() {
  useEffect(()=>{
    Aos.init()
    Aos.refresh()
  },[])
   return (
    <>
    <Pages />
    </>
  )
}

export default App
