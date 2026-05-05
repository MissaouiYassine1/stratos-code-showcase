'use client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  useEffect(() => {
    // Scroll reveal animation
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, { threshold: 0.1 })
    
    reveals.forEach(reveal => observer.observe(reveal))
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container text-center position-relative">
          <h1 className="animate-fade-up mb-4">
            Solutions innovantes pour votre entreprise
          </h1>
          <p className="lead mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Nous accompagnons les entreprises dans leur transformation numérique
          </p>
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Link href="/services" className="btn-custom btn-primary-custom text-decoration-none">
              Découvrir nos services
              <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-3 reveal">Nos Services</h2>
          <p className="text-center text-secondary-custom mb-5 reveal" style={{ transitionDelay: '0.1s' }}>
            Des solutions sur mesure pour votre réussite
          </p>
          <div className="row g-4 stagger-children">
            <div className="col-md-4">
              <div className="card-custom">
                <i className="bi bi-display card-icon"></i>
                <h5>Développement Web</h5>
                <p>Sites vitrine, e-commerce et applications sur mesure</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-custom">
                <i className="bi bi-phone card-icon"></i>
                <h5>Applications Mobile</h5>
                <p>iOS, Android, multiplateforme avec React Native</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-custom">
                <i className="bi bi-megaphone card-icon"></i>
                <h5>Marketing Digital</h5>
                <p>SEO, réseaux sociaux et stratégie de contenu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques Section */}
      <section className="section section-light">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md-3">
              <div className="stat-item reveal">
                <div className="stat-number">100+</div>
                <div className="stat-label">Clients satisfaits</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-item reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="stat-number">50+</div>
                <div className="stat-label">Projets réalisés</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-item reveal" style={{ transitionDelay: '0.2s' }}>
                <div className="stat-number">10+</div>
                <div className="stat-label">Experts dédiés</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-item reveal" style={{ transitionDelay: '0.3s' }}>
                <div className="stat-number">5 ans</div>
                <div className="stat-label">D'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-gradient text-center">
        <div className="container">
          <h2 className="mb-3 reveal">Prêt à démarrer votre projet ?</h2>
          <p className="mb-4 reveal" style={{ transitionDelay: '0.1s' }}>
            Contactez-nous pour une consultation gratuite
          </p>
          <Link href="/contact" className="btn-custom btn-outline-custom text-decoration-none reveal" style={{ transitionDelay: '0.2s' }}>
            Nous contacter
            <i className="bi bi-chat-dots ms-2"></i>
          </Link>
        </div>
      </section>
    </>
  )
}