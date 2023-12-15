import {FunctionComponent} from 'react'
import {Form} from 'react-bootstrap'

const Home: FunctionComponent = () => {
    return (
        <>
            <h2>Weerbericht</h2>

            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Toon weer voor:</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
            </Form>

        </>
    )
}

export default Home
