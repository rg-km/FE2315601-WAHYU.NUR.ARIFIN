import { useEffect, useState } from "react"
import React from "react"

import { getSession, auth } from "../api/auth"
import { useContext } from "react"
import { SessionContext } from "../context/SessionContext"

import "../styles/Navbar.css"

export default function Navbar() {
  // TODO: answer here
  return (
  <nav className="navbar" aria-label="Navbar">
      <h2 className="navbar-brand" href="/" data-id="brand" aria-label="App Title">
        Instagram
      </h2>
      <img className="brand-image" aria-label="App Logo" src="../logo512.png"></img>
  </nav>
  )
}
