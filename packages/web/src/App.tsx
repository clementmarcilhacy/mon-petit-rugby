import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Ranking } from "./pages/Ranking";
import { Leaderboard } from "./pages/Leaderboard";
import { Header } from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}

export default App;
