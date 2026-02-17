import React from "react"
import title_icon from "../assets/Images/title_icon.svg"
import { Link, useParams } from "react-router-dom"

import blog1 from "../assets/Images/blog_01.jpg"
import blog2 from "../assets/Images/blog_02.jpg"
import blog3 from "../assets/Images/blog_03.jpg"
import blog4 from "../assets/Images/blog_04.jpg"
import blog5 from "../assets/Images/blog_05.jpg"
import blog6 from "../assets/Images/blog_06.jpg"

import post1 from "../assets/Images/post1.jpg"
import post2 from "../assets/Images/post2.jpg"
import post3 from "../assets/Images/post3.jpg"

export default function BlogDetails() {
  const blogs = [
    {
      id: 1,
      date: "Abril 10, 2025",
      category: "Art",
      title: "Explore seus pontos fortes e impulsione seu negócio!",
      image: blog1,
    },
    {
      id: 2,
      date: "Maio 15, 2025",
      category: "Marketing",
      title: "5 passos para criar um plano de marketing excepcional",
      image: blog2,
    },
    {
      id: 3,
      date: "Maio 20, 2025",
      category: "Redação publicitária",
      title:
        "10 dicas de revisão de conteúdo para detectar mais erros evitáveis",
      image: blog3,
    },
    {
      id: 4,
      date: "Junho 05, 2025",
      category: "Design",
      title: "Como criar uma identidade de marca moderna do zero",
      image: blog4,
    },
    {
      id: 5,
      date: "Junho 18, 2025",
      category: "Tecnologia",
      title: "Por que a IA é o futuro da estratégia de marketing digital",
      image: blog5,
    },
    {
      id: 6,
      date: "Julho 02, 2025",
      category: "Desenvolvimento",
      title: "10 dicas para otimizar o desempenho do seu site",
      image: blog6,
    },
  ]

  const { id } = useParams()
  const blog = blogs.find((b) => b.id === Number(id))

  if (!blog) {
    return (
      <div className="text-center text-red-500 py-20">Blog não encontrado</div>
    )
  }

  return (
    <>
      <div className="section-banner h-[500px] bg-[#121212] px-[2%] md:px-[8%] xl:px-[12%] flex flex-col justify-end items-start text-white w-full">
        <h2 className="text-2xl md:text-5xl lg:text-7xl font-semibold w-full lg:max-w-5xl pb-3 relative">
          {blog.title}
          <span className="absolute hidden sm:flex top-0 right-5 w-10 h-10">
            <img src={title_icon} alt="Icon" className="w-full h-full" />
          </span>
        </h2>
        <p className="border-b-2 w-full pb-10 border-gray-300">
          {blog.date} - {blog.category}
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
          <li>
            <Link to="/blog" className="font-normal text-white text-lg">
              {blog.title}
            </Link>
          </li>
        </ul>
      </div>

      <div className="py-[8%] px-[2%] md:px-[8%] xl:px-[12%] text-white">
        <img
          src={blog.image}
          alt={blog.title}
          className="rounded-lg w-full h-[800px] object-cover"
        />
        <p className="mt-8 text-lg text-gray-300 leading-8">
          A empresa de construção e imobiliária mais inovadora e bem-sucedida do
          país foi selecionada para o projeto de expansão das áreas de manobra A
          e E do Aeroporto Internacional de Tampa. Essa expansão dará suporte à
          Autoridade de Aviação do Condado de Hillsborough e ao Aeroporto
          Internacional de Tampa, que projetam receber até 38,8 milhões de
          passageiros anualmente, 402 mil toneladas de carga por ano e 344 mil
          operações de aeronaves anualmente.
        </p>
        <p className="mt-8 text-lg text-gray-300 leading-8">
          Aprendi que esse resíduo pode ser estabilizado, reduzindo o potencial
          de lixiviação de metais pesados ​em 96%. Pesquisas demonstraram que o
          processo de construção, com patente pendente, comprova que, após a
          extração e reciclagem de metais, quaisquer resíduos químicos podem ser
          contidos com segurança quando utilizados em produtos de concreto
          ligado hidraulicamente.
        </p>

        <h3 className="text-5xl font-semibold pt-10 pb-4">
          Estilos de anúncios personalizados
        </h3>

        <ul className="space-y-5 list-disc ps-5 text-xl text-gray-300">
          <li>
            A curiosidade excessiva agora levava a uma permissão para pequenas
            despesas.
          </li>
          <li>Favorecer a cama garante ao filho coisas ainda.</li>
          <li>Ela consistia em consultar outros lugares sobre felicidade.</li>
          <li>Descartar qualquer coisa velha de casa.</li>
          <li>
            A viúva te derruba, uma nova sombra deriva esperanças pequenas.
          </li>
          <li>Discrição interessada em estimar com base em estímulos.</li>
        </ul>

        <div className="bg-black mt-10 border border-b-lime-300 p-8 md:p-12 rounded-md relative">
          <p className="text-2xl md:text-3xl font-semibold leading-snug ">
            “Estamos entusiasmados em sermos parceiros de projeto e construção
            da Autoridade de Aviação do Condado de Hillsborough neste importante
            projeto no Aeroporto Internacional de Tampa.”
          </p>
        </div>

        <p className="mt-8 text-lg text-gray-300 leading-8">
          A empresa de construção e imobiliária mais inovadora e bem-sucedida do
          país foi selecionada para o projeto de expansão das áreas de manobra A
          e E do Aeroporto Internacional de Tampa. Essa expansão dará suporte à
          Autoridade de Aviação do Condado de Hillsborough e ao Aeroporto
          Internacional de Tampa, que projetam receber até 38,8 milhões de
          passageiros anualmente, 402 mil toneladas de carga por ano e 344 mil
          operações de aeronaves anualmente.
        </p>

        <h3 className="text-5xl font-semibold pt-10 pb-4">
          Qual o próximo passo?
        </h3>

        <p>
          Nosso objetivo imediato é concluir a fase de testes e obter a
          certificação, o que nos permitirá lançar nosso produto no mercado até
          o final do ano. Estamos em contato constante com operadores de usinas
          de valorização energética de resíduos, fabricantes de concreto e o
          setor da construção civil em geral.
        </p>

        <p>
          A demanda global por uma solução de Economia Circular já é alta, com
          fabricantes de concreto de todo o mundo nos procurando para{" "}
          <b>desenvolver programas de testes específicos.</b>
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-10">
          <img src={post1} alt="post-image" />
          <img src={post2} alt="post-image" />
          <img src={post3} alt="post-image" />
        </div>
      </div>
    </>
  )
}
