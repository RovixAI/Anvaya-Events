import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import About from './pages/About.jsx'
import Celebrations from './pages/Celebrations.jsx'
import Contact from './pages/Contact.jsx'
import Faq from './pages/Faq.jsx'
import Home from './pages/Home.jsx'
import Journal from './pages/Journal.jsx'
import Locations from './pages/Locations.jsx'
import NotFound from './pages/NotFound.jsx'
import OurProcess from './pages/OurProcess.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import Services from './pages/Services.jsx'
import ThankYou from './pages/ThankYou.jsx'

// Sitemap from the Anvaya content handoff. Canonical URLs carry a trailing slash (MainLayout normalizes).
export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="our-process" element={<OurProcess />} />
        <Route path="celebrations" element={<Celebrations />} />
        <Route path="locations" element={<Locations />} />
        <Route path="journal" element={<Journal />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        <Route path="thank-you" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
