import {FunctionComponent} from 'react'
import {useParams} from 'react-router-dom'
import {useDeleteQuestion} from '../../api/questionApi.ts'

interface MultiLineQuestionParams {
    title: string,
    id: string
}

const MultiLineQuestion: FunctionComponent<MultiLineQuestionParams> = ({title, id}) => {
    const {id: surveyId} = useParams()
    const deleteQuestionMutation = useDeleteQuestion(surveyId)
    return (
        <div className={'question'}>
            <div>
                <h3>{title}</h3>
                <textarea disabled/>
            </div>
            <div>
                <button onClick={() => deleteQuestionMutation.mutate({questionId: id})}>X</button>
            </div>
        </div>
    )
}

export default MultiLineQuestion
