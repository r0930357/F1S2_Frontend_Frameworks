import {FunctionComponent} from 'react'
import Excercise from './excercise/excercise.tsx'
import ExcerciseOne from './excerciseOne/excerciseOne.tsx'
import ExerciseTwo from './exerciseTwo/exerciseTwo.tsx'
import ExerciseThree from './exerciseThree/exerciseThree.tsx'


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
            <Excercise title={'Exercise 4: Number grid'} background={'#77EEEE'}/>
            <Excercise title={'Exercise 5: Comment card'}/>
        </>
    )
}

export default App