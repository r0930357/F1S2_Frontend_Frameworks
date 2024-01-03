import {FunctionComponent, Suspense, useContext, useState} from 'react'
import LanguageContext from '../../context/languageContext.tsx'
import Survey from './survey.tsx'
import {useCreateSurvey, useGetAllSurveys} from '../../api/surveyAPI.ts'
import LoadingPart from '../../utils/loadingPart.tsx'

interface SurveysProps {

}

const Surveys: FunctionComponent<SurveysProps> = () => {
    const {language} = useContext(LanguageContext)
    const {data: getAllSurveys} = useGetAllSurveys()
    const {mutate: createSurveyMutation} = useCreateSurvey()
    const [newSurveyName, setNewSurveyName] = useState('')

    const createNewSurvey = () => {
        createSurveyMutation({name: newSurveyName})
        setNewSurveyName('')
    }

    return (
        <>
            <h1>{language === 'en' ? 'My surveys' : 'Mijn vragenlijsten'}</h1>

            <div className={'create-survey-form'}>
                <input value={newSurveyName} onChange={e => setNewSurveyName(e.currentTarget.value)}/>
                <Suspense fallback={<LoadingPart/>}>
                    <button disabled={newSurveyName === ''} onClick={createNewSurvey}>
                        {language === 'en' ? 'Create new survey' : 'Nieuwe vragenlijst aanmaken'}
                    </button>
                </Suspense>
            </div>

            {getAllSurveys?.map(s => <Survey {...s} key={s.id}/>)}
        </>
    )
}

export default Surveys
