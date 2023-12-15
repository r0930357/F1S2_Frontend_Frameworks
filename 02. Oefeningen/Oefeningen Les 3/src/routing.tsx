import {FunctionComponent} from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/home/home.tsx'
import PageNotFound from './pages/pageNotFound/pageNotFound.tsx'
import Game from './pages/game/game.tsx'
import HighScores from './pages/highscores/highScores.tsx'

const Routing: FunctionComponent = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/game'} element={<Game/>}/>
            <Route path={'/highScores'} element={<HighScores/>}/>
            <Route path={'*'} element={<PageNotFound/>}/>
        </Routes>
    )
}

export default Routing