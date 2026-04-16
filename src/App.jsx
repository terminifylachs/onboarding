import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import QuestionnairePage from './components/QuestionnairePage'
import VSL2Page from './components/VSL2Page'

function App() {
  return (
    <div className="min-h-screen bg-void-navy text-white">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/fragebogen" element={<QuestionnairePage />} />
        <Route path="/2" element={<VSL2Page />} />
      </Routes>
    </div>
  )
}

export default App
