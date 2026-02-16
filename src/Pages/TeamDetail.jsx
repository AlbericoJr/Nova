import React, { useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { teamMembers } from "./Team"
import title_icon from "../assets/Images/title_icon.svg"
import { Icon } from "@iconify/react"

import serviceicon1 from "../assets/Images/service-icon1.png"
import serviceicon2 from "../assets/Images/service-icon2.png"
import serviceicon3 from "../assets/Images/service-icon3.png"
import serviceicon4 from "../assets/Images/service-icon4.png"
import serviceicon5 from "../assets/Images/service-icon5.png"

import project1 from "../assets/Images/project-01.jpg"
import project2 from "../assets/Images/project-02.jpg"
import project3 from "../assets/Images/project-03.jpg"
import project4 from "../assets/Images/project-04.jpg"

export default function TeamDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const memberId = parseInt(id, 10)
  const member = teamMembers.find((m) => m.id === memberId)

  useEffect(() => {
    if (!member) {
      navigate("/equipe")
    }
  }, [member, navigate])

  if (!member) return null

  return (
    <>
      <div className="section-banner h-[500px] bg-[#121212] px-[2%] md:px-[8%] xl:px-[12%] flex flex-col justify-end items-start text-white w-full">
        <h2 className="text-5xl lg:text-7xl font-semibold w-full lg:max-w-2xl pb-3 relative">
          {member.name}
          <span className="absolute hidden sm:flex top-0 right-10 w-10 h-10">
            <img src={title_icon} alt="icon" className="w-full h-full" />
          </span>
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
          <li>
            <Link to="#" className="font-normal text-white text-lg">
              {member.name}
            </Link>
          </li>
        </ul>
      </div>

      {/* Equipe Info */}
      <div className="py-[8%] px-[2%] md:px-[8%] xl:px-[12%]">
        <div className="w-full border border-white h-auto xl:h-[600px] flex justify-between flex-col xl:flex-row items-start gap-10 xl:gap-4 relative xl:p-0 lg:p-20 sm:p-10 p-5 rounded-sm">
          <div className="w-full xl:w-fit h-[600px] xl:h-full bg-white xl:p-0 m-0 xl:m-20 rounded-sm overflow-hidden">
            <img
              src={member.img}
              alt="team-image"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="w-full xl:w-[60%] xl:p-20 text-white">
            <h4 className="text-5xl font-semibold">{member.name}</h4>
            <span className="text-xl text-gray-300">{member.role}</span>
            <ul>
              <li className="py-4 border-t border-gray-50/20 mt-5 flex justify-between flex-col sm:flex-row gap-3 sm:gap-0">
                <span className="text-xl font-semibold">Idade</span>
                <p className="text-gray-300/80">{member.age}</p>
              </li>
              <li className="py-4 border-t border-gray-50/20 mt-5 flex justify-between flex-col sm:flex-row gap-3 sm:gap-0">
                <span className="text-xl font-semibold">Localização</span>
                <p className="text-gray-300/80">{member.location}</p>
              </li>
              <li className="py-4 border-t border-gray-50/20 mt-5 flex justify-between flex-col sm:flex-row gap-3 sm:gap-0">
                <span className="text-xl font-semibold">E-mail</span>
                <p className="text-gray-300/80">{member.email}</p>
              </li>
              <li className="py-4 border-t border-gray-50/20 mt-5 flex justify-between flex-col sm:flex-row gap-3 sm:gap-0">
                <span className="text-xl font-semibold">Telefone</span>
                <p className="text-gray-300/80">{member.phone}</p>
              </li>
            </ul>

            <div className="text-white flex items-center mt-5 gap-5">
              <Link
                to="https://www.facebook.com"
                target="_blank"
                className="cursor-pointer"
              >
                <Icon
                  icon="ri:facebook-line"
                  width="24"
                  height="24"
                  className="border border-white min-w-10 min-h-10 p-1 rounded-sm"
                />
              </Link>

              <Link
                to="https://www.linkedin.com"
                target="_blank"
                className="cursor-pointer"
              >
                <Icon
                  icon="flowbite:linkedin-solid"
                  width="24"
                  height="24"
                  className="border border-white min-w-10 min-h-10 p-1 rounded-sm"
                />
              </Link>

              <Link
                to="https://www.instagram.com"
                target="_blank"
                className="cursor-pointer"
              >
                <Icon
                  icon="ri:instagram-line"
                  width="24"
                  height="24"
                  className="border border-white min-w-10 min-h-10 p-1 rounded-sm"
                />
              </Link>
            </div>
          </div>
        </div>

        <p className="text-white pt-5 xl:pt-0 xl:mt-30 pb-4 text-sm md:text-lg">
          Nossos especialistas em gestão de custos entendem a importância de
          entregar um projeto que atenda às suas expectativas em termos de
          custo, prazo e qualidade. Trabalharemos com você para encontrar as
          soluções certas, flexíveis e valiosas. Independentemente do setor em
          que você atua ou da <b>escala do seu projeto</b>, nossa equipe possui
          a experiência e o conhecimento necessários para apoiá-lo na conquista
          de seus objetivos.
        </p>
        <p className="text-white text-sm md:text-lg">
          Além dos serviços de consultoria em construção,{" "}
          <b>a Bureau Veritas é líder global em testes</b>, inspeção e
          certificação (TIC) e conta com mais de 190 anos de experiência, o que
          significa que também podemos auxiliá-lo em outras áreas do seu
          negócio, se necessário.
        </p>
        <ul className="text-white/80 pt-5 ps-5 space-y-3 list-disc">
          <li>
            A curiosidade excessiva agora levava a uma permissão para pequenas
            despesas.
          </li>
          <li>Favorecer a cama garante ao filho coisas ainda.</li>
          <li>
            Ela consistia em consultar outros lugares para obter felicidade.
          </li>
          <li>
            A viúva te derruba, uma nova sombra deriva esperanças pequenas.
          </li>
          <li>Discrição interessada em estimar com base em estímulos.</li>
        </ul>
      </div>

      {/* Service */}
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

      {/* Project */}
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
          <div className="border-gray-300/20 border p-5 rounded-lg group">
            <div className="h-[550px] w-full rounded-lg overflow-hidden mb-5">
              <img src={project1} alt="project-image" className="w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-300" />
            </div>
            <Link to="projects">
              <span className="text-white border border-gray-50/20 px-2 py-1 font-semibold text-lg">Identidade visual</span>
              <h3 className="text-2xl sm:text-4xl font-semibold mt-2 hover:text-primary duration-300">Conceito de Arte em Museus</h3>
            </Link>
          </div>

          <div className="border-gray-300/20 border p-5 rounded-lg group">
            <div className="h-[550px] w-full rounded-lg overflow-hidden mb-5">
              <img src={project2} alt="project-image" className="w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-300" />
            </div>
            <Link to="projects">
              <span className="text-white border border-gray-50/20 px-2 py-1 font-semibold text-lg">Marketing</span>
              <h3 className="text-2xl sm:text-4xl font-semibold mt-2 hover:text-primary duration-300">Gráfico da economia de mercado</h3>
            </Link>
          </div>

          <div className="border-gray-300/20 border p-5 rounded-lg group">
            <div className="h-[550px] w-full rounded-lg overflow-hidden mb-5">
              <img src={project3} alt="project-image" className="w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-300" />
            </div>
            <Link to="projects">
              <span className="text-white border border-gray-50/20 px-2 py-1 font-semibold text-lg">Projeto de design</span>
              <h3 className="text-2xl sm:text-4xl font-semibold mt-2 hover:text-primary duration-300">Renderização 3D de fones de ouvido</h3>
            </Link>
          </div>

          <div className="border-gray-300/20 border p-5 rounded-lg group">
            <div className="h-[550px] w-full rounded-lg overflow-hidden mb-5">
              <img src={project4} alt="project-image" className="w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-300" />
            </div>
            <Link to="projects">
              <span className="text-white border border-gray-50/20 px-2 py-1 font-semibold text-lg">Projeto</span>
              <h3 className="text-2xl sm:text-4xl font-semibold mt-2 hover:text-primary duration-300">Logotipo de cartão de visita</h3>
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}
