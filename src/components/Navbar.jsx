import { Link, NavLink, useLocation } from 'react-router-dom'

const HOME = ['/', '/index2', '/index3', '/index4']
const PORTFOLIO_DETAILS = ['/portfolio-details', '/portfolio-details2', '/portfolio-details3', '/portfolio-details4']
const PORTFOLIO = ['/portfolio', '/portfolio2', ...PORTFOLIO_DETAILS]
const PAGES = ['/pricing', '/team', '/team-single', '/faq', '/testimonials', '/gallery-image', '/gallery-video', '/404']

export default function Navbar() {
  const { pathname } = useLocation()
  const activeIn = paths => (paths.includes(pathname) ? ' active' : '')

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="logo-wrapper">
          <Link to="/" className="logo">
            <img src="/img/logo.webp" className="logo-img" alt="Anvaya Events & Celebrations" />
          </Link>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
            <i className="fa-light fa-bars" />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item dropdown">
              <a className={'nav-link dropdown-toggle' + activeIn(HOME)} href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Home <i className="fa-light fa-angle-down" /></a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/" end className="dropdown-item">
                    <span>Home Image</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/index2" end className="dropdown-item">
                    <span>Home Slider</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/index3" end className="dropdown-item">
                    <span>Home Video</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/index4" end className="dropdown-item">
                    <span>Home Slideshow</span>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink to="/about" end className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" end className="nav-link">Services</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className={'nav-link dropdown-toggle' + activeIn(PORTFOLIO)} href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Portfolio <i className="fa-light fa-angle-down" /></a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/portfolio" end className="dropdown-item">
                    <span>Portfolio 01</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/portfolio2" end className="dropdown-item">
                    <span>Portfolio 02</span>
                  </NavLink>
                </li>
                <li className="dropdown-submenu dropdown">
                  <a className={'dropdown-item dropdown-toggle' + activeIn(PORTFOLIO_DETAILS)} data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" href="#">
                    <span>Portfolio Details <i className="fa-light fa-angle-right" /></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to="/portfolio-details" end className="dropdown-item">
                        <span>Details 01</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/portfolio-details2" end className="dropdown-item">
                        <span>Details 02</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/portfolio-details3" end className="dropdown-item">
                        <span>Details 03</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/portfolio-details4" end className="dropdown-item">
                        <span>Details 04</span>
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className={'nav-link dropdown-toggle' + activeIn(PAGES)} href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Pages <i className="fa-light fa-angle-down" /></a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/pricing" end className="dropdown-item">
                    <span>Pricing</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/team" end className="dropdown-item">
                    <span>Team</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/team-single" end className="dropdown-item">
                    <span>Team Single</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/faq" end className="dropdown-item">
                    <span>FAQs</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/testimonials" end className="dropdown-item">
                    <span>Testimonials</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/gallery-image" end className="dropdown-item">
                    <span>Image Gallery</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/gallery-video" end className="dropdown-item">
                    <span>Video Gallery</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/404" end className="dropdown-item">
                    <span>404 Page</span>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink to="/blog" end className="nav-link">Blog</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" end className="nav-link">Contact</NavLink>
            </li>
          </ul>
          <div className="navbar-right">
            <div className="button">
              <Link to="/contact">Get a quote</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
