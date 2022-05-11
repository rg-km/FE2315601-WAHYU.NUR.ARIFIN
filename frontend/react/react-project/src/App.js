import "./App.css"
import React, { useState } from "react"
import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";

function App() {
  // TODO: answer here

  return (
    <div>
      <div className="box-container" aria-label="App">
        <header>
          <Navbar />
        </header>
        
        <PostCard />
      </div>

    </div>
    

  );
}

export default App
