import {FunctionComponent} from 'react'
import ComputerScientist from './computerScientists.tsx'
import IComputerScientist from './models/ComputerScientist.tsx'

interface Props {
    scientists: IComputerScientist[]
}

const ComputerScientistListV3: FunctionComponent<Props> = ({scientists}) => {
    const output = []

    for (const scientist of scientists) {
        output.push(<ComputerScientist {...scientist}/>);
    }

    return (
        <div>
            <h1>Famous computer scientists</h1>
            <ul>
                {output}
            </ul>
        </div>
    )
}


export default ComputerScientistListV3