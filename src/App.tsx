import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './Component/Header'
import Banner from './Component/Banner'
import './App.css'
import { MobileNavbar } from './Component/MobileNavbar'

function App() {
  
  return (
    <div className=''>
    <Header />
    <Banner />
       {/* <MobileNavbar /> */}
    </div>
  )
}

export default App
