import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      {/* Hero Section avec animation */}
      <section className="hero-section">
        <div className="container text-center text-white">
          <h1 className="animate-fade-up mb-4">
            Solutions innovantes pour votre entreprise
          </h1>
          <p className="lead mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Nous accompagnons les entreprises dans leur transformation numérique
          </p>
          <button className="btn-custom btn-primary-custom animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Découvrir nos services
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </section>

      {/* Services Section avec animations en cascade */}
      <section className="section stagger-children">
        <div className="container">
          <h2 className="text-center mb-5">Nos Services</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card-custom text-center">
                <i className="bi bi-display card-icon"></i>
                <h5 className="card-title">Développement Web</h5>
                <p>Sites vitrine, e-commerce et applications sur mesure</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-custom text-center">
                <i className="bi bi-phone card-icon"></i>
                <h5 className="card-title">Applications Mobile</h5>
                <p>iOS, Android, multiplateforme avec React Native</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-custom text-center">
                <i className="bi bi-megaphone card-icon"></i>
                <h5 className="card-title">Marketing Digital</h5>
                <p>SEO, réseaux sociaux et stratégie de contenu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres clés avec animations */}
      <section className="section section-light">
        <div className="container">
          <div className="row text-center g-4 stagger-children">
            <div className="col-md-3">
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Clients satisfaits</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projets réalisés</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Experts dédiés</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-item">
                <div className="stat-number">5 ans</div>
                <div className="stat-label">D'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section avec animation */}
      <section className="section section-gradient text-center">
        <div className="container">
          <h2 className="mb-3 animate-fade-up">Prêt à démarrer votre projet ?</h2>
          <p className="mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Contactez-nous pour une consultation gratuite
          </p>
          <button className="btn-custom btn-outline-custom animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Nous contacter
            <i className="bi bi-chat-dots"></i>
          </button>
        </div>
      </section>
    </>
  )
}