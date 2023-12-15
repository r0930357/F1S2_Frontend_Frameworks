import Card from 'react-bootstrap/Card'
import {FunctionComponent} from 'react'

const Foo: FunctionComponent = () => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Foo</Card.Title>
                <p>Mauris sem velit, vehicula eget sodales vitae,
                    rhoncus eget sapien:</p>

                <ol>
                    <li>Nulla pulvinar diam</li>
                    <li>Facilisis bibendum</li>
                    <li>Vestibulum vulputate</li>
                    <li>Eget erat</li>
                    <li>Id porttitor</li>
                </ol>

            </Card.Body>
        </Card>
    )
}

export default Foo
