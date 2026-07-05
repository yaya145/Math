import AlgebraButton from "./components/AlgebraButton";
import GeometryButton from "./components/GeometryButton";
import SearchForm from "./components/SearchForm";
import ImageToggler from "./components/CalculatorImage";
import Router from './Router';
import TaskPage from './pages/TaskPage1'
import TasksPage from './pages/TasksPage';

function Body() {
  return (
   <div>
     <AlgebraButton />
     <GeometryButton />
     <Router />
     <SearchForm />
     <ImageToggler />
    </div>
  );
}

export default function MyApp() {
  return (
  <div className="BC">
    <Body />
  </div>
  );
}

