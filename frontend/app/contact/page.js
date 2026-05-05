'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [form, setForm] = useState({ nom: '', email: '', telephone: '', message: '' })
  const [envoye, setEnvoye] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulaire:', form)
    setEnvoye(true)
    setForm({ nom: '', email: '', telephone: '', message: '' })
    setTimeout(() => setEnvoye(false), 3000)
  }
  
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Contactez-nous</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">Accueil</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Contact</li>
            </ol>
          </nav>
        </div>
      </section>

      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="shadow p-4 rounded bg-white">
              <h3 className="mb-4">Envoyez-nous un message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Nom complet *</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    required 
                    value={form.nom}
                    onChange={(e) => setForm({...form, nom: e.target.value})} 
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email *</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    required 
                    value={form.email}
                    onChange={(e) => setForm({...form, email: e.target.value})} 
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Téléphone</label>
                  <input 
                    type="tel" 
                    className="form-control" 
                    value={form.telephone}
                    onChange={(e) => setForm({...form, telephone: e.target.value})} 
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message *</label>
                  <textarea 
                    className="form-control" 
                    rows="5" 
                    required
                    value={form.message}
                    onChange={(e) => setForm({...form, message: e.target.value})}
                  ></textarea>
                </div>
                <button type="submit" className="btn-custom btn-primary-custom w-100">
                  Envoyer le message
                  <i className="bi bi-send ms-2"></i>
                </button>
                {envoye && (
                  <div className="alert alert-success mt-3">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Message envoyé avec succès ! Nous vous répondrons rapidement.
                  </div>
                )}
              </form>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="row g-4">
              <div className="col-12">
                <div className="contact-info-card">
                  <i className="bi bi-geo-alt-fill"></i>
                  <h4>Notre adresse</h4>
                  <p>123 rue de Paris<br />75001 Paris, France</p>
                </div>
              </div>
              <div className="col-12">
                <div className="contact-info-card">
                  <i className="bi bi-telephone-fill"></i>
                  <h4>Téléphone</h4>
                  <p>+33 1 23 45 67 89<br />Lun-Ven : 9h-18h</p>
                </div>
              </div>
              <div className="col-12">
                <div className="contact-info-card">
                  <i className="bi bi-envelope-fill"></i>
                  <h4>Email</h4>
                  <p>contact@monentreprise.com<br />support@monentreprise.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Carte Google Maps */}
        <div className="mt-5">
          <div className="rounded overflow-hidden shadow">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926!3d48.8583736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1699999999999!5m2!1sfr!2sfr"
              width="100%" 
              height="300" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Notre localisation"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}