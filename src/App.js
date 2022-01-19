import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Routing } from './routes'
import GlobalStyles from './styles/GlobalStyles'
import { WarningModal } from './containers/WarningModal'

const App = () => {
  const [warningModal, setWarningModal] = useState(true)

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routing />
      {warningModal && <WarningModal setWarningModal={setWarningModal} />}
    </BrowserRouter>
  )
}

export default App
