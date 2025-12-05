import '../../styles/publicidadFooter.css'; // Importamos los estilos

const logos = [
  "Sporting", "MarcAntonio", "Puma", "Coca-Cola", "Sandwitch el Tucu", "Rolling Code School ", "Breaking School dev.BboyLinkin" 
  // O usa imágenes: <img src="..." />
];

const AdvertisingBanner = () => {
  return (
    <div className="ad-banner-container">
      {/* La capa de degradado para el efecto "desvanecer" */}
      <div className="fade-overlay"></div>
        
      <div className="ad-track">
        {/* Renderizamos doble para lograr el loop infinito perfecto */}
        <div className="ad-content">
          {logos.map((logo, index) => (
            <div key={index} className="ad-item">
              {/* Aquí irían tus imágenes o texto */}
              <span className="ad-text">{logo}</span>
            </div>
          ))}
        </div>
        <div className="ad-content">
          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="ad-item">
              <span className="ad-text">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvertisingBanner;