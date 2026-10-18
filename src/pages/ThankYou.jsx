import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'

// Handoff §15: final thank-you copy was not supplied. All wording here is PROPOSED and requires approval.
// Do not add a response-time promise until Anvaya commits to one.
export default function ThankYou() {
  return (
    <>
      <Seo title="Thank You | Anvaya" description="Your inquiry has been received." noindex />
      <PageBanner subtitle="Inquiry Received" title="Thank You" image="/img/slider/2.jpg" />
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 text-center">
              <p>Your inquiry has been received.</p>
              <Link to="/" className="button-1 mt-15">Back to Home</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
