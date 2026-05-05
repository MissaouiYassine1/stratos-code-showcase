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
      <Footer />
    </>
  )
}