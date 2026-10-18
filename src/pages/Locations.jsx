import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'

// Developer notes (handoff §11):
// - Create separate Miami, Fort Lauderdale, West Palm Beach and broader South Florida pages only when the team truly
//   serves each area and can supply distinct, locally relevant information, venues, photos and FAQs.
// - Do not duplicate the same copy across multiple city pages. State travel fees and service boundaries clearly after confirmation.
// - Confirm service boundaries, travel fees and city coverage before any dedicated location page goes live.
export default function Locations() {
  return (
    <>
      <Seo
        title="South Florida Event Planning | Anvaya"
        description="Explore wedding and event planning services in South Florida, including Miami, Fort Lauderdale and nearby communities."
      />
      <PageBanner
        subtitle="Locations"
        title="Local Knowledge. Meaningful Celebrations."
        text="We help clients navigate venue options, guest logistics and local vendor decisions across our service region."
        image="/img/slider/5.jpg"
        long
      >
        <Link to="/contact/" className="button-2 mt-20">Ask About Your Location</Link>
      </PageBanner>
    </>
  )
}
