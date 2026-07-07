import BubbleBottom from "./components/BubbleEffectsBottom1";
import BubbleTop from "./components/BubbleEffectsTop";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header";
import ImageToggler from "./components/CalculatorImage";
import Router from './Router';
import TaskPage from './pages/TaskPage1'
import TasksPage from './pages/TasksPage';

function Body() {
  return (
   <div>
     <Router />
     <BubbleBottom />
     <BubbleTop />
     <Header />
     <ImageToggler />
    </div>
  );
}

export default function MyApp() {
  return (
    <Body />
  );
}

