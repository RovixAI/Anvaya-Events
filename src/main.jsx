import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './pages/About.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'
import Faq from './pages/Faq.jsx'
import GalleryImage from './pages/GalleryImage.jsx'
import GalleryVideo from './pages/GalleryVideo.jsx'
import Home from './pages/Home.jsx'
import Home2 from './pages/Home2.jsx'
import Home3 from './pages/Home3.jsx'
import Home4 from './pages/Home4.jsx'
import NotFound from './pages/NotFound.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Portfolio2 from './pages/Portfolio2.jsx'
import PortfolioDetails from './pages/PortfolioDetails.jsx'
import PortfolioDetails2 from './pages/PortfolioDetails2.jsx'
import PortfolioDetails3 from './pages/PortfolioDetails3.jsx'
import PortfolioDetails4 from './pages/PortfolioDetails4.jsx'
import Post from './pages/Post.jsx'
import Pricing from './pages/Pricing.jsx'
import Services from './pages/Services.jsx'
import ServicesDetails from './pages/ServicesDetails.jsx'
import Team from './pages/Team.jsx'
import TeamSingle from './pages/TeamSingle.jsx'
import Testimonials from './pages/Testimonials.jsx'

// No StrictMode: its double-run effects would bind the template's jQuery plugins twice.
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<Faq />} />
          <Route path="gallery-image" element={<GalleryImage />} />
          <Route path="gallery-video" element={<GalleryVideo />} />
          <Route path="index2" element={<Home2 />} />
          <Route path="index3" element={<Home3 />} />
          <Route path="index4" element={<Home4 />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio-details" element={<PortfolioDetails />} />
          <Route path="portfolio-details2" element={<PortfolioDetails2 />} />
          <Route path="portfolio-details3" element={<PortfolioDetails3 />} />
          <Route path="portfolio-details4" element={<PortfolioDetails4 />} />
          <Route path="portfolio2" element={<Portfolio2 />} />
          <Route path="post" element={<Post />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="services" element={<Services />} />
          <Route path="services-details" element={<ServicesDetails />} />
          <Route path="team" element={<Team />} />
          <Route path="team-single" element={<TeamSingle />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
