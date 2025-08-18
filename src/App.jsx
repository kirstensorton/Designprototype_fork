import { Routes, Route } from 'react-router-dom'
import LayoutWithMainNav from './components/LayoutWithMainNav'
import SimplePage from './pages/SimplePage'
import Athletes from './pages/Athletes'
import Dashboard from './pages/Dashboard'
import Schedule from './pages/Schedule'
import Favorites from './pages/Favorites'
import Messaging from './pages/Messaging'
import Settings from './pages/Settings'
import AthleteDetail from './pages/AthleteDetail'
import GameDetail from './pages/GameDetail'

function App() {
  return (
    <LayoutWithMainNav>
      <Routes>
        <Route path="/" element={<SimplePage pageName="Home" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/athlete/:athleteId" element={<AthleteDetail />} />
        <Route path="/game/:gameId" element={<GameDetail />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/medical" element={<SimplePage pageName="Medical" />} />
        <Route path="/analysis" element={<SimplePage pageName="Analysis" />} />
        <Route path="/athlete" element={<Athletes />} />
        <Route path="/workloads" element={<SimplePage pageName="Workload" />} />
        <Route path="/questionnaires" element={<SimplePage pageName="Forms" />} />
        <Route path="/planning" element={<SimplePage pageName="Calendar" />} />
        <Route path="/activity" element={<SimplePage pageName="Activity log" />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/help" element={<SimplePage pageName="Help" />} />
      </Routes>
    </LayoutWithMainNav>
  )
}

export default App