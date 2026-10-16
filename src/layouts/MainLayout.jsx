import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Preloader from '../components/Preloader.jsx'
import BackToTop from '../components/BackToTop.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function MainLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    const { Collapse, Dropdown } = window.bootstrap
    Collapse.getInstance('#navbar')?.hide()
    document.querySelectorAll('.navbar [data-bs-toggle="dropdown"]').forEach(el => Dropdown.getInstance(el)?.hide())
    window.initTemplateJS()
  }, [pathname])

  return (
    <>
      <Preloader />
      <BackToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
