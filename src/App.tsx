import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Invest from './pages/Invest'

function App() {
  return (
    <BrowserRouter>
      <main className="w-full min-h-screen bg-brand-bg font-sans text-brand-light selection:bg-brand-gold/30 selection:text-brand-light">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invest" element={<Invest />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
