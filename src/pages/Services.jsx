import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <>
      <section className="banner-header section-padding bg-img" data-overlay-dark="5" data-background="/img/slider/9.jpg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-subtitle">The experience</div>
              {' '}
              <div className="section-title2">Explore Services</div>
            </div>
          </div>
        </div>
      </section>
      <section className="services1 section-padding bg-lightbrown">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-30 animate-box" data-animate-effect="fadeInUp">
              <div className="item">
                <div className="row rest">
                  <div className="col-lg-6 col-md-12 img rest">
                    <img src="/img/services/1.jpg" className="img-cover" alt="" />
                  </div>
                  {' '}
                  <div className="col-lg-6 col-md-12 cont valign">
                    <div className="full-width">
                      <h5>
                        <Link to="/services-details">Wedding Planner</Link>
                      </h5>
                      {' '}
                      <p>Lorem ipsum is simply duru text of the printing and typesetting industry.</p>
                      {' '}
                      <Link to="/services-details" className="link-btn">View more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {' '}
            <div className="col-lg-6 col-md-12 mb-30 animate-box" data-animate-effect="fadeInUp">
              <div className="item">
                <div className="row rest">
                  <div className="col-lg-6 col-md-12 img rest">
                    <img src="/img/services/2.jpg" className="img-cover" alt="" />
                  </div>
                  {' '}
                  <div className="col-lg-6 col-md-12 cont valign">
                    <div className="full-width">
                      <h5>
                        <Link to="/services-details">Birthday Planner</Link>
                      </h5>
                      {' '}
                      <p>Lorem ipsum is simply duru text of the printing and typesetting industry.</p>
                      {' '}
                      <Link to="/services-details" className="link-btn">View more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {' '}
            <div className="col-lg-6 col-md-12 mb-30 animate-box" data-animate-effect="fadeInUp">
              <div className="item">
                <div className="row rest">
                  <div className="col-lg-6 col-md-12 img rest">
                    <img src="/img/services/3.jpg" className="img-cover" alt="" />
                  </div>
                  {' '}
                  <div className="col-lg-6 col-md-12 cont valign">
                    <div className="full-width">
                      <h5>
                        <Link to="/services-details">Destination Wedding</Link>
                      </h5>
                      {' '}
                      <p>Lorem ipsum is simply duru text of the printing indus.</p>
                      {' '}
                      <Link to="/services-details" className="link-btn">View more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {' '}
            <div className="col-lg-6 col-md-12 mb-30 animate-box" data-animate-effect="fadeInUp">
              <div className="item">
                <div className="row rest">
                  <div className="col-lg-6 col-md-12 img rest">
                    <img src="/img/services/4.jpg" className="img-cover" alt="" />
                  </div>
                  {' '}
                  <div className="col-lg-6 col-md-12 cont valign">
                    <div className="full-width">
                      <h5>
                        <Link to="/services-details">Corporate Events</Link>
                      </h5>
                      {' '}
                      <p>Lorem ipsum is simply duru text of the printing and typesetting industry.</p>
                      {' '}
                      <Link to="/services-details" className="link-btn">View more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faqs section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-30">
              <div className="section-subtitle">Popular (F.a.qs)</div>
              {' '}
              <div className="section-title">Wedding Questions</div>
            </div>
          </div>
          {' '}
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-12 mb-30">
              <ul className="accordion-box clearfix">
                <li className="accordion block">
                  <div className="acc-btn">How do I plan a wedding in one months?</div>
                  {' '}
                  <div className="acc-content">
                    <div className="content">
                      <p>Lorem ipsum quisque sodales miss in the varius drana tonton turpis porttiton tellus in the fermen.</p>
                    </div>
                  </div>
                </li>
                {' '}
                <li className="accordion block">
                  <div className="acc-btn">Do we need a wedding planner?</div>
                  {' '}
                  <div className="acc-content">
                    <div className="content">
                      <p>Lorem ipsum quisque sodales miss in the varius drana tonton turpis porttiton tellus in the fermen.</p>
                    </div>
                  </div>
                </li>
                {' '}
                <li className="accordion block">
                  <div className="acc-btn">How do you plan a destination wedding?</div>
                  {' '}
                  <div className="acc-content">
                    <div className="content">
                      <p>Lorem ipsum quisque sodales miss in the varius drana tonton turpis porttiton tellus in the fermen.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {' '}
            <div className="col-lg-2 col-md-12 mb-30">
              <img className="rounded-2 animation-float1" src="/img/faqs.jpg" alt="" />
            </div>
            {' '}
            <div className="col-lg-5 col-md-12 mb-30">
              <ul className="accordion-box clearfix">
                <li className="accordion block">
                  <div className="acc-btn">Can children attend our wedding?</div>
                  {' '}
                  <div className="acc-content">
                    <div className="content">
                      <p>Lorem ipsum quisque sodales miss in the varius drana tonton turpis porttiton tellus in the fermen.</p>
                    </div>
                  </div>
                </li>
                {' '}
                <li className="accordion block">
                  <div className="acc-btn">Are wedding planners insured?</div>
                  {' '}
                  <div className="acc-content">
                    <div className="content">
                      <p>Lorem ipsum quisque sodales miss in the varius drana tonton turpis porttiton tellus in the fermen.</p>
                    </div>
                  </div>
                </li>
                {' '}
                <li className="accordion block">
                  <div className="acc-btn">Do you plan marquee weddings?</div>
                  {' '}
                  <div className="acc-content">
                    <div className="content">
                      <p>Lorem ipsum quisque sodales miss in the varius drana tonton turpis porttiton tellus in the fermen.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {' '}
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-info">
                <div className="tag">Questions</div>
                {' '}
                <div className="desc">You can send your questions to the mail address: <a href="mailto:info@Ewed.com" className="text-decoration-line-bottom">info@Ewed.com</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
