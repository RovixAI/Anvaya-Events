export default function NotFound() {
  return (
    <>
      <section className="banner-header section-padding bg-img" data-overlay-dark="5" data-background="/img/slider/2.jpg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-subtitle">404 page</div>
              {' '}
              <div className="section-title2">Page not found!</div>
            </div>
          </div>
        </div>
      </section>
      <section className="not-found section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-12 text-center">
              <h1>404</h1>
              <h3>Sorry, We can't find that page!</h3>
              {' '}
              <p>The page you are looking for was moved, removed, renamed or never existed.</p>
              {' '}
              <div className="search-form">
                <form method="post" action="index.html">
                  <div className="form-group clearfix">
                    <input type="search" name="text" defaultValue="" placeholder="Search here" required />
                    {' '}
                    <button type="submit" className="search-button">
                      <span className="fa-light fa-magnifying-glass" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
