import { Home, User, Briefcase, FolderOpen, BookOpen, Zap, Trophy, Mail } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type NavItem = {
  href: string
  label: string
  icon: LucideIcon
}

export const navItems: NavItem[] = [
  { href: '#hero', label: 'Home', icon: Home },
  { href: '#about', label: 'About', icon: User },
  { href: '#experience', label: 'Experience', icon: Briefcase },
  { href: '#projects', label: 'Projects', icon: FolderOpen },
  { href: '#publications', label: 'Publications', icon: BookOpen },
  { href: '#skills', label: 'Skills', icon: Zap },
  { href: '#awards', label: 'Awards', icon: Trophy },
  { href: '#contact', label: 'Contact', icon: Mail },
]
