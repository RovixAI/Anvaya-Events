import { Link } from 'react-router-dom'

export default function Portfolio2() {
  return (
    <>
      <section className="banner-header section-padding bg-img" data-overlay-dark="4" data-background="/img/slider/3.jpg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-subtitle">Weddings</div>
              {' '}
              <div className="section-title2">Our Portfolio</div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio2 section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-60 animate-box" data-animate-effect="fadeInLeft">
              <div className="item">
                <div className="img">
                  <Link to="/portfolio-details">
                    <img src="/img/couple/4.jpg" className="img-fluid" alt="" />
                  </Link>
                </div>
                {' '}
                <div className="cont">
                  <h5>
                    <Link to="/portfolio-details">Olivia <span>&</span> John</Link>
                  </h5>
                </div>
                {' '}
                <div className="info">
                  <i className="fa-light fa-location-dot" />
                  {' '}
                  <a href="#">Purple House, USA</a>
                </div>
              </div>
            </div>
            {' '}
            <div className="col-lg-4 col-md-6 mb-60 animate-box" data-animate-effect="fadeInUp">
              <div className="item">
                <div className="img">
                  <Link to="/portfolio-details">
                    <img src="/img/couple/5.jpg" className="img-fluid" alt="" />
                  </Link>
                </div>
                {' '}
                <div className="cont">
                  <h5>
                    <Link to="/portfolio-details">Sophia <span>&</span> Robert</Link>
                  </h5>
                </div>
                {' '}
                <div className="info">
                  <i className="fa-light fa-location-dot" />
                  {' '}
                  <a href="#">Silver Park, New York</a>
                </div>
              </div>
            </div>
            {' '}
            <div className="col-lg-4 col-md-6 mb-60 animate-box" data-animate-effect="fadeInRight">
              <div className="item">
                <div className="img">
                  <Link to="/portfolio-details">
                    <img src="/img/couple/6.jpg" className="img-fluid" alt="" />
                  </Link>
                </div>
                {' '}
                <div className="cont">
                  <h5>
                    <Link to="/portfolio-details">Emily <span>&</span> Micheal</Link>
                  </h5>
                </div>
                {' '}
                <div className="info">
                  <i className="fa-light fa-location-dot" />
                  {' '}
                  <a href="#">Gold Park, CA</a>
                </div>
              </div>
            </div>
            {' '}
            <div className="col-lg-4 col-md-6 mb-60 animate-box" data-animate-effect="fadeInLeft">
              <div className="item">
                <div className="img">
                  <Link to="/portfolio-details">
                    <img src="/img/couple/1.jpg" className="img-fluid" alt="" />
                  </Link>
                </div>
                {' '}
                <div className="cont">
                  <h5>
                    <Link to="/portfolio-details">Heather <span>&</span> Henry</Link>
                  </h5>
                </div>
                {' '}
                <div className="info">
                  <i className="fa-light fa-location-dot" />
                  {' '}
                  <a href="#">Level Park, Oxfordshire</a>
                </div>
              </div>
            </div>
            {' '}
            <div className="col-lg-4 col-md-6 mb-60 animate-box" data-animate-effect="fadeInUp">
              <div className="item">
                <div className="img">
                  <Link to="/portfolio-details">
                    <img src="/img/couple/2.jpg" className="img-fluid" alt="" />
                  </Link>
                </div>
                {' '}
                <div className="cont">
                  <h5>
                    <Link to="/portfolio-details">Cynthia <span>&</span> Carl</Link>
                  </h5>
                </div>
                {' '}
                <div className="info">
                  <i className="fa-light fa-location-dot" />
                  {' '}
                  <a href="#">Green House, Manhattan</a>
                </div>
              </div>
            </div>
            {' '}
            <div className="col-lg-4 col-md-6 mb-60 animate-box" data-animate-effect="fadeInRight">
              <div className="item">
                <div className="img">
                  <Link to="/portfolio-details">
                    <img src="/img/couple/3.jpg" className="img-fluid" alt="" />
                  </Link>
                </div>
                {' '}
                <div className="cont">
                  <h5>
                    <Link to="/portfolio-details">Lauren <span>&</span> Wayne</Link>
                  </h5>
                </div>
                {' '}
                <div className="info">
                  <i className="fa-light fa-location-dot" />
                  {' '}
                  <a href="#">Lakewood, USA</a>
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
                    {' '}
                    <h5>" If you manage to get Eleanor as your wedding planner, you are one lucky couple. We highly recommend! "</h5>
                    {' '}
                    <div className="info">
                      <div className="cont">
                        <h6>Emily & Enrico <i>|</i> <span><a href="#">View the wedding</a></span></h6>
                      </div>
                    </div>
                  </div>
                  {' '}
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
                    {' '}
                    <h5>" If you manage to get Duru as your wedding planner, you are one lucky couple. We highly recommend! "</h5>
                    {' '}
                    <div className="info">
                      <div className="cont">
                        <h6>Cynthia & Carl <i>|</i> <span><a href="#">View the wedding</a></span></h6>
                      </div>
                    </div>
                  </div>
                  {' '}
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
                    {' '}
                    <h5>" If you manage to get Duru as your wedding planner, you are one lucky couple. We highly recommend! "</h5>
                    {' '}
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
      <section className="position-relative section-padding bg-lightbrown">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-30">
              <div className="section-subtitle">Best Prices</div>
              {' '}
              <div className="section-title">Pricing Plan</div>
            </div>
          </div>
          {' '}
          <div className="row justify-content-center g-0">
            <div className="col-12 price">
              <div className="item box-shadow-extra-large active">
                <div className="img">
                  <img src="/img/pricing/1.jpg" className="img-fluid" alt="" />
                  {' '}
                  <div className="date"><span>$4.500</span>starting from</div>
                </div>
                {' '}
                <div className="flex-column cont">
                  <div className="cont-hover">
                    <div className="title">Pre-Wedding Plan</div>
                    {' '}
                    <p>Wedding aliquet orci elit gene on tistie into the miss rana dream vitaen.</p>
                    {' '}
                    <div className="time"> <i className="fa-regular fa-check" /> Full service wedding planner</div>
                    {' '}
                    <div className="time"> <i className="fa-regular fa-check" /> Birthday planner</div>
                    {' '}
                    <div className="time"> <i className="fa-regular fa-close" /> Wedding stylist</div>
                    {' '}
                    <a href="#" className="link-btn mt-20">View more</a>
                  </div>
                </div>
              </div>
              {' '}
              <div className="item box-shadow-extra-large">
                <div className="img">
                  <img src="/img/pricing/2.jpg" className="img-fluid" alt="" />
                  {' '}
                  <div className="date"><span>$7.500</span>starting from</div>
                </div>
                {' '}
                <div className="flex-column cont">
                  <div className="cont-hover">
                    <div className="title">Full Wedding Plan</div>
                    {' '}
                    <p>Wedding aliquet orci elit gene on tistie into the miss rana dream vitaen.</p>
                    {' '}
                    <div className="time"> <i className="fa-regular fa-check" /> Full service wedding planner</div>
                    {' '}
                    <div className="time"> <i className="fa-regular fa-check" /> Birthday planner</div>
                    {' '}
                    <div className="time"> <i className="fa-regular fa-check" /> Wedding Advance</div>
                    {' '}
                    <a href="#" className="link-btn mt-20">View more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {' '}
          <div className="row">
            <div className="col-md-12 text-center mt-30">
              <div className="section-info">
                <div className="tag">Call us</div>
                {' '}
                <div className="desc">For detailed information: <a href="tel:+12345678910" className="text-decoration-line-bottom">+1 234 567 8910</a>.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
