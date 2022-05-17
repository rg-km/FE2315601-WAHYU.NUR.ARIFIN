import { useEffect, useState } from "react"
import React from "react"

import { getSession, auth } from "../api/auth"
import { useContext } from "react"
import { SessionContext } from "../context/SessionContext"

import "../styles/Navbar.css"

const Button = () => {
    const isLoggedIn = useContext(SessionContext).isLoggedIn;
    const setIsLoggedIn = useContext(SessionContext).setIsLoggedIn

    const renderLog = (isLoggedIn) => {
        if (isLoggedIn) {
            return (
                <button onClick={() => {
                    setIsLoggedIn(false)
                    auth.signOut()
                }}>
                    Logout
                </button>
            )
        } else {
            return (
                <button onClick={() => {
                    setIsLoggedIn(true)
                    auth.signInWithPopup()
                }}>
                    Login
                </button>
            )
        }
    }
}

export default function Navbar() {
  // TODO: answer here
  return (
  <div className="navbar" aria-label="Navbar">
      <a className="navbar-brand" href="/" data-id="brand" aria-label="App Title">Instagram</a>
      <img className="brand-image" aria-label="App Logo" src="../logo512.png"></img>
      
      <button onClick={() => {renderLog(isLoggedIn)}} aria-label="Toggle navigation">
            {renderLog(isLoggedIn)}
      </button>
  </div>
  )
}
