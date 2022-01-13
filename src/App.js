import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Routing } from './routes'
import GlobalStyles from './styles/GlobalStyles'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routing />
    </BrowserRouter>
  )
}

export default App
