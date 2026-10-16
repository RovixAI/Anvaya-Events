export default function GalleryVideo() {
  return (
    <>
      <section className="banner-header section-padding bg-img" data-overlay-dark="5" data-background="/img/slider/12.jpg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-subtitle">Wedding</div>
              {' '}
              <div className="section-title2">Video Gallery</div>
            </div>
          </div>
        </div>
      </section>
      <section className="video-gallery section-padding bg-lightbrown">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="item">
                <img src="/img/slider/1.jpg" className="img-fluid" alt="" />
                {' '}
                <div className="curv-butn">
                  <a href="https://youtu.be/7KtVUH9LpGM?si=U72qNAk3QkfId_1T" className="vid">
                    <div className="icon">
                      <i className="fa-light fa-play" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {' '}
            <div className="col-lg-6 col-md-12">
              <div className="item">
                <img src="/img/slider/2.jpg" className="img-fluid" alt="" />
                {' '}
                <div className="curv-butn">
                  <a href="https://youtu.be/7KtVUH9LpGM?si=U72qNAk3QkfId_1T" className="vid">
                    <div className="icon">
                      <i className="fa-light fa-play" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {' '}
            <div className="col-lg-6 col-md-12">
              <div className="item">
                <img src="/img/slider/5.jpg" className="img-fluid" alt="" />
                {' '}
                <div className="curv-butn">
                  <a href="https://youtu.be/7KtVUH9LpGM?si=U72qNAk3QkfId_1T" className="vid">
                    <div className="icon">
                      <i className="fa-light fa-play" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {' '}
            <div className="col-lg-6 col-md-12">
              <div className="item">
                <img src="/img/slider/4.jpg" className="img-fluid" alt="" />
                {' '}
                <div className="curv-butn">
                  <a href="https://youtu.be/7KtVUH9LpGM?si=U72qNAk3QkfId_1T" className="vid">
                    <div className="icon">
                      <i className="fa-light fa-play" />
                    </div>
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
