import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found | Anvaya" description="The page you are looking for could not be found." noindex />
      <PageBanner subtitle="404 page" title="Page not found!" image="/img/slider/2.jpg" />
      <section className="not-found section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-12 text-center">
              <div className="not-found-code">404</div>
              <h2>Sorry, We can't find that page!</h2>
              <p>The page you are looking for was moved, removed, renamed or never existed.</p>
              <Link to="/" className="button-1 mt-15">Back to Home</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
