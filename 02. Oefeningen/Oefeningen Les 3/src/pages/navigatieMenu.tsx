import {FunctionComponent} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
interface NavigatieMenuProps {

}

const NavigatieMenu: FunctionComponent<NavigatieMenuProps> = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
                <LinkContainer to={'/'}>
                    <Navbar.Brand href="/">Oefeningen: SPA</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <LinkContainer to={'/'}>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={'foo'}>
                            <Nav.Link>Game</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={'/bar'}>
                            <Nav.Link>Highscores</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigatieMenu