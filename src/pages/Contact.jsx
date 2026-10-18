import { useNavigate } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'
import { CONTACT } from '../data/site.js'

const EVENT_TYPES = ['Wedding / Wedding Weekend', 'Pre-Wedding Event', 'Milestone Celebration', 'Corporate Event', 'Intimate Gathering', 'Other']

function Field({ label, children, wide = false }) {
  return (
    <div className={(wide ? 'col-md-12' : 'col-md-6') + ' form-group'}>
      <label className="d-block mb-0">
        <span className="visually-hidden">{label}</span>
        {children}
      </label>
    </div>
  )
}

export default function Contact() {
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    // TODO before launch: send the inquiry to the approved shared inbox or CRM (handoff §14). Until then nothing is transmitted.
    navigate('/thank-you/')
  }

  return (
    <>
      <Seo
        title="Contact Anvaya | Plan Your Celebration"
        description="Tell Anvaya about your wedding, milestone or corporate event. Share your date, location and vision to start the conversation."
      />
      {/* Section tag is PROPOSED — requires approval. */}
      <PageBanner
        subtitle="Contact Anvaya"
        title="Tell us what you’re dreaming of."
        text="A few details are all we need to begin understanding your celebration."
        image="/img/slider/11.jpg"
      >
        <a href="#inquiry" className="button-2 mt-20">Send Your Inquiry</a>
      </PageBanner>
      <section className="contact section-padding bg-lightbrown">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-30">
              {/* PLACEHOLDER contact block — details require approval. */}
              <div className="contact-info">
                <h2 className="section-title">Contact Information</h2>
                <ul className="list-unstyled">
                  <li><i className="fa-light fa-phone" aria-hidden="true" /> <span>Phone: {CONTACT.phoneHref ? <a href={CONTACT.phoneHref}>{CONTACT.phone}</a> : CONTACT.phone}</span></li>
                  <li><i className="fa-light fa-envelope" aria-hidden="true" /> <span>Email: {CONTACT.emailHref ? <a href={CONTACT.emailHref}>{CONTACT.email}</a> : CONTACT.email}</span></li>
                  <li><i className="fa-light fa-location-dot" aria-hidden="true" /> <span>Service Area / Location: {CONTACT.locationShort}</span></li>
                  <li><i className="fa-brands fa-instagram" aria-hidden="true" /> <span>Instagram: {CONTACT.instagramHref ? <a href={CONTACT.instagramHref} target="_blank" rel="noopener noreferrer">{CONTACT.instagram}</a> : CONTACT.instagram}</span></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7 offset-lg-1 col-md-12">
              <form id="inquiry" className="form2" onSubmit={handleSubmit}>
                {/* Form heading and intro are PROPOSED — require approval. */}
                <div className="head">
                  <h2>Tell Us About Your Celebration</h2>
                  <p>Share the event details below so the team can understand your plans and the support you may need.</p>
                </div>
                <div className="cont">
                  <div className="row">
                    <Field label="Name"><input type="text" name="name" placeholder="Name *" autoComplete="name" required /></Field>
                    <Field label="Email"><input type="email" name="email" placeholder="Email *" autoComplete="email" required /></Field>
                    <Field label="Phone (optional)"><input type="tel" name="phone" placeholder="Phone (optional)" autoComplete="tel" /></Field>
                    <Field label="Preferred contact method">
                      <select name="preferred_contact" defaultValue="" required>
                        <option value="" disabled>Preferred contact method *</option>
                        <option>Email</option>
                        <option>Phone</option>
                      </select>
                    </Field>
                    <Field label="Event type">
                      <select name="event_type" defaultValue="" required>
                        <option value="" disabled>Event type *</option>
                        {EVENT_TYPES.map(t => <option key={t}>{t}</option>)}
                      </select>
                    </Field>
                    <Field label="Event date or date flexibility"><input type="text" name="event_date" placeholder="Event date or date flexibility *" required /></Field>
                    <Field label="City / venue"><input type="text" name="city_venue" placeholder="City / venue *" required /></Field>
                    <Field label="Estimated guest count"><input type="number" name="guest_count" min="1" placeholder="Estimated guest count *" required /></Field>
                    <Field label="Number of events / days"><input type="text" name="events_days" placeholder="Number of events / days *" required /></Field>
                    <Field label="Estimated overall budget range (optional)"><input type="text" name="budget" placeholder="Estimated overall budget range (optional)" /></Field>
                    <Field label="Planning support needed" wide><input type="text" name="support_needed" placeholder="Planning support needed *" required /></Field>
                    <Field label="Message" wide><textarea name="message" rows="4" placeholder="Message *" required /></Field>
                    <div className="col-md-12 form-group">
                      {/* Consent wording is PROPOSED; Privacy Policy copy must come from approved client/legal text (handoff §17). */}
                      <label className="consent">
                        <input type="checkbox" name="privacy_consent" required />
                        <span>I agree to the <a href="#0" className="text-decoration-line-bottom">Privacy Policy</a> and consent to Anvaya using these details to respond to my inquiry. *</span>
                      </label>
                    </div>
                    <div className="col-md-12">
                      <button type="submit"><i className="fa-light fa-paper-plane" /> Send Your Inquiry</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
