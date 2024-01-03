import {FunctionComponent} from 'react'
import {useParams} from 'react-router-dom'
import {useDeleteSurvey} from '../../../api/surveyAPI.ts'
import {useDeleteQuestion} from '../../../api/questionAPI.ts'

interface MultiLineQuestionProps {
    id: string
    title: string
}

const MultiLineQuestion: FunctionComponent<MultiLineQuestionProps> = ({id, title}) => {
    const {id: questionId} = useParams()
    const {mutate: deleteQuestionMutation} = useDeleteQuestion(questionId)

    return (
        <div className={'question'}>
            <div>
                <h3>{title}</h3>
                <textarea disabled/>
            </div>
            <div>
                <button onClick={() => deleteQuestionMutation({questionId: id})}>X</button>
            </div>
        </div>
    )
}

export default MultiLineQuestion
