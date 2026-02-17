import React, { useState } from "react"
import { Link } from "react-router-dom"
import title_icon from "../assets/Images/title_icon.svg"
import { Icon } from "@iconify/react"

const faqs = [
  {
    question: "Gestão de segurança da força de trabalho?",
    answer:
      "Nossa plataforma centraliza indicadores de segurança em tempo real, monitora conformidade com normas internas e externas e ajuda a identificar rapidamente equipes, rotas e turnos com maior exposição a riscos. Assim, você consegue agir de forma preventiva, padronizar processos e reduzir incidentes de forma consistente.",
  },
  {
    question: "A força de trabalho logística está no caminho certo?",
    answer:
      "Através de painéis dinâmicos, acompanhamos produtividade, SLA de entregas, desempenho por região e utilização de recursos. Com esses dados, você enxerga se a operação está alinhada às metas, identifica gargalos na cadeia logística e consegue ajustar rotas, escalas e prioridades com agilidade.",
  },
  {
    question: "Cursos e Certificação Online?",
    answer:
      "Disponibilizamos trilhas de aprendizagem personalizadas para cada função, com cursos online, avaliações periódicas e emissão automática de certificados. Toda a jornada de capacitação fica registrada em um único lugar, facilitando auditorias, reciclagens obrigatórias e o desenvolvimento contínuo da equipe.",
  },
  {
    question: "Números e dados representativos de uma organização?",
    answer:
      "Conectamos diferentes fontes de informação da empresa em um ambiente único, gerando indicadores consolidados sobre pessoas, performance, segurança e logística. Esses dados permitem decisões baseadas em evidências, projeções mais confiáveis e uma visão clara do impacto das iniciativas estratégicas no dia a dia da operação.",
  },
]

export default function Contact() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <div className="section-banner h-[500px] bg-[#121212] px-[2%] md:px-[8%] xl:px-[12%] flex flex-col justify-end items-start text-white w-full">
        <h2 className="text-5xl lg:text-7xl font-semibold w-full lg:max-w-2xl pb-3 relative">
          Contate-nos
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
            <Link to="/contact" className="font-normal text-white text-lg">
              Contate-nos
            </Link>
          </li>
        </ul>
      </div>

      <div className=" px-[2%] md:px-[8%] xl:px-[12%] py-[8%] flex justify-center items-start gap-10 lg:flex-nowrap flex-wrap">
        <div className="w-full lg:w-1/2 text-white">
          <div>
            <h3 className="text-3xl font-semibold">Envie-nos uma mensagem</h3>
            <p className="text-lg pb-5">
              Então, nos informe sobre isso e veremos o que podemos fazer para
              ajudar.
            </p>
          </div>

          <form className="text-white flex flex-col gap-5">
            <input type="text" placeholder="Nome completo" required />
            <input type="email" placeholder="digite seu e-mail" required />
            <input type="number" placeholder="Número de telefone" required />
            <textarea placeholder="Mensagem" required></textarea>
            <button type="button" className="btn rounded-sm">
              <Icon icon="vaadin:plus" width="30" height="30" />
              <span>Enviar mensagem</span>
            </button>
          </form>
        </div>

        <div className="w-full lg:w-1/2 text-white h-[550px] rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.354296925156!2d-34.89882702515268!3d-8.065297191962427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18d01068cf3f%3A0x8ab749dfa347633d!2sEmpresarial%20Charles%20Darwin!5e0!3m2!1spt-BR!2sbr!4v1771353100348!5m2!1spt-BR!2sbr"
            width="100%"
            height="600px"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="faq px-[2%] md:px-[8%] xl:px-[12%] py-[8%]">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="overflow-hidden transition-all duration-700 mb-5"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full flex items-center cursor-pointer justify-between px-8 py-6 text-lg font-semibold border-2 rounded-full transition-all duration-700 ${openIndex === index ? "bg-lime-400 border-lime-400 text-black" : "border-gray-300 text-white hover:border-line-300"}`}
            >
              <span>{faq.question}</span>
              <span
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-transform duration-700 ${openIndex === index ? "bg-black text-white rotate-180" : "bg-gray-100 text-black"}`}
              >
                <Icon
                  icon={
                    openIndex === index ? "mdi:chevron-up" : "mdi:chevron-down"
                  }
                  className="text-xl"
                />
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${openIndex === index ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
            >
              <p className="px-8 pb-4 text-gray-300 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
