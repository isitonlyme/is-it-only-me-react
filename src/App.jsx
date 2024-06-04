import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import GamePage from "./pages/GamePage";
import CategoryPage from "./pages/CategoryPage";
import { GameProvider } from "./context/GameContext";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <GameProvider>
      <BrowserRouter>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/categories" element={<CategoryPage />} />
            <Route path="/game" element={<GamePage />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </GameProvider>
  );
}

export default App;
