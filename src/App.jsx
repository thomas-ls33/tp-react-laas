import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import Footer from "./components/Footer/Footer";
import TrendingDisplay from "./components/TrendingDisplay/TrendingDisplay";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <TrendingDisplay />
      <Footer />
    </>
  );
}

export default App;
