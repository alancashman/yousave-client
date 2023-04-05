import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Welcome from "./Pages/Welcome";
import Transactions from "./Pages/Transactions";
import Nav from "./Components/Nav/Nav";
import Main from "./Components/Main/Main";

function App() {
  const [active, setActive] = useState("Dashboard");

  return (
    <App className="app">
      <BrowserRouter>
        <Nav active={active} setActive={setActive} />
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/transactions" element={<Transactions />}></Route>
        </Routes>
      </BrowserRouter>
    </App>
  );
}

export default App;
