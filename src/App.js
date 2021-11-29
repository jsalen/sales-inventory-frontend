import { Fragment } from 'react'
import { Navbar } from './components/Navbar'
import GlobalStyles from './styles/GlobalStyles'

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Navbar />
    </Fragment>
  )
}

export default App
