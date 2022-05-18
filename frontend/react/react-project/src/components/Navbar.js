import { useEffect, useState } from "react"
import React from "react"

import { getSession, auth } from "../api/auth"
import { useContext } from "react"
import { SessionContext } from "../context/SessionContext"
import Profile from "./Profile"

import "../styles/Navbar.css"


export default function Navbar() {
  // TODO: answer here
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
  <div className="navbar" aria-label="Navbar">
      <a className="navbar-brand" href="/" data-id="brand" aria-label="App Title">Instagram</a>
      <img className="brand-image" aria-label="App Logo" src="../logo512.png"></img>
      
      {isLoggedIn ? (
        <Profile/>
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
