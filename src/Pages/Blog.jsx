import React from "react"
import { Link } from "react-router-dom"
import title_icon from "../assets/Images/title_icon.svg"

import blog1 from "../assets/Images/blog_01.jpg"
import blog2 from "../assets/Images/blog_02.jpg"
import blog3 from "../assets/Images/blog_03.jpg"
import blog4 from "../assets/Images/blog_04.jpg"
import blog5 from "../assets/Images/blog_05.jpg"
import blog6 from "../assets/Images/blog_06.jpg"

export default function Blog() {
  const blogs = [
    {
      id: 1,
      date: "Abril 10, 2025",
      category: "Art",
      title: "Explore seus pontos fortes e impulsione seu negócio!",
      description:
        "Ambleton: Por trás da marca da comunidade High Calgary. As construtoras e imobiliárias mais inovadoras e bem-sucedidas...",
      image: blog1,
    },
    {
      id: 2,
      date: "Maio 15, 2025",
      category: "Marketing",
      title: "5 passos para criar um plano de marketing excepcional",
      description:
        "Ambleton: Por trás da marca da comunidade High Calgary. As construtoras e imobiliárias mais inovadoras e bem-sucedidas...",
      image: blog2,
    },
    {
      id: 3,
      date: "Maio 20, 2025",
      category: "Redação publicitária",
      title:
        "10 dicas de revisão de conteúdo para detectar mais erros evitáveis",
      description:
        "Ambleton: Por trás da marca da comunidade High Calgary. As construtoras e imobiliárias mais inovadoras e bem-sucedidas...",
      image: blog3,
    },
    {
      id: 4,
      date: "Junho 05, 2025",
      category: "Design",
      title:
        "Como criar uma identidade de marca moderna do zero",
      description:
        "Descubra os princípios por trás da construção de uma identidade visual coesa e como ela pode destacar sua marca.",
      image: blog4,
    },
    {
      id: 5,
      date: "Junho 18, 2025",
      category: "Tecnologia",
      title:
        "Por que a IA é o futuro da estratégia de marketing digital",
      description:
        "As ferramentas de IA estão transformando a maneira como os profissionais de marketing planejam, executam e analisam suas campanhas. Descubra os principais benefícios.",
      image: blog5,
    },
    {
      id: 6,
      date: "Julho 02, 2025",
      category: "Desenvolvimento",
      title:
        "10 dicas para otimizar o desempenho do seu site",
      description:
        "Velocidade importa! Aprenda como tornar seu site mais rápido, eficiente e otimizado para a experiência do usuário.",
      image: blog6,
    },
  ]

  return (
    <>
      <div className="section-banner h-[500px] bg-[#121212] px-[2%] md:px-[8%] xl:px-[12%] flex flex-col justify-end items-start text-white w-full">
        <h2 className="text-5xl lg:text-7xl font-semibold w-full lg:max-w-2xl pb-3 relative">
          Blog
          <span className="absolute hidden sm:flex top-0 right-35 w-10 h-10">
            <img src={title_icon} alt="Icon" className="w-full h-full" />
          </span>
        </h2>
        <p className="border-b-2 w-full pb-10 border-gray-300">
          Análises, reflexões, tendências do setor, dicas de marketing.
        </p>
        <ul className="flex gap-8 py-5">
          <li>
            <Link to="/index" className="font-normal text-white text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" className="font-normal text-white text-lg">
              Blog
            </Link>
          </li>
        </ul>
      </div>

      <div className="py-[8%] px-[2%] md:px-[8%] xl:px-[12%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="blog-item group flex flex-col text-white"
          >
            <div className="blog-image overflow-hidden rounded-lg">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
              />
            </div>
            <div className="blog-content pt-5">
              <p className="text-lg font-semibold pb-2">
                <span className="bg-lime-300 text-black px-3 py-1 rounded-full me-3">
                  {blog.date}
                </span>
                {blog.category}
              </p>
              <Link
                to={`/blog/${blog.id}`}
                className="text-xl font-semibold hover:text-lime-300 transition"
              >
                {blog.title}
              </Link>
              <p className="text-md text-gray-300 mt-3">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>

    </>
  )
}
