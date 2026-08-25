/* import { Link } from "../Router"; 

function TasksPage() {
  return (
    <div>
      <Link to="/tasks/123"className="myCustomLink">БАЗА</Link>
      <li><Link to="/tasks/123" className="myCustomLink1">ПРОФИЛЬ</Link></li>
    </div>
  );
}

export default TasksPage; */

import BubbleTop from "../components/BubbleEffectsTop";
import BubbleBottom from "../components/BubbleEffectsBottom";
import ImageLightUp from "../components/CalculatorImage";
import Line from '../components/Line';
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import Table from "../components/Table";

function MainPage() {
  return (
    <div className="main-page-wrapper">
      {/* Фоновые пузыри создаются только для этой страницы */}
      <BubbleTop />
      <BubbleBottom />
      
      {/* Контент */}
      <ImageLightUp />
      <Line />
      <Header />
      <SearchForm />
      <Table />
    </div>
  );
}

export default MainPage;
