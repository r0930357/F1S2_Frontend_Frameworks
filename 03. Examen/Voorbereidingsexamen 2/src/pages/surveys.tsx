import {FunctionComponent, Suspense, useContext, useState} from 'react'
import LanguageContext from '../context/languageContext.tsx'
import Survey from './survey.tsx'
import {useCreateSurvey, useGetAllSurveys} from '../api/surveyApi.ts'
import LoadingPage from '../utils/loadingPage.tsx'
import LoadingPart from '../utils/loadingPart.tsx'

const Surveys: FunctionComponent = () => {
    const {language} = useContext(LanguageContext)
    const {data: surveys} = useGetAllSurveys()
    const createSurveyMutation = useCreateSurvey()
    const [newSurveyName, setNewSurveyName] = useState('')

    const createNewSurvey = () => {
        createSurveyMutation.mutate({name: newSurveyName})
        setNewSurveyName('')
    }

    return (
        <>
            <h1>{language === 'en' ? 'My surveys' : 'Mijn vragenlijsten'}</h1>

            <div className="create-survey-form">
                <input value={newSurveyName} onChange={e => setNewSurveyName(e.currentTarget.value)}/>
                <Suspense fallback={<LoadingPart/>}>
                <button disabled={newSurveyName === ''} onClick={createNewSurvey}>
                    {language === 'en' ? 'Create new survey' : 'Nieuwe vragenlijst maken'}
                </button>
                </Suspense>
            </div>

            <Suspense fallback={<LoadingPage/>}>
                {surveys?.map(s => <Survey key={s.id} {...s}/>)}
            </Suspense>
        </>
    )
}

export default Surveys
