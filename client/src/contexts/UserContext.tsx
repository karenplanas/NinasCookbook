import React, { createContext, useContext } from 'react'
// import { User } from '../interfaces/User'

interface UserContextInterface {
  // user: User
  login: (credentials: any) => void
  logout: () => void
}

const UserContext = createContext<UserContextInterface>({
  // user: {},
  login: (/*user.email, user.password*/) => {},
  logout: () => {},
})

const UserContextProvider : React.FC = ({ children }) => {

  const login = () => {}
  
  const logout = () => {}

  const value = {
    // user, 
    login, 
    logout
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

const useUserContext = () => {
  return useContext(UserContext)
}

export { UserContextProvider, useUserContext }