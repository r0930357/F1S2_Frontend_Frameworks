import {FunctionComponent} from 'react'
import {useParams} from 'react-router-dom'
import {useDeleteSurvey} from '../../../api/surveyAPI.ts'
import {useDeleteQuestion} from '../../../api/questionAPI.ts'

interface MultipleSelectQuestionProps {
    id: string
    title: string
    options: []
}

const MultipleSelectQuestion: FunctionComponent<MultipleSelectQuestionProps> = ({title,options}) => {
    const {id: questionId} = useParams()
    const {mutate: deleteQuestionMutation} = useDeleteQuestion(questionId)

    return (
        <div className={'question'}>
            <div>
                <h3>{title}</h3>
                <fieldset disabled={true}>
                    <legend>Choose all that apply</legend>
                    {options.map(o => (
                        <div key={o.id}>
                            <input type="checkbox" id={o.id}/>
                            <label>{o.name}</label>
                        </div>
                    ))}
                </fieldset>
            </div>
            <div>
                <button onClick={() => deleteQuestionMutation({questionId: id})}>
                    X
                </button>
            </div>
        </div>

)
}

export default MultipleSelectQuestion
