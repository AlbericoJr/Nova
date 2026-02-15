import React, { useState } from "react"

import heroVideo from "../assets/Images/hero-video.mp4"
import title_icon from "../assets/Images/title_icon.svg"
import ser1 from "../assets/Images/serv-icon1.png"
import ser2 from "../assets/Images/serv-icon2.png"
import ser3 from "../assets/Images/serv-icon3.png"

import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"

import "@splidejs/react-splide/css"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll"

import project1 from "../assets/Images/project-01.jpg"
import project2 from "../assets/Images/project-02.jpg"
import project3 from "../assets/Images/project-03.jpg"
import project4 from "../assets/Images/project-04.jpg"

import team1 from "../assets/Images/team-01.png"
import team2 from "../assets/Images/team-02.png"
import team3 from "../assets/Images/team-03.png"
import team4 from "../assets/Images/team-04.png"

import CountUp from "react-countup"

import blog1 from "../assets/Images/blog_01.jpg"
import blog2 from "../assets/Images/blog_02.jpg"
import blog3 from "../assets/Images/blog_03.jpg"

import brand1 from "../assets/Images/brand1.png"
import brand2 from "../assets/Images/brand2.png"
import brand3 from "../assets/Images/brand3.png"
import brand4 from "../assets/Images/brand4.png"
import brand5 from "../assets/Images/brand5.png"
import brand6 from "../assets/Images/brand6.png"
import brand7 from "../assets/Images/brand7.png"

