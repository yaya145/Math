import { useState } from 'react';

function ImageToggler() {
  const [currentImage, setCurrentImage] = useState('./src/assets/calculate.png');

  const handleClick = () => {
    setCurrentImage('./src/assets/calculate_glowing.png');
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

