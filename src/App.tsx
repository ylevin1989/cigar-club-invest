import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Invest from './pages/Invest'
import Bathhouse from './pages/Bathhouse'
import WineCellar from './pages/WineCellar'
import GlobalNav from './components/ui/GlobalNav'

function App() {
  return (
    <BrowserRouter>
      <main className="w-full min-h-screen bg-brand-bg font-sans text-brand-light selection:bg-brand-gold/30 selection:text-brand-light">
        <GlobalNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/bathhouse" element={<Bathhouse />} />
          <Route path="/wine-cellar" element={<WineCellar />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
