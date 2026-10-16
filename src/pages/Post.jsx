import { Link } from 'react-router-dom'

export default function Post() {
  return (
    <>
      <section className="banner-header section-padding bg-img" data-overlay-dark="4" data-background="/img/slider/7.jpg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="section-title white">Working with a wedding floral designer</div>
              {' '}
              <div className="post">
                <div className="author">
                  <img src="/img/team/8.jpg" className="avatar" alt="" />
                  {' '}
                  <span>Samantha</span>
                </div>
                {' '}
                <div className="date-comment"> <i className="fa-regular fa-calendar" /> 12 Dec 2026 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="post section-padding bg-lightbrown">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="item">
                    <div className="post-cont">
                      <img src="/img/slider/1.jpg" className="rounded-3 mb-30" alt="" />
                      {' '}
                      <p>Quisque pretium fermentum quam, sit amet cursus ante sollicitudin consequat the risus conisen porttitor orci sit amet, iaculis quis sapien neceli ultrices euismod sit amet lacus golden imperdiet erat. Duis eu est dignissim lacus dictum fermen.</p>
                      {' '}
                      <p>Nulla vitae metus tincidun varius nunuis in the porta nulla pellentesque drana nec miss aucto pretium thearcu nunc consequat diam enisle blani dinisim.</p>
                      {' '}
                      <blockquote>
                        <p>Wedding facilisi in to sedeuter nunc vouta miss mollis sapien ve consen miss tureution yer vintane in libero semper quisque ravida eros turpis interdum ornare miss adama seder a imerdie fames fermen.</p>
                        {' '}
                        <cite>Olivia & Enrico</cite>
                      </blockquote>
                      {' '}
                      <div className="row">
                        <div className="col-md-6">
                          <img src="/img/slider/3.jpg" className="mb-30 rounded-3" alt="" />
                        </div>
                        {' '}
                        <div className="col-md-6">
                          <img src="/img/slider/11.jpg" className="mb-30 rounded-3" alt="" />
                        </div>
                      </div>
                      {' '}
                      <p>Nulla vitae metus tincidun varius nunuis in the porta nulla pellentesque drana nec miss aucto pretium thearcu nunc consequat diam enisle blani dinisim.</p>
                      {' '}
                      <div className="comment-section">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="item">
                              <div className="img">
                                <img src="/img/team/team1s.jpg" alt="" />
                              </div>
                              {' '}
                              <div className="cont">
                                <h3>@EmilyFrank <span>13 Dec 2026</span></h3>
                                {' '}
                                <p>Wedding ultricies nibh non dolor maximus sceleue inte mollis rana neque the tempor interdum et malesuada ac ante fermen.</p>
                              </div>
                            </div>
                          </div>
                          {' '}
                          <div className="col-lg-10 col-md-12 mb-30">
                            <h3 className="mb-30">Leave a Reply</h3>
                            <form method="post" className="row">
                              <div className="col-lg-6 col-md-12">
                                <input type="text" name="name" id="name" placeholder="Full name" required />
                              </div>
                              {' '}
                              <div className="col-lg-6 col-md-12">
                                <input type="email" name="email" id="email" placeholder="Email address" required />
                              </div>
                              {' '}
                              <div className="col-lg-12 col-md-12">
                                <textarea name="message" id="message" cols="40" rows="4" placeholder="Your comment" required />
                              </div>
                              {' '}
                              <div className="col-lg-12 col-md-12">
                                <button type="submit"><i className="fa-light fa-paper-plane" /> Submit</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {' '}
            <div className="col-lg-4 offset-lg-1 col-md-12">
              <div className="blog-sidebar row">
                <div className="col-md-12">
                  <div className="widget search">
                    <form>
                      <input type="text" name="search" placeholder="Type here ..." />
                      {' '}
                      <button type="submit">
                        <i className="fa-light fa-magnifying-glass" aria-hidden="true" />
                      </button>
                    </form>
                  </div>
                </div>
                {' '}
                <div className="col-md-12">
                  <div className="widget">
                    <div className="widget-title">
                      <h6>Recent Posts</h6>
                    </div>
                    {' '}
                    <ul className="recent">
                      <li>
                        <div className="thum">
                          <img src="/img/blog/6.jpg" className="img-fluid" alt="" />
                        </div>
                        {' '}
                        <Link to="/post">How to plan a rehearsal dinner</Link>
                      </li>
                      {' '}
                      <li>
                        <div className="thum">
                          <img src="/img/blog/5.jpg" className="img-fluid" alt="" />
                        </div>
                        {' '}
                        <Link to="/post">A guide to men’s wedding ring styles</Link>
                      </li>
                      {' '}
                      <li>
                        <div className="thum">
                          <img src="/img/blog/4.jpg" className="img-fluid" alt="" />
                        </div>
                        {' '}
                        <Link to="/post">My favourite special bridesmaid gifts</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {' '}
                <div className="col-md-12">
                  <div className="widget">
                    <div className="widget-title">
                      <h6>Archives</h6>
                    </div>
                    {' '}
                    <ul>
                      <li>
                        <a href="#">December 2026</a>
                      </li>
                      {' '}
                      <li>
                        <a href="#">November 2026</a>
                      </li>
                      {' '}
                      <li className="mb-15">
                        <a href="#">October 2026</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {' '}
                <div className="col-md-12">
                  <div className="widget">
                    <div className="widget-title">
                      <h6>Categories</h6>
                    </div>
                    {' '}
                    <ul>
                      <li>
                        <a href="#"><i className="fa-light fa-angle-right" />Wedding Planner</a>
                      </li>
                      {' '}
                      <li>
                        <a href="#"><i className="fa-light fa-angle-right" />Destination</a>
                      </li>
                      {' '}
                      <li>
                        <a href="#"><i className="fa-light fa-angle-right" />Event Planner</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {' '}
                <div className="col-md-12">
                  <div className="widget">
                    <div className="widget-title">
                      <h6>Tags</h6>
                    </div>
                    {' '}
                    <ul className="tags">
                      <li>
                        <a href="#">Wedding</a>
                      </li>
                      {' '}
                      <li>
                        <a href="#">Destination</a>
                      </li>
                      {' '}
                      <li>
                        <a href="#">Event</a>
                      </li>
                      {' '}
                      <li>
                        <a href="#">Planner</a>
                      </li>
                      {' '}
                      <li>
                        <a href="#">Party</a>
                      </li>
                    </ul>
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
