import { useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Preloader from '../components/Preloader.jsx'
import BackToTop from '../components/BackToTop.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function MainLayout() {
  const { pathname, search, hash } = useLocation()
  const needsSlash = !pathname.endsWith('/')

  useEffect(() => {
    if (needsSlash) return
    const target = hash && document.getElementById(hash.slice(1))
    if (target) target.scrollIntoView({ behavior: 'instant' })
    else window.scrollTo({ top: 0, behavior: 'instant' })
    const { Collapse, Dropdown } = window.bootstrap
    Collapse.getInstance('#navbar')?.hide()
    document.querySelectorAll('.navbar [data-bs-toggle="dropdown"]').forEach(el => Dropdown.getInstance(el)?.hide())
    window.initTemplateJS()
  }, [pathname, needsSlash])

  // One canonical form per page: /about -> /about/
  if (needsSlash) return <Navigate to={pathname + '/' + search + hash} replace />

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
