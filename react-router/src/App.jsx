// import react from "react"
// import { BrowserRouter, Route, Link } from "react-router-dom";
// import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/home/Home";
import AboutCountries from "./pages/AboutCountries";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  return (
    <div className="page">
      <BrowserRouter>
        <nav className="links">
          <Div>
            <span>
              <Link className="links" to="/">
                Home
              </Link>
            </span>
            <span>
              <Link className="links" to="/countries">
                Countries
              </Link>
            </span>
          </Div>
        </nav>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/countries" element={<AboutCountries />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

const Div = styled.div`
  height: 12vh;
  width: 85vw;
  background-color: #217943;
  border: solid 6px lightcoral;
  margin-bottom: 2rem;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

{
  /* <div>
  <a href="https://vitejs.dev" target="_blank">
    <img src={viteLogo} className="logo" alt="Vite logo" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
</div>
<h1>Vite + React</h1>
<div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  <p>
    Edit <code>src/App.jsx</code> and save to test HMR
  </p>
</div>
<p className="read-the-docs">
  Click on the Vite and React logos to learn more
</p> */
}
