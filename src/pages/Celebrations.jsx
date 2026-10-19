import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'

const EVENT_TYPES = ['Weddings', 'Pre-Wedding', 'Milestones', 'Corporate', 'By Location', 'By Style']

// Portfolio guidance (handoff §10): until approved event photography exists, only clearly labeled
// inspiration imagery is shown — never presented as completed Anvaya events.
const INSPIRATION = [
  { src: '/img/gallery/8.jpg', alt: 'Bridal bouquet of peach roses and eucalyptus', col: 'col-lg-3' },
  { src: '/img/gallery/6.jpg', alt: 'Bride holding a lavender bouquet', col: 'col-lg-6' },
  { src: '/img/gallery/9.jpg', alt: 'Table number card beside glassware and white flowers', col: 'col-lg-3' },
  { src: '/img/gallery/11.jpg', alt: 'Bride in a lace gown holding red peonies', col: 'col-lg-3' },
  { src: '/img/gallery/7.jpg', alt: 'Outdoor ceremony chairs decorated with flowers', col: 'col-lg-6' },
  { src: '/img/gallery/3.jpg', alt: 'Pastel bouquet of roses and greenery', col: 'col-lg-3' },
]

export default function Celebrations() {
  return (
    <>
      <Seo
        title="Wedding & Event Inspiration | Anvaya"
        description="Explore wedding, cultural celebration and event inspiration from Anvaya. Browse styles, stories and thoughtful planning details."
      />
      <PageBanner
        subtitle="Celebrations"
        title="Moments That Tell a Story"
        text="Every celebration is personal. Explore the details, traditions and experiences that make each gathering distinctive."
        image="/img/slider/1.jpg"
      >
        <Link to="/services/" className="button-2 mt-20">Explore Our Services</Link>
      </PageBanner>
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-30">
              <div className="section-subtitle">Browse Celebrations</div>
              <h2 className="section-title">Explore by Event Type</h2>
              {/* Developer note: these become filters once approved event stories exist — each with real photos and
                  approved details (city or venue, event type, approximate guest size, planning challenge and outcome). */}
              <ul className="tag-list">
                {EVENT_TYPES.map(t => <li key={t}>{t}</li>)}
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center mb-15">
              <span className="inspiration-label">Inspiration imagery</span>
            </div>
          </div>
          <div className="row inspiration-grid" data-masonry={'{"percentPosition": true }'}>
            {INSPIRATION.map(img => (
              <div className={'col-6 ' + img.col} key={img.src}>
                <div className="item">
                  <a href={img.src} title={img.alt} className="gallery-masonry-item-img-link img-zoom">
                    <div className="img">
                      <img src={img.src} className="img-fluid mx-auto d-block rounded-2" alt={img.alt} />
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-30">
            <Link to="/contact/" className="button-1">Plan Your Event</Link>
          </div>
        </div>
      </section>
    </>
  )
}
