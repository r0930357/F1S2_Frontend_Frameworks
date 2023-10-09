import {FunctionComponent} from 'react'
import Excercise from './excercise/excercise.tsx'
import ExcerciseOne from './excerciseOne/excerciseOne.tsx'
import ExerciseTwo from './exerciseTwo/exerciseTwo.tsx'
import ExerciseThree from './exerciseThree/exerciseThree.tsx'
import ExerciseFour from './exerciseFour/exerciseFour.tsx'
import ExerciseFive from './exerciseFive/exerciseFive.tsx'



interface AppProps {

}

const App: FunctionComponent<AppProps> = () => {
    return (
        <>
            <Excercise title={'Exercise 1: Multiplication table'}>
                <ExcerciseOne/>
            </Excercise>
            <Excercise title={'Exercise 2: Rater'} background={'#77EEEE'}>
                <ExerciseTwo/>
            </Excercise>
            <Excercise title={'Exercise 3: Progressbar'}>
                <ExerciseThree/>
            </Excercise>
            <Excercise title={'Exercise 4: Grid'} background={'#77EEEE'}>
                <ExerciseFour/>
            </Excercise>
            <Excercise title={'Exercise 5: Comment card'}>
                <ExerciseFive/>
            </Excercise>
        </>
    )
}

export default App