import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'
import { SERVICES } from '../data/services.js'
import NotFound from './NotFound.jsx'

// Shared inner-page shell for the five dedicated service pages (template services-details.html).
export default function ServiceDetail() {
  const { slug } = useParams()
  const service = SERVICES[slug]
  if (!service) return <NotFound />

  const { seo, banner, image, imageAlt, hero, sections, cta } = service

  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      <PageBanner subtitle={hero.subtitle} title={hero.title} text={hero.text} image={banner} long>
        {hero.cta && <Link to="/contact/" className="button-2 mt-20">{hero.cta}</Link>}
      </PageBanner>
      <section className="services-page section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 mb-30">
              {sections.map(s => (
                <div className="service-block" key={s.title}>
                  <div className="section-subtitle">{s.tag}</div>
                  <h2 className="service-block-title">{s.title}</h2>
                  {s.text && <p>{s.text}</p>}
                </div>
              ))}
              {cta && <Link to="/contact/" className="button-1 mt-15">{cta}</Link>}
            </div>
            <div className="col-lg-4 offset-lg-1 col-md-12">
              <img src={image} className="img-fluid rounded-3" alt={imageAlt} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
