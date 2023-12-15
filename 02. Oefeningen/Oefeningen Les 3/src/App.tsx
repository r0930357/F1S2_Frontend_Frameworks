import {FunctionComponent} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from 'react-router-dom'
import Routing from './routing.tsx'
import Container from 'react-bootstrap/Container'
import NavigatieMenu from './pages/navigatieMenu.tsx'

interface AppProps {

}
const App: FunctionComponent<AppProps> = () => {
  return (
      <BrowserRouter>
          <NavigatieMenu/>
          <Container className="mt-4">
              <Routing/>
          </Container>
      </BrowserRouter>
  )
}

export default App
