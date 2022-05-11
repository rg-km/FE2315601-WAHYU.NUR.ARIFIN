import "./App.css"
// TODO: answer here

function App() {
  // TODO: answer here
  return (
    <div>
      <nav className="navbar" aria-label="Navbar">
        <h2 className="navbar-brand" href="/" data-id="brand" aria-label="App Title">
          Instagram
        </h2>
        <img className="brand-image" aria-label="App Logo" src="../logo512.png"></img>
      </nav>

      <div className="container" aria-label="App">
        <button className="like-btn" aria-label="Like Button">Like Button</button>
        <button className="dislike-btn" aria-aria-label="Dislike Button">Dislike Button</button>

      </div>

    </div>
    

  );
}

export default App
