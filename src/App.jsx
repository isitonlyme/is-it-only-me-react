import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import GamePage from "./pages/GamePage";
import CategoryPage from "./pages/CategoryPage";
import { GameProvider } from "./context/GameContext";
import LPSection3 from "./pages/LPSection3";

function App() {
  return (
    <GameProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LPSection3 />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/game" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </GameProvider>
  );
}

export default App;
