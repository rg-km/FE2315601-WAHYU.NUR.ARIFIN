import { useEffect, useState } from "react"
import React from "react"

import { getSession, auth } from "../api/auth"
import { useContext } from "react"
import { SessionContext } from "../context/SessionContext"
import axios from "axios";
import { API_URL } from "../api/config"  
import PostCard from "./PostCard"

import "../styles/Navbar.css"


export default function Navbar() {
  // TODO: answer here
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  useEffect(() => {
    const fetchSession = async () => {
      await getSession().then((res) => {
        try{
          if (res.data.user) {
            setUser(res.data.user)
            setIsLoggedIn(true)
          }
        } catch(err) {
          console.log(err)
        }
      })
    }
    fetchSession()
  }, [])

  // async function postList(post) {
  //   try {
  //     const listPost = await axios.get(`${API_URL}/post/list`, post, { withCredentials: true });
  //     if (listPost?.message == "success") {
  //       return listPost;
  //     }
  //   } catch (error) {
  //     console.log("can't create post", error);
  //   }
  // }
  

  // listPost.map((post) => <PostCard image={post.image} content={post.content} />)
  // console.log(listPost)

  return (
  <div className="navbar" aria-label="Navbar">
      <a className="navbar-brand" href="/" data-id="brand" aria-label="App Title">Instagram</a>
      <img className="brand-image" aria-label="App Logo" src="../logo512.png"></img>
      
      {isLoggedIn ? (
        <p aria-label="Profile">{user.name}</p>
        // <p aria-label="Profile">test</p>
      ) : (
        <button
          aria-label="Login"
          onClick={auth}
        >
          Login
        </button>
      )}
  </div>
  )
}
