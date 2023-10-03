import {FunctionComponent, ReactNode} from 'react'
import '../assets/exerciseFour.css'

interface NumberGridProps {
   n: number
}

const NumberGrid: FunctionComponent<NumberGridProps> = ({n}) => {

    const grid: ReactNode [] = []
        for (let i = 0; i < n; i++) {
            const rows: ReactNode [] = []
            for (let j = 0; j < n; i++) {
                rows.push(<button className={'square'}>{i * n + j + 1}</button>)
            }
            grid.push(<div className={'grid-row'}></div>)
    }

    return (
        <div className="grid">
            {grid}
        </div>
    )
}

export default NumberGrid