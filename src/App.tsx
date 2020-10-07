import React from "react";
import { Icon } from "./components";
import { chevronLeft } from "./icons";

function App() {
  return (
    <div className="App">
      <p style={{ color: "teal" }}>
        <Icon icon={chevronLeft} />
        Chevron Left
      </p>
    </div>
  );
}

export default App;
