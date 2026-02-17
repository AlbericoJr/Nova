import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./Components/Nav"
import Index from "./Pages/Index"
import Footer from "./Components/Footer"
import About from "./Pages/About"
import Team from "./Pages/Team"
import TeamDetail from "./Pages/TeamDetail"
import Services from "./Pages/Services"
import Pricingplan from "./Pages/Pricingplan"
import Faq from "./Pages/Faq"
import Projects from "./Pages/Projects"
import ProjectDetails from "./Pages/ProjectDetails"
import Blog from "./Pages/Blog"
import BlogDetails from "./Pages/BlogDetails"
import Contact from "./Pages/Contact"

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
          <Route path="/equipe/:id" element={<TeamDetail />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/plano" element={<Pricingplan />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
