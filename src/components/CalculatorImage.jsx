import { Link } from "../Router";  

function ImageToggler() {
  return (
<Link to="/calculator">
  <div className='calc-container'>
    <img src="./src/assets/calc.webp" className="calc" />
  </div>
</Link>
  )
}

export default ImageToggler;




