'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useUserStatsStore } from '@/store/userStatsStore'

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
  const router = useRouter()

  useEffect(() => {
    const storedUser = localStorage.getItem('pitwall_user')
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      setUser(parsedUser)
      // Sync username to the stats store for leaderboard
      useUserStatsStore.getState().setUsername(parsedUser.name || parsedUser.email.split('@')[0])
    }
    setLoading(false)
  }, [])

  const signIn = async (email: string, password: string) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (email && email.includes('@') && password && password.length >= 3) {
          const userData: User = {
            id: 'user_' + Date.now(),
            email: email,
            name: email.split('@')[0]
          }
          localStorage.setItem('pitwall_user', JSON.stringify(userData))
          setUser(userData)
          
          // Sync username to the stats store for leaderboard
          useUserStatsStore.getState().setUsername(userData.name)
          
          window.location.href = '/dashboard'
          resolve()
        } else {
          reject(new Error('Please enter a valid email and password (min 3 characters)'))
        }
      }, 500)
    })
  }

  const signUp = signIn

  const signInWithGoogle = async () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const userData: User = {
          id: 'google_' + Date.now(),
          email: 'user@gmail.com',
          name: 'Google User'
        }
        localStorage.setItem('pitwall_user', JSON.stringify(userData))
        setUser(userData)
        
        // Sync username to the stats store for leaderboard
        useUserStatsStore.getState().setUsername(userData.name)
        
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
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}