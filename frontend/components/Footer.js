import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="pt-5 pb-4 mt-auto">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <h5 className="mb-3">MonEntreprise</h5>
            <p className="text-white-50">
              Solutions innovantes pour accompagner les entreprises dans leur transformation numérique.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-white-50 hover-text-accent" aria-label="LinkedIn">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
              <a href="#" className="text-white-50 hover-text-accent" aria-label="Twitter">
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a href="#" className="text-white-50 hover-text-accent" aria-label="GitHub">
                <i className="bi bi-github fs-5"></i>
              </a>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6">
            <h5 className="mb-3">Liens rapides</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link href="/" className="text-white-50 text-decoration-none hover-link">Accueil</Link></li>
              <li className="mb-2"><Link href="/services" className="text-white-50 text-decoration-none hover-link">Services</Link></li>
              <li className="mb-2"><Link href="/a-propos" className="text-white-50 text-decoration-none hover-link">À propos</Link></li>
              <li className="mb-2"><Link href="/contact" className="text-white-50 text-decoration-none hover-link">Contact</Link></li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-3">Contact</h5>
            <ul className="list-unstyled text-white-50">
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2"></i> 123 rue de Paris, 75001 Paris
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone me-2"></i> +33 1 23 45 67 89
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i> contact@monentreprise.com
              </li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-3">Horaires</h5>
            <ul className="list-unstyled text-white-50">
              <li className="mb-2">Lundi - Vendredi: 9h - 18h</li>
              <li className="mb-2">Samedi: 10h - 14h</li>
              <li className="mb-2">Dimanche: Fermé</li>
            </ul>
          </div>
        </div>
        
        <hr className="my-4 opacity-25" />
        
        <div className="text-center text-white-50">
          <small>&copy; 2024 MonEntreprise. Tous droits réservés.</small>
        </div>
      </div>
    </footer>
  )
}