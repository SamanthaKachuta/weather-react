import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Bulawayo" />
        
        <footer>
          This project was coded by Samantha and is{" "}
          <a
            href="https://github.com/YOUR_GITHUB_USERNAME/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}