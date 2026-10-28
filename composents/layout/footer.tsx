import Link from 'next/link'
import { Twitter, Github, Instagram, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-6 w-6 bg-f1-red rounded-full" />
              <span className="font-bold">PITWALL</span>
            </div>
            <p className="text-sm text-white/60">Elite Formula 1 Intelligence Platform</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="/market">Market</Link></li>
              <li><Link href="/dashboard">Dashboard</Link></li>
              <li><Link href="/races">Races</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="#">Privacy</Link></li>
              <li><Link href="#">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-center">
          <p className="text-sm text-white/40">© 2024 PitWall. All rights reserved.</p>
          <div className="flex gap-4">
            <Twitter className="h-4 w-4 text-white/40 hover:text-f1-red cursor-pointer" />
            <Github className="h-4 w-4 text-white/40 hover:text-f1-red cursor-pointer" />
            <Instagram className="h-4 w-4 text-white/40 hover:text-f1-red cursor-pointer" />
            <Mail className="h-4 w-4 text-white/40 hover:text-f1-red cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  )
}