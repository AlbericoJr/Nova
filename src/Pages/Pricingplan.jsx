import React from "react"
import { Link } from "react-router-dom"
import {Icon} from "@iconify/react"

const plans = [
  {
    title: "Pacote padrão",
    duration: "3 meses",
    price: "R$ 60,10",
    icon: "solar:rocket-bold",
    recommended: false,
    features: [
      {text: "Atualizações ilimitadas", active: true},
      {text: "Permissões personalizadas", active: true},
      {text: "Infraestrutura personalizada", active: false},
      {text: "Design e recursos personalizados", active: false},
    ],
  },
  {
    title: "Pacote Profissional",
    duration: "6 meses",
    price: "R$ 120,10",
    icon: "mdi:crown",
    recommended: true,
    features: [
      {text: "Atualizações ilimitadas", active: true},
      {text: "Permissões personalizadas", active: true},
      {text: "Infraestrutura personalizada", active: true},
      {text: "Design e recursos personalizados", active: false},
    ],
  },
  {
    title: "Pacote Empresarial",
    duration: "01 Ano",
    price: "R$ 230,10",
    icon: "fa-solid:building",
    recommended: false,
    features: [
      {text: "Atualizações ilimitadas", active: true},
      {text: "Permissões personalizadas", active: true},
      {text: "Infraestrutura personalizada", active: true},
      {text: "Design e recursos personalizados", active: true},
    ],
  },

]

import brand1 from "../assets/Images/brand1.png"
import brand2 from "../assets/Images/brand2.png"
import brand3 from "../assets/Images/brand3.png"
import brand4 from "../assets/Images/brand4.png"
import brand5 from "../assets/Images/brand5.png"
import brand6 from "../assets/Images/brand6.png"
import brand7 from "../assets/Images/brand7.png"


export default function Pricingplan() {
  return (
    <>
      <div className="section-banner h-[500px] bg-[#121212] px-[2%] md:px-[8%] xl:px-[12%] flex flex-col justify-end items-start text-white w-full">
        <h2 className="text-5xl lg:text-7xl font-semibold w-full lg:max-w-2xl pb-3 relative">
          Planos e preços
        </h2>
        <p className="border-b-2 w-full pb-10 border-gray-300">
          Isso ajuda você a escolher os preços para maximizar o retorno.
        </p>
        <ul className="flex gap-8 py-5">
          <li>
            <Link to="/index" className="font-normal text-white text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link to="/plano" className="font-normal text-white text-lg">
              Planos e preços
            </Link>
          </li>
        </ul>
      </div>

      <div className="py-[8%] px-[2%] md:px-[8%] xl:px-[12%] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
        {plans.map((plan, idx) => (
          <div key={idx} className={`border border-gray-50/20 rounded-lg relative ${plan.recommended ? "shadow-[0px_0px_25px_rgba(0,0,0,0.2)]" : ""}`}>
            {plan.recommended && (
              <span className="absolute -top-4 right-6 bg-white text-black text-sm px-3 py-1 rounded-sm">
                Recomendado
              </span>
            )}
            <div className="p-8 pb-12 border-b border-gray-50/20 text-white">
              <h3 className="text-2xl font-semibold">{plan.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{plan.duration}</p>
              <h2 className="text-4xl font-bold mt-4">{plan.price}</h2>
            </div>

            <div className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center absolute top-42 left-10">
              <Icon icon={plan.icon} className="text-3xl"/>
            </div>

            <ul className="px-8 mt-10 mb-8 space-y-4 text-white">
              {plan.features.map((item, i) => (
                <li key={i} className={`flex items-center gap-3 ${!item.active ? "line-through text-gray-400" : ""}`}>
                  <Icon icon="mdi:check-bold" className="text-green-500"/>
                  {item.text}
                </li>
              ))}
            </ul>

            <div className="p-6 border-t border-gray-50/20 flex justify-center">
              <Link to="/about" className="btn rounded-full w-[250px]">
                <span>Compre agora</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="py-[2%]">
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
