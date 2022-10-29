import { Routes } from 'react-router-dom'
import { Navbar } from '@'
import * as routes from './routes'
import { FourOFourPage } from './routes/404'
import { useGetMe } from 'ctx'

function Main() {
  const { me, authentified } = useGetMe()
  console.log({
    me,
  })
  if (authentified === null) return null

  return (
    <Routes>
      {Object.values(routes)}
      {FourOFourPage}
    </Routes>
  )
}
function App() {
  return (
    <div style={{ backgroundColor: '#e5e5e5', minHeight: '100vh' }}>
      <Navbar />
      <Main />
    </div>
  )
}

export default App
