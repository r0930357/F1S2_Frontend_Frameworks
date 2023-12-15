import {FunctionComponent} from 'react'
import MultiplicationTable from './MultiplicationTable.tsx'
import '../assets/main.css'

const ExcerciseOne: FunctionComponent = () => {
    return (
        <div className={'exercise'}>
            <MultiplicationTable table={8}/>
            <MultiplicationTable table={7}/>
        </div>
    )
}

export default ExcerciseOne