import { Fragment } from 'react'
import { Navbar } from './components/Navbar'
import { Routing } from './routes'
import GlobalStyles from './styles/GlobalStyles'

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Navbar />
      <Routing />
    </Fragment>
  )
}

export default App
