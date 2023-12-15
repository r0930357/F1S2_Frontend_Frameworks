import {FunctionComponent} from 'react'
import {Tab, Tabs} from 'react-bootstrap'
import {useGetLists} from '../../api/todo.ts'
import {useGetProfile} from '../../api/users.ts'
import ListView from './listView.tsx'

interface ToDoListsProps {

}

const ToDoLists: FunctionComponent<ToDoListsProps> = () => {
    const {data: lists} = useGetLists()
    const {data: profile} = useGetProfile()

    const myLists = lists?.filter(l => l.ownerId === profile?.id)
    const sharedWithMe = lists?.filter(l => l.isPrivate && l.ownerId != profile?.id)
    const publicLists = lists?.filter(l => !l.isPrivate)

    return (
        <>
            <Tabs
                defaultActiveKey="my-lists"
                className="mb-3"
            >
                <Tab eventKey="my-lists" title="My Lists">
                    <ListView toDoLists={myLists ?? []}/>
                </Tab>
                <Tab eventKey="shared-lists" title="Shared With Me">
                    <ListView toDoLists={sharedWithMe ?? []}/>
                </Tab>
                <Tab eventKey="public-lists" title="Public Lists" >
                    <ListView toDoLists={publicLists ?? []}/>
                </Tab>
            </Tabs>
        </>
    )
}

export default ToDoLists