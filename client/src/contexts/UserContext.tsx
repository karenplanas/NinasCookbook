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
    const response = await ApiClient.createUser(user);
    setUser(response);
  }

  const login = async (credentials: Credentials) => {
    const response = await ApiClient.loginUser(credentials);
    setUser(response);
  }
  
  const logout = () => {
    setUser(undefined);
    window.localStorage.removeItem(STORAGE_KEY);
  }

  const value = {
    user, 
    createUser,
    login, 
    logout
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

const useUserContext = (): UserContextInterface => {
  return useContext(UserContext) as UserContextInterface
}

export { UserContextProvider, useUserContext }