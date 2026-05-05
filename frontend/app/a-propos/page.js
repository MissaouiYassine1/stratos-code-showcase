'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>À propos de nous</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">Accueil</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">À propos</li>
            </ol>
          </nav>
        </div>
      </section>

      <div className="container py-5">
        {/* Section Histoire avec image d'équipe */}
        <div className="row mb-5 align-items-center">
          <div className="col-md-6">
            <h2>Notre histoire</h2>
            <p>Fondée en 2020, MonEntreprise est née de la passion pour le digital et l'innovation. En seulement 5 ans, nous avons accompagné plus de 100 entreprises dans leur transformation numérique.</p>
            <p className="mt-3">Notre équipe d'experts passionnés met son savoir-faire au service de votre réussite.</p>
            <div className="mt-4">
              <Link href="/contact" className="btn-custom btn-primary-custom text-decoration-none">
                En savoir plus
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-image">
              <Image 
                src="/images/team.png" 
                alt="Notre équipe MonEntreprise au travail"
                width={800}
                height={600}
                className="w-100"
                style={{ objectFit: 'cover', borderRadius: '12px' }}
              />
            </div>
          </div>
        </div>
        
        {/* Section Valeurs */}
        <div className="section-light rounded p-5 mb-5">
          <h2 className="text-center mb-4">Nos valeurs</h2>
          <div className="row text-center g-4">
            <div className="col-md-4">
              <div className="mb-3">
                <i className="bi bi-lightbulb fs-1 text-accent"></i>
              </div>
              <h4>Innovation</h4>
              <p>Solutions modernes et adaptées à vos besoins</p>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <i className="bi bi-shield-check fs-1 text-accent"></i>
              </div>
              <h4>Confiance</h4>
              <p>Relation transparente et durable avec nos clients</p>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <i className="bi bi-rocket-takeoff fs-1 text-accent"></i>
              </div>
              <h4>Excellence</h4>
              <p>Qualité et performance garanties sur chaque projet</p>
            </div>
          </div>
        </div>

        {/* Section Équipe */}
        <div className="mt-5">
          <h2 className="text-center mb-4">Notre équipe</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="team-card">
                <Image 
                  src="/images/Jean Dupont.png" 
                  alt="Membre de l'équipe"
                  width={400}
                  height={300}
                  style={{ objectFit: 'cover', width: '100%', height: '250px' }}
                />
                <div className="team-info">
                  <h4>Jean Dupont</h4>
                  <p className="position">CEO & Fondateur</p>
                  <p>Expert en transformation digitale avec 15 ans d'expérience</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-card">
                <Image 
                  src="/images/Marie Martin.png" 
                  alt="Membre de l'équipe"
                  width={400}
                  height={300}
                  style={{ objectFit: 'cover', width: '100%', height: '250px' }}
                />
                <div className="team-info">
                  <h4>Marie Martin</h4>
                  <p className="position">Directrice Technique</p>
                  <p>Spécialiste en développement web et architectures cloud</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-card">
                <Image 
                  src="/images/Sophie Bernard.png" 
                  alt="Membre de l'équipe"
                  width={400}
                  height={300}
                  style={{ objectFit: 'cover', width: '100%', height: '250px' }}
                />
                <div className="team-info">
                  <h4>Sophie Bernard</h4>
                  <p className="position">Chef de projet Marketing</p>
                  <p>Experte en stratégie digitale et growth hacking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}