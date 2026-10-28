'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X, Home, LayoutDashboard, TrendingUp, Trophy, BarChart3, LogOut, User, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Market', href: '/market', icon: TrendingUp },
  { name: 'Races', href: '/races', icon: Trophy },
  { name: 'Drivers', href: '/drivers', icon: Users }, 
  { name: 'Leaderboard', href: '/leaderboard', icon: BarChart3 },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const storedUser = localStorage.getItem('pitwall_user')
    if (storedUser) setUser(JSON.parse(storedUser))

    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSignOut = () => {
    localStorage.removeItem('pitwall_user')
    setUser(null)
    router.push('/')
  }

  
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/50' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="group relative flex items-center gap-3">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-black/50 border border-white/10 group-hover:border-f1-red/50 transition-colors shadow-lg shadow-black/50">
                <svg viewBox="0 0 100 100" className="h-6 w-6 text-f1-red drop-shadow-[0_0_8px_rgba(225,6,0,0.6)] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 40 10 C 55 10, 70 15, 75 25 C 80 35, 70 45, 65 50 C 60 55, 75 65, 75 75 C 75 85, 60 90, 50 90 C 40 90, 35 80, 30 75 C 25 70, 15 75, 10 65 C 5 55, 15 45, 25 45 C 35 45, 40 35, 35 25 C 30 15, 25 10, 40 10 Z" />
                  <line x1="35" y1="10" x2="45" y2="10" stroke="white" strokeWidth="8" strokeLinecap="square" />
                </svg>
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">
                TRACK<span className="text-f1-red">SPEED</span>
              </span>
            </Link>

            {/* Desktop Navigation with Smooth Sliding Pill */}
            <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1.5 backdrop-blur-md">
              {navItems.map((item) => {
                const active = isActive(item.href)
                return (
                  <Link key={item.href} href={item.href}>
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                      className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                        active ? 'text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <item.icon className={`h-4 w-4 transition-colors ${active ? 'text-f1-red' : ''}`} />
                      <span className="relative z-10">{item.name}</span>
                      
                      {/* The Smooth Sliding Pill */}
                      {active && (
                        <motion.div
                          layoutId="activeTabPill"
                          className="absolute inset-0 bg-f1-red/20 rounded-full border border-f1-red/30 shadow-[0_0_15px_rgba(225,6,0,0.2)]"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                )
              })}
            </div>

            {/* Auth / Profile Section */}
            <div className="hidden md:flex items-center gap-4">
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
                  >
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-f1-red to-red-500 flex items-center justify-center shadow-lg shadow-f1-red/20 group-hover:scale-105 transition-transform">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-white">{user.name}</span>
                  </button>
                  
                  {/* Dropdown */}
                  {isDropdownOpen && (
                    <>
                      <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)} />
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className="absolute right-0 mt-2 w-48 rounded-xl bg-[#111] border border-white/10 shadow-2xl overflow-hidden z-50"
                      >
                        <button
                          onClick={handleSignOut}
                          className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                        >
                          <LogOut className="h-4 w-4" />
                          Sign Out
                        </button>
                      </motion.div>
                    </>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Button variant="ghost" asChild className="hover:text-white text-gray-400 rounded-full">
                    <Link href="/auth">Sign In</Link>
                  </Button>
                  <Button asChild className="bg-f1-red hover:bg-red-700 rounded-full px-6 shadow-lg shadow-f1-red/20 transition-transform hover:scale-105 active:scale-95">
                    <Link href="/auth">Get Started</Link>
                  </Button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden pt-24"
        >
          <div className="flex flex-col p-6 space-y-2">
            {navItems.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-lg font-medium transition-all ${
                    active 
                      ? 'bg-f1-red/10 text-f1-red border border-f1-red/20' 
                      : 'text-gray-400 hover:bg-white/5'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              )
            })}
            
            {user ? (
              <button
                onClick={() => {
                  handleSignOut()
                  setIsMobileMenuOpen(false)
                }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-lg font-medium text-red-400 hover:bg-red-500/10 mt-4"
              >
                <LogOut className="h-5 w-5" />
                Sign Out
              </button>
            ) : (
              <div className="mt-6">
                <Button asChild className="w-full bg-f1-red h-12 text-lg rounded-xl">
                  <Link href="/auth" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Link>
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </>
  )
}