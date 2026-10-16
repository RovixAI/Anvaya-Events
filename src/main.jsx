import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './assets/css/plugins.css'
import './assets/css/style.css'
import App from './App.jsx'

// No StrictMode: its double-run effects would bind the template's jQuery plugins twice.
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
