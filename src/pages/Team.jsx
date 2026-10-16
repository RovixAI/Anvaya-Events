import { Link } from 'react-router-dom'

export default function Team() {
  return (
    <>
      <section className="banner-header section-padding bg-img" data-overlay-dark="4" data-background="/img/slider/4.jpg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-subtitle">Seniors</div>
              {' '}
              <div className="section-title2">Meet Our Team</div>
            </div>
          </div>
        </div>
      </section>
      <section className="team section-padding bg-lightbrown">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="item hover-box mb-30">
                <div className="cont up">
                  <div className="img">
                    <Link to="/team-single">
                      <img src="/img/team/1.jpg" alt="" />
                    </Link>
                  </div>
                  {' '}
                  <div className="text">
                    <h5>Eleanor Brown</h5>
                    {' '}
                    <p>Wedding Planner</p>
                  </div>
                </div>
              </div>
            </div>
            {' '}
            <div className="col-lg-3 col-md-4">
              <div className="item hover-box mb-30">
                <div className="cont up">
                  <div className="img">
                    <Link to="/team-single">
                      <img src="/img/team/2.jpg" alt="" />
                    </Link>
                  </div>
                  {' '}
                  <div className="text">
                    <h5>Martin Dan</h5>
                    {' '}
                    <p>Event Planner</p>
                  </div>
                </div>
              </div>
            </div>
            {' '}
            <div className="col-lg-3 col-md-4">
              <div className="item hover-box mb-30">
                <div className="cont up">
                  <div className="img">
                    <Link to="/team-single">
                      <img src="/img/team/3.jpg" alt="" />
                    </Link>
                  </div>
                  {' '}
                  <div className="text">
                    <h5>Emma Martin</h5>
                    {' '}
                    <p>Coordinator</p>
                  </div>
                </div>
              </div>
            </div>
            {' '}
            <div className="col-lg-3 col-md-4">
              <div className="item hover-box mb-30">
                <div className="cont up">
                  <div className="img">
                    <Link to="/team-single">
                      <img src="/img/team/4.jpg" alt="" />
                    </Link>
                  </div>
                  {' '}
                  <div className="text">
                    <h5>Frank Brown</h5>
                    {' '}
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
