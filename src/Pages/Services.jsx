import React from "react"
import { Link } from "react-router-dom"
import title_icon from "../assets/Images/title_icon.svg"

import sericon1 from "../assets/Images/serv-icon4.png"
import sericon2 from "../assets/Images/serv-icon5.png"
import sericon3 from "../assets/Images/serv-icon6.png"
import CountUp from "react-countup"
import { Icon } from "@iconify/react"

import serviceicon1 from "../assets/Images/service-icon1.png"
import serviceicon2 from "../assets/Images/service-icon2.png"
import serviceicon3 from "../assets/Images/service-icon3.png"
import serviceicon4 from "../assets/Images/service-icon4.png"
import serviceicon5 from "../assets/Images/service-icon5.png"

import brand1 from "../assets/Images/brand1.png"
import brand2 from "../assets/Images/brand2.png"
import brand3 from "../assets/Images/brand3.png"
import brand4 from "../assets/Images/brand4.png"
import brand5 from "../assets/Images/brand5.png"
import brand6 from "../assets/Images/brand6.png"
import brand7 from "../assets/Images/brand7.png"

export default function Services() {
  return (
    <>
      <div className="section-banner h-[500px] bg-[#121212] px-[2%] md:px-[8%] xl:px-[12%] flex flex-col justify-end items-start text-white w-full">
        <h2 className="text-5xl lg:text-7xl font-semibold w-full lg:max-w-2xl pb-3 relative">
          Nossos serviços
          <span className="absolute hidden sm:flex top-0 right-3 w-10 h-10">
            <img src={title_icon} alt="Icon" className="w-full h-full" />
          </span>
        </h2>
        <p className="border-b-2 w-full pb-10 border-gray-300">
          Nossos valores nos catapultaram ao topo do nosso setor.
        </p>
        <ul className="flex gap-8 py-5">
          <li>
            <Link to="/index" className="font-normal text-white text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link to="/servicos" className="font-normal text-white text-lg">
              Nossos serviços
            </Link>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-14 py-[8%] px-[2%] md:px-[8%] xl:px-[12%] overflow-hidden">
        <div className="ser-item border border-gray-50/20 text-center rounded-sm relative">
          <div className="image bg-primary mx-auto w-30 h-30 md:w-40 md:h-40 p-8 rounded-full transform -translate-y-8 md:-translate-y-14">
            <img src={sericon1} alt="service-icon" />
          </div>
          <div className="service-info text-white p-8 pt-0">
            <h4 className="text-4xl font-semibold pb-4">Criação de Marca</h4>
            <ul className="space-y-5 text-gray-300">
              <li>
                <span>Estratégia de marca</span>
              </li>
              <li>
                <span>Identidade visual</span>
              </li>
              <li>
                <span>Nomeação</span>
              </li>
              <li>
                <span>Kits de ferramentas</span>
              </li>
              <li>
                <span>Diretrizes</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="ser-item border border-gray-50/20 text-center rounded-sm relative">
          <div className="image bg-primary mx-auto w-30 h-30 md:w-40 md:h-40 p-8 rounded-full transform -translate-y-8 md:-translate-y-14">
            <img src={sericon2} alt="service-icon" />
          </div>
          <div className="service-info text-white p-8 pt-0">
            <h4 className="text-4xl font-semibold pb-4">Campanhas na Web</h4>
            <ul className="space-y-5 text-gray-300">
              <li>
                <span>Direção Criativa</span>
              </li>
              <li>
                <span>Conceitos</span>
              </li>
              <li>
                <span>Redação publicitária</span>
              </li>
              <li>
                <span>Mídias sociais</span>
              </li>
              <li>
                <span>Estratégia Criativa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="ser-item border border-gray-50/20 text-center rounded-sm relative">
          <div className="image bg-primary mx-auto w-30 h-30 md:w-40 md:h-40 p-8 rounded-full transform -translate-y-8 md:-translate-y-14">
            <img src={sericon3} alt="service-icon" />
          </div>
          <div className="service-info text-white p-8 pt-0">
            <h4 className="text-4xl font-semibold pb-4">Design UX/UI</h4>
            <ul className="space-y-5 text-gray-300">
              <li>
                <span>Aplicativos nativos e da Web</span>
              </li>
              <li>
                <span>Sites de campanha/marca</span>
              </li>
              <li>
                <span>Aprendizado de máquina / IA</span>
              </li>
              <li>
                <span>Design de marca</span>
              </li>
              <li>
                <span>Design de animação de produto</span>
              </li>
            </ul>
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
