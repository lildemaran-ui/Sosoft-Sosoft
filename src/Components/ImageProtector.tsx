import React from "react";

type ImageProtetorProps = {
  src: string;              // caminho da imagem (obrigatório)
  alt?: string;             // texto alternativo (opcional)
  width?: string | number;  // largura (opcional)
  height?: string | number;
  className?: string; 
  
};

const ImageProtetor: React.FC<ImageProtetorProps> = ({
  src,
  alt = "",
  className="",
  
}) => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <img
        src={src}
        alt={alt}
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
        className={className}
        style={{ userSelect: "none" }}
      />
      {/* Camada transparente bloqueando cliques */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
        }}
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
    
  );
};

export default ImageProtetor;