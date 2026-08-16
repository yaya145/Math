/* import { useState, useEffect } from "react";
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

export default Router; */

/* import { useState, useEffect } from "react";
import TasksPage from "./pages/TasksPage"; 
import TaskPage1 from "./pages/TaskPage1"; // Оставил один импорт, так как пути вели на один файл

// 1. Кастомный компонент ссылки
export const Link = ({ to, children, ...props }) => {
  const handleClick = (e) => {
    e.preventDefault(); 
    window.history.pushState({}, "", to); 
    window.dispatchEvent(new Event("popstate")); 
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
    
    window.addEventListener('popstate', onLocationChange);
    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  // Находим нужный компонент страницы
  const PageComponent = routes[path] ?? routes['*'];

  // Добавляем key={path}. Теперь при переходе на любой URL 
  // старая страница полностью уничтожается, а новая строится с чистого листа
  return <PageComponent key={path} />;
};

export default Router; */



import { useState, useEffect } from "react";
import TasksPage from "./pages/TasksPage"; 
import TaskPage1 from "./pages/TaskPage1"; // Оставил один импорт, так как пути вели на один файл

// 1. Кастомный компонент ссылки
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

  // Рендерим напрямую через switch. 
  // Уникальный key={path} теперь привязан жестко к каждому тегу.
  switch (path) {
    case '/':
      return <TasksPage key={path} />;
      
    case '/tasks/123':
      return <TaskPage1 key={path} />;
      
    default:
      // Наша 404 страница
      return <div key="404">404 Страница не найдена :з</div>;
  }
};

export default Router;


