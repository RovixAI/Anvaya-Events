import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <>
      <section className="banner-header section-padding bg-img" data-overlay-dark="4" data-background="/img/slider/4.jpg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-subtitle">Latest news</div>
              {' '}
              <div className="section-title2">Blog & Events</div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog1 section-padding bg-lightbrown">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="item mb-60">
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
            </div>
            {' '}
            <div className="col-lg-4 col-md-6">
              <div className="item mb-60">
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
            </div>
            {' '}
            <div className="col-lg-4 col-md-6">
              <div className="item mb-60">
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
            </div>
            {' '}
            <div className="col-lg-4 col-md-6">
              <div className="item mb-60">
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
            </div>
            {' '}
            <div className="col-lg-4 col-md-6">
              <div className="item mb-60">
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
            </div>
            {' '}
            <div className="col-lg-4 col-md-6">
              <div className="item mb-60">
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
          {' '}
          <div className="row">
            <div className="col-md-12 text-center">
              <ul className="pagination-wrap">
                <li>
                  <Link to="/blog">
                    <i className="fa-light fa-angle-left" />
                  </Link>
                </li>
                {' '}
                <li>
                  <Link to="/blog">1</Link>
                </li>
                {' '}
                <li>
                  <Link to="/blog" className="active">2</Link>
                </li>
                {' '}
                <li>
                  <Link to="/blog">3</Link>
                </li>
                {' '}
                <li>
                  <Link to="/blog">
                    <i className="fa-light fa-angle-right" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
