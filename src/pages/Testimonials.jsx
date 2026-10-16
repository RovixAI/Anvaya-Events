export default function Testimonials() {
  return (
    <>
      <section className="banner-header section-padding bg-img" data-overlay-dark="4" data-background="/img/slider/4.jpg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-subtitle">Testiominals</div>
              {' '}
              <div className="section-title2">What client say?</div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials2 section-padding bg-lightbrown">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 animate-box" data-animate-effect="fadeInUp">
              <div className="item">
                <div className="img">
                  <img src="/img/team/team1b.jpg" className="img-fluid" alt="" />
                </div>
                {' '}
                <div className="cont">
                  <h5>"If you manage to get Emma as your coordinator, you are one lucky couple."</h5>
                </div>
                {' '}
                <div className="info"> <img src="/img/team/team1s.jpg" alt="" /> Emily & Enrico </div>
              </div>
            </div>
            {' '}
            <div className="col-lg-4 col-md-6 animate-box" data-animate-effect="fadeInUp">
              <div className="item">
                <div className="img">
                  <img src="/img/team/team3b.jpg" className="img-fluid" alt="" />
                </div>
                {' '}
                <div className="cont">
                  <h5>"If you manage to get Emma as your coordinator, you are one lucky couple."</h5>
                </div>
                {' '}
                <div className="info"> <img src="/img/team/team3s.jpg" alt="" /> Cynthia & Carl </div>
              </div>
            </div>
            {' '}
            <div className="col-lg-4 col-md-6 animate-box" data-animate-effect="fadeInUp">
              <div className="item">
                <div className="img">
                  <img src="/img/team/team2b.jpg" className="img-fluid" alt="" />
                </div>
                {' '}
                <div className="cont">
                  <h5>"If you manage to get Emma as your coordinator, you are one lucky couple."</h5>
                </div>
                {' '}
                <div className="info"> <img src="/img/team/team2s.jpg" alt="" /> Lauren & Wayne </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
