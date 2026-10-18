// Inner-page hero built on the template's banner-header; the heading is the page's single H1.
export default function PageBanner({ subtitle, title, text, image, long = false, children }) {
  return (
    <section className="banner-header section-padding bg-img" data-overlay-dark="5" data-background={image}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-12 text-center">
            <div className="section-subtitle">{subtitle}</div>
            <h1 className={'section-title2' + (long ? ' title-long' : '')}>{title}</h1>
            {text && <p className="banner-text">{text}</p>}
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
