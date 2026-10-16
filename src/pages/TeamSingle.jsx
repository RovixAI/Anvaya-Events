import { Link } from 'react-router-dom'

export default function TeamSingle() {
  return (
    <>
      <section className="banner-header section-padding bg-img" data-overlay-dark="5" data-background="/img/slider/6.jpg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-subtitle">Coordinator</div>
              <div className="section-title2">Emma Martin</div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-single section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="item">
                <div className="img">
                  <img src="/img/team/3.jpg" className="img-fluid" alt="" />
                  <div className="curv-butn icon-bg">
                    <div className="social-icons">
                      <a href="mailto:info@Ewed.com" className="link">
                        <i className="fa-solid fa-envelope" />
                      </a>
                      {' '}
                      <a href="tel:+12345678910" className="link">
                        <i className="fa-solid fa-phone" />
                      </a>
                      {' '}
                      <a href="https://www.instagram.com/" target="_blank" className="link">
                        <i className="fa-brands fa-instagram" />
                      </a>
                      {' '}
                      <a href="https://api.whatsapp.com/send?phone=+12345678910" target="_blank" className="link">
                        <i className="fa-brands fa-whatsapp" />
                      </a>
                      {' '}
                      <a href="#" className="link bg-000 plus-link">
                        <i className="fa-solid fa-plus" />
                      </a>
                    </div>
                    <div className="br-left-top">
                      <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                        <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#fff" />
                      </svg>
                    </div>
                    <div className="br-right-bottom">
                      <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                        <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#fff" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 col-md-12 cont">
              <h6>I work as <span>wedding coordinator</span> at Ewed Wedding and Event Planner.</h6>
              <p>Wedding usam miss in the amet ravida hareran anuam the duruss uctus the drana accumsan usto aliquam sit amet auctor orci done vita erisus nisan sapien in the miss rana fermen.</p>
              <ul className="list-unstyled list mb-60">
                <li>
                  <div className="list-icon">
                    <span className="fa-regular fa-check" />
                  </div>
                  <div className="list-text">
                    <p>Event Planner</p>
                  </div>
                </li>
                <li>
                  <div className="list-icon">
                    <span className="fa-regular fa-check" />
                  </div>
                  <div className="list-text">
                    <p>Wedding Planner</p>
                  </div>
                </li>
                <li>
                  <div className="list-icon">
                    <span className="fa-regular fa-check" />
                  </div>
                  <div className="list-text">
                    <p>Wedding Management</p>
                  </div>
                </li>
              </ul>
              <ul className="nav nav-tabs simpl-bord mt-60" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <span className="nav-link active cursor-pointer" id="skills-tab" data-bs-toggle="tab" data-bs-target="#skills">Skills</span>
                </li>
                <li className="nav-item" role="presentation">
                  <span className="nav-link cursor-pointer" id="biography-tab" data-bs-toggle="tab" data-bs-target="#biography">Biography</span>
                </li>
                <li className="nav-item" role="presentation">
                  <span className="nav-link cursor-pointer" id="education-tab" data-bs-toggle="tab" data-bs-target="#education">Education</span>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="skills" role="tabpanel" aria-labelledby="skills-tab">
                  <p>Skill utate ons amet ravida nuam the duru miss sapien.</p>
                  <ul className="list-unstyled list mb-60">
                    <li>
                      <div className="list-icon">
                        <span className="fa-regular fa-check" />
                      </div>
                      <div className="list-text">
                        <p>Project Management</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-icon">
                        <span className="fa-regular fa-check" />
                      </div>
                      <div className="list-text">
                        <p>Wedding Coordinator</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="tab-pane fade" id="biography" role="tabpanel" aria-labelledby="biography-tab">
                  <p>Biography utate ons amet ravida haretra nuam the duru miss uctus the drana accumsan justo aliquam sit amet auctor orci sapien.</p>
                </div>
                <div className="tab-pane fade" id="education" role="tabpanel" aria-labelledby="education-tab">
                  <p>Education utate ons amet ravida haretra nuam the duru miss uctus the drana accumsan justo aliquam sit amet auctor orci sapien.</p>
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
              <div className="section-subtitle">Other Seniors</div>
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
    </>
  )
}
