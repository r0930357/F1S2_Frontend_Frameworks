import Card from 'react-bootstrap/Card'
import {getStudentById} from '../../api/studentApi.ts'
import {FunctionComponent} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

const Student: FunctionComponent = () => {
    const {id} = useParams()
    const student = getStudentById(Number(id))
    const navigate = useNavigate()

    if (!student) {
        return <div>Student could not be found</div>
    }

    return (
        <Card>
            <Card.Header>{student?.name}</Card.Header>
            <Card.Body>
                <Card.Text>Id: {student?.id}</Card.Text>
                <Card.Text>Grade: {student?.grade}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <div onClick={() => navigate(-1)}>Back</div>
            </Card.Footer>
        </Card>
    )
}

export default Student
