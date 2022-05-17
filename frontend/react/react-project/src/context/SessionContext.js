import { createContext, useState } from "react"

export const SessionContext = createContext({
  // TODO: answer here
  isLoggedIn: false,
  user: {},
  setUser: () => {},
  setIsLoggedIn: () => {}
})

export const SessionProvider = ({ children }) => {
  // TODO: answer here
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({})

  return (
    <SessionContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        user: user,
        setUser: setUser,
        setIsLoggedIn: setIsLoggedIn
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}
