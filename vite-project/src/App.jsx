import { useState } from "react";
import socialGather from "/socialLogo.png";
import "./App.css";
import User from "./components/User";
import Posts from "./components/Posts";
import ErrorBoundary from "./components/ErrorHandler/ErrorBoundary";

function App() {
  return (
    <>
      <div>
        <a href="http://localhost:5173/" target="_blank">
          <img
            src={socialGather}
            className="logo react"
            alt="socialGather logo"
          />
        </a>
      </div>
      <h1>Social Gather</h1>
      <div className="card">
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
          <div>
            <User />
          </div>
          <div>
            <Posts />
          </div>
        </ErrorBoundary>
      </div>
    </>
  );
}

export default App;
