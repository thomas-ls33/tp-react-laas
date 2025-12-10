import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import Footer from "./components/Footer/Footer";
import TrendingDisplay from "./components/TrendingDisplay/TrendingDisplay";
import SeriesDisplay from "./components/SeriesDisplay/SeriesDisplay";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <TrendingDisplay />
      <SeriesDisplay />
      <Footer />
    </>
  );
}

export default App;
