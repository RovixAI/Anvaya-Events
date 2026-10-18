import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function headTag(selector, create) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  return el
}

// Per-page title, meta description, canonical and robots (handoff §16: unique title/description per indexable page).
export default function Seo({ title, description, noindex = false }) {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = title
    headTag('meta[name="description"]', () => Object.assign(document.createElement('meta'), { name: 'description' }))
      .setAttribute('content', description || '')
    headTag('link[rel="canonical"]', () => Object.assign(document.createElement('link'), { rel: 'canonical' }))
      .setAttribute('href', window.location.origin + pathname)
    const robots = headTag('meta[name="robots"]', () => Object.assign(document.createElement('meta'), { name: 'robots' }))
    robots.setAttribute('content', noindex ? 'noindex, follow' : 'index, follow')
  }, [title, description, noindex, pathname])

  return null
}