export default function Index() {
  const [activeIndex, setActiveIndex] = useState(1)

  const services = [
    { id: 1, title: "Criação", img: ser1 },
    { id: 2, title: "Websites", img: ser2 },
    { id: 3, title: "Estúdio", img: ser3 },
  ]

  const items = [
    "- Creative Direction",
    "- Machine Learning / AI",
    "- Brand Strategy",
    "- Native and Web Apps",
  ]

  const projects = [
    {
      id: 1,
      Image: project1,
      category: "Branding",
      title: "Conceito de Arte para Museus",
    },
    {
      id: 2,
      Image: project2,
      category: "Marketing",
      title: "Gráficos para Economia e Marketing",
    },
    {
      id: 3,
      Image: project3,
      category: "Design",
      title: "Modelagem e Renderização 3D de Fones",
    },
    {
      id: 4,
      Image: project4,
      category: "Branding",
      title: "Estilo de Embalagem de Produto",
    },
  ]

  const members = [
    {
      id: 1,
      name: "André Valadares",
      role: "UI/UX Designer",
      Image: team1,
      letter: "A",
    },
    {
      id: 2,
      name: "Maria Eduarda",
      role: "Digital Marketer",
      Image: team2,
      letter: "M",
    },
    {
      id: 3,
      name: "Pedro Henrique",
      role: "Full-Stack Developer",
      Image: team3,
      letter: "P",
    },
    {
      id: 4,
      name: "Helena Castro",
      role: "Estrategista de Conteúdo",
      Image: team4,
      letter: "H",
    },
  ]

  const testimonials = [
    {
      id: 1,
      text: "O alto nível de atendimento ao cliente deles complementou sua expertise técnica. Eles foram atenciosos, prestativos e comunicativos. A dedicação deles ao projeto foi impressionante.",
      name: "Jessica Brown",
      role: "Design Quality",
      rating: 4.5,
    },
    {
      id: 2,
      text: "Trabalhar com [Nome do Estúdio] foi perfeito (ou muito fácil). Eles entenderam a nossa visão e a traduziram lindamente em uma experiência digital. Sempre pontuais e proativos!",
      name: "Rohan Mehta",
      role: "Creative Director",
      rating: 4.5,
    },
    {
      id: 3,
      text: "A atenção da equipe aos detalhes e a criatividade nos ajudaram a nos destacar da concorrência. Altamente recomendável para uma colaboração de longo prazo.",
      name: "Emily Davis",
      role: "Brand Manager",
      rating: 4.5,
    },
    {
      id: 4,
      text: "Equipe profissional e confiável! Eles lidaram com requisitos complexos de forma suave e superaram nossas expectativas com suas soluções.",
      name: "Arjun Patel",
      role: "Startup Founder",
      rating: 4.5,
    },
  ]

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
  ]

  return (
    <>
      {/* Hero */}
      <div className="h-screen w-full relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="px-[2%] md:px-[8%] xl:px-[12%] text-white h-full w-full flex flex-col justify-center relative z-10">
          <h2 className="text-5xl md:text-7xl xl:text-9xl font-semibold w-full lg:max-w-2xl pb-3 relative">
            Design do Futuro
            <span className="absolute top-0 right-0 w-10 h-10">
              <img src={title_icon} alt="Icon" className="w-full h-full" />
            </span>
          </h2>

          <p className="text-xl md:text-2xl max-w-2xl font-normal">
            Estúdio criativo na intersecção entre arte, design e tecnologia.
          </p>

          <a
            href="#"
            className="absolute right-20 bottom-16 w-[67px] h-[67px] rounded-full border border-white z-30 cursor-pointer flex items-center justify-center group hover:scale-110 transition-transform duration-300"
          >
            <span className="absolute inset-0 rounded-full border border-white opacity-50 animate-pulseRing"></span>

            <span className="relative flex items-end justify-between w-[22px] h-[22px] z-10">
              <span className="w-1 bg-white animate-eq1"></span>
              <span className="w-1 bg-white animate-eq2"></span>
              <span className="w-1 bg-white animate-eq3"></span>
              <span className="w-1 bg-white animate-eq4"></span>
            </span>
          </a>
        </div>
      </div>

      {/* Services */}
      <div className="services grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 py-[8%] px-[2%] md:px-[8%] xl:px-[12%]">
        {services.map((services, index) => (
          <div
            key={services.id}
            className={`w-full text-center group rounded-full p-10 flex justify-center items-center flex-col relative service-item h-[450px] transition-all duration-300
              ${
                activeIndex === index ? "active bg-primary" : "bg-transparent"
              }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(1)}
          >
            <img
              src={services.img}
              alt={services.title}
              width={60}
              height={60}
              className={`pb-4 transition-all duration-300 ${
                activeIndex === index ? "filter-none" : "invert"
              }`}
            />

            <div
              className={`service-content transition-all duration-300 
              ${activeIndex === index ? "text-black" : "text-white"}`}
            >
              <h2 className="text-5xl font-semibold pb-6">{services.title}</h2>
              <p className="text-xl">
                Desenvolver websites é muito mais do que marketing; é também
                estética.
              </p>
            </div>

            {/* Bubbles */}
            {/* <div className='nova-bubble absolute bottom-[-60px] right-0 w-[142px] h-[152px] pointer-events-none'>
              <div 
                className={`bubble-1 w-8 h-8 rounded-full bg-pink-300 absolute transition-all duration-500 
                ${activeIndex == index 
                  ? "opacity-100 bottom-0 right-0 scale-100" 
                  : "opacity-0 bottom-[-20%] right-[-10%] scale-0"}`
              }></div>
              
              <div 
                className={`bubble-2 w-6 h-6 rounded-full bg-blue-300 absolute transition-all duration-500 delay-100
                ${activeIndex == index 
                  ? "opacity-100 bottom-[30%] left-0 scale-100" 
                  : "opacity-0 bottom-[-50%] left-[-40%] scale-0"}`
              }></div>
              
              <div 
                className={`bubble-3 w-10 h-10 rounded-full bg-green-300 absolute transition-all duration-500 delay-200
                ${activeIndex == index 
                  ? "opacity-100 bottom-[63%] left-[57%] scale-100" 
                  : "opacity-0 bottom-[-50%] left-[-40%] scale-0"}`
              }></div>
            </div> */}
          </div>
        ))}
      </div>

      {/* About */}
      <div className="about py-[8%] px-[2%] md:px-[8%] xl:px-[12%] flex justify-between items-start lg:flex-row flex-col gap-10">
        <div className="about-content w-full lg:w-[60%]">
          <span className="text-black bg-primary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
            Bem-vindos à Nova
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold sm:max-w-3xl my-6 leading-tight text-white">
            Uma Agência de Design que Gera Sucesso Conquistando Corações.
          </h2>

          <ul className="flex xl:flex-nowrap flex-wrap gap-5 lg:gap-10">
            <li className="w-full xl:w-1/2">
              <span className="font-semibold text-2xl text-white">
                Nossa Missão
              </span>
              <p className="text-md sm:text-md mt-2 text-gray-300">
                Desde o momento em que nossa empresa foi fundada, temos ajudado
                nossos clientes a encontrar{" "}
                <b>soluções excepcionais para seus negócios</b> marcas
                memoráveis e produtos digitais. Nossa expertise cresce a cada
                ano, assim como nossa experiência acumulada.
              </p>
            </li>

            <li className="w-full xl:w-1/2">
              <span className="font-semibold text-2xl text-white">
                Nosso Objetivo
              </span>
              <p className="text-md sm:text-md my-2 text-gray-300">
                Nosso objetivo é entregar experiências incríveis que façam as
                pessoas falarem, e construir valor estratégico para marcas,
                tecnologia e entretenimento.
              </p>
              <Link to="/about" className="btn rounded-sm">
                <Icon icon="vaadin:plus" width="30" height="30" />
                <span>Mais Sobre Nós</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-[40%] flex justify-center items-center">
          <div className="flex items-center justify-center w-[250px] h-[250px] relative border rounded-full">
            <svg
              viewBox="0 0 300 300"
              className="absolute w-full h-full animate-[spin_20s_linear_infinite]"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0"
                ></path>
              </defs>

              <text
                fill="#fff"
                fontSize="16"
                fontWeight="600"
                letterSpacing="4"
                textLength="1400"
              >
                <textPath href="#circlePath" startOffset="0">
                  ANOS DE EXPERIÊNCIA EM SOLUÇÕES DIGITAIS . ANOS DE EXPERIÊNCIA
                  EM SOLUÇÕES DIGITAIS .
                </textPath>
              </text>
            </svg>
            <div className="border rounded-[50%] px-6 py-5">
              <div
                className="text-8xl font-bold text-transparent mt-5 border"
                style={{
                  WebkitTextStrokeWidth: "3px",
                  WebkitTextStrokeColor: "#fff",
                }}
              >
                14
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Splide */}
      <div className="py-[2%] flex justify-center items-center">
        <div className="w-full overflow-hidden border-t border-white border-b flex justify-center items-center h-full">
          <Splide
            options={{
              type: "loop",
              drag: "free",
              focus: "center",
              autoWidth: true,
              arrows: false,
              pagination: false,
              gap: "3rem",
              autoScroll: {
                speed: 0.9,
                pauseOnHover: false,
              },
              pauseOnHover: false,
              resetProgress: false,
            }}
            extensions={{ AutoScroll }}
          >
            {items.map((text, index) => (
              <SplideSlide key={index}>
                <div
                  className="text-[10vw] font-bold uppercase whitespace-nowrap"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "2px #fff",
                  }}
                >
                  {text}
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>

      {/* featured projects */}
      <div className="featured py-[8%] px-[2%] md:px-[8%] xl:px-[12%]">
        <div className="featured-content w-full flex justify-between flex-col lg:flex-row lg:items-end md-10">
          <div>
            <span className="text-black bg-primary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
              Projetos em Destaque
            </span>
            <h2 className="text-2xl sm:text-5xl font-semibold sm:max-w-3xl mt-5 leading-tight text-white">
              Portfólio do Estúdio
            </h2>
          </div>
          <Link to="/projects" className="btn rounded-sm w-fit">
            <Icon icon="vaadin:plus" width="30" height="30" />
            <span>Ver Projetos</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 text-white gap-10 w-full lg:w-[90%] xl:w-full">
          {projects.map((item) => (
            <div
              key={item.id}
              className="border border-gray-300/20 p-5 cursor-pointer rounded-lg group"
            >
              <div className="h-[550px] w-full rounded-lg overflow-hidden mb-5">
                <img
                  src={item.Image}
                  alt={item.title}
                  className="w-full h-full group-hover:scale-110 object-cover transition-all duration-300"
                />
              </div>
              <Link to={`/projects/${item.id}`}>
                <span className="text-white border border-gray-50/20 px-2 py-1 font-semibold text-lg rounded-sm">
                  {item.category}
                </span>
                <h3 className="text-2xl sm:text-4xl font-semibold mt-2 hover:text-primary transition-all duration-300">
                  {item.title}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="team py-[8%] px-[2%] md:px-[8%] xl:px-[12%]">
        <div className="team-content w-full lg:w-[60%] md-10">
          <span className="text-black bg-primary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
            Time de Especialistas
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold sm:max-w-3xl mt-5 mb-4 leading-tight text-white">
            Oferecemos serviços incríveis para nossos clientes.
          </h2>
        </div>

        <div className="team-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {members.map((member) => (
            <div
              key={member.id}
              className="team-item relative overflow-hidden text-white border border-gray-50/20 h-[600px] md:h-[740px] group flex flex-col justify-between cursor-pointer"
            >
              {/* Description */}
              <div className="desc p-6 md:p-8">
                <div className="mb-4">
                  <span className="block text-3xl md:text-5xl group-hover:text-black font-bold leading-tight transition-colors duration-300">
                    {member.name}
                  </span>

                  <span className="block group-hover:text-black text-gray-100 text-sm md:text-md font-semibold transition-colors duration-300">
                    {member.role}
                  </span>
                </div>

                {/* Social Links */}
                <div className="flex gap-3">
                  <Link
                    to="#"
                    className="border border-gray-50/20 p-3 md:p-5 rounded-full group-hover:border-black transition-colors duration-300"
                  >
                    <Icon
                      icon="ri:facebook-fill"
                      width="24"
                      height="24"
                      className="group-hover:text-black transition-transform duration-300 group-hover:scale-110"
                    />
                  </Link>

                  <Link
                    to="#"
                    className="border border-gray-50/20 p-3 md:p-5 rounded-full group-hover:border-black transition-colors duration-300"
                  >
                    <Icon
                      icon="flowbite:linkedin-solid"
                      width="24"
                      height="24"
                      className="group-hover:text-black transition-transform duration-300 group-hover:scale-110"
                    />
                  </Link>
                </div>
              </div>

              {/* Image + letter */}
              <div className="image relative">
                <img
                  src={member.Image}
                  alt={member.name}
                  className="w-full h-auto scale-110 grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-500 ease-[cubic-bezier(0.3,0,0.3,1)]"
                />
                <div
                  className="num absolute -right-3 md:-right-5 bottom-0 text-[180px] sm:text-[200px] md:text-[240px] font-bold leading-[0.5] group-hover:text-primary pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.3,0,0.3,1)]"
                  style={{
                    textShadow:
                      "1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000",
                  }}
                >
                  <span>{member.letter}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <div className="testimonials py-[8%] px-[2%] md:px-[8%] xl:px-[12%] flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="tst-content w-full lg:w-1/2 text-white">
          <h2 className="text-3xl sm:text-4xl font-semibold sm:max-w-3xl my-5 mb-4 leading-tight text-white">
            Depoimentos
          </h2>
          <div className="font-normal text-xl flex items-center">
            4.5{""}
            <span className="flex text-yellow-400 ml-2">
              <Icon
                icon="material-symbols:star-rounded"
                width="24"
                height="24"
              />
              <Icon
                icon="material-symbols:star-rounded"
                width="24"
                height="24"
              />
              <Icon
                icon="material-symbols:star-rounded"
                width="24"
                height="24"
              />
              <Icon
                icon="material-symbols:star-rounded"
                width="24"
                height="24"
              />
              <Icon icon="ic:round-star-half" width="24" height="24" />
            </span>{" "}
            Avaliação de Todos os Clientes
          </div>
        </div>

        <div className="w-full lg:w-1/2 border-l border-white ps-10">
          <Splide
            options={{
              type: "fade",
              rewind: true,
              autoplay: true,
              interval: 4000,
              pauseOnHover: true,
              arrows: false,
              pagination: false,
              speed: 800,
            }}
          >
            {testimonials.map((t) => (
              <SplideSlide key={t.id}>
                <div className="text-white">
                  <p className="text-gray-400 text-2xl md:text-3xl max-w-2xl leading-tight mb-6 font-medium">
                    {t.text}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-medium">{t.name}</h3>
                  <span className="text-gray-300">{t.role}</span>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>

      {/* Counts */}
      <div className="grid grid-cols-1 py-[8%] sm:grid-cols-3 gap-12 px-[2%] md:px-[8%] xl:px-[12%]">
        <div className="text-center">
          <h2
            className="text-7xl sm:text-8xl font-bold leading-none"
            style={{
              WebkitTextStroke: "2px white",
            }}
          >
            <CountUp start={0} end={23} duration={2} />
          </h2>
          <p className="text-gray-300 text-lg font-semibold mt-3">Equipe</p>
        </div>

        <div className="text-center">
          <h2
            className="text-7xl sm:text-8xl font-bold leading-none"
            style={{
              WebkitTextStroke: "2px white",
            }}
          >
            <CountUp start={0} end={99} duration={2.5} />+
          </h2>
          <p className="text-gray-300 text-lg font-semibold mt-3">
            Projetos Concluídos
          </p>
        </div>

        <div className="text-center">
          <h2
            className="text-7xl sm:text-8xl font-bold leading-none"
            style={{
              WebkitTextStroke: "2px white",
            }}
          >
            <CountUp start={0} end={12} duration={2.5} />M
          </h2>
          <p className="text-gray-300 text-lg font-semibold mt-3">
            Linhas de Código
          </p>
        </div>
      </div>

      {/* Get In Touch */}
      <div className="py-[8%]">
        <div className="contact py-[8%] px-[2%] md:px-[8%] xl:px-[12%] h-[800px] relative">
          <div className="team-content w-full lg:w-[60%] md-10">
            <span className="text-black bg-primary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
              Fale Conosco
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold sm:max-w-3xl mt-5 mb-4 leading-tight text-white">
              Envie-nos Suas Ideias Brilhantes
            </h2>
            <Link
              to="/contact"
              className="text-primary text-3xl lg:text-5xl font-semibold"
            >
              Info@yourcompany.com
            </Link>
            <p className="text-gray-100 text-xl pt-5">
              123 Business Avenue, Los Angeles, CA 90001, Estados Unidos.
            </p>
          </div>
          <div className="contact-image">
            <div className="cat-img-circle img-circle--1"></div>
            <div className="cat-img-circle img-circle--2"></div>
            <div className="cat-img-circle img-circle--3"></div>

            <ul className="text-white grid grid-cols-2 gap-10 absolute right-0 bottom-60 social-icons">
              <li>
                <Link
                  to="/"
                  className="social-icon relative overflow-hidden p-10 text-xl font-bold h-[100px] rounded-full bg-black flex gap-8 items-center"
                >
                  <Icon
                    icon="ri:facebook-fill"
                    width="44"
                    height="44"
                    className="text-black bg-white p-2 rounded-full"
                  />
                  <span>Facebook</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="social-icon relative overflow-hidden p-10 text-xl font-bold h-[100px] rounded-full bg-black flex gap-8 items-center"
                >
                  <Icon
                    icon="iconoir:instagram"
                    width="44"
                    height="44"
                    className="text-black bg-white p-2 rounded-full"
                  />
                  <span>Instagram</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="social-icon relative overflow-hidden p-10 text-xl font-bold h-[100px] rounded-full bg-black flex gap-8 items-center"
                >
                  <Icon
                    icon="ri:twitter-fill"
                    width="44"
                    height="44"
                    className="text-black bg-white p-2 rounded-full"
                  />
                  <span>Twitter</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="social-icon relative overflow-hidden p-10 text-xl font-bold h-[100px] rounded-full bg-black flex gap-8 items-center"
                >
                  <Icon
                    icon="ri:linkedin-fill"
                    width="44"
                    height="44"
                    className="text-black bg-white p-2 rounded-full"
                  />
                  <span>LinkedIn</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Blog */}
      <div className="blog py-[8%] px-[2%] md:px-[8%] xl:px-[12%]">
        <div className="blog-content w-full lg:w-[60%] md-10">
          <span className="text-black bg-primary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
            Notícias e Blog
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-6xl font-semibold sm:max-w-5xl mt-5 mb-4 leading-tight text-white">
            Análises, reflexões, tendências do setor, dicas de marketing e muito
            mais.
          </h2>
        </div>
        <div className="blog-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
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
      </div>

      {/* Brand */}
      <div className="brand py-[8%] px-[2%] md:px-[8%] xl:px-[12%]">
        <div className="brand-content w-full lg:w-[60%] md-10">
          <span className="text-black bg-primary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
            Clientes fantásticos e premium
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-6xl font-semibold sm:max-w-5xl mt-5 mb-4 leading-tight text-white">
            Tivemos o prazer de trabalhar com alguns clientes.
          </h2>
        </div>
        <div className="brand-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <Link
            to="https://www.google.com/"
            className="brand-item cursor-pointer border border-gray-50/20 p-5 relative flex justify-center items-center"
          >
            <img src={brand1} alt="brand-image" className="object-contain" />
            <span>Ver site</span>
          </Link>
          <Link
            to="https://www.google.com/"
            className="brand-item cursor-pointer border border-gray-50/20 p-5 relative flex justify-center items-center"
          >
            <img src={brand2} alt="brand-image" className="object-contain" />
            <span>Ver site</span>
          </Link>
          <Link
            to="https://www.google.com/"
            className="brand-item cursor-pointer border border-gray-50/20 p-5 relative flex justify-center items-center"
          >
            <img src={brand3} alt="brand-image" className="object-contain" />
            <span>Ver site</span>
          </Link>
          <Link
            to="https://www.google.com/"
            className="brand-item cursor-pointer border border-gray-50/20 p-5 relative flex justify-center items-center"
          >
            <img src={brand4} alt="brand-image" className="object-contain" />
            <span>Ver site</span>
          </Link>
          <Link
            to="https://www.google.com/"
            className="brand-item cursor-pointer border border-gray-50/20 p-5 relative flex justify-center items-center"
          >
            <img src={brand5} alt="brand-image" className="object-contain" />
            <span>Ver site</span>
          </Link>
          <Link
            to="https://www.google.com/"
            className="brand-item cursor-pointer border border-gray-50/20 p-5 relative flex justify-center items-center"
          >
            <img src={brand6} alt="brand-image" className="object-contain" />
            <span>Ver site</span>
          </Link>
          <Link
            to="https://www.google.com/"
            className="brand-item cursor-pointer border border-gray-50/20 p-5 relative flex justify-center items-center"
          >
            <img src={brand7} alt="brand-image" className="object-contain" />
            <span>Ver site</span>
          </Link>
          <Link
            to="https://www.google.com/"
            className="brand-item cursor-pointer border border-gray-50/20 p-5 relative flex justify-center items-center"
          >
            <img src={brand2} alt="brand-image" className="object-contain" />
            <span>Ver site</span>
          </Link>
        </div>
      </div>
    </>
  )
}
