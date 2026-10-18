import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'

const STEPS = [
  { title: 'Discover', text: 'We learn your date, destination, guest count, budget, priorities, traditions and vision.' },
  { title: 'Shape', text: 'We clarify the event structure and help explore suitable venues and the experience you want to create.' },
  { title: 'Curate', text: 'We present relevant vendor recommendations, support reviews and meetings, and help organize decisions.' },
  { title: 'Coordinate', text: 'We map milestones, invitations, confirmations and the event schedule, following up before important deadlines.' },
  // Developer note: exact on-site responsibilities depend on the final client agreement.
  { title: 'Celebrate', text: 'We align the participating teams and logistics so the celebration can unfold as planned.' },
]

export default function OurProcess() {
  return (
    <>
      <Seo
        title="Our Event Planning Process | Anvaya"
        description="See how Anvaya guides events from first consultation through venue selection, vendor coordination, planning timelines and execution."
      />
      <PageBanner
        subtitle="Our Process"
        title={<>A Clear Path From “We Have a Date”<br />to “What a Celebration”</>}
        text="Planning becomes easier when you know what comes next—and who is taking care of it."
        image="/img/slider/7.jpg"
        long
      >
        <Link to="/contact/" className="button-2 mt-20">Start With a Discovery Call</Link>
      </PageBanner>
      <section className="process section-padding bg-lightbrown">
        <div className="container">
          <ol className="row row-cols-1 row-cols-md-3 row-cols-lg-5 justify-content-center process-steps">
            {STEPS.map((step, i) => (
              <li className="col" key={step.title}>
                <div className="step">
                  <span className="num">{String(i + 1).padStart(2, '0')}</span>
                  <h2>{step.title}</h2>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="text-center mt-30">
            <div className="section-subtitle d-block mb-15">Start Planning</div>
            <Link to="/contact/" className="button-1">Start With a Discovery Call</Link>
          </div>
        </div>
      </section>
    </>
  )
}
