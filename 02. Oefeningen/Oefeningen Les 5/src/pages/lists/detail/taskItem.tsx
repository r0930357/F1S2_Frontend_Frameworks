import {FunctionComponent} from 'react'
import ITask from '../../../models/ITask.ts'
import {Button, ListGroupItem} from 'react-bootstrap'

const TaskItem: FunctionComponent<ITask> = ({id, complete, name, createdBy, completedBy, toDoListId}) => {
    const deleteBtn = (
        <div className={'d-grid mt-2'}>
            <Button variant="danger">
                Delete task
            </Button>
        </div>
    )

    return (
        <ListGroupItem className={'d-flex flex-column'}>
            <div className={'d-flex flex-row'}>
                <div className="ms-2 me-auto">
                    <div className="fw-bold fs-3" style={{height: '1em'}}>
                        <div>{name}</div>
                    </div>
                    <div className={'text-muted mt-3'}>
                        <div style={{height: '1em'}}>Time remaining:</div>
                        Created by
                    </div>
                </div>
                <div className={'flex-grow-1'}/>
                <div className="ms-2 me-auto d-flex flex-column align-items-end">
                    <Button variant='link' className="fw-bold fs-3 text-decoration-none" style={{height: '2em'}}>
                        {complete ? <span>&#x1F5F9;</span> : <span>&#x2610;</span>}
                    </Button>
                    <div className={'text-muted'}>
                        {complete ? <span>Completed by</span> : <></>}
                        <div/>
                    </div>
                </div>
            </div>
            <div>
                {deleteBtn}
            </div>
        </ListGroupItem>
    )
}

export default TaskItem
