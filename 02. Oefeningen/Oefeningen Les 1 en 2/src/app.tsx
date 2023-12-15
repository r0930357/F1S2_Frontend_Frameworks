import {FunctionComponent} from 'react'
import Excercise from './excercise/excercise.tsx'
import ExcerciseOne from './excerciseOne/excerciseOne.tsx'
import ExerciseTwo from './exerciseTwo/exerciseTwo.tsx'
import ExerciseThree from './exerciseThree/exerciseThree.tsx'
import ExerciseFour from './exerciseFour/exerciseFour.tsx'
import ExerciseFive from './exerciseFive/exerciseFive.tsx'
import ExerciseSix from './exerciseSix/exerciseSix.tsx'
import ExerciseSeven from './exerciseSeven/exerciseSeven.tsx'



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
            <Excercise title={'Exercise 6: Calculator'} background={'#77EEEE'}>
                <ExerciseSix/>
            </Excercise>
            <Excercise title={'Exercise 7: BMI Calculator'}>
                <ExerciseSeven/>
            </Excercise>
        </>
    )
}

export default App