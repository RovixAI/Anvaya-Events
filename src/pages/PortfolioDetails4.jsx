import { useEffect } from 'react'

export default function PortfolioDetails4() {
  useEffect(() => {
    const slider = window.$('#kenburnsSliderContainer').vegas({
      slides: [{"src":"/img/couple/02.jpg"},{"src":"/img/couple/05.jpg"},{"src":"/img/couple/03.jpg"}],
      overlay: true,
      transition: 'fade2',
      animation: 'kenburnsUpRight',
      transitionDuration: 1000,
      delay: 10000,
      animationDuration: 20000,
    })
    return () => slider.vegas('destroy')
  }, [])

  return (
    <>
      <aside className="kenburns-section" id="kenburnsSliderContainer" data-overlay-dark="4">
        <div className="kenburns-inner h-100" />
      </aside>
      <section className="portfolio-page section-padding bg-lightbrown">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-30">
              <div className="section-subtitle">Wedding portfolio</div>
              <div className="section-title">Heather <span>&</span> Henry Couple</div>
              <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. <b>sapien fermen drana in the miss</b> molestie non tempor fermen. Lorem the ipsum quisque sodales miss in the varius vestibulum drana.</p>
              <p className="mb-30">Wedding non lorem ac erat suscipit bibendum nulla facilisi sedeuter miss volutpat miss sapien vel conseyen turpeution masin.</p>
              <ul className="listext list-unstyled">
                <li>
                  <div className="listext-icon">
                    <i className="fa-regular fa-check" />
                  </div>
                  <div className="listext-text">
                    <p><b>Wedding Planner:</b> Rachel Starletta</p>
                  </div>
                </li>
                <li>
                  <div className="listext-icon">
                    <i className="fa-regular fa-check" />
                  </div>
                  <div className="listext-text">
                    <p><b>Wedding Photographer:</b> Janet Lewis</p>
                  </div>
                </li>
                <li>
                  <div className="listext-icon">
                    <i className="fa-regular fa-check" />
                  </div>
                  <div className="listext-text">
                    <p><b>Wedding Location:</b> Level Park, Oxfordshire</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-5 offset-lg-1 col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="item">
                    <img src="/img/couple/7.jpg" className="img-fluid" alt="" />
                    <div className="float-box animation-float d-flex">
                      <i className="icon fa-solid fa-quote-left" />
                      <div className="title">If you manage to get Emma as your coordinator, you are one lucky couple.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="galleryscroll section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-30">
              <div className="section-subtitle">Scroll Gallery</div>
              <div className="section-title">Our Portfolio</div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-md-12">
              <div className="owl-carousel owl-theme">
                <div className="item">
                  <div className="img">
                    <img src="/img/gallery/1.jpg" className="img-fluid mx-auto d-block" alt="" />
                  </div>
                </div>
                <div className="item">
                  <div className="img">
                    <img src="/img/gallery/2.jpg" className="img-fluid mx-auto d-block" alt="" />
                  </div>
                </div>
                <div className="item">
                  <div className="img">
                    <img src="/img/gallery/3.jpg" className="img-fluid mx-auto d-block" alt="" />
                  </div>
                </div>
                <div className="item">
                  <div className="img">
                    <img src="/img/gallery/4.jpg" className="img-fluid mx-auto d-block" alt="" />
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
