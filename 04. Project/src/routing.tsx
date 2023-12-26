import {FunctionComponent} from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/home.tsx'
import Exercise from './pages/exercise/exercise.tsx'
import List from './pages/list/list.tsx'
import exercises from './data/exercises.ts'

const Routing: FunctionComponent = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/exercise'} element={<Exercise exercises={exercises}/>}/>
            <Route path={'/list'} element={<List/>}/>
        </Routes>
    )
}

export default Routing