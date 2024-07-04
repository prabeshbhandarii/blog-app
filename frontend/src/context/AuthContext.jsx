import React, { useState, createContext, useContext, useEffect } from "react";
import Cookies from 'js-cookie'

export const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(()=>{
        const token = Cookies.get('token')
        if(token){
            setIsAuthenticated(true)
        }else{
            setIsAuthenticated(false)
        }
    }, [])

    const login = ()=> setIsAuthenticated(true)

    const logout = () => {
        Cookies.remove('token')
        setIsAuthenticated(false)
    }
    
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)