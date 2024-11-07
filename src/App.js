import React, { useState } from "react";
import "./App.css";
import Home from "./component/home";
import Context from "./component/context";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <Context.Provider value={(search, setSearch)}>
      <div>
        <Home />
      </div>
    </Context.Provider>
  );
};

export default App;
