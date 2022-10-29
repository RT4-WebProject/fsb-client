import { BrowserRouter as Router, Routes } from 'react-router-dom'
import { Navbar } from '@'
import * as routes from './routes'
import { FourOFourPage } from './routes/404'

function App() {
  return (
    <div style={{ backgroundColor: '#e5e5e5', minHeight: '100vh' }}>
      <Router>
        <Navbar />
        <Routes>
          {Object.values(routes)}
          {FourOFourPage}
        </Routes>
      </Router>
    </div>
  )
}

export default App
