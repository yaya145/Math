/* import { useState } from 'react';
import { Link } from "../Router"; 

function ImageToggler() {
  const [currentImage, setCurrentImage] = useState('./src/assets/calc.webp');

  return (
    <Link to="/tasks/1">
      <div className='calc'>
        <img 
          src={currentImage} 
          onMouseEnter={() => setCurrentImage('./src/assets/calc_light.webp')}
          onMouseLeave={() => setCurrentImage('./src/assets/calc.webp')}
          style={{ cursor: 'pointer' }} 
        />
      </div>
    </Link>
  );
}

export default ImageToggler; */

import { Link } from "../Router";  

function ImageToggler() {
  return (
<Link to="/tasks/123">
  <div className='calc-container'>
    <img src="./src/assets/calc.webp" className="calc" />
  </div>
</Link>
  )
}

export default ImageToggler;




