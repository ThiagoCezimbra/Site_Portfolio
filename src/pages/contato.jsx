// src/pages/contato.jsx
import React, { useState, useRef } from "react";
import "../App.css";
import Header from "../header";
import Footer from "../footer";
import img1 from "../assets/images/img1.webp";
import img2 from "../assets/images/img2.webp";
import img3 from "../assets/images/img3.webp";
import img4 from "../assets/images/img4.webp";

function Contato() {
  const [tooltip, setTooltip] = useState({ visible: false, text: "", link: "", x: 0, y: 0 });
  const hideTimeoutRef = useRef(null);

  const handleIconMouseEnter = (event, text, link) => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    const rect = event.target.getBoundingClientRect();
    setTooltip({
      visible: true,
      text,
      link,
      x: rect.left - 18, // Ajustando para começar no 80px
      y: rect.bottom + window.scrollY + 10, // Coloca o balão abaixo da imagem com 10px de espaçamento
    });
  };

  const handleIconMouseLeave = () => {
    // Inicia um timeout para fechar o tooltip
    hideTimeoutRef.current = setTimeout(() => {
      setTooltip((prev) => ({ ...prev, visible: false }));
    }, 300);
  };

  const handleTooltipMouseEnter = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
  };

  const handleTooltipMouseLeave = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <Header />
      <div className="contact-content">
        <div className="contact-images">
          <div className="icon-container">
            <img
              src={img1}
              alt="GitHub"
              onMouseEnter={(e) => handleIconMouseEnter(e, "Meu WhatsApp", "https://wa.me/41988397515")}
              onMouseLeave={handleIconMouseLeave}
              onClick={() => handleClick("https://wa.me/41988397515")}
            />
          </div>
          <div className="icon-container">
            <img
              src={img2}
              alt="LinkedIn"
              onMouseEnter={(e) => handleIconMouseEnter(e, "My GitHub", "https://github.com/ThiagoCezimbra")}
              onMouseLeave={handleIconMouseLeave}
              onClick={() => handleClick("https://github.com/ThiagoCezimbra")}
            />
          </div>
          <div className="icon-container">
            <img
              src={img3}
              alt="Email"
              onMouseEnter={(e) => handleIconMouseEnter(e, "Meu envie um E-mail", "mailto:thiagocfurlani@gmail.com")}

              onMouseLeave={handleIconMouseLeave}
              onClick={() => handleClick("mailto:thiagocfurlani@gmail.com")}
            />
          </div>
          <div className="icon-container">
            <img
              src={img4}
              alt="E-mail"
              onMouseEnter={(e) => handleIconMouseEnter(e, "Meu LinkedIn", "https://www.linkedin.com/in/thiagofurlani/")}
              onMouseLeave={handleIconMouseLeave}
              onClick={() => handleClick("https://www.linkedin.com/in/thiagofurlani/")}
            />
          </div>
        </div>
      </div>
      <Footer />

      {/* Tooltip Dinâmico com link clicável */}
      {tooltip.visible && (
        <div
          className="tooltip"
          style={{
            position: "absolute",
            left: `${tooltip.x}px`,
            top: `${tooltip.y}px`,
            backgroundColor: "#333",
            color: "white",
            padding: "10px 15px",
            borderRadius: "5px",
            fontSize: "14px",
            whiteSpace: "nowrap",
            opacity: 1,
            visibility: "visible",
            transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
            zIndex: 1000,
            minHeight: "40px", // Ajuste para aumentar a altura do balão
            display: "flex",
            alignItems: "center",
          }}
          onMouseEnter={handleTooltipMouseEnter}
          onMouseLeave={handleTooltipMouseLeave}
        >
          <span>{tooltip.text}</span>
          <a
            href={tooltip.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginLeft: "10px",
              color: "#ffcc00", // Cor do link
              textDecoration: "none",
            }}
          >
            Acessar
          </a>
        </div>
      )}
    </>
  );
}

export default Contato;
