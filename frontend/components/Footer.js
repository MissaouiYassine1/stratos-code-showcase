// components/Footer.js
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row g-4">
          {/* Colonne 1 - Logo + Description */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Mon<span className="text-primary">Entreprise</span></h5>
            <p className="text-muted mt-2">
              Solutions innovantes pour votre transformation digitale
            </p>
          </div>
          
          {/* Colonne 2 - Liens rapides */}
          <div className="col-md-4 mb-3">
            <h5>Liens rapides</h5>
            <ul className="list-unstyled mt-2">
              <li className="mb-2">
                <Link href="/" className="text-muted text-decoration-none">Accueil</Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="text-muted text-decoration-none">Services</Link>
              </li>
              <li className="mb-2">
                <Link href="/a-propos" className="text-muted text-decoration-none">À propos</Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-muted text-decoration-none">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Colonne 3 - Contact */}
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <ul className="list-unstyled mt-2 text-muted">
              <li className="mb-2">📞 +33 1 23 45 67 89</li>
              <li className="mb-2">✉️ contact@monentreprise.com</li>
              <li className="mb-2">📍 Paris, France</li>
            </ul>
          </div>
        </div>
        
        <hr className="my-3" />
        
        <div className="text-center text-muted">
          <small>&copy; 2024 MonEntreprise. Tous droits réservés.</small>
        </div>
      </div>
    </footer>
  )
}