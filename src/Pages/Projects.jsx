import React, { useState } from "react"
import { Link } from "react-router-dom"

import project1 from "../assets/Images/project-01.jpg"
import project2 from "../assets/Images/project-02.jpg"
import project3 from "../assets/Images/project-03.jpg"
import project4 from "../assets/Images/project-04.jpg"
import project5 from "../assets/Images/project-05.jpg"
import project6 from "../assets/Images/project-06.jpg"
import project7 from "../assets/Images/project-07.jpg"
import project8 from "../assets/Images/project-08.jpg"

const projects = [
  {
    id: 1,
    image: project1,
    category: "Identidade visual",
    title: "Conceito de Arte para Museus",
  },
  {
    id: 2,
    image: project2,
    category: "Marketing",
    title: "Gráficos para Economia e Marketing",
  },
  {
    id: 3,
    image: project3,
    category: "Design",
    title: "Modelagem e Renderização 3D de Fones",
  },
  {
    id: 4,
    image: project4,
    category: "Identidade visual",
    title: "Estilo de Embalagem de Produto",
  },
  {
    id: 5,
    image: project5,
    category: "Design",
    title: "Logotipo de cartão de visita",
  },
  {
    id: 6,
    image: project6,
    category: "Identidade visual",
    title: "Conceito de papelão circular",
  },
  {
    id: 7,
    image: project7,
    category: "Interativo",
    title: "Aplicativo móvel de previsão do tempo diário",
  },
  {
    id: 8,
    image: project8,
    category: "Marketing",
    title: "Enfeite de sorvete colorido",
  },
]


export default function Projects() {

  const [filter, setFilter] = useState("Todos os projetos")

  const categories = [
    "Todos os projetos",
    "Marketing",
    "Interativo",
    "Design",
    "Identidade visual",
  ]

  const filteredData = filter === "Todos os projetos" ? projects : projects.filter((item) => item.category === filter);

  return (
    <>
      <div className="section-banner h-[500px] bg-[#121212] px-[2%] md:px-[8%] xl:px-[12%] flex flex-col justify-end items-start text-white w-full">
        <h2 className="text-5xl lg:text-7xl font-semibold w-full lg:max-w-2xl pb-3 relative">
          Nossos projetos
        </h2>
        <p className="border-b-2 w-full pb-10 border-gray-300">
          Estúdio criativo na interseção entre arte e tecnologia de design.
        </p>
        <ul className="flex gap-8 py-5">
          <li>
            <Link to="/index" className="font-normal text-white text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className="font-normal text-white text-lg">
              Nossos projetos
            </Link>
          </li>
        </ul>
      </div>

      <div className="py-[8%] px-[5%] xl:px-[12%] flex flex-col lg:flex-row">
        <div className="lg:w-[25%] p-5 rounded-lg">
          <ul className="text-gray-400 space-y-5 text-xl">
            {categories.map((cat) => (
              <li key={cat} onClick={() => setFilter(cat)} className={`cursor-pointer hover:text-white transition-all ${filter === cat ? "text-white font-semibold" : ""}`}>
                {cat}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:w-[75%] grid grid-cols-1 md:grid-cols-2">
          {filteredData.map((item) => (
            <div key={item.id} className="border-b border-gray-300/20 p-5 rounded-lg group">
              <div className="h-[350px] w-full rounded-lg overflow-hidden mb-5">
                <img src={item.image} alt={item.title} className="w-full h-full group-hover:scale-110 object-cover transition-all duration-300" />
              </div>

              <Link to={`/projects/${item.id}`}>
                <span className="text-white border border-gray-50/20 px-2 py-1 font-semibold text-lg rounded-sm">
                  {item.category}
                </span>
                <h3 className="text-2xl text-white sm:tetx-3xl font-semibold mt-2 hover:text-primary duration-300 transition-all">
                  {item.title}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
