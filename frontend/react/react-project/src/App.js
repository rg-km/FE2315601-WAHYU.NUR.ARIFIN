import "./App.css"
import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";
import UploadForm from "./components/UploadForm";

function App() {
  // TODO: answer here

  return (
    <div>
      <div className="box-container" aria-label="App">
        <header>
          <Navbar />
        </header>
        
        <PostCard />
        <UploadForm/>
      </div>

    </div>
    

  );
}

export default App
