import {Container, Nav, Navbar} from 'react-bootstrap'
import {FunctionComponent} from 'react'
import {LinkContainer} from 'react-router-bootstrap'

const NavBarBootstrap: FunctionComponent = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
                <LinkContainer to={'/'}>
                <Navbar.Brand href="/">Les 3: SPA</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <LinkContainer to={'/'}>
                        <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={'foo'}>
                        <Nav.Link>Foo</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={'/bar'}>
                        <Nav.Link>Bar</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={'/class'}>
                        <Nav.Link>Class</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={'*'}>
                        <Nav.Link>Error page</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBarBootstrap
