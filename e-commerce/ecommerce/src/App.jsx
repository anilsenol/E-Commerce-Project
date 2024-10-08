import { useState } from "react";

import "./App.css";
import { Header } from "../components/Header";

import RouterConfig from "../config/RouterConfig";

function App() {
  return (
    <div>
      <Header />
      <RouterConfig />
    </div>
  );
}

export default App;
