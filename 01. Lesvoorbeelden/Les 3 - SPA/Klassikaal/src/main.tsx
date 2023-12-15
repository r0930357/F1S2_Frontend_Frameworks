import ReactDOM from 'react-dom/client'
import {StrictMode} from 'react'
import {Container} from 'react-bootstrap'
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import NavBarNoBootstrap from './navbarNoBootstrap.tsx'
import {BrowserRouter} from 'react-router-dom'
import Routing from './routing.tsx'
import NavBarBootstrap from './navbarBootstrap.tsx'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
)

root.render(
    <StrictMode>
        <BrowserRouter>
                {/*<NavBarNoBootstrap/>*/}
                <NavBarBootstrap/>
                <Container className={'mt-4'} >
            <Routing/>
                </Container>
        </BrowserRouter>
    </StrictMode>
)
