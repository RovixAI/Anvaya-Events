import { Link } from 'react-router-dom'
import { CONTACT, NAV } from '../data/site.js'

const FOOTER_LINKS = [...NAV, { to: '/faq/', label: 'FAQs' }, { to: '/locations/', label: 'Locations' }]

// Legal page copy is not supplied yet (handoff §17) — point these at the approved pages once they exist.
const LEGAL = ['Privacy Policy', 'Terms', 'Cookie Notice']

const maybeLink = (href, text, external = false) =>
  href ? <a href={href} {...(external && { target: '_blank', rel: 'noopener noreferrer' })}>{text}</a> : text

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12 mb-45 text-center">
            <div className="subscribe">
              <img src="/img/logo-dark.webp" className="footer-logo" alt="Anvaya" />
              {/* PROPOSED — requires approval. */}
              <p className="footer-tagline">Thoughtful planning for weddings, milestones and corporate celebrations in South Florida.</p>
              {/* PLACEHOLDER contact details — replace in src/data/site.js before launch. */}
              <ul className="footer-inline">
                <li>{maybeLink(CONTACT.phoneHref, CONTACT.phone)}</li>
                <li>{maybeLink(CONTACT.emailHref, CONTACT.email)}</li>
                <li>{CONTACT.location}</li>
                <li>{maybeLink(CONTACT.instagramHref, CONTACT.instagram, true)}</li>
              </ul>
              <ul className="footer-inline footer-legal">
                {LEGAL.map(l => <li key={l}><a href="#0">{l}</a></li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-12">
              <p>© {new Date().getFullYear()} Anvaya. All Rights Reserved.</p>
            </div>
            <div className="col-lg-7 col-md-12 text-center">
              <div className="links">
                <ul>
                  {FOOTER_LINKS.map(l => (
                    <li key={l.to}>
                      <Link to={l.to}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-12">
              <div className="social-icons text-end">
                <ul className="list-inline">
                  <li>
                    <a href={CONTACT.instagramHref || '#0'} aria-label="Anvaya on Instagram" {...(CONTACT.instagramHref && { target: '_blank', rel: 'noopener noreferrer' })}>
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
