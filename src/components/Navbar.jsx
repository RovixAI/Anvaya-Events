import { Link, NavLink } from 'react-router-dom'
import { NAV } from '../data/site.js'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="logo-wrapper">
          <Link to="/" className="logo">
            <img src="/img/logo.webp" className="logo-img" alt="Anvaya" />
          </Link>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
            <i className="fa-light fa-bars" />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav mx-auto">
            {NAV.map(item => (
              <li className="nav-item" key={item.to}>
                {/* Services stays active on its dedicated /services/<slug>/ pages. */}
                <NavLink to={item.to} end={item.to !== '/services/'} className="nav-link">{item.label}</NavLink>
              </li>
            ))}
          </ul>
          <div className="navbar-right">
            <div className="button">
              <Link to="/contact/">Plan Your Celebration</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
