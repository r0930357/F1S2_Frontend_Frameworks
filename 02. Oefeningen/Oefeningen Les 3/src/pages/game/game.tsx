import {FunctionComponent} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'

interface GameProps {

}

const Game: FunctionComponent<GameProps> = () => {
    const navigate = useNavigate()
    const region = useLocation()

    return (
        <h1>Play the game!</h1>
    )
}

export default Game