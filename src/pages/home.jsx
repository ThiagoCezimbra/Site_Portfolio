import { useState } from "react";
import Header from '../header'; // Importa o Header
import Footer from '../footer'; // Importando o Footer
import avatar from "../assets/images/avatar_personagem.png";
import wppLogo from "../assets/images/whatsapp.webp";
import "../App.css";


function Home() {

  return (
    <>
      <Header /> {/* Aqui está o Header sendo usado */}
      
      <div className="contact">
        <a target="_blank">
          <img src={avatar} className="logo" alt="Avatar do personagem" />
        </a>
        <a href="https://wa.me/41988397515" target="_blank">
          <img src={wppLogo} className="logo1" alt="Logo do WhatsApp" />
        </a>
      </div>

      <div className="card">
        <p>
          Oi, sou o Thiago! Estou em transição de carreira, com uma base técnica em Mecânica Industrial e experiência em Climatização e Termodinâmica. Atualmente, estou concluindo os cursos de Tecnologia em Análise e Desenvolvimento de Sistemas e Tecnologia em Banco de Dados.

          Tenho experiência prática com Node.js, JavaScript e React, mas no meu estágio, trabalho focado em Web Analytics, utilizando ferramentas como GTM, GA, Looker e Power BI. Busco sempre desenvolver soluções criativas, aproveitando minha facilidade de comunicação e colaboração com equipes e clientes.

          Este site foi desenvolvido em React, e na área de Projetos, você encontrará trabalhos que desenvolvi, todos hospedados no Firebase, tanto no backend quanto no frontend.
        </p>
      </div>

      <Footer /> {/* Adicionando o Footer */}
    </>
  );
}

export default Home;
