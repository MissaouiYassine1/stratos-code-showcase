'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function ServicesPage() {
  const services = [
    { 
      name: "Développement Web", 
      price: "à partir de 1500€", 
      duration: "2-4 semaines", 
      desc: "Sites vitrine, e-commerce, applications web sur mesure",
      image: "/images/service-web.png",
      alt: "Illustration développement web"
    },
    { 
      name: "Applications Mobile", 
      price: "à partir de 3000€", 
      duration: "4-8 semaines", 
      desc: "Applications iOS, Android et multiplateforme",
      image: "/images/service-mobile.png",
      alt: "Illustration applications mobile"
    },
    { 
      name: "Marketing Digital", 
      price: "à partir de 500€/mois", 
      duration: "Continu", 
      desc: "SEO, réseaux sociaux, stratégie de contenu",
      image: "/images/service-marketing.png",
      alt: "Illustration marketing digital"
    }
  ]
  
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Nos Services</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">Accueil</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Services</li>
            </ol>
          </nav>
        </div>
      </section>

      <div className="container py-5">
        <p className="text-center lead mb-5">Des solutions adaptées à vos besoins</p>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-4">
              <div className="service-card">
                <Image 
                  src={service.image}
                  alt={service.alt}
                  width={400}
                  height={250}
                  className="card-img-top"
                  style={{ objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{service.name}</h5>
                  <p className="card-text">{service.desc}</p>
                  <p className="price">{service.price}</p>
                  <p className="text-muted small">Délai: {service.duration}</p>
                  <Link href="/contact" className="btn-custom btn-primary-custom w-100 mt-2 text-decoration-none d-inline-block text-center">
                    Demander un devis
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}