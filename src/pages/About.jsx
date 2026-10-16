import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <section className="banner-header section-padding bg-img" data-overlay-dark="5" data-background="/img/banner.jpg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-subtitle">Who we are</div>
              <div className="section-title2">About us</div>
            </div>
          </div>
        </div>
      </section>
      <section className="about section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 mb-30">
              <div className="section-subtitle">About us</div>
              <div className="section-title">Wedding & Event <span>Planner Center</span>.</div>
              <p>Lorem ipsum is simply dummy text of the printing and type setting industry. <b>Ewed wedding & event planner center</b> duru molestie non tempor fermen dranam.</p>
              <ul className="listext list-unstyled">
                <li>
                  <div className="listext-icon">
                    <i className="fa-regular fa-check" />
                  </div>
                  <div className="listext-text">
                    <p>25 years of experience</p>
                  </div>
                </li>
                <li>
                  <div className="listext-icon">
                    <i className="fa-regular fa-check" />
                  </div>
                  <div className="listext-text">
                    <p>250+ wedding planner</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 offset-lg-1 col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="item">
                    <div className="founded vert-move">
                      <div className="number">20</div>
                      <div className="txt">Years of experience</div>
                      <div className="number-bg" />
                    </div>
                    <img src="/img/about7.jpg" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team section-padding bg-lightbrown">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-subtitle">Senior</div>
              <div className="section-title">Meet Our Team</div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="item hover-box mb-30">
                <div className="cont up">
                  <div className="img">
                    <Link to="/team-single">
                      <img src="/img/team/1.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="text">
                    <h5>Eleanor Brown</h5>
                    <p>Wedding Planner</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="item hover-box mb-30">
                <div className="cont up">
                  <div className="img">
                    <Link to="/team-single">
                      <img src="/img/team/2.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="text">
                    <h5>Martin Dan</h5>
                    <p>Event Planner</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="item hover-box mb-30">
                <div className="cont up">
                  <div className="img">
                    <Link to="/team-single">
                      <img src="/img/team/3.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="text">
                    <h5>Emma Martin</h5>
                    <p>Coordinator</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="item hover-box mb-30">
                <div className="cont up">
                  <div className="img">
                    <Link to="/team-single">
                      <img src="/img/team/4.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="text">
                    <h5>Frank Brown</h5>
                    <p>Wedding Photographer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <div className="bg-img bg-fixed section-padding" data-background="/img/slider/1.jpg" data-overlay-dark="4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 text-center">
                <div className="owl-carousel owl-theme">
                  <div className="item">
                    <span>
                      <i className="star-rating" />
                      {' '}
                      <i className="star-rating" />
                      {' '}
                      <i className="star-rating" />
                      {' '}
                      <i className="star-rating" />
                      {' '}
                      <i className="star-rating" />
                    </span>
                    <h5>" If you manage to get Eleanor as your wedding planner, you are one lucky couple. We highly recommend! "</h5>
                    <div className="info">
                      <div className="cont">
                        <h6>Emily & Enrico <i>|</i> <span><a href="#">View the wedding</a></span></h6>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <span>
                      <i className="star-rating" />
                      {' '}
                      <i className="star-rating" />
                      {' '}
                      <i className="star-rating" />
                      {' '}
                      <i className="star-rating" />
                      {' '}
                      <i className="star-rating" />
                    </span>
                    <h5>" If you manage to get Duru as your wedding planner, you are one lucky couple. We highly recommend! "</h5>
                    <div className="info">
                      <div className="cont">
                        <h6>Cynthia & Carl <i>|</i> <span><a href="#">View the wedding</a></span></h6>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <span>
                      <i className="star-rating" />
                      {' '}
                      <i className="star-rating" />
                      {' '}
                      <i className="star-rating" />
                      {' '}
                      <i className="star-rating" />
                      {' '}
                      <i className="star-rating" />
                    </span>
                    <h5>" If you manage to get Duru as your wedding planner, you are one lucky couple. We highly recommend! "</h5>
                    <div className="info">
                      <h6>Lauren & Wayne <i>|</i> <span><a href="#">View the wedding</a></span></h6>
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
              <div className="section-title">Wedding Questions</div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-12 mb-30">
              <ul className="accordion-box clearfix">
                <li className="accordion block">
                  <div className="acc-btn">How do I plan a wedding in one months?</div>
                  <div className="acc-content">
                    <div className="content">
                      <p>Lorem ipsum quisque sodales miss in the varius drana tonton turpis porttiton tellus in the fermen.</p>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className="acc-btn">Do we need a wedding planner?</div>
                  <div className="acc-content">
                    <div className="content">
                      <p>Lorem ipsum quisque sodales miss in the varius drana tonton turpis porttiton tellus in the fermen.</p>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className="acc-btn">How do you plan a destination wedding?</div>
                  <div className="acc-content">
                    <div className="content">
                      <p>Lorem ipsum quisque sodales miss in the varius drana tonton turpis porttiton tellus in the fermen.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-12 mb-30">
              <img className="rounded-2 animation-float1" src="/img/faqs.jpg" alt="" />
            </div>
            <div className="col-lg-5 col-md-12 mb-30">
              <ul className="accordion-box clearfix">
                <li className="accordion block">
                  <div className="acc-btn">Can children attend our wedding?</div>
                  <div className="acc-content">
                    <div className="content">
                      <p>Lorem ipsum quisque sodales miss in the varius drana tonton turpis porttiton tellus in the fermen.</p>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className="acc-btn">Are wedding planners insured?</div>
                  <div className="acc-content">
                    <div className="content">
                      <p>Lorem ipsum quisque sodales miss in the varius drana tonton turpis porttiton tellus in the fermen.</p>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className="acc-btn">Do you plan marquee weddings?</div>
                  <div className="acc-content">
                    <div className="content">
                      <p>Lorem ipsum quisque sodales miss in the varius drana tonton turpis porttiton tellus in the fermen.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-info">
                <div className="tag">Questions</div>
                <div className="desc">You can send your questions to the mail address: <a href="mailto:info@Ewed.com" className="text-decoration-line-bottom">info@Ewed.com</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="clients bg-lightbrown">
        <div className="container">
          <div className="row wrap">
            <div className="col-md-12">
              <div className="owl-carousel owl-theme">
                <div className="item">
                  <a href="#">
                    <img src="/img/gift/1.jpg" alt="" />
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <img src="/img/gift/2.jpg" alt="" />
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <img src="/img/gift/3.jpg" alt="" />
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <img src="/img/gift/4.jpg" alt="" />
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <img src="/img/gift/5.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
