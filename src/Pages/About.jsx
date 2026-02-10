import React from "react"

import title_icon from "../assets/Images/title_icon.svg"
import { Link } from "react-router-dom"

import aboutlogo from "../assets/Images/novo-about-logo.png"
import CountUp from "react-countup"

import { Icon } from "@iconify/react"

export default function About() {
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

      <div className="about py-[8%] px-[2%] md:px-[8%] xl:px-[12%] flex justify-between items-star lg:flex-row flex-col gap-10">
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
            className="text-7xl sm:text-8xl font-bold leading-none color: transparent; -webkit-text-stroke: 2px rgb(255, 255, 255);"
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
            className="text-7xl sm:text-8xl font-bold leading-none color: transparent; -webkit-text-stroke: 2px rgb(255, 255, 255);"
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
            className="text-7xl sm:text-8xl font-bold leading-none color: transparent; -webkit-text-stroke: 2px rgb(255, 255, 255);"
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
          
        </ul>
      </div>
    </>
  )
}
