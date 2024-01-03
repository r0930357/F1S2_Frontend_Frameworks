import {FunctionComponent} from 'react'
import Surveys from './pages/surveys/surveys.tsx'
import SurveyDetail from './pages/surveys/detail/surveyDetail.tsx'
import {Outlet, Route, Routes} from 'react-router-dom'

interface RoutingProps {

}

const Routing: FunctionComponent<RoutingProps> = () => {
    return (
        <Routes>
            <Route path='/' element={<Outlet/>}>
                <Route index element={<Surveys/>}/>
                <Route path=':id' element={<SurveyDetail/>}/>
            </Route>
        </Routes>
    )
}

export default Routing
