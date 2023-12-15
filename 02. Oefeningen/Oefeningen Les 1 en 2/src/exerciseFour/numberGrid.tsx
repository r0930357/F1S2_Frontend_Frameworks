import {FunctionComponent} from 'react'
import '../assets/exerciseFour.css'

interface NumberGridProps {
   n: number
}

const NumberGrid: FunctionComponent<NumberGridProps> = ({n}) => {

        const squares = []
        for (let i = 0; i < n; i++) {
            const row = []
            for (let j = 0; j < n; j++) {
                row.push(<button key={j} className={'square'}>{i * n + j + 1}</button>)
            }
            squares.push(<div key={i} className={'grid-row'}>{row}</div>)
        }

        return (
            <div className={'grid'}>
                {squares}
            </div>
        )
    }
export default NumberGrid