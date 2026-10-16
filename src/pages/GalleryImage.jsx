export default function GalleryImage() {
  return (
    <>
      <section className="banner-header section-padding bg-img" data-overlay-dark="4" data-background="/img/slider/4.jpg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-subtitle">Wedding</div>
              <div className="section-title2">Image Gallery</div>
            </div>
          </div>
        </div>
      </section>
      <section id="gallery" data-scroll-index="4" className="section-padding bg-lightbrown">
        <div className="container">
          <div className="row galleryscroll" data-masonry={"{\"percentPosition\": true }"}>
            <div className="col-lg-3 col-md-6 mb-25">
              <div className="item">
                <a href="/img/gallery/8.jpg" title="" className="gallery-masonry-item-img-link img-zoom">
                  <div className="img">
                    <img src="/img/gallery/8.jpg" className="img-fluid mx-auto d-block" alt="" />
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-25">
              <div className="item">
                <a href="/img/gallery/6.jpg" title="" className="gallery-masonry-item-img-link img-zoom">
                  <div className="img">
                    <img src="/img/gallery/6.jpg" className="img-fluid mx-auto d-block" alt="" />
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-25">
              <div className="item">
                <a href="/img/gallery/9.jpg" title="" className="gallery-masonry-item-img-link img-zoom">
                  <div className="img">
                    <img src="/img/gallery/9.jpg" className="img-fluid mx-auto d-block" alt="" />
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-25">
              <div className="item">
                <a href="/img/gallery/11.jpg" title="" className="gallery-masonry-item-img-link img-zoom">
                  <div className="img">
                    <img src="/img/gallery/11.jpg" className="img-fluid mx-auto d-block" alt="" />
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-25">
              <div className="item">
                <a href="/img/gallery/7.jpg" title="" className="gallery-masonry-item-img-link img-zoom">
                  <div className="img">
                    <img src="/img/gallery/7.jpg" className="img-fluid mx-auto d-block" alt="" />
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-25">
              <div className="item">
                <a href="/img/gallery/10.jpg" title="" className="gallery-masonry-item-img-link img-zoom">
                  <div className="img">
                    <img src="/img/gallery/10.jpg" className="img-fluid mx-auto d-block" alt="" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
