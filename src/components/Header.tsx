'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#recursos', label: 'Recursos' },
    { href: '#modulos', label: 'Módulos' },
    { href: '#transportadoras', label: 'Para transportadoras' },
    { href: '#contato', label: 'Contato' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'glass-light dark:glass-dark border-b border-slate-200 dark:border-slate-800'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[68px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 no-underline group">
          <div className="w-[38px] h-[38px] rounded-[10px] overflow-hidden relative">
            <Image
              src="/images/logo_cargafy.jpg"
              alt="CargaFy"
              width={38}
              height={38}
              className="object-cover"
              priority
            />
          </div>
          <span className="font-heading text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            Carga<span className="text-brand-500">Fy</span>
          </span>
        </a>

        {/* Nav Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-9 h-9 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all cursor-pointer"
              aria-label="Alternar tema"
            >
              {theme === 'dark' ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
                  <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          )}

          {/* CTA Button */}
          <a
            href="#demo"
            className="hidden sm:inline-flex bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:-translate-y-0.5 whitespace-nowrap"
          >
            Solicitar Demonstração
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
            aria-label="Menu"
          >
            <span className={`w-6 h-0.5 bg-slate-800 dark:bg-white rounded transition-all ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`w-6 h-0.5 bg-slate-800 dark:bg-white rounded transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-slate-800 dark:bg-white rounded transition-all ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden glass-light dark:glass-dark border-t border-slate-200 dark:border-slate-800 animate-fade-in">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 py-2.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#demo"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-brand-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold text-center transition-all"
            >
              Solicitar Demonstração
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
