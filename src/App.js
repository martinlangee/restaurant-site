import logo from "./logo.svg";
import "./App.css";
import getAllCategories from "./api/api";
import { useState, useEffect } from "react";

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories(setCategories);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {categories
            ? categories.map((cat) => (
                <li key={cat.idCategory}>{cat.strCategory}</li>
              ))
            : "Loading data..."}
        </ul>
      </header>
    </div>
  );
}

export default App;
