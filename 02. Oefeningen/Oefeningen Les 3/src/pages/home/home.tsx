import {FunctionComponent} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {LinkContainer} from 'react-router-bootstrap'
import {useNavigate} from 'react-router-dom'

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
        const navigate = useNavigate()
    return(
            <Container>
            <Row>
            <Col>Practice your capitals and become a geography pro!</Col>
            <Col>Want to know more about how other people are better then you? Click here!</Col>
            </Row>
            <Row>
            <Col className="d-grid gap-2">
                    <Button variant="primary" size="lg" onClick={() => navigate('/game')}>
                            Practice
                    </Button>
            </Col>
            <Col className="d-grid gap-2">
                    <Button variant="primary" size="lg"  onClick={() => navigate('/game')}>
                            Highscores
                    </Button>
            </Col>
            </Row>
            </Container>
            );
        }


export default Home