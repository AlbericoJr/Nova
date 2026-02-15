import React from "react"

import title_icon from "../assets/Images/title_icon.svg"
import { Link } from "react-router-dom"

import aboutlogo from "../assets/Images/novo-about-logo.png"
import CountUp from "react-countup"

import { Icon } from "@iconify/react"

import serviceicon1 from "../assets/Images/service-icon1.png"
import serviceicon2 from "../assets/Images/service-icon2.png"
import serviceicon3 from "../assets/Images/service-icon3.png"
import serviceicon4 from "../assets/Images/service-icon4.png"
import serviceicon5 from "../assets/Images/service-icon5.png"

import team1 from "../assets/Images/team-01.png"
import team2 from "../assets/Images/team-02.png"
import team3 from "../assets/Images/team-03.png"
import team4 from "../assets/Images/team-04.png"

import "@splidejs/react-splide/css"
import { Splide, SplideSlide } from "@splidejs/react-splide"

import brand1 from "../assets/Images/brand1.png"
import brand2 from "../assets/Images/brand2.png"
import brand3 from "../assets/Images/brand3.png"
import brand4 from "../assets/Images/brand4.png"
import brand5 from "../assets/Images/brand5.png"
import brand6 from "../assets/Images/brand6.png"
import brand7 from "../assets/Images/brand7.png"

