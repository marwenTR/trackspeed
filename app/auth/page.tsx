'use client'

import React, { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Navigation } from '@/components/layout/navigation'
import { Mail, Lock, Chrome, ArrowRight } from 'lucide-react'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { signIn, signInWithGoogle } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await signIn(email, password)
    } catch (err: any) {
      setError(err.message)
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#0B0F19] px-4 overflow-hidden">
      <Navigation />
      
      {/* BACKGROUND F1 CAR IMAGE - Adjusted for clarity */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/f1-bg.jpg" 
          alt="F1 Background" 
          className="w-full h-full object-cover object-center opacity-40 blur-[2px] scale-100"
        />
        {/* Darker gradient overlay so the text pops */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/60 via-[#0B0F19]/90 to-[#0B0F19]" />
      </div>

      {/* Login Card - Slightly darker glass for readability */}
      <div className="w-full max-w-md bg-black/70 border border-white/10 backdrop-blur-2xl rounded-2xl p-8 relative z-10 mt-20 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-black/50 border border-white/10 shadow-lg shadow-black/50">
              <svg viewBox="0 0 100 100" className="h-7 w-7 text-f1-red drop-shadow-[0_0_8px_rgba(225,6,0,0.6)]" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 40 10 C 55 10, 70 15, 75 25 C 80 35, 70 45, 65 50 C 60 55, 75 65, 75 75 C 75 85, 60 90, 50 90 C 40 90, 35 80, 30 75 C 25 70, 15 75, 10 65 C 5 55, 15 45, 25 45 C 35 45, 40 35, 35 25 C 30 15, 25 10, 40 10 Z" />
                <line x1="35" y1="10" x2="45" y2="10" stroke="white" strokeWidth="8" strokeLinecap="square" />
              </svg>
            </div>
            <span className="text-3xl font-black tracking-tighter text-white">
              TRACK<span className="text-f1-red">SPEED</span>
            </span>
          </div>
          
          <h2 className="text-xl font-bold text-white mt-4">{isLogin ? 'Welcome Back' : 'Join the Elite'}</h2>
          <p className="text-sm text-gray-400 mt-2">{isLogin ? 'Sign in to your dashboard' : 'Create your account to start trading'}</p>
        </div>

        {error && <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm text-center">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-f1-red" required />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-f1-red" required />
          </div>
          <Button type="submit" disabled={loading} className="w-full bg-f1-red hover:bg-red-700 text-white font-bold h-11 shadow-lg shadow-f1-red/20">
            {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
            {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10" /></div>
          <div className="relative flex justify-center text-xs uppercase"><span className="bg-[#0B0F19] px-3 py-1 text-gray-500 rounded-full border border-white/5">Or continue with</span></div>
        </div>

        <Button variant="outline" onClick={signInWithGoogle} className="w-full border-white/10 bg-white/5 hover:bg-white/10 text-white">
          <Chrome className="mr-2 h-4 w-4" /> Google
        </Button>

        <div className="mt-6 text-center">
          <button type="button" onClick={() => setIsLogin(!isLogin)} className="text-sm text-gray-400 hover:text-f1-red transition-colors">
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
          </button>
        </div>
      </div>
    </div>
  )
}