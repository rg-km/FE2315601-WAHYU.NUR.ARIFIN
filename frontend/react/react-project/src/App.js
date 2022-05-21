import "./App.css"
import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";
import UploadForm from "./components/UploadForm";
import React, {useEffect, useState} from "react";
import axios from "axios";
import { API_URL } from "./api/config"  

function App() {
  // TODO: answer here

  const [listPost, setListpost] = useState([])

  async function fetchPost() {
    try {
      const respond = await axios.get(`${API_URL}/post/list`, { withCredentials: true });
      setListpost(respond.data.data)

    } catch (error) {
      console.log("can't create post", error);
    }
  }

  useEffect(() => {
    
    fetchPost()
  }, [])

  console.log(listPost, "ini list post")

  return (
    <div>
      <div className="box-container" aria-label="App">
        <header>
          <Navbar />
        </header>
        <UploadForm refetchListPost={fetchPost}/>
        {listPost.map((post) => <PostCard image={post.image} caption={post.content} username={post.author.name} date={post.createdAt.slice(0, 10)} />)}
        
        
      </div>

    </div>
    

  );
}

export default App
