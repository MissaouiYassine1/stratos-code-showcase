import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  const services = [
    { name: "Développement Web", price: "à partir de 1500€", duration: "2-4 semaines", desc: "Sites vitrine, e-commerce, applications web sur mesure" },
    { name: "Applications Mobile", price: "à partir de 3000€", duration: "4-8 semaines", desc: "Applications iOS, Android et multiplateforme" },
    { name: "Marketing Digital", price: "à partir de 500€/mois", duration: "Continu", desc: "SEO, réseaux sociaux, stratégie de contenu" }
  ]
  return (
    <>
      
      <div className="container py-5">
        <h1 className="text-center mb-4">Nos Services</h1>
        <p className="text-center lead mb-5">Des solutions adaptées à vos besoins</p>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{service.name}</h5>
                  <p className="card-text">{service.desc}</p>
                  <p className="text-primary fw-bold">{service.price}</p>
                  <p className="text-muted small">Délai: {service.duration}</p>
                  <button className="btn btn-outline-primary">Demander un devis</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </>
  )
}