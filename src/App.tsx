import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './Component/Header'
import Banner from './Component/Banner'
import './App.css'
import { MobileNavbar } from './Component/MobileNavbar'
import Skills from './Component/Skills '
import Project from './Component/Project'

function App() {
  
  return (
    <div className='max-w-[1600px]'>
    <Header />
    <Banner />
    <Skills />
    <Project />
   {/* <MobileNavbar /> */}
    </div>
  )
}

export default App
