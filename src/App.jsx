import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import QuestionnairePage from './components/QuestionnairePage'

function App() {
  return (
    <div className="min-h-screen bg-void-navy text-white">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/fragebogen" element={<QuestionnairePage />} />
      </Routes>
    </div>
  )
}

export default App
