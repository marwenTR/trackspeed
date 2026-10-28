'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X, Home, LayoutDashboard, TrendingUp, Trophy, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Market', href: '/market', icon: TrendingUp },
  { name: 'Races', href: '/races', icon: Trophy },
  { name: 'Leaderboard', href: '/leaderboard', icon: BarChart3 },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { user, signOut } = useAuth()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          isScrolled ? 'glass border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="group relative">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 bg-f1-red rounded-full animate-pulse-glow" />
                <span className="text-2xl font-bold tracking-tighter">
                  <span className="text-white">PIT</span>
                  <span className="text-f1-red">WALL</span>
                </span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link key={item.href} href={item.href}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`relative flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${
                        isActive ? 'text-f1-red' : 'text-white/70 hover:text-white'
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-f1-red"
                        />
                      )}
                    </motion.div>
                  </Link>
                )
              })}
            </div>

            <div className="hidden md:flex items-center gap-4">
              {user ? (
                <>
                  <div className="text-right">
                    <p className="text-sm font-medium">{user.email?.split('@')[0]}</p>
                    <p className="text-xs text-white/50">Pro Member</p>
                  </div>
                  <Button variant="outline" onClick={signOut} className="border-f1-red/30 hover:bg-f1-red/10">
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" asChild className="hover:text-f1-red">
                    <Link href="/auth">Sign In</Link>
                  </Button>
                  <Button className="bg-f1-red hover:bg-f1-red/90" asChild>
                    <Link href="/auth">Get Started</Link>
                  </Button>
                </>
              )}
            </div>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 glass rounded-lg">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          className="fixed inset-0 z-40 glass md:hidden pt-24"
        >
          <div className="flex flex-col items-center gap-6 p-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 text-lg ${pathname === item.href ? 'text-f1-red' : 'text-white/70'}`}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ))}
            {!user && (
              <div className="flex flex-col gap-4 w-full mt-8">
                <Button variant="outline" asChild className="w-full">
                  <Link href="/auth">Sign In</Link>
                </Button>
                <Button className="w-full bg-f1-red" asChild>
                  <Link href="/auth">Get Started</Link>
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </>
  )
}