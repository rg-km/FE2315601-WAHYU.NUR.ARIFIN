import "./App.css"
import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";
import UploadForm from "./components/UploadForm";
import React, {useEffect} from "react";
import axios from "axios";
import { API_URL } from "./api/config"  

function App() {
  // TODO: answer here

  // useEffect(() => {
  //   async function fetchPost(data) {
  //     try {
  //       const postList = await axios.get(`${API_URL}/post/list`, data, { withCredentials: true });
  //       console.log(postList)
  //     } catch (error) {
  //       console.log("can't create post", error);
  //     }
  //   }
  //   fetchPost()
  // }, [])


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
