import { useEffect, useState } from "react"
import React from "react"

import { getSession, auth } from "../api/auth"
import { useContext } from "react"
import { SessionContext } from "../context/SessionContext"

import "../styles/Navbar.css"

const Button = () => {
    const { isLoggedIn, user, setUser, setIsLoggedIn } = useContext(SessionContext)

    return (
        <div className="navbar-button">
            {isLoggedIn ? (
                <button onClick={() => {
                    setIsLoggedIn(false)
                    setUser({})
                }}>Logout</button>
            ) : (
                <button onClick={() => {
                    auth().then(res => {
                        setUser(res.user)
                        setIsLoggedIn(true)
                    })
                }}>Login</button>
            )}
        </div>

    )
}

export default function Navbar() {
  // TODO: answer here
  return (
  <div className="navbar" aria-label="Navbar">
      <a className="navbar-brand" href="/" data-id="brand" aria-label="App Title">Instagram</a>
      <img className="brand-image" aria-label="App Logo" src="../logo512.png"></img>
      
        <Button />
  </div>
  )
}
