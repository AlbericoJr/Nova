## 🌐 Nova – Plataforma de Inteligência para Força de Trabalho e Logística

Nova é uma aplicação web moderna construída com **React + Vite** que apresenta uma landing page completa para uma solução voltada à **gestão da força de trabalho, segurança operacional, logística e dados corporativos**.  

O projeto reúne páginas como **Home**, **Serviços**, **Planos**, **Equipe**, **Blog**, **Projetos**, **FAQ** e **Contato**, com um visual profissional, animações suaves e foco em conversão.

### 🌐 Acesse o projeto online

- **Demo:** [`https://nova-psi-pied.vercel.app/`](https://nova-psi-pied.vercel.app/)

---

### ✨ Funcionalidades principais

- **Landing page institucional completa**  
  Seções destacando proposta de valor, diferenciais, depoimentos, projetos e blog.

- **Gestão da força de trabalho & logística (conceitual)**  
  Textos e componentes que comunicam monitoramento de performance, segurança e indicadores operacionais.

- **Página de FAQ rica**  
  Perguntas frequentes com respostas detalhadas sobre segurança, logística, cursos e dados organizacionais.

- **Blog e detalhes de artigos**  
  Listagem de posts e página de detalhes para conteúdos, análises e tendências do setor.

- **Página de contato com mapa integrado**  
  Formulário de contato e **Google Maps** embutido com localização empresarial.

- **Layout responsivo e moderno**  
  Estilização com classes utilitárias (estilo Tailwind) em `index.css`, adaptando-se a diferentes tamanhos de tela.

---

### 🖼 Pré-visualização

Screenshot atual da página inicial:

![Home](src/assets/screenshots/home_page.png)

---

### 🧱 Tecnologias utilizadas

- **React** (SPA)
- **Vite** (build rápido e HMR)
- **React Router DOM** (navegação entre páginas)
- **@iconify/react** (ícones vetoriais)
- **CSS utilitário** definido em `src/index.css`

---

### 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão recomendada LTS)
- **npm** ou **yarn**

Verifique suas versões com:

```bash
node -v
npm -v
```

---

### 🚀 Como rodar o projeto localmente

1. **Clonar o repositório**

```bash
git clone https://github.com/AlbericoJr/Nova.git
cd Nova
```

2. **Instalar dependências**

```bash
npm install
# ou
yarn
```

3. **Rodar o ambiente de desenvolvimento**

```bash
npm run dev
# ou
yarn dev
```

4. **Acessar no navegador**

Abra o endereço mostrado no terminal, geralmente:

```text
http://localhost:5173
```

---

### 🧭 Estrutura geral (resumo)

- `src/App.jsx` – Definição das rotas principais da aplicação.
- `src/Components/Nav.jsx` – Navegação principal (menu/header).
- `src/Pages/Index.jsx` – Página inicial (landing page principal).
- `src/Pages/Services.jsx` – Detalhes de serviços/ofertas.
- `src/Pages/Pricingplan.jsx` – Planos e precificação.
- `src/Pages/Team.jsx` – Equipe/colaboradores.
- `src/Pages/Blog.jsx` e `src/Pages/BlogDetails.jsx` – Listagem e detalhe de artigos.
- `src/Pages/Projects.jsx` e `src/Pages/ProjectDetails.jsx` – Projetos e estudos de caso.
- `src/Pages/Faq.jsx` – Perguntas frequentes.
- `src/Pages/Contact.jsx` – Contato com formulário e mapa.
- `src/index.css` – Estilos globais e utilitários.

---

### 🔧 Scripts disponíveis

No diretório do projeto, você pode executar:

- **`npm run dev`** – Roda o servidor de desenvolvimento Vite.
- **`npm run build`** – Gera a versão de produção otimizada.
- **`npm run preview`** – Faz o preview local do build de produção.
- **`npm run lint`** – Roda o linter para checar problemas de código.

---

### 🌐 Configuração do Google Maps (Contato)

A página `Contact.jsx` utiliza um `iframe` do **Google Maps** para exibir a localização do escritório (Empresarial Charles Darwin).  
Caso queira alterar o endereço:

1. Acesse o Google Maps.
2. Busque o novo endereço.
3. Use a opção **Compartilhar > Incorporar um mapa**.
4. Copie o `src` do `iframe` gerado e substitua em `Contact.jsx`.

---

### 🧩 Personalização

Você pode adaptar este projeto para:

- Landing page de SaaS de analytics ou workforce management.
- Site institucional de consultoria em logística e operações.
- Portal de conteúdo com blog e estudos de caso.

Basta ajustar textos, imagens, cores em `index.css` e componentes das páginas.

---

### 📄 Licença

Defina aqui a licença do projeto (por exemplo, **MIT**, **Proprietária** ou outra de sua preferência).  
Se este projeto for privado, você pode simplesmente informar que o uso é restrito.



## Segurança e escopo

Este repositório demonstra uma interface institucional. Não presuma que formulários, serviços comerciais ou dashboards fictícios estejam integrados a sistemas reais. Nunca armazene credenciais em variáveis `VITE_` incorporadas ao cliente.
