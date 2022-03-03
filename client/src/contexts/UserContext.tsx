import React, { createContext, useContext, useEffect, useState } from 'react'
import { Credentials } from '../interfaces/Credentials';
import { User } from '../interfaces/User'
import * as ApiClient from '../services/ApiClient';

const STORAGE_KEY = 'user';

interface UserContextInterface {
  user?: User
  createUser: (user: User) => void
  login: (credentials: Credentials) => void
  logout: () => void
}

const UserContext = createContext<UserContextInterface | undefined>(undefined)


const UserContextProvider : React.FC = ({ children }) => {
  
  //https://blog.logrocket.com/localstorage-javascript-complete-guide
  const storedData = window.localStorage.getItem(STORAGE_KEY);

  const [user, setUser] = useState<User | undefined >(storedData ? JSON.parse(storedData) : undefined);

  //https://blog.logrocket.com/localstorage-javascript-complete-guide
  useEffect( () => {
    user && window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user)); 
  }, [user])

  const createUser = async (user: User) => {
    await ApiClient.createUser(user);
    setUser(user);
  }

  const login = async (credentials: Credentials) => {
    await ApiClient.loginUser(credentials);
    setUser(user);
  }
  
  const logout = () => {
    setUser(undefined);
  }

  const value = {
    user, 
    createUser,
    login, 
    logout
  }

  console.log('children', children)

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