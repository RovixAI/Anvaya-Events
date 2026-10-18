import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'

const SERVICES = [
  { tag: 'Wedding Planning', title: 'Weddings & Wedding Weekends', text: 'Multi-event wedding planning with venue guidance, cultural traditions, vendor coordination, timelines and on-site logistics.', cta: 'Explore Wedding Planning', to: '/services/wedding-planning/', img: '/img/services/1.jpg', alt: 'Bride smiling in her wedding veil' },
  { tag: 'Cultural Celebrations', title: 'Pre-Wedding Events', text: 'Engagements, Mehndi, Sangeet, Haldi, Grah Shanti and other ceremonies planned with their own purpose, personality and flow.', cta: 'Explore Pre-Wedding Events', to: '/services/pre-wedding-events/', img: '/img/faqs.jpg', alt: 'Soft pink and white floral arrangement' },
  { tag: 'Milestone Events', title: 'Milestone Celebrations', text: 'Anniversaries, birthdays, graduations and family occasions that deserve more than a checklist.', cta: 'Explore Milestone Celebrations', to: '/services/milestone-celebrations/', img: '/img/services/2.jpg', alt: 'Tiered celebration cake decorated with flowers and sparklers' },
  { tag: 'Corporate Events', title: 'Corporate Celebrations', text: 'Team celebrations, appreciation events and special company occasions with a clear plan and smooth coordination.', cta: 'Explore Corporate Events', to: '/services/corporate-events/', img: '/img/services/4.jpg', alt: 'Guests raising glasses for a celebratory toast' },
  { tag: 'Intimate Gatherings', title: 'Smaller Gatherings, Thoughtfully Planned', text: 'Personal celebrations and smaller gatherings planned with care, subject to scope and availability.', cta: 'Ask About Availability', ctaTo: '/contact/', to: '/services/intimate-gatherings/', img: '/img/services/3.jpg', alt: 'Elegant place setting with neutral tableware and flowers' },
]

export default function Services() {
  return (
    <>
      <Seo
        title="Event Planning Services | Anvaya South Florida"
        description="Explore wedding planning, cultural celebrations, milestone events, corporate gatherings and more with Anvaya’s coordinated approach."
      />
      <PageBanner
        subtitle="Event Planning Services"
        title={<>Every Occasion Is Different.<br />The Attention to Detail Is Constant.</>}
        text="From once-in-a-lifetime weddings to moments worth gathering for, Anvaya shapes the plan around your priorities, budget and people."
        image="/img/slider/9.jpg"
        long
      >
        <div className="banner-ctas">
          <a href="#services" className="button-2 mt-20">Find the Right Service</a>
          <Link to="/contact/" className="button-2 mt-20">Inquire About Your Event</Link>
        </div>
      </PageBanner>
      <section id="services" className="services1 section-padding bg-lightbrown">
        <div className="container">
          <div className="row justify-content-center">
            {SERVICES.map(s => (
              <div className="col-lg-6 col-md-12 mb-30 animate-box" data-animate-effect="fadeInUp" key={s.title}>
                <div className="item">
                  <div className="row rest">
                    <div className="col-lg-6 col-md-12 img rest">
                      <img src={s.img} className="img-cover" alt={s.alt} />
                    </div>
                    <div className="col-lg-6 col-md-12 cont valign">
                      <div className="full-width">
                        <div className="card-tag">{s.tag}</div>
                        <h2>
                          <Link to={s.to}>{s.title}</Link>
                        </h2>
                        <p>{s.text}</p>
                        <Link to={s.ctaTo || s.to} className="link-btn">{s.cta}</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
