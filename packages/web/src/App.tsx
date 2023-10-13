import { useState } from "react";
import "./App.css";
import { CountryList } from "./components/countries/CountryList";
import { Username } from "./components/user/Username";

function App() {
  const [count, setCount] = useState(0);
  console.log("count", count);
  console.log("meta.env", import.meta.env);
  console.log("env variable", import.meta.env.VITE_APP_API_URL);

  return (
    <>
      <h1>Mon petit rugby</h1>
      <Username />
      <CountryList />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
