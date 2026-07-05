import { useState, useEffect } from "react";
import TasksPage from "./pages/TasksPage"; 
import TaskPage from "./pages/TaskPage1";
import TaskPage1 from "./pages/TaskPage1";

// 1. Кастомный компонент ссылки (без перезагрузки страницы)
export const Link = ({ to, children, ...props }) => {
  const handleClick = (e) => {
    e.preventDefault(); // Блокируем перезагрузку
    window.history.pushState({}, "", to); // Меняем URL
    window.dispatchEvent(new Event("popstate")); // Уведомляем роутер
  };
  return <a href={to} onClick={handleClick} {...props}>{children}</a>;
};

// 2. Список доступных страниц
const routes = {
  '/': TasksPage,
  '/tasks/123': TaskPage1,
  '*': () => <div>404 Страница не найдена :з</div>
};

// 3. Главный компонент Роутера
const Router = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => setPath(window.location.pathname);
    
    // Слушаем любые изменения URL (кнопки назад/вперед и наши клики по <Link>)
    window.addEventListener('popstate', onLocationChange);
    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  const Page = routes[path] ?? routes['*'];

  return typeof Page === 'function' && !Page.prototype?.isReactComponent ? Page() : <Page />;
};

export default Router;
