import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 mb-45 text-center">
            <div className="subscribe">
              <div className="section-subtitle">Subscribe</div>
              {' '}
              <div className="section-title mb-30">Get the amazing wedding offers into your inbox!</div>
              {' '}
              <div className="newsletter">
                <form action="#">
                  <input type="email" placeholder="Enter your email address" required />
                  {' '}
                  <button type="submit">
                    <i className="fa-light fa-arrow-right" />
                  </button>
                </form>
              </div>
              {' '}
              <p>We are committed to protecting your <a href="#0" className="text-decoration-line-bottom">privacy policy.</a></p>
            </div>
          </div>
        </div>
      </div>
      {' '}
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
                {' '}
                <div className="img">
                  <a href="#0">
                    <img src="/img/insta/insta2.jpg" alt="" />
                  </a>
                  {' '}
                  <i className="fa-brands fa-instagram" />
                </div>
                {' '}
                <div className="img">
                  <a href="#0">
                    <img src="/img/insta/insta3.jpg" alt="" />
                  </a>
                  {' '}
                  <i className="fa-brands fa-instagram" />
                </div>
                {' '}
                <div className="img">
                  <a href="#0">
                    <img src="/img/insta/insta4.jpg" alt="" />
                  </a>
                  {' '}
                  <i className="fa-brands fa-instagram" />
                </div>
                {' '}
                <div className="img">
                  <a href="#0">
                    <img src="/img/insta/insta5.jpg" alt="" />
                  </a>
                  {' '}
                  <i className="fa-brands fa-instagram" />
                </div>
                {' '}
                <div className="img">
                  <a href="#0">
                    <img src="/img/insta/insta6.jpg" alt="" />
                  </a>
                  {' '}
                  <i className="fa-brands fa-instagram" />
                </div>
                {' '}
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
      {' '}
      <div className="bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <p>© All Rights Reserved <a href="https://1.envato.market/7ZzYQ" target="_blank">DuruThemes</a></p>
            </div>
            {' '}
            <div className="col-lg-7 col-md-12 text-center">
              <div className="links">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  {' '}
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  {' '}
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  {' '}
                  <li>
                    <Link to="/portfolio">Portfolio</Link>
                  </li>
                  {' '}
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  {' '}
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            {' '}
            <div className="col-lg-2 col-md-12">
              <div className="social-icons text-end">
                <ul className="list-inline">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                  {' '}
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                  {' '}
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-dribbble" />
                    </a>
                  </li>
                  {' '}
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
  )
}
