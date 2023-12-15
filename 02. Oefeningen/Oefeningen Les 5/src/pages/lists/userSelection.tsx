import {FunctionComponent, MouseEvent} from 'react'
import {useGetProfiles} from '../../api/users.ts'
import {Form, ListGroup, ListGroupItem} from 'react-bootstrap'
import useIsEditing from '../../hooks/useIsEditing.ts'

interface UserSelectionProps {
    sharedUsers: Set<string>
    addOrRemoveUser: (evt: MouseEvent, id: string) => void
}

const UserSelection: FunctionComponent<UserSelectionProps> = ({sharedUsers, addOrRemoveUser}) => {
    const [username, setUserName, isEditing] = useIsEditing({defaultValue: ''})
    const {data: users} = useGetProfiles(username, !isEditing)

    return (
        <>
            <Form.Group className="mb-3">
                <Form.Label>List name</Form.Label>
                <Form.Control type="text" value={username} onChange={evt => setUserName(evt.target.value)}/>
            </Form.Group>

            <ListGroup>
                {users?.map(u => (
                    <ListGroupItem key={u.id}
                                   onClick={(evt) => addOrRemoveUser(evt, u.id)}
                                   action active={sharedUsers.has(u.id)}>
                        {u.username}
                    </ListGroupItem>
                ))}
            </ListGroup>
        </>
    )
}

export default UserSelection