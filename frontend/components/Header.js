'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link href="/" className="navbar-brand">
          <Image 
            src="/images/logo.png" 
            alt="MonEntreprise - Solutions innovantes"
            width={150}
            height={40}
            priority
            style={{ 
              height: '40px', 
              width: 'auto',
              objectFit: 'contain'
            }}
          />
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu de navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link" onClick={() => setIsOpen(false)}>Accueil</Link>
            </li>
            <li className="nav-item">
              <Link href="/services" className="nav-link" onClick={() => setIsOpen(false)}>Services</Link>
            </li>
            <li className="nav-item">
              <Link href="/a-propos" className="nav-link" onClick={() => setIsOpen(false)}>À propos</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}