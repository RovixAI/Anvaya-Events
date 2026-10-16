import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <section className="parallax-header section-padding valign bg-img bg-fixed" data-overlay-dark="4" data-background="/img/slider/4.jpg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 text-center">
              <h5>Dream maker</h5>
              <h1>Wedding <span>&</span> Event Planner</h1>
              {' '}
              <a href="#" className="button-2 mt-20">Our Services</a>
            </div>
          </div>
        </div>
      </section>
      <section className="about section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 mb-30">
              <div className="section-subtitle">About us</div>
              {' '}
              <div className="section-title">Wedding & Event <span>Planner Center</span>.</div>
              {' '}
              <p>Lorem ipsum is simply dummy text of the printing and type setting industry. <b>Ewed wedding & event planner center</b> duru molestie non tempor fermen dranam.</p>
              {' '}
              <ul className="listext list-unstyled">
                <li>
                  <div className="listext-icon">
                    <i className="fa-regular fa-check" />
                  </div>
                  {' '}
                  <div className="listext-text">
                    <p>25 years of experience</p>
                  </div>
                </li>
                {' '}
                <li>
                  <div className="listext-icon">
                    <i className="fa-regular fa-check" />
                  </div>
                  {' '}
                  <div className="listext-text">
                    <p>250+ wedding planner</p>
                  </div>
                </li>
              </ul>
              {' '}
              <a href="#" className="button-1 mt-15">Read more</a>
            </div>
            {' '}
            <div className="col-lg-6 offset-lg-1 col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="item">
                    <img src="/img/about7.jpg" className="img-fluid" alt="" />
                    {' '}
                    <div className="float-box animation-float d-flex">
                      <i className="icon fa-solid fa-quote-left" />
                      {' '}
                      <div className="title">Whatever your dreams are we can help you plan.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services1 section-padding bg-lightbrown">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-30">
              <div className="section-subtitle">The experience</div>
              {' '}
              <div className="section-title">Explore Services</div>
            </div>
          </div>
          {' '}
          <div className="row">
            <div className="col-md-12">
              <div className="owl-carousel owl-theme">
                <div className="item">
                  <div className="row rest">
                    <div className="col-lg-6 col-md-12 img rest">
                      <img src="/img/services/1.jpg" className="img-cover" alt="" />
                    </div>
                    {' '}
                    <div className="col-lg-6 col-md-12 cont valign">
                      <div className="full-width">
                        <h5>
                          <a href="#">Wedding Planner</a>
                        </h5>
                        {' '}
                        <p>Lorem ipsum is simply duru text of the printing and typesetting industry.</p>
                        {' '}
                        <a href="#" className="link-btn">View more</a>
                      </div>
                    </div>
                  </div>
                </div>
                {' '}
                <div className="item">
                  <div className="row rest">
                    <div className="col-lg-6 col-md-12 img rest">
                      <img src="/img/services/2.jpg" className="img-cover" alt="" />
                    </div>
                    {' '}
                    <div className="col-lg-6 col-md-12 cont valign">
                      <div className="full-width">
                        <h5>
                          <a href="#">Birthday Planner</a>
                        </h5>
                        {' '}
                        <p>Lorem ipsum is simply duru text of the printing and typesetting industry.</p>
                        {' '}
                        <a href="#" className="link-btn">View more</a>
                      </div>
                    </div>
                  </div>
                </div>
                {' '}
                <div className="item">
                  <div className="row rest">
                    <div className="col-lg-6 col-md-12 img rest">
                      <img src="/img/services/3.jpg" className="img-cover" alt="" />
                    </div>
                    {' '}
                    <div className="col-lg-6 col-md-12 cont valign">
                      <div className="full-width">
                        <h5>
                          <a href="#">Destination Wedding</a>
                        </h5>
                        {' '}
                        <p>Lorem ipsum is simply duru text of the printing indus.</p>
                        {' '}
                        <a href="#" className="link-btn">View more</a>
                      </div>
                    </div>
                  </div>
                </div>
                {' '}
                <div className="item">
                  <div className="row rest">
                    <div className="col-lg-6 col-md-12 img rest">
                      <img src="/img/services/4.jpg" className="img-cover" alt="" />
                    </div>
                    {' '}
                    <div className="col-lg-6 col-md-12 cont valign">
                      <div className="full-width">
                        <h5>
                          <a href="#">Corporate Events</a>
                        </h5>
                        {' '}
                        <p>Lorem ipsum is simply duru text of the printing and typesetting industry.</p>
                        {' '}
                        <a href="#" className="link-btn">View more</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-subtitle">What We Do</div>
              {' '}
              <div className="section-title">Our Portfolio</div>
            </div>
          </div>
          {' '}
          <div className="row">
            <div className="col-md-12">
              <div className="owl-carousel owl-theme">
                <div className="item mt-30">
                  <div className="item-wrap">
                    <div className="img">
                      <img src="/img/couple/02.jpg" alt="" />
                    </div>
                    {' '}
                    <div className="con">
                      <div className="title-box">
                        <p>Green House, Manhattan</p>
                        {' '}
                        <h3>
                          <Link to="/portfolio-details">Cynthia <span>&</span> Carl</Link>
                        </h3>
                      </div>
                      {' '}
                      <div className="arrow">
                        <Link to="/portfolio-details">
                          <span className="fa-regular fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {' '}
                <div className="item mt-30">
                  <div className="item-wrap">
                    <div className="img">
                      <img src="/img/couple/03.jpg" alt="" />
                    </div>
                    {' '}
                    <div className="con">
                      <div className="title-box">
                        <p>Lakewood, USA</p>
                        {' '}
                        <h3>
                          <Link to="/portfolio-details">Lauren <span>&</span> Wayne</Link>
                        </h3>
                      </div>
                      {' '}
                      <div className="arrow">
                        <Link to="/portfolio-details">
                          <span className="fa-regular fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {' '}
                <div className="item mt-30">
                  <div className="item-wrap">
                    <div className="img">
                      <img src="/img/couple/01.jpg" alt="" />
                    </div>
                    {' '}
                    <div className="con">
                      <div className="title-box">
                        <p>Level Park, Oxfordshire</p>
                        {' '}
                        <h3>
                          <Link to="/portfolio-details">Heather <span>&</span> Henry</Link>
                        </h3>
                      </div>
                      {' '}
                      <div className="arrow">
                        <Link to="/portfolio-details">
                          <span className="fa-regular fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {' '}
                <div className="item mt-30">
                  <div className="item-wrap">
                    <div className="img">
                      <img src="/img/couple/04.jpg" alt="" />
                    </div>
                    {' '}
                    <div className="con">
                      <div className="title-box">
                        <p>Gold Park, CA</p>
                        {' '}
                        <h3>
                          <Link to="/portfolio-details">Emily <span>&</span> Micheal</Link>
                        </h3>
                      </div>
                      {' '}
                      <div className="arrow">
                        <Link to="/portfolio-details">
                          <span className="fa-regular fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {' '}
                <div className="item mt-30">
                  <div className="item-wrap">
                    <div className="img">
                      <img src="/img/couple/05.jpg" alt="" />
                    </div>
                    {' '}
                    <div className="con">
                      <div className="title-box">
                        <p>Silver Park, USA</p>
                        {' '}
                        <h3>
                          <Link to="/portfolio-details">Sophia <span>&</span> Robert</Link>
                        </h3>
                      </div>
                      {' '}
                      <div className="arrow">
                        <Link to="/portfolio-details">
                          <span className="fa-regular fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
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
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-30">
              <div className="section-subtitle">Wedding Images</div>
              {' '}
              <div className="section-title">Captured Moments</div>
            </div>
          </div>
          {' '}
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
            {' '}
            <div className="col-lg-6 col-md-6 mb-25">
              <div className="item">
                <a href="/img/gallery/6.jpg" title="" className="gallery-masonry-item-img-link img-zoom">
                  <div className="img">
                    <img src="/img/gallery/6.jpg" className="img-fluid mx-auto d-block" alt="" />
                  </div>
                </a>
              </div>
            </div>
            {' '}
            <div className="col-lg-3 col-md-6 mb-25">
              <div className="item">
                <a href="/img/gallery/9.jpg" title="" className="gallery-masonry-item-img-link img-zoom">
                  <div className="img">
                    <img src="/img/gallery/9.jpg" className="img-fluid mx-auto d-block" alt="" />
                  </div>
                </a>
              </div>
            </div>
            {' '}
            <div className="col-lg-3 col-md-6 mb-25">
              <div className="item">
                <a href="/img/gallery/11.jpg" title="" className="gallery-masonry-item-img-link img-zoom">
                  <div className="img">
                    <img src="/img/gallery/11.jpg" className="img-fluid mx-auto d-block" alt="" />
                  </div>
                </a>
              </div>
            </div>
            {' '}
            <div className="col-lg-6 col-md-6 mb-25">
              <div className="item">
                <a href="/img/gallery/7.jpg" title="" className="gallery-masonry-item-img-link img-zoom">
                  <div className="img">
                    <img src="/img/gallery/7.jpg" className="img-fluid mx-auto d-block" alt="" />
                  </div>
                </a>
              </div>
            </div>
            {' '}
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
      <section className="video-wrapper video section-padding bg-img bg-fixed bg-position-center" data-overlay-dark="5" data-background="/img/slider/3.jpg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <a className="vid" href="https://youtu.be/7KtVUH9LpGM?si=U72qNAk3QkfId_1T">
                <div className="vid-butn">
                  <span className="icon">
                    <i className="fa-light fa-play" />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        {' '}
        <div className="video-text">video</div>
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
      <section className="blog1 section-padding bg-lightbrown">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-subtitle">Our Blog</div>
              {' '}
              <div className="section-title">Latest news</div>
            </div>
          </div>
          {' '}
          <div className="row">
            <div className="col-md-12">
              <div className="owl-carousel owl-theme">
                <div className="item mt-30 mb-30">
                  <div className="img">
                    <img src="/img/blog/1.jpg" className="img-fluid" alt="" />
                    {' '}
                    <div className="date">29 Dec 2026</div>
                  </div>
                  {' '}
                  <div className="cont">
                    <h5>
                      <Link to="/post">Working with a wedding floral designer</Link>
                    </h5>
                    {' '}
                    <p>Lorem ipsum simply dummy text of rana miss amet in the fermen.</p>
                  </div>
                </div>
                {' '}
                <div className="item mt-30 mb-30">
                  <div className="img">
                    <img src="/img/blog/2.jpg" className="img-fluid" alt="" />
                    {' '}
                    <div className="date">27 Dec 2026</div>
                  </div>
                  {' '}
                  <div className="cont">
                    <h5>
                      <Link to="/post">Why would anyone hire a wed planner?</Link>
                    </h5>
                    {' '}
                    <p>Lorem ipsum simply dummy text of rana miss amet in the fermen.</p>
                  </div>
                </div>
                {' '}
                <div className="item mt-30 mb-30">
                  <div className="img">
                    <img src="/img/blog/3.jpg" className="img-fluid" alt="" />
                    {' '}
                    <div className="date">25 Dec 2026</div>
                  </div>
                  {' '}
                  <div className="cont">
                    <h5>
                      <Link to="/post">7 incredible wedding hairstyles ever</Link>
                    </h5>
                    {' '}
                    <p>Lorem ipsum simply dummy text of rana miss amet in the fermen.</p>
                  </div>
                </div>
                {' '}
                <div className="item mt-30 mb-30">
                  <div className="img">
                    <img src="/img/blog/4.jpg" className="img-fluid" alt="" />
                    {' '}
                    <div className="date">23 Dec 2026</div>
                  </div>
                  {' '}
                  <div className="cont">
                    <h5>
                      <Link to="/post">My favourite special bridesmaid gifts</Link>
                    </h5>
                    {' '}
                    <p>Lorem ipsum simply dummy text of rana miss amet in the fermen.</p>
                  </div>
                </div>
                {' '}
                <div className="item mt-30 mb-30">
                  <div className="img">
                    <img src="/img/blog/5.jpg" className="img-fluid" alt="" />
                    {' '}
                    <div className="date">21 Dec 2026</div>
                  </div>
                  {' '}
                  <div className="cont">
                    <h5>
                      <Link to="/post">A guide to men’s wedding ring styles</Link>
                    </h5>
                    {' '}
                    <p>Lorem ipsum simply dummy text of rana miss amet in the fermen.</p>
                  </div>
                </div>
                {' '}
                <div className="item mt-30 mb-30">
                  <div className="img">
                    <img src="/img/blog/6.jpg" className="img-fluid" alt="" />
                    {' '}
                    <div className="date">20 Dec 2026</div>
                  </div>
                  {' '}
                  <div className="cont">
                    <h5>
                      <Link to="/post">How to plan a rehearsal dinner</Link>
                    </h5>
                    {' '}
                    <p>Lorem ipsum simply dummy text of rana miss amet in the fermen.</p>
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
