import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import HistoricTour from "./pages/HistoricTour";
import AdventureTour from "./pages/AdventureTour";
import CityTour from "./pages/CityTour";
import Natural from "./pages/Natural";
import Hiking from "./pages/Hiking";
import CoffeeBirding from "./pages/CoffeeBirding";
import FestivalTour from "./pages/FestivalTour";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/historic-tour" element={<HistoricTour />} />
          <Route path="/adventure-tour" element={<AdventureTour />} />
          <Route path="/city-tour" element={<CityTour />} />
          <Route path="/natural-tour" element={<Natural />} />
          <Route path="/hiking" element={<Hiking />} />
          <Route path="/coffee-birding" element={<CoffeeBirding />} />
          <Route path="/festival-tour" element={<FestivalTour />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
