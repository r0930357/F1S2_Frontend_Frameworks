import {FunctionComponent} from 'react'
import {useParams} from 'react-router-dom'
import {useGetList} from '../../../api/todo.ts'

interface ToDoListDetailProps {

}

const ToDoListDetail: FunctionComponent<ToDoListDetailProps> = () => {
    const {id} = useParams()
    const {data: list} = useGetList(Number(id))

    return (
        <>
            <h1>{list?.name}</h1>
            <h3 className={'text-secondary'}>Created by: {list?.owner?.username}</h3>
            <hr/>
        </>
    )
}

export default ToDoListDetail