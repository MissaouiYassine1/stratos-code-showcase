'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [form, setForm] = useState({ nom: '', email: '', telephone: '', message: '' })
  const [envoye, setEnvoye] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulaire:', form)
    setEnvoye(true)
    setTimeout(() => setEnvoye(false), 3000)
  }
  
  return (
    <>
      
      <div className="container py-5">
        <h1 className="text-center mb-5">Contactez-nous</h1>
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="shadow p-4 rounded">
              <div className="mb-3">
                <label className="form-label">Nom complet *</label>
                <input type="text" className="form-control" required onChange={(e) => setForm({...form, nom: e.target.value})} />
              </div>
              <div className="mb-3">
                <label className="form-label">Email *</label>
                <input type="email" className="form-control" required onChange={(e) => setForm({...form, email: e.target.value})} />
              </div>
              <div className="mb-3">
                <label className="form-label">Téléphone</label>
                <input type="tel" className="form-control" onChange={(e) => setForm({...form, telephone: e.target.value})} />
              </div>
              <div className="mb-3">
                <label className="form-label">Message *</label>
                <textarea className="form-control" rows="5" onChange={(e) => setForm({...form, message: e.target.value})}></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Envoyer</button>
              {envoye && <div className="alert alert-success mt-3">Message envoyé !</div>}
            </form>
          </div>
          <div className="col-md-5 offset-md-1">
            <div className="card shadow-sm p-4">
              <h5>Nos coordonnées</h5>
              <hr />
              <p><strong>📞 Téléphone :</strong> +33 1 23 45 67 89</p>
              <p><strong>✉️ Email :</strong> contact@monentreprise.com</p>
              <p><strong>📍 Adresse :</strong> 123 rue de Paris, 75001 Paris</p>
              <p><strong>🕒 Horaires :</strong> Lun-Ven : 9h-18h</p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}