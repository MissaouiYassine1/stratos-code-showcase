import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <section className="bg-primary text-white py-5">
        <div className="container text-center py-5">
          <h1 className="display-4 fw-bold mb-4">Solutions innovantes pour votre entreprise</h1>
          <p className="lead mb-4">Nous accompagnons les entreprises dans leur transformation numérique</p>
          <button className="btn btn-light btn-lg">Découvrir nos services</button>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Nos Services</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm text-center p-3">
                <div className="card-body">
                  <i className="bi bi-display fs-1 text-primary"></i>
                  <h5 className="card-title mt-3">Développement Web</h5>
                  <p>Sites vitrine, e-commerce et applications sur mesure</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm text-center p-3">
                <div className="card-body">
                  <i className="bi bi-phone fs-1 text-primary"></i>
                  <h5 className="card-title mt-3">Applications Mobile</h5>
                  <p>iOS, Android, multiplateforme avec React Native</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm text-center p-3">
                <div className="card-body">
                  <i className="bi bi-megaphone fs-1 text-primary"></i>
                  <h5 className="card-title mt-3">Marketing Digital</h5>
                  <p>SEO, réseaux sociaux et stratégie de contenu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}