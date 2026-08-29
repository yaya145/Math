import { useState, useEffect } from "react";
import MainPage from "./pages/MainPage"; 
import CalculatorPage from "./pages/CalculatorPage";

export const Link = ({ to, children, ...props }) => {
  const handleClick = (e) => {
    e.preventDefault(); 
    window.history.pushState({}, "", to); 
    window.dispatchEvent(new Event("popstate")); 
  };
  return <a href={to} onClick={handleClick} {...props}>{children}</a>;
};
// 3. Главный компонент Роутера
const Router = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => setPath(window.location.pathname);
    
    window.addEventListener('popstate', onLocationChange);
    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  switch (path) {
    case '/':
      return <MainPage key={path} />;
      
    case '/calculator':
      return <CalculatorPage key={path} />;
      
    default:
      return <div key="404">404 Страница не найдена :з</div>;
  }
};

export default Router;


