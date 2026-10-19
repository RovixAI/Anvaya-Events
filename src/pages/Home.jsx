import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'

const SERVICES = [
  { title: 'Weddings & Wedding Weekends', text: 'Celebrations that reflect your story and both families.', cta: 'View Weddings', to: '/services/wedding-planning/', img: '/img/services/1.jpg', alt: 'Bride smiling in her wedding veil' },
  { title: 'Milestone Celebrations', text: 'Engagements, anniversaries, birthdays and meaningful gatherings.', cta: 'View Celebrations', to: '/services/milestone-celebrations/', img: '/img/services/2.jpg', alt: 'Tiered celebration cake decorated with flowers and sparklers' },
  { title: 'Corporate Events', text: 'Polished experiences with coordinated logistics.', cta: 'View Corporate Events', to: '/services/corporate-events/', img: '/img/services/4.jpg', alt: 'Guests raising glasses for a celebratory toast' },
  { title: 'Intimate Gatherings', text: 'Thoughtfully planned occasions with a personal touch.', cta: 'View Services', to: '/services/', img: '/img/services/3.jpg', alt: 'Elegant place setting with neutral tableware and flowers' },
]

const WHY = [
  { icon: 'fa-compass', title: 'Thoughtful Guidance', text: 'Clear support through important planning decisions.' },
  { icon: 'fa-handshake', title: 'Vendor Coordination', text: 'Recommendations, reviews and coordination with the right partners.' },
  { icon: 'fa-heart', title: 'Cultural Understanding', text: 'Planning shaped around your traditions and personal preferences.' },
  { icon: 'fa-list-check', title: 'Hands-On Planning', text: 'Consistent support from the first ideas through execution.' },
]

const STEPS = ['Discover your vision', 'Shape the plan', 'Curate the right partners', 'Manage milestones', 'Bring it all together']

export default function Home() {
  return (
    <>
      <Seo
        title="Anvaya | Wedding & Celebration Planning in South Florida"
        description="Thoughtful wedding, milestone and corporate event planning in South Florida. From venues and traditions to timelines and execution, celebrate with confidence."
      />
      <section className="parallax-header section-padding valign bg-img bg-fixed" data-overlay-dark="5" data-background="/img/slider/4.jpg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12 text-center">
              <div className="hero-tag">Event Planning</div>
              {/* Controlled two-line hero heading (handoff §1 developer note). */}
              <h1 className="title-long">Be present for every moment.<br /><span>We’ll take care of the rest.</span></h1>
              <p>From the first conversation to the final celebration, Anvaya helps bring your vision, people and meaningful traditions together—with the details thoughtfully managed.</p>
              <Link to="/services/" className="button-2 mt-20">Explore Our Services</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="about section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 mb-30">
              <div className="section-subtitle">About Anvaya</div>
              <h2 className="section-title">More Than an <span>Event</span></h2>
              <p>A celebration is more than a venue, menu or beautiful décor. It brings together the people you love, the traditions you honor and the moments you will remember. Anvaya guides the planning journey as a whole, so you can focus on what matters most.</p>
              <Link to="/about/" className="button-1 mt-15">About Anvaya</Link>
            </div>
            <div className="col-lg-6 offset-lg-1 col-md-12">
              <div className="item">
                <img src="/img/about7.jpg" className="img-fluid" alt="Event planner reviewing celebration plans at a laptop" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services1 section-padding bg-lightbrown">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-30">
              <div className="section-subtitle">Our Services</div>
              <h2 className="section-title">Thoughtful Planning for Every Celebration</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="owl-carousel owl-theme">
                {SERVICES.map(s => (
                  <div className="item" key={s.title}>
                    <div className="row rest">
                      <div className="col-md-6 img rest">
                        <img src={s.img} className="img-cover" alt={s.alt} />
                      </div>
                      <div className="col-md-6 cont valign">
                        <div className="full-width">
                          <h3>
                            <Link to={s.to}>{s.title}</Link>
                          </h3>
                          <p>{s.text}</p>
                          <Link to={s.to} className="link-btn">{s.cta}</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 mb-30">
              <div className="section-subtitle">Why Anvaya</div>
              <h2 className="section-title">One Coordinated <span>Planning Journey</span></h2>
              <p>Anvaya brings the different parts of your celebration together—from vendor recommendations and cultural considerations to timelines, follow-ups and event execution.</p>
            </div>
            <div className="col-lg-6 offset-lg-1 col-md-12">
              <div className="row">
                {WHY.map(w => (
                  <div className="col-md-6" key={w.title}>
                    <div className="feature-box">
                      <i className={'icon fa-light ' + w.icon} aria-hidden="true" />
                      <h3>{w.title}</h3>
                      <p>{w.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="process section-padding bg-lightbrown">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-30">
              <div className="section-subtitle">Our Process</div>
              <h2 className="section-title">From Your Vision to the Celebration</h2>
            </div>
          </div>
          <ol className="row row-cols-1 row-cols-md-3 row-cols-lg-5 justify-content-center process-steps">
            {STEPS.map((step, i) => (
              <li className="col" key={step}>
                <div className="step">
                  <span className="num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{step}</h3>
                </div>
              </li>
            ))}
          </ol>
          <div className="text-center mt-30">
            <Link to="/our-process/" className="button-1">See Our Process</Link>
          </div>
        </div>
      </section>
      <section className="cta-band section-padding bg-img bg-fixed" data-overlay-dark="6" data-background="/img/slider/9.jpg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 text-center">
              <h2 className="section-title white">Your Celebration Deserves Your Full Attention</h2>
              <p>Your celebration deserves your full attention. Leave the planning details to a team that understands how much the occasion means.</p>
              <Link to="/contact/" className="button-2 mt-20">Tell Us About Your Celebration</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
