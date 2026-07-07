import { useState } from 'react';

function ImageToggler() {
  const [currentImage, setCurrentImage] = useState('./src/assets/calc.webp');

  const handleClick = () => {
    setCurrentImage('./src/assets/calc_light.webp');
  };

  return (
    <div className='bottom-right'>
      <img onClick={handleClick}
        style={{ cursor: 'pointer'}} 
        src={currentImage} 
        alt="Переключаемая картинка" 
      />
    </div>
  );
}

export default ImageToggler; 

