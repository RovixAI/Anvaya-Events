import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'

export default function About() {
  return (
    <>
      <Seo
        title="About Anvaya | Thoughtful Celebration Planning"
        description="Get to know Anvaya’s approach to meaningful weddings, family celebrations and corporate events—thoughtful planning that lets hosts enjoy the occasion."
      />
      <PageBanner
        subtitle="About Anvaya"
        title="Celebrations Should Be Lived, Not Managed"
        text="Anvaya believes the people hosting an occasion should have the freedom to experience it."
        image="/img/banner.jpg"
        long
      />
      <section className="about section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 mb-30">
              <div className="section-subtitle">Our Philosophy</div>
              <h2 className="section-title">Planning That Starts With <span>Your Story</span></h2>
              <p>Every event brings together personal stories, family traditions and decisions both big and small. Anvaya listens first, then helps shape an experience that feels genuinely yours.</p>
            </div>
            <div className="col-lg-6 offset-lg-1 col-md-12">
              <div className="item">
                <img src="/img/contact.jpg" className="img-fluid" alt="Planner writing notes in a celebration planning notebook" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about section-padding bg-lightbrown">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-30">
              <div className="section-subtitle">What Anvaya Does</div>
              <h2 className="section-title">Connecting Every Part of the Event</h2>
              <p>Anvaya coordinates the details across location, guest experience, food, décor, entertainment, vendors and schedules. Instead of leaving you with a list of contacts, the planning process helps move decisions forward in the right order.</p>
            </div>
            <div className="col-lg-6 col-md-12 mb-30">
              <div className="section-subtitle">Culture & Connection</div>
              <h2 className="section-title">Thoughtful About the Traditions That Matter</h2>
              <p>Whether your celebration blends traditions or is rooted in one community, Anvaya takes time to understand the meaning behind the moments and the preferences that matter to your family.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="team" className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 text-center">
              <div className="section-subtitle">Meet Anvaya</div>
              <h2 className="section-title">The People Behind the Planning</h2>
              {/* Developer note: do not publish years of experience, event counts, venue relationships or testimonials until approved and verified. */}
              <p className="placeholder-copy">[INSERT APPROVED FOUNDER / TEAM INTRODUCTION, VERIFIED EXPERIENCE, PHOTOS AND CLIENT PROOF.]</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
