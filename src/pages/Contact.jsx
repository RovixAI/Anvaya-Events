export default function Contact() {
  return (
    <>
      <section className="banner-header section-padding bg-img" data-overlay-dark="5" data-background="/img/slider/11.jpg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-subtitle">Get in touch</div>
              {' '}
              <div className="section-title2">Contact us</div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact section-padding  bg-lightbrown">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="item">
                    <div className="front">
                      <div className="contents">
                        <span className="fa-light fa-location-dot" />
                        {' '}
                        <h2 className="title">Ewed Planner</h2>
                        {' '}
                        <p className="text">Centerpark Garden Green City 23 Avenue NY, USA</p>
                      </div>
                    </div>
                    {' '}
                    <div className="back">
                      <img className="img img-fluid" src="/img/contact.jpg" />
                      {' '}
                      <div className="contents">
                        <div className="btnx">Location map</div>
                      </div>
                    </div>
                  </div>
                </div>
                {' '}
                <div className="col-lg-6 col-md-6">
                  <div className="item">
                    <div className="front">
                      <div className="contents">
                        <span className="fa-light fa-phone" />
                        {' '}
                        <h2 className="title">Let's talk with us</h2>
                        {' '}
                        <p className="text">Phone: +1 234 567 8910</p>
                        {' '}
                        <p className="text">Fax: +1 234 567 8911</p>
                      </div>
                    </div>
                    {' '}
                    <div className="back">
                      <img className="img img-fluid" src="/img/contact2.jpg" />
                      {' '}
                      <div className="contents">
                        <div className="btnx">Talk with us</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {' '}
            <div className="col-lg-4 offset-lg-1 col-md-12">
              <div className="form2-sidebar mt--240">
                <form action="#" className="form2">
                  <div className="head">
                    <div className="row justify-content-between align-items-center">
                      <div className="col-auto">
                        <h5>Get in touch!</h5>
                      </div>
                      {' '}
                      <div className="col-auto">
                        <a href="tel:00000000000" className="ripple-icon">
                          <i className="fa-solid fa-phone" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {' '}
                  <div className="cont">
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <input type="text" placeholder="Name *" required />
                      </div>
                      {' '}
                      <div className="col-md-12 form-group">
                        <input type="email" placeholder="Email *" required />
                      </div>
                      {' '}
                      <div className="col-md-12 form-group">
                        <input type="text" placeholder="Phone *" required />
                      </div>
                      {' '}
                      <div className="col-md-12 form-group">
                        <input type="text" placeholder="Subject *" />
                      </div>
                      {' '}
                      <div className="col-md-12 form-group">
                        <textarea name="message" id="message" cols="30" rows="4" placeholder="Message" />
                      </div>
                      {' '}
                      <div className="col-md-12">
                        <button type="submit"><i className="fa-light fa-paper-plane" /> Submit</button>
                      </div>
                    </div>
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
