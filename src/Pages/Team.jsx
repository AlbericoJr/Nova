import React from "react"
import { Link } from "react-router-dom"

import team1 from "../assets/Images/team-01.png"
import team2 from "../assets/Images/team-02.png"
import team3 from "../assets/Images/team-03.png"
import team4 from "../assets/Images/team-04.png"
import team5 from "../assets/Images/team-05.jpg"
import team6 from "../assets/Images/team-06.jpg"

export const teamMembers = [
  {
    id: 1,
    name: "André Martins",
    role: "UI/UX Designer",
    img: team1,
    age:  "27 anos",
    location: "São Paulo, Brasil",
    email: "andre@email.com",
    phone: "+55 11 99999-9999",
  },
  {
    id: 2,
    name: "Maria Eduarda",
    role: "Marketing Digital",
    img: team2,
    age:  "25 anos",
    location: "São José dos Campos, Brasil",
    email: "maria@email.com",
    phone: "+55 11 99999-9999",
  },
  {
    id: 3,
    name: "Pedro Henrique",
    role: "Full-Stack Developer",
    img: team3,
    age:  "23 anos",
    location: "São Paulo, Brasil",
    email: "pedro@email.com",
    phone: "+55 11 99999-9999",
  },
  {
    id: 4,
    name: "Helena Castro",
    role: "Estrategista de Conteúdo",
    img: team4,
    age:  "27 anos",
    location: "Salvador, Brasil",
    email: "helena@email.com",
    phone: "+55 11 99999-9999",
  },
  {
    id: 5,
    name: "Lucas Oliveira",
    role: "Desenvolvedor Full-Stack",
    img: team5,
    age:  "20 anos",
    location: "Salvador, Brasil",
    email: "lucas@email.com",
    phone: "+55 11 99999-9999",
  },
  {
    id: 6,
    name: "Ana Julia",
    role: "Diretor de Arte",
    img: team6,
    age:  "29 anos",
    location: "São Paulo, Brasil",
    email: "ana@email.com",
    phone: "+55 11 99999-9999",
  },
]

export default function Team() {
  return (
    <>
      <div className="section-banner h-[500px] bg-[#121212] px-[2%] md:px-[8%] xl:px-[12%] flex flex-col justify-end items-start text-white w-full">
        <h2 className="text-5xl lg:text-7xl font-semibold w-full lg:max-w-2xl pb-3 relative">
          Nossa equipe
        </h2>
        <p className="border-b-2 w-full pb-10 border-gray-300">
          Conheça a nossa família empresarial focada na criatividade.
        </p>
        <ul className="flex gap-8 py-5">
          <li>
            <Link to="/index" className="font-normal text-white text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link to="/equipe" className="font-normal text-white text-lg">
              Nossa equipe
            </Link>
          </li>
        </ul>
      </div>

      <div className="py-[8%] px-[12%] grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10">
        {teamMembers.map((member) => (
          <Link to={`/equipe/${member.id}`} key={member.id}>
            <div className="text-center">
              <div className="bg-white rounded-sm overflow-hidden">
                <img src={member.img} alt={member.name} className="object-cover w-full"/>
              </div>
              <h4 className="text-2xl text-white mt-4 font-semibold">{member.name}</h4>
              <span className="text-lg text-gray-300">{member.role}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
