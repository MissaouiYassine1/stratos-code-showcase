import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <>
      
      <div className="container py-5">
        <h1 className="text-center mb-5">À propos de nous</h1>
        <div className="row mb-5 align-items-center">
          <div className="col-md-6">
            <h2>Notre histoire</h2>
            <p>Fondée en 2020, MonEntreprise est née de la passion pour le digital et l'innovation. En seulement 5 ans, nous avons accompagné plus de 100 entreprises dans leur transformation numérique.</p>
          </div>
          <div className="col-md-6">
            <div className="bg-light p-5 rounded text-center">📷 Notre équipe</div>
          </div>
        </div>
        <div className="bg-light rounded p-5 mb-5">
          <h2 className="text-center mb-4">Nos valeurs</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <h4>🔧 Innovation</h4>
              <p>Solutions modernes et adaptées</p>
            </div>
            <div className="col-md-4">
              <h4>🤝 Confiance</h4>
              <p>Relation transparente et durable</p>
            </div>
            <div className="col-md-4">
              <h4>🚀 Excellence</h4>
              <p>Qualité et performance garanties</p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}