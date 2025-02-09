// src/assets/js/tooltip.js

export function initTooltips(setTooltip) {
  const icons = document.querySelectorAll(".icon-container img");
  let tooltipTimer = null; // Controle de quando fechar o balão
  let isTooltipHovered = false; // Flag para verificar se o cursor está sobre o balão
  
  icons.forEach((icon) => {
    const tooltipText = icon.getAttribute("data-tooltip");
    const link = icon.getAttribute("data-link");

    const showTooltip = (event) => {
      const rect = event.target.getBoundingClientRect();
      setTooltip({
        visible: true,
        text: tooltipText,
        x: rect.right + 10, // Tooltip aparece 10px ao lado da imagem
        y: rect.top + window.scrollY, // Ajusta posição no scroll
      });
    };

    const hideTooltip = () => {
      // Só esconde o balão quando o cursor sai tanto do ícone quanto do balão
      tooltipTimer = setTimeout(() => {
        if (!isTooltipHovered) {
          setTooltip({ visible: false });
        }
      }, 300); // Espera um pouco antes de esconder
    };

    const handleClick = () => {
      window.open(link, "_blank");
    };

    // Eventos de mouse
    icon.addEventListener("mouseenter", showTooltip);
    icon.addEventListener("mouseleave", hideTooltip);
    icon.addEventListener("click", handleClick);
  });

  // Controle de manter tooltip aberto quando cursor entra no balão
  const tooltipDiv = document.querySelector(".tooltip");
  if (tooltipDiv) {
    tooltipDiv.addEventListener("mouseenter", () => {
      isTooltipHovered = true; // Marca que o cursor está sobre o balão
      if (tooltipTimer) clearTimeout(tooltipTimer); // Cancela o timeout de fechar
    });

    tooltipDiv.addEventListener("mouseleave", () => {
      isTooltipHovered = false; // Marca que o cursor saiu do balão
      tooltipTimer = setTimeout(() => {
        setTooltip({ visible: false }); // Fecha o tooltip depois que sai do balão
      }, 300); // Espera um pouco antes de esconder
    });
  }
}
