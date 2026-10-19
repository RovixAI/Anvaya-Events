import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'

// Suggested article topics from the stakeholder blueprint (handoff §12). Article copy is not yet supplied,
// so these are not linked. Editorial rule: each article needs practical answers, genuine local context,
// expert review, useful examples and a natural consultation CTA — publish fewer strong guides, not near-duplicates.
const TOPICS = [
  { title: 'Your 12-Month South Florida Wedding Planning Timeline', img: '/img/blog/1.jpg', alt: 'Bridal bouquet of pink and white flowers' },
  { title: 'How to Choose a Wedding Venue for 250 Guests in South Florida', img: '/img/blog/6.jpg', alt: 'Long reception table set with flowers and candles' },
  { title: 'Planning a Multi-Day Indian Wedding: Events and Vendor Timelines', img: '/img/slider/9.jpg', alt: 'Candlelit table styled with dried flowers' },
  { title: 'Mehndi, Haldi, Sangeet and Grah Shanti: Planning Each Celebration', img: '/img/faqs.jpg', alt: 'Soft pink and white floral arrangement' },
  { title: 'Wedding Vendor Selection: Questions to Ask Before You Book', img: '/img/contact.jpg', alt: 'Planner writing notes in a celebration planning notebook' },
  { title: 'How to Balance Décor, Food, Entertainment and Your Wedding Budget', img: '/img/services/5.jpg', alt: 'Reception table with floral centerpiece and table number' },
  { title: 'Planning a Wedding in Florida When Your Family Lives Elsewhere', img: '/img/slider/5.jpg', alt: 'Couple embracing on a seaside terrace' },
  { title: 'One-Day vs Multi-Day Wedding: Which Format Fits Your Guests?', img: '/img/blog/4.jpg', alt: 'Bride celebrating with her bridesmaids' },
  { title: 'What Does a Full-Service Wedding Planner Actually Do?', img: '/img/about7.jpg', alt: 'Event planner reviewing celebration plans at a laptop' },
  { title: 'How to Plan a Corporate Celebration Without Overloading Your Team', img: '/img/services/4.jpg', alt: 'Guests raising glasses for a celebratory toast' },
]

export default function Journal() {
  return (
    <>
      {/* SEO title, meta description, section tag, heading, body copy and CTA below are PROPOSED — require approval. */}
      <Seo
        title="Wedding & Event Planning Insights | Anvaya"
        description="Practical planning guides for South Florida weddings, cultural celebrations, vendors, venues and event timelines."
      />
      <PageBanner
        subtitle="Anvaya Journal"
        title="Planning Guidance for Meaningful Celebrations"
        text="Explore practical guidance on wedding timelines, venues, traditions, vendors and event planning decisions, with a focus on useful South Florida context."
        image="/img/slider/4.jpg"
        long
      />
      <section className="blog1 journal-topics section-padding bg-lightbrown">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-30">
              <h2 className="section-title">Suggested Article Topics</h2>
            </div>
          </div>
          <div className="row">
            {TOPICS.map(t => (
              <div className="col-lg-4 col-md-6" key={t.title}>
                <article className="item mb-60">
                  <div className="img">
                    <img src={t.img} className="img-fluid" alt={t.alt} />
                  </div>
                  <div className="cont">
                    <h3>{t.title}</h3>
                  </div>
                </article>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/contact/" className="button-1">Plan Your Celebration</Link>
          </div>
        </div>
      </section>
    </>
  )
}
