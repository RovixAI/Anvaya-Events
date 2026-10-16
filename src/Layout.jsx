import { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    const { Collapse, Dropdown } = window.bootstrap
    Collapse.getInstance('#navbar')?.hide()
    document.querySelectorAll('.navbar [data-bs-toggle="dropdown"]').forEach(el => Dropdown.getInstance(el)?.hide())
    window.initTemplateJS()
  }, [pathname])

  return (
    <>
      <div className="preloader">
        <div className="lds-heart">
          <div />
        </div>
      </div>
      <div className="progress-wrap cursor-pointer">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
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
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Home <i className="fa-light fa-angle-down" /></a>
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
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Portfolio <i className="fa-light fa-angle-down" /></a>
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
                    <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" href="#">
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
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Pages <i className="fa-light fa-angle-down" /></a>
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
                      <span>Testiominals</span>
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
      <Outlet />
      <footer className="footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 mb-45 text-center">
              <div className="subscribe">
                <div className="section-subtitle">Subscribe</div>
                <div className="section-title mb-30">Get the amazing wedding offers into your inbox!</div>
                <div className="newsletter">
                  <form action="#">
                    <input type="email" placeholder="Enter your email address" required />
                    {' '}
                    <button type="submit">
                      <i className="fa-light fa-arrow-right" />
                    </button>
                  </form>
                </div>
                <p>We are committed to protecting your <a href="#0" className="text-decoration-line-bottom">privacy policy.</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="insta">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="item">
                  <div className="img">
                    <a href="#0">
                      <img src="/img/insta/insta1.jpg" alt="" />
                    </a>
                    {' '}
                    <i className="fa-brands fa-instagram" />
                  </div>
                  <div className="img">
                    <a href="#0">
                      <img src="/img/insta/insta2.jpg" alt="" />
                    </a>
                    {' '}
                    <i className="fa-brands fa-instagram" />
                  </div>
                  <div className="img">
                    <a href="#0">
                      <img src="/img/insta/insta3.jpg" alt="" />
                    </a>
                    {' '}
                    <i className="fa-brands fa-instagram" />
                  </div>
                  <div className="img">
                    <a href="#0">
                      <img src="/img/insta/insta4.jpg" alt="" />
                    </a>
                    {' '}
                    <i className="fa-brands fa-instagram" />
                  </div>
                  <div className="img">
                    <a href="#0">
                      <img src="/img/insta/insta5.jpg" alt="" />
                    </a>
                    {' '}
                    <i className="fa-brands fa-instagram" />
                  </div>
                  <div className="img">
                    <a href="#0">
                      <img src="/img/insta/insta6.jpg" alt="" />
                    </a>
                    {' '}
                    <i className="fa-brands fa-instagram" />
                  </div>
                  <div className="follow">
                    <a href="#0" className="text-bg">
                      <span><i className="fa-brands fa-instagram" /> / EwedPlanner</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-12">
                <p>© All Rights Reserved <a href="https://1.envato.market/7ZzYQ" target="_blank">DuruThemes</a></p>
              </div>
              <div className="col-lg-7 col-md-12 text-center">
                <div className="links">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-12">
                <div className="social-icons text-end">
                  <ul className="list-inline">
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
