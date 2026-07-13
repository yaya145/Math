import BubbleTop from "./components/BubbleEffectsTop";
import BubbleBottom from "./components/BubbleEffectsBottom";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header";
import ImageLightUp from "./components/CalculatorImage";
import Router from './Router';
import TaskPage from './pages/TaskPage1'
import TasksPage from './pages/TasksPage';
import Line from "./components/Line";
import MainText from "./components/MainText";

function Body() {
  return (
   <div>
     <BubbleTop />
     <BubbleBottom />
     <ImageLightUp />
     <Line/>
     <MainText />
     <Header />
     <Router />
    </div>
  );
}

export default function MyApp() {
  return (
    <Body />
  );
}

