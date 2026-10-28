'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface User {
  id: string
  email: string
  name: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string) => Promise<void>
  signInWithGoogle: () => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem('pitwall_user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const signIn = async (email: string, password: string) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (email && password.length >= 3) {
          const newUser = { id: 'user_1', email, name: email.split('@')[0] }
          localStorage.setItem('pitwall_user', JSON.stringify(newUser))
          setUser(newUser)
          
          // FORCE HARD RELOAD TO DASHBOARD
          window.location.href = '/dashboard'
          resolve()
        } else {
          reject(new Error('Password must be at least 3 characters'))
        }
      }, 500)
    })
  }

  const signUp = signIn

  const signInWithGoogle = async () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const newUser = { id: 'google_1', email: 'demo@gmail.com', name: 'Google User' }
        localStorage.setItem('pitwall_user', JSON.stringify(newUser))
        setUser(newUser)
        
        // FORCE HARD RELOAD TO DASHBOARD
        window.location.href = '/dashboard'
        resolve()
      }, 500)
    })
  }

  const signOut = async () => {
    localStorage.removeItem('pitwall_user')
    setUser(null)
    window.location.href = '/'
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}