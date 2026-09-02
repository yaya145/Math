import BubbleTop from "../components/BubbleEffectsTop";
import BubbleBottom from "../components/BubbleEffectsBottom";
import ImageLightUp from "../components/CalculatorImage";
import Line from '../components/Line';
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import Table from "../components/Table";

const MainPage = () => {
  return (
    <div>
      <BubbleTop />
      <BubbleBottom />
      <ImageLightUp />
      <Line />
      <Header />
      <SearchForm />
      <Table />
    </div>
  );
}

export default MainPage;
