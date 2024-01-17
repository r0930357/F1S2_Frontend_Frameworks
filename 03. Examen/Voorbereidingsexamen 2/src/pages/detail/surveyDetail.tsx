import {FunctionComponent} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {useGetAllSurveys} from '../../api/surveyApi.ts'
import {useGetAllQuestionsForSurvey} from '../../api/questionApi.ts'
import SingleLineQuestion from './singleLineQuestion.tsx'
import MultiLineQuestion from './multiLineQuestion.tsx'
import MultipleSelectQuestion from './multipleSelectQuestion.tsx'

const SurveyDetail: FunctionComponent = () => {
    const {id} = useParams()
    const {data: surveys} = useGetAllSurveys()
    const name = surveys?.find(s => s.id === id)?.name
    const navigate = useNavigate()
    const {data: questions} = useGetAllQuestionsForSurvey(id)

    const getQuestionsComponent = (question) => {
        if (question.type === 'single-line-answer') {
            return <SingleLineQuestion key={question.id} {...questions}/>
        } else if
            (question.type === 'multi-line-answer') {
            return <MultiLineQuestion key={question.id} {...questions}/>
        } else {
            return <MultipleSelectQuestion key={question.id} {...questions}/>
        }
    }

    return (
        <>
            <button onClick={() => navigate(-1)}>
                Vorige pagina
            </button>
                <h1>{name}</h1>
                {questions?.map(q => getQuestionsComponent(q))}

        </>
    )
}

export default SurveyDetail
