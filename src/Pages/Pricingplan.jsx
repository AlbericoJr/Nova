import React from "react"
import { Link } from "react-router-dom"
import {Icon} from "@iconify/react"


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
    </>
  )
}
