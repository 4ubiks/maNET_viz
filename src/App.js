// src/App.js
import React from "react";
import Tree from "./Tree";
import Name from "./name.js";

function App() {
  return (
    <div className="App">
      <h1>Basic network tree with D3</h1>
      <Tree />

      <Name />
    </div>
  );
}

export default App;
