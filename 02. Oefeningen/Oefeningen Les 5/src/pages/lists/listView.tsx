import {FunctionComponent} from 'react'
import IToDoList from '../../models/IToDoList.ts'
import {Button, ListGroup} from 'react-bootstrap'
import {useDeleteList} from '../../api/todo.ts'
import {Link} from 'react-router-dom'

interface ListViewProps {
    toDoLists: IToDoList[]
}

const ListView: FunctionComponent<ListViewProps> = ({toDoLists}) => {
    const {mutate: deleteList} = useDeleteList()

    return (
        <>
            <ListGroup>
                {toDoLists?.map(l => (
                    <ListGroup.Item key={l.id}>
                        <Link to={l.id.toString()}>
                        <h4>{l.name}</h4>
                        <div className={'text-secondary'}>
                            Created by: {l.owner?.username}
                        </div>
                        </Link>
                        <Button variant={'danger'}
                        onClick={() => deleteList({id: l.id})}>
                            Delete
                        </Button>
                        </ListGroup.Item>
                        ))}
            </ListGroup>
        </>
    )
}

export default ListView