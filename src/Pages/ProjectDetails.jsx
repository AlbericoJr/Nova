import React from "react"
import { Link, useParams } from "react-router-dom"

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

export default function ProjectDetails() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === Number(id))

  if (!project) {
    return (
      <h2 className="text-center text-white py-10">Projeto não encontrado</h2>
    )
  }

  return (
    <>
      <div className="section-banner h-[500px] bg-[#121212] px-[2%] md:px-[8%] xl:px-[12%] flex flex-col justify-end items-start text-white w-full">
        <h2 className="text-5xl lg:text-7xl font-semibold w-full lg:max-w-2xl pb-3 relative">
          {project.title}
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
              {project.title}
            </Link>
          </li>
        </ul>
      </div>

      <div className="py-[8%] px-[2%] md:px-[8%] xl:px-[12%] text-white">
        <div className="w-full h-[500px] overflow-hidden rounded-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-gray-400 text-lg mt-8 leading-relaxed">
          Most innovative and successful builders and real estate enterprises in
          the country, has been selected for the design-build expansion of
          Airsides A and E at Tampa International Airport. This expansion will
          support Hillsborough County Aviation Authority and Tampa International
          Airport as they project up to 38.8 million annual passengers, 402,000
          tons of cargo per year and 344,000 annual aircraft operations.
        </p>

        <p className="text-gray-400 text-lg mt-8 leading-relaxed">
          I learned that this waste product could be stabilised, reducing the
          potential for leachable heavy metals by 96%. Research has shown that
          the <b>Construction patent pending process demonstrates</b> that after
          metal extraction and recycling, any residual chemicals can be securely
          contained when utilised in hydraulically bound concrete products.
        </p>
      </div>

      <div className="pb-[8%] px-[2%] md:px-[8%] xl:px-[12%] grid grid-cols-1 xl:grid-cols-2 text-white gap-10 w-full lg:w-[90%] xl:w-full">
        {projects.map((item) => (
          <div
            key={item.id}
            className="border border-gray-300/20 p-5 rounded-lg group"
          >
            <div className="h-[550px] w-full rounded-lg overflow-hidden mb-5">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full group-hover:scale-110 object-cover transition-all duration-300"
              />
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
    </>
  )
}
