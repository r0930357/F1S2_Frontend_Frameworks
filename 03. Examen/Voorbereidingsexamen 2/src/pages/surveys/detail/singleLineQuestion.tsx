import {FunctionComponent} from 'react'
import {useParams} from 'react-router-dom'
import {useDeleteQuestion} from '../../../api/questionAPI.ts'

interface SingleLineQuestionProps {
    id: string
    title: string
}

const SingleLineQuestion: FunctionComponent<SingleLineQuestionProps> = ({title, id}) => {
    const {id: questionId} = useParams()
    const {mutate: deleteQuestionMutation} = useDeleteQuestion(questionId)

    return (
        <div className={'question'}>
            <div>
                <h3>{title}</h3>
                <input disabled/>
            </div>
            <div>
                <button onClick={() => deleteQuestionMutation({questionId: id})}>X</button>
            </div>
        </div>
    )
}

export default SingleLineQuestion