export default function About() {
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
      rating: 3.5,
    },
    {
      id: 2,
      text: "Trabalhar com [Nome do Estúdio] foi perfeito (ou muito fácil). Eles entenderam a nossa visão e a traduziram lindamente em uma experiência digital. Sempre pontuais e proativos!",
      name: "Rohan Mehta",
      role: "Creative Director",
      rating: 3.5,
    },
    {
      id: 3,
      text: "A atenção da equipe aos detalhes e a criatividade nos ajudaram a nos destacar da concorrência. Altamente recomendável para uma colaboração de longo prazo.",
      name: "Emily Davis",
      role: "Brand Manager",
      rating: 3.5,
    },
    {
      id: 4,
      text: "Equipe profissional e confiável! Eles lidaram com requisitos complexos de forma suave e superaram nossas expectativas com suas soluções.",
      name: "Arjun Patel",
      role: "Startup Founder",
      rating: 4,
    },
  ]

  return (
    <>
      <div className="section-banner h-[500px] bg-[#121212] px-[2%] md:px-[8%] xl:px-[12%] flex flex-col justify-end items-start text-white w-full">
        <h2 className="text-5xl lg:text-7xl font-semibold w-full lg:max-w-2xl pb-3 relative">
          Sobre Nós
          <span className="absolute hidden sm:flex top-0 right-35 w-10 h-10">
            <img src={title_icon} alt="Icon" className="w-full h-full" />
          </span>
        </h2>
        <p className="border-b-2 w-full pb-10 border-gray-300">
          Estúdio criativo na intersecção entre arte, design e tecnologia.
        </p>
        <ul className="flex gap-8 py-5">
          <li>
            <Link to="/index" className="font-normal text-white text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="font-normal text-white text-lg">
              Sobre nós
            </Link>
          </li>
        </ul>
      </div>

      <div className="about py-[8%] px-[2%] md:px-[8%] xl:px-[12%] flex justify-between items-start lg:flex-row flex-col gap-10">
        <div className="about-content w-full lg:w-[60%]">
          <span className="text-black bg-primary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
            Bem-vindos à Nova
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold sm:max-w-3xl my-6 leading-tight text-white">
            Uma Agência de Design que Gera Sucesso Conquistando Corações.
          </h2>

          <ul className="flex xl:flex-nowrap flex-wrap gap-5 lg:gap-2">
            <li className="w-full">
              <p className="text-md sm:text-md mt-2 text-gray-300">
                Desde o momento em que nossa empresa foi fundada, temos ajudado
                nossos clientes a encontrar{" "}
                <b>soluções excepcionais para seus negócios</b> marcas
                memoráveis e produtos digitais. Nossa expertise cresce a cada
                ano, assim como nossa experiência acumulada.
              </p>
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-[40%] flex justify-center items-center">
          <div className="flex items-center justify-center w-[250px] h-[250px] relative border">
            <img
              src={aboutlogo}
              alt="About Logo"
              className="invert brightness-0"
            />
          </div>
        </div>
      </div>

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

      <div className="w-full py-[8%] px-[2%] md:px-[8%] xl:px-[12%]">
        <div className="banner bg-cover object-bottom bg-center h-[800px] relative">
          <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center z-10">
            <div className="flex items-center justify-center w-[250px] h-[250px] relative border border-white rounded-full">
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
                  letterSpacing="0"
                  textLength="1000"
                >
                  <textPath href="#circlePath" startOffset="0">
                    PLAY VIDEO - PLAY VIDEO - PLAY VIDEO -
                  </textPath>
                </text>
              </svg>
              <div className="border border-white rounded-[50%]">
                <div className="rounded-full p-6 flex items-center justify-center">
                  <Icon
                    icon="ri:play-fill"
                    width="70"
                    height="70"
                    className="text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className="flex flex-col gap-5 mt-20 relative">
          <li className="w-full flex items-start justify-between lg:flex-row flex-col">
            <span className="w-full lg:w-3xl font-semibold text-2xl text-white">
              Nossa Missão
            </span>
            <p className="w-full lg:w-[90%] xl:w-[80%] text-md sm:text-xl mt-2 text-gray-300">
              Desde a fundação da nossa empresa, temos ajudado nossos clientes a
              encontrar soluções excepcionais para seus negócios, criando marcas
              memoráveis e produtos digitais. Nossa expertise cresce a cada ano,
              assim como nossa experiência acumulada.
            </p>
          </li>

          <li className="w-full flex items-start justify-between lg:flex-row flex-col">
            <span className="w-full lg:w-3xl font-semibold text-2xl text-white">
              Nosso Objetivo
            </span>
            <p className="w-full lg:w-[90%] xl:w-[80%] text-md sm:text-xl mt-2 text-gray-300">
              Nosso objetivo é proporcionar experiências incríveis que gerem
              repercussão e agreguem valor estratégico para marcas, tecnologia,
              entretenimento, artes e cultura.
            </p>
          </li>
        </ul>
      </div>

      <div className="service py-[2%] px-[2%] md:px-[8%] xl:px-[12%]">
        <div className="service-content">
          <span className="text-black bg-primary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
            O que fazemos
          </span>
          <h2 className="text-2xl sm:text-6xl font-semibold max-w-3xl mt-5 leading-tight text-white">
            Somos uma agência de serviços completos.
          </h2>
        </div>

        <div className="flex flex-col w-full mt-8">
          <div className="service-item w-full flex justify-between items-center border-t border-white/20 border-b py-4 gap-5 flex-col-reverse lg:flex-row">
            <div className="flex lg:items-start flex-col md:flex-row gap-5 md:gap-8 w-full text-white lg:w-1/2">
              <span className="text-2xl font-semibold">01.</span>
              <div className="service-info">
                <h4 className="text-2xl font-semibold pb-0.5">
                  Estratégia de marca
                </h4>
                <p className="text-gray-100 text-lg lg:w-3xl">
                  Lorem ipm dolor amet, consectetur adipiing lit Sunt sed ad
                  possimus ils magnam maores.
                </p>
              </div>
            </div>
            <div className="service-image w-full lg:w-1/2 flex lg:justify-end lg:items-end">
              <div className="border border-white/20 rounded-full w-[150px] h-[150px] p-3">
                <img
                  src={serviceicon1}
                  alt="Service Icon"
                  className="invert brightness-0 w-full h-full object-contain rounded-full border border-white/20"
                />
              </div>
            </div>
          </div>

          <div className="service-item w-full flex justify-between items-center border-t border-white/20 border-b py-4 gap-5 flex-col-reverse lg:flex-row">
            <div className="flex lg:items-start flex-col md:flex-row gap-5 md:gap-8 w-full text-white lg:w-1/2">
              <span className="text-2xl font-semibold">02.</span>
              <div className="service-info">
                <h4 className="text-2xl font-semibold pb-0.5">
                  Campanha nas redes sociais
                </h4>
                <p className="text-gray-100 text-lg lg:w-3xl">
                  Lorem ipm dolor amet, consectetur adipiing lit Sunt sed ad
                  possimus ils magnam maores.
                </p>
              </div>
            </div>
            <div className="service-image w-full lg:w-1/2 flex lg:justify-end lg:items-end">
              <div className="border border-white/20 rounded-full w-[150px] h-[150px] p-3">
                <img
                  src={serviceicon2}
                  alt="Service Icon"
                  className="invert brightness-0 w-full h-full object-contain rounded-full border border-white/20"
                />
              </div>
            </div>
          </div>

          <div className="service-item w-full flex justify-between items-center border-t border-white/20 border-b py-4 gap-5 flex-col-reverse lg:flex-row">
            <div className="flex lg:items-start flex-col md:flex-row gap-5 md:gap-8 w-full text-white lg:w-1/2">
              <span className="text-2xl font-semibold">03.</span>
              <div className="service-info">
                <h4 className="text-2xl font-semibold pb-0.5">
                  Direção Criativa
                </h4>
                <p className="text-gray-100 text-lg lg:w-3xl">
                  Lorem ipm dolor amet, consectetur adipiing lit Sunt sed ad
                  possimus ils magnam maores.
                </p>
              </div>
            </div>
            <div className="service-image w-full lg:w-1/2 flex lg:justify-end lg:items-end">
              <div className="border border-white/20 rounded-full w-[150px] h-[150px] p-3">
                <img
                  src={serviceicon3}
                  alt="Service Icon"
                  className="invert brightness-0 w-full h-full object-contain rounded-full border border-white/20"
                />
              </div>
            </div>
          </div>

          <div className="service-item w-full flex justify-between items-center border-t border-white/20 border-b py-4 gap-5 flex-col-reverse lg:flex-row">
            <div className="flex lg:items-start flex-col md:flex-row gap-5 md:gap-8 w-full text-white lg:w-1/2">
              <span className="text-2xl font-semibold">04.</span>
              <div className="service-info">
                <h4 className="text-2xl font-semibold pb-0.5">
                  Aprendizado de máquina / IA
                </h4>
                <p className="text-gray-100 text-lg lg:w-3xl">
                  Lorem ipm dolor amet, consectetur adipiing lit Sunt sed ad
                  possimus ils magnam maores.
                </p>
              </div>
            </div>
            <div className="service-image w-full lg:w-1/2 flex lg:justify-end lg:items-end">
              <div className="border border-white/20 rounded-full w-[150px] h-[150px] p-3">
                <img
                  src={serviceicon4}
                  alt="Service Icon"
                  className="invert brightness-0 w-full h-full object-contain rounded-full border border-white/20"
                />
              </div>
            </div>
          </div>

          <div className="service-item w-full flex justify-between items-center border-t border-white/20 border-b py-4 gap-5 flex-col-reverse lg:flex-row">
            <div className="flex lg:items-start flex-col md:flex-row gap-5 md:gap-8 w-full text-white lg:w-1/2">
              <span className="text-2xl font-semibold">05.</span>
              <div className="service-info">
                <h4 className="text-2xl font-semibold pb-0.5">
                  Identidade visual
                </h4>
                <p className="text-gray-100 text-lg lg:w-3xl">
                  Lorem ipm dolor amet, consectetur adipiing lit Sunt sed ad
                  possimus ils magnam maores.
                </p>
              </div>
            </div>
            <div className="service-image w-full lg:w-1/2 flex lg:justify-end lg:items-end">
              <div className="border border-white/20 rounded-full w-[150px] h-[150px] p-3">
                <img
                  src={serviceicon5}
                  alt="Service Icon"
                  className="invert brightness-0 w-full h-full object-contain rounded-full border border-white/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

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
              interval: 3000,
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
