import { StrictMode } from 'react' // Checa que todas las poiiticas de react esten funcionando, hace que App se llame 2 veces
import { createRoot } from 'react-dom/client'  //Nos va a linkear nuestro id root con nuestro render de react
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <App />
  //</StrictMode>,
)
