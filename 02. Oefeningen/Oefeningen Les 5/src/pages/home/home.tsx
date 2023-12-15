import {FormEventHandler, FunctionComponent, Suspense, useState, MouseEvent} from 'react'
import {Col, Form, Row} from 'react-bootstrap'
import FormSubmitButtonWithLoading from '../../utils/formSubmitButtonWithLoading.tsx'
import {useCreateList} from '../../api/todo.ts'
import UserSelection from '../lists/userSelection.tsx'
import LoadingPart from '../../utils/loadingPart.tsx'

const Home: FunctionComponent = () => {
    const [name, setName] = useState<string>('')
    const [isPrivate, setIsPrivate] = useState<boolean>(true)
    const [sharedUsers, setSharedUsers] = useState<Set<string>>(new Set())
    const {mutate: createList, isLoading} = useCreateList()

    const addOrRemoveUser = (evt: MouseEvent, id: string) => {
        evt.preventDefault()
        setSharedUsers(old => {
            const newSharedUsers: Set<string> = new Set(old)
            if (newSharedUsers.has(id)) {
                newSharedUsers.delete(id)
            } else {
                newSharedUsers.add(id)
            }
            return newSharedUsers
        })
    }

    const submitForm: FormEventHandler = (evt) => {
        evt.preventDefault()
        createList({isPrivate, name, sharedUsers: Array.from(sharedUsers)})
        setName('')
        setIsPrivate(false)
    }

    const userSelection = (
        <Col>
            <Suspense fallback={<LoadingPart/>}>
                <UserSelection sharedUsers={sharedUsers} addOrRemoveUser={addOrRemoveUser}/>
            </Suspense>
        </Col>
    )

    return (
        <>
            <h1>New ToDo List</h1>
            <Form onSubmit={submitForm}>
                <Row>
                    <Col>

                <Form.Group className="mb-3">
                    <Form.Label>List name</Form.Label>
                    <Form.Control type="text" value={name} onChange={evt => setName(evt.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">

                <Form.Check
                    checked={isPrivate}
                    onChange={evt => setIsPrivate(evt.target.checked)}
                    label={`Is Private`}
                />

                </Form.Group>

                    </Col>

                    {isPrivate && userSelection}

                </Row>
                <FormSubmitButtonWithLoading
                    loading={isLoading}
                    text={'Create ToDo List'}
                    loadingText={'Creating ToDo List...'}/>
            </Form>
        </>
    )
}

export default Home
