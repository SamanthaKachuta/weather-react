import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Bulawayo" />
        
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/SamanthaKachuta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Samantha Kachuta
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/SamanthaKachuta/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://shecodes-weather.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}