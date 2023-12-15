import {FunctionComponent} from 'react'
import '../assets/main.css'

interface RowProps {
    factor1: number,
    factor2: number,
}

const Row: FunctionComponent<RowProps> = ({factor1, factor2}) => {
    return (
        <div className={'row'}>
            {factor1} x {factor1} = {factor1 * factor2}
        </div>
    )
}

export default Row