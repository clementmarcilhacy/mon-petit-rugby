import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Ranking } from "./pages/Ranking";
import { Leaderboard } from "./pages/Leaderboard";
import { Header } from "./components/Header";

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
      <Header />
      <Routes>
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
