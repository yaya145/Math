import { useState } from 'react';

function ImageToggler() {
  const [currentImage, setCurrentImage] = useState('./src/assets/calc.webp');

  const handleClick = () => {
    setCurrentImage('./src/assets/calc_light.webp');
  };

  return (
    <div className='calc'>
      <img 
        src={currentImage} 
        onClick={handleClick}
        onMouseEnter={() => setCurrentImage('./src/assets/calc_light.webp')}
        onMouseLeave={() => setCurrentImage('./src/assets/calc.webp')}
        style={{ cursor: 'pointer'}} 
      />
    </div>
  );
}

export default ImageToggler;

