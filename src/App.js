import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{""}
          <a
            href="https://www.ichatwithfreda@yahoo.com"
            target="_blank"
            rel="noreferrer"
          >
            Winifred Ayaga
          </a>
          {""}
          and is{""}
          <a
            href="https://github.com/fredacee/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
