import getAllCategories from "./api/api";
import { useState, useEffect } from "react";
import Menu from "./components/Menu";

const App = () => {
  /* const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories(setCategories);
  }, []); */

  return (
    <div>
      {/* <header className="App-header">
        <ul>
          {categories
            ? categories.map((cat) => (
                <li key={cat.idCategory}>{cat.strCategory}</li>
              ))
            : "Loading data..."}
        </ul>
      </header> */}
      <Menu />
    </div>
  );
};

export default App;
