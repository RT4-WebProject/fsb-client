import { Text } from '@mantine/core'
import { BrowserRouter as Router, Routes } from 'react-router-dom'
import { Navbar } from '@'
import * as routes from './routes'
import { FourOFourPage } from './routes/404'

function App() {
  return (
    <div>
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
