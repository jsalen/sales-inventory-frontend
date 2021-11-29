import { Fragment } from 'react'
import { Layout } from './components/Layout'
import { Navbar } from './components/Navbar'
import { Routing } from './routes'
import GlobalStyles from './styles/GlobalStyles'

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Navbar />
      <Layout>
        <Routing />
      </Layout>
    </Fragment>
  )
}

export default App
