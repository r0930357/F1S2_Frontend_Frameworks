import {FunctionComponent} from 'react'
import {useParams} from 'react-router-dom'
import {useDeleteQuestion} from '../../api/questionApi.ts'

interface SingleLineQuestionParams {
    title: string,
}

const SingleLineQuestion: FunctionComponent<SingleLineQuestionParams> = ({title}) => {
    const {id: surveyId} = useParams()
    const deleteQuestionMutation = useDeleteQuestion(surveyId)

    return (
        <div className={'question'}>
            <div>
                <h3>{title}</h3>
                <input disabled/>
            </div>
            <div>
                <button onClick={() => deleteQuestionMutation.mutate({questionId: id})}>X</button>
            </div>
        </div>
    )
}

export default SingleLineQuestion
