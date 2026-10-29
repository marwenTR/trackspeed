import React from 'react'
import Link from 'next/link'
import { Twitter, Github, Instagram, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0A0A] pt-16 pb-8 relative overflow-hidden">
      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-32 bg-f1-red/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid gap-12 md:grid-cols-4 lg:grid-cols-5 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-black/50 border border-white/10 group-hover:border-f1-red/50 transition-colors shadow-lg shadow-black/50">
                <svg 
                  viewBox="0 0 100 100" 
                  className="h-5 w-5 text-f1-red drop-shadow-[0_0_8px_rgba(225,6,0,0.6)]"
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="6" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M 40 10 C 55 10, 70 15, 75 25 C 80 35, 70 45, 65 50 C 60 55, 75 65, 75 75 C 75 85, 60 90, 50 90 C 40 90, 35 80, 30 75 C 25 70, 15 75, 10 65 C 5 55, 15 45, 25 45 C 35 45, 40 35, 35 25 C 30 15, 25 10, 40 10 Z" />
                  <line x1="35" y1="10" x2="45" y2="10" stroke="white" strokeWidth="8" strokeLinecap="square" />
                </svg>
              </div>
              <span className="text-xl font-black tracking-tighter text-white">
                TRACK<span className="text-f1-red">SPEED</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              The elite Formula 1 intelligence platform. Real-time analytics, driver stock market, and predictive telemetry for the modern racing enthusiast.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-semibold text-white mb-4">Platform</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/dashboard" className="hover:text-f1-red transition-colors">Dashboard</Link></li>
              <li><Link href="/market" className="hover:text-f1-red transition-colors">Driver Market</Link></li>
              <li><Link href="/races" className="hover:text-f1-red transition-colors">Race Calendar</Link></li>
              <li><Link href="/leaderboard" className="hover:text-f1-red transition-colors">Leaderboard</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-f1-red transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-f1-red transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-f1-red transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-f1-red transition-colors">Press Kit</Link></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-f1-red transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-f1-red transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-f1-red transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} TrackSpeed. All rights reserved.
          </p>
          
          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-4">
            
            {/* GitHub - Linked to your profile */}
            <a 
              href="https://github.com/marwenTR" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors bg-white/5 p-2 rounded-full border border-white/5 hover:border-white/20"
            >
              <Github className="h-4 w-4" />
            </a>

            {/* Twitter / X */}
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors bg-white/5 p-2 rounded-full border border-white/5 hover:border-white/20"
            >
              <Twitter className="h-4 w-4" />
            </a>

            {/* Instagram */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors bg-white/5 p-2 rounded-full border border-white/5 hover:border-white/20"
            >
              <Instagram className="h-4 w-4" />
            </a>

            {/* Email */}
            <a 
              href="mailto:your.email@example.com" 
              className="text-gray-500 hover:text-white transition-colors bg-white/5 p-2 rounded-full border border-white/5 hover:border-white/20"
            >
              <Mail className="h-4 w-4" />
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  )
}