import {FunctionComponent} from 'react'
import NumberGrid from './numberGrid.tsx'

interface ExerciseFourProps {
    key : number
}

const ExerciseFour: FunctionComponent<ExerciseFourProps> = () => {
    return (
        <>
            <NumberGrid n={2}/>
            <NumberGrid n={3}/>
            <NumberGrid n={5}/>
        </>
    )
}

export default ExerciseFour