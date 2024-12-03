"use client";

import Image from "next/image";
import ThemeSwitcher from "@/components/my/theme-switch";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaDocker,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import Foto from "../images/20241124_200118.jpg";
import ListItem from "@/components/my/list-item";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <header className="bg-primary text-white py-6 shadow-lg">
        <div className=" px-6 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <h1 className="text-4xl font-bold mr-3">Vinicius Ferrari</h1>
            <ThemeSwitcher />
          </div>
          <p className="text-lg mt-2">
            Desenvolvedor | Apaixonado por Tecnologia e Criatividade
          </p>
        </div>
      </header>

      {/* Sobre Mim */}
      <section className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <Image
            src={Foto} // Substitua por sua foto em public/profile.jpg
            alt="Foto de Vinicius Ferrari"
            className="rounded-full shadow-xl border-[0.2rem] border-primary h-56 w-56"
          />
          <div>
            <h2 className="text-3xl font-bold text-foreground flex">
              Olá, eu sou <p className="text-primary ml-2"> Vinicius!</p>
            </h2>
            <p className="text-muted-foreground mt-4">
              Sou um desenvolvedor apaixonado por criar soluções criativas.
              Entrei no mundo do desenvolvimento de software aos 14 anos, quando
              cursei Técnico em Informática pelo Instituto Federal, e foi aí que
              me apaixonei pela área. Segui em frente e atualmente estou me
              formando em Ciência da Computação pela UFMT.
            </p>
            <p className="text-muted-foreground mt-4">
              No meu tempo livre, gosto de jogar videogame, assistir séries,
              animes, filmes e principalmente ficar com a família. Também gosto
              de acompanhar as novidades do mundo da tecnologia e política.
            </p>
            <p className="text-muted-foreground mt-4">Canais que acompanho:</p>
            <div className="text-muted-foreground mt-2 flex flex-col">
              <a href="https://www.youtube.com/@Akitando">@AkitaOnRails</a>
              <a href="https://www.youtube.com/@filipedeschamps">
                @filipedeschamps
              </a>
              <a href="https://www.youtube.com/@rocketseat">@rocketseat</a>
              <a href="https://www.youtube.com/@LucasMontano">@LucasMontano</a>
            </div>
          </div>
        </div>
      </section>

      {/* Experiência */}
      <section className="bg-accent py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground">
            Experiência Profissional
          </h2>
          <ListItem
            titulo="Front-end, Startup Economiz-AR"
            data="Em 2019 – 6 Meses"
            texto="Responsável por criar interfaces web responsivas utilizando HTML, CSS, JS e Bootstrap."
          />
          <ListItem
            titulo="Full-stack, Bolsista Fapemat"
            data="Em 2023 – 6 Meses"
            texto="Responsável por criar um App completo utilizando Flutter integrando API do Google Maps, backend em Node.js e Banco de Dados Postgres. Deploy do backend e Banco de Dados na AWS e do App no Google Play Store."
          />
          <ListItem
            titulo="Full-stack, Bolsista CNPq"
            data="Em 2024 – 1 Ano"
            texto="Desenvolvimento de um dashboard sobre Tuberculose abrangendo Mato Grosso e Brasil, utilizando React e Bootstrap. Implementação de um back-end com Python e Flask. Realização de análise e tratamento de dados com Python, com uso de Docker para orquestração."
          />
          <ListItem
            titulo="Front-end, Freelancer"
            data="Em 2024 – 6 Meses"
            texto="Desenvolvimento de um site completo para edição de laudos médicos, e outro para uma plataforma de Games. Utilizando Next.js, Tailwind CSS e shadcn/ui, com integração de Docker para gerenciamento de ambientes."
          />
        </div>
      </section>

      {/* Habilidades */}
      <section className="container mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-foreground">Habilidades</h2>
        <div className="flex flex-wrap gap-4 mt-6">
          <span className="bg-primary text-white px-4 py-2 rounded-full shadow flex items-center space-x-2">
            <FaHtml5 className="text-xl" />
            <span>HTML5</span>
          </span>
          <span className="bg-primary text-white px-4 py-2 rounded-full shadow flex items-center space-x-2">
            <FaCss3Alt className="text-xl" />
            <span>CSS3</span>
          </span>
          <span className="bg-primary text-white px-4 py-2 rounded-full shadow flex items-center space-x-2">
            <FaJsSquare className="text-xl" />
            <span>JavaScript</span>
          </span>
          <span className="bg-primary text-white px-4 py-2 rounded-full shadow flex items-center space-x-2">
            <FaReact className="text-xl" />
            <span>React</span>
          </span>
          <span className="bg-primary text-white px-4 py-2 rounded-full shadow flex items-center space-x-2">
            <FaNodeJs className="text-xl" />
            <span>Next</span>
          </span>
          <span className="bg-primary text-white px-4 py-2 rounded-full shadow flex items-center space-x-2">
            <FaNodeJs className="text-xl" />
            <span>Node.js</span>
          </span>
          <span className="bg-primary text-white px-4 py-2 rounded-full shadow flex items-center space-x-2">
            <FaGitAlt className="text-xl" />
            <span>Git</span>
          </span>
          <span className="bg-primary text-white px-4 py-2 rounded-full shadow flex items-center space-x-2">
            <FaGithub className="text-xl" />
            <span>GitHub</span>
          </span>
          <span className="bg-primary text-white px-4 py-2 rounded-full shadow flex items-center space-x-2">
            <FaPython className="text-xl" />
            <span>Python</span>
          </span>
          <span className="bg-primary text-white px-4 py-2 rounded-full shadow flex items-center space-x-2">
            <SiFlask className="text-xl" />
            <span>Flask</span>
          </span>
          <span className="bg-primary text-white px-4 py-2 rounded-full shadow flex items-center space-x-2">
            <FaDocker className="text-xl" />
            <span>Docker</span>
          </span>
        </div>
      </section>

      {/* Educação */}
      <section className="bg-accent py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground">Educação</h2>
          <ListItem
            titulo="Técnico em Informática"
            data="IFRO – 2017 a 2019"
            texto="Curso técnico em Informática integrado ao Ensino Médio."
          />
          <ListItem
            titulo="Ciência da Computação"
            data="UFMT – 2020 a 2024"
            texto="Graduação em Ciência da Computação."
          />
        </div>
      </section>

      {/* Contatos e Links */}
      <section className="container mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-foreground">Entre em Contato</h2>
        <div className="flex flex-row items-center gap-6 mt-6">
          <a
            href="https://github.com/viniciusfs008"
            className="text-white rounded-full bg-primary p-2 hover:scale-110"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/vinicius-ferrari-86a112244/"
            className="text-white rounded-full bg-primary p-2 hover:scale-110"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="mailto:viniciusferrari008@gmail.com"
            className="text-white rounded-full bg-primary p-2 hover:scale-110"
          >
            <FaEnvelope className="text-2xl" />
          </a>
          <a
            href="https://www.instagram.com/ferrari_viniciuss/"
            className="text-white rounded-full bg-primary p-2 hover:scale-110"
          >
            <FaInstagram className="text-2xl" />
          </a>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-primary text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Vinicius Ferrari. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
