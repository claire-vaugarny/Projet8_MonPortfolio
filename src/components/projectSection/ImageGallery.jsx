import './imageGallery.scss';
import { useState, useEffect } from "react";

function ImageGallery({ images = [] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Remet l'index à zéro quand les images changent
    setCurrentImageIndex(0);
  }, [images]);

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Empêche le rendu s'il n'y a pas d'image
  if (!images.length) return null;

  return (
    <div className="imageGallery">
      <i 
        className="fa-solid fa-arrow-left" 
        onClick={showPreviousImage}
      ></i>

      <img 
        src={images[currentImageIndex]} 
        alt="image de la maquette du projet" 
      />

      <i 
        className="fa-solid fa-arrow-right" 
        onClick={showNextImage}
      ></i>
    </div>
  );
}

export default ImageGallery;
