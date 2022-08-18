import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

import Dashboard from "./Components/Pages/Dashboard";

import "./App.css";

function App() {
  // const location = useLocation();

  // useEffect(() => {
  //   document.querySelector<any>("html").style.scrollBehavior = "auto";
  //   window.scroll({ top: 0 });
  //   document.querySelector<any>("html").style.scrollBehavior = "";
  // }, [location.pathname]); // triggered on route change

  return (
    <div className="App">
      {/* <Dashboard /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      {/* <h1 className="bg-red-200">hello</h1> */}
    </div>
  );
}

export default App;
