import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import TrendingDisplay from "./components/TrendingDisplay/TrendingDisplay";
import SeriesDisplay from "./components/SeriesDisplay/SeriesDisplay";
import Footer from "./components/Footer/Footer";
import FocusPage from "./components/FocusPage/FocusPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <SearchBar />
              <TrendingDisplay />
              <SeriesDisplay />
              <Footer />
            </>
          }
        />
        <Route path="/focus/:id" element={<FocusPage />} />
      </Routes>
    </Router>
  );
}

export default App;
