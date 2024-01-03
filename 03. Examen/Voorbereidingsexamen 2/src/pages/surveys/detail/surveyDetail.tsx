import {FunctionComponent, useContext} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import SingleLineQuestion from './singleLineQuestion.tsx'
import MultiLineQuestion from './multiLineQuestion.tsx'
import MultipleSelectQuestion from './multipleSelectQuestion.tsx'
import {useGetAllQuestionsForSurvey} from '../../../api/questionAPI.ts'
import {useGetAllSurveys} from '../../../api/surveyAPI.ts'
import LanguageContext from '../../../context/languageContext.tsx'

interface SurveyDetailProps {

}

const SurveyDetail: FunctionComponent<SurveyDetailProps> = () => {
    const {id} = useParams()
    const {data: surveys} = useGetAllSurveys()
    const name = surveys?.find(s => s.id === id)?.name
    const {data: questions} = useGetAllQuestionsForSurvey()
    const navigate = useNavigate()
    const {language} = useContext(LanguageContext)

    const getQuestionComponent = (question) => {
        if (question.type === 'single-line-answer') {
            return <SingleLineQuestion key={question.id} {...question}/>
        } else if (question.type === 'multi-line-answer') {
            return <MultiLineQuestion key={question.id} {...question}/>
        } else {
            return <MultipleSelectQuestion key={question.id} {...question}/>
        }
    }

    return (
        <>
            <button onClick={() => navigate(-1)}>{language === 'en' ? 'Back' : 'Terug'}</button>
            <h1>{name}</h1>

            {questions?.map(q => getQuestionComponent({q}))}
        </>
    )
}

export default SurveyDetail
