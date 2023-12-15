import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import {Link} from 'react-router-dom'
import {getAllStudents} from '../../api/studentApi.ts'
import {FunctionComponent, ReactElement} from 'react'
import Student from '../../models/student.ts'

const Class: FunctionComponent = () => {
    const students = getAllStudents()

    const studentItem = (s: Student): ReactElement => (
        <ListGroupItem key={s.id}>
            <Link to={`${s.id}`}>
                {s.name}
            </Link>

        </ListGroupItem>
    )

    return (
        <>
            <Card>
                <Card.Header>Class</Card.Header>

                <ListGroup>
                    {students.map(s => studentItem(s))}
                </ListGroup>
                <Card.Footer className="text-muted">
                    <Link to={'/'}>Back</Link>
                </Card.Footer>
            </Card>
        </>
    )
}
export default Class
