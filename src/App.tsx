// import { useState } from 'react'
 
import Header from './Component/Header'
import Banner from './Component/Banner'
import './App.css'
// import { MobileNavbar } from './Component/MobileNavbar'
import Skills from './Component/Skills '
import Project from './Component/Project'
import Footer from './Component/Footer'
import Contact from './Component/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <main className="relative">
        <Banner />
        <Skills />
        <Project />
        <Contact />
      </main>
      <Footer />
      {/* <MobileNavbar /> */}
    </div>
  );
}

export default App
