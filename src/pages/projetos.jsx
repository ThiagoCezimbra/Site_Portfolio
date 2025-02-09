import React, { useState, useRef } from "react";
import "../App.css";
import Header from "../header";
import Footer from "../footer";

function Projetos() {
  const [tooltip, setTooltip] = useState({
    visible: false,
    text: "",
    link: "",
    x: 0,
    y: 0,
  });

  const hideTimeoutRef = useRef(null);

  const handleMouseEnter = (event, text, link) => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }

    const rect = event.target.getBoundingClientRect();
    setTooltip({
      visible: true,
      text,
      link,
      x: rect.left + rect.width / 9,
      y: rect.top + window.scrollY - 20,
    });
  };

  const handleMouseLeave = () => {
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

  return (
    <>
      <Header />
      <div className="projects-content">
        {/* Vídeo 1 */}
        <div
          className="video-container"
          onMouseEnter={(e) =>
            handleMouseEnter(
              e,
              <>
                <strong>Projeto Acionamento GTM</strong>
                <p>🔗 <b>Link Aplicação:</b> <a href="https://acionamentogtm.web.app/" target="_blank">acionamentogtm.web.app</a></p>
                <p>🔗 <b>Repositório GitHub:</b> <a href="https://github.com/seu-usuario/projeto1" target="_blank">github.com/seu-usuario/projeto1</a></p>
              </>
            )
            
            
          }
          onMouseLeave={handleMouseLeave}
        >
  <iframe
  src="https://www.youtube.com/embed/WpsPbDb454Y"
  title="Projeto 1"
  frameBorder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

        </div>

        {/* Vídeo 2 */}
        <div
          className="video-container"
          onMouseEnter={(e) =>
            handleMouseEnter(e, "Projeto 2 - Repositório", "https://github.com/seu-usuario/projeto2")
          }
          onMouseLeave={handleMouseLeave}
        >
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID2"
            title="Projeto 2"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Vídeo 3 */}
        <div
          className="video-container"
          onMouseEnter={(e) =>
            handleMouseEnter(e, "Projeto 3 - Repositório", "https://github.com/seu-usuario/projeto3")
          }
          onMouseLeave={handleMouseLeave}
        >
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID3"
            title="Projeto 3"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Footer />

      {tooltip.visible && (
        <div
          className="tooltip"
          style={{
            position: "absolute",
            left: `${tooltip.x - 130}px`, /* Move o tooltip 20px para a esquerda */
            top: `${tooltip.y + 200}px`,  /* Move o tooltip 20px para baixo */
            
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
            minHeight: "40px",
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
              color: "#ffcc00",
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

export default Projetos;
