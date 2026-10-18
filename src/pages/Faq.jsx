import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'

const FAQS = [
  { q: 'Do you plan more than wedding décor?', a: 'Yes. Our approach considers the full celebration—from venues and vendor coordination to food, entertainment, traditions, timelines and execution. The exact support depends on your selected planning package.' },
  { q: 'Can you help us find a venue?', a: 'We begin with location, date, guest count, preferred style and budget, then help you explore suitable venue options.' },
  { q: 'Do we have to choose your recommended vendors?', a: 'No. We can suggest partners and also review vendors you have found yourself. We help coordinate the selection process.' },
  { q: 'Can you plan multi-day South Asian weddings?', a: 'Our planning approach supports celebrations with multiple events and cultural traditions. We confirm the specific scope during consultation.' },
  { q: 'When should we begin planning?', a: 'Earlier planning generally creates more options, especially for popular dates and venues. Anvaya can help establish a timeline based on your event date and current decisions.' },
  { q: 'Do you offer corporate planning?', a: 'Yes. We can help coordinate company celebrations and gatherings, with the specific services confirmed during discovery.' },
  { q: 'Can we work with you from outside Florida?', a: 'Remote planning conversations and shared timelines can support clients who are traveling in for their event. Confirm destination and on-site coverage before booking.' },
  { q: 'How are planning fees determined?', a: 'Pricing depends on event scope, number of functions, guest count, location and planning support. We discuss these factors before proposing services.' },
]

export default function Faq() {
  return (
    <>
      {/* SEO title, meta description, section tag and heading are PROPOSED — require approval. */}
      <Seo
        title="Event Planning FAQs | Anvaya South Florida"
        description="Answers to common questions about Anvaya wedding planning, venues, vendors, multi-day celebrations, corporate events and planning timelines."
      />
      <PageBanner subtitle="Frequently Asked Questions" title="Common Planning Questions" image="/img/slider/3.jpg" />
      <section className="faqs section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 mb-30">
              <ul className="accordion-box clearfix">
                {FAQS.map(f => (
                  <li className="accordion block" key={f.q}>
                    <h2 className="acc-btn">{f.q}</h2>
                    <div className="acc-content">
                      <div className="content">
                        <p>{f.a}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12 text-center mt-30 banner-ctas">
              <Link to="/about/#team" className="button-1">Meet Our Team</Link>
              <Link to="/contact/" className="button-1">Start a Conversation</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
