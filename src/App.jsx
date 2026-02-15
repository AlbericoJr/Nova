import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./Components/Nav"
import Index from "./Pages/Index"
import Footer from "./Components/Footer"
import About from "./Pages/About"
import Team from "./Pages/Team"


function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/index" element={<Index />} />
          <Route path="/about" element={<About />} />        
          <Route path="/equipe" element={<Team />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

// https://nova-portfolio-reactjs.vercel.app/
// YouTube: https://youtu.be/lxDF__dmMNQ?si=rRGblpdtlNpE7tR4 2:56:40