import IComputerScientist from './models/ComputerScientist.tsx'
import {FunctionComponent} from 'react'

const ComputerScientist : FunctionComponent<IComputerScientist> = (props) => {
    const {firstName, lastName, birth, death, accomplishments} = props
    return (
        <li>
            {firstName} {lastName} ({birth} - {death}):
            <p>{accomplishments}</p>
        </li>
    )
}

export default ComputerScientist