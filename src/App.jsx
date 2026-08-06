import BubbleTop from "./components/BubbleEffectsTop";
import BubbleBottom from "./components/BubbleEffectsBottom";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header";
import ImageLightUp from "./components/CalculatorImage";
import Line from './components/Line';
import Table from "./components/Table";
import Router from './Router';
import TaskPage from './pages/TaskPage1';
import TasksPage from './pages/TasksPage';
import MainText from "./components/MainText";

function Body() {
  return (
   <div>
     <BubbleTop />
     <BubbleBottom />
     <ImageLightUp />
     <Line />
     <MainText />
     <Header />
     <SearchForm />
     <Table />
     <Router />
    </div>
  );
}

export default function MyApp() {
  return (
    <Body />
  );
}

