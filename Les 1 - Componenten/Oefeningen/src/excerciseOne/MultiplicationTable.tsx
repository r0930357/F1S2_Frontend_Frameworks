import {FunctionComponent} from 'react'
import Row from './Row.tsx'
import Header from './Header.tsx'
import '../assets/main.css'

interface MultiplicationTableProps {
    table: number
}

const MultiplicationTable: FunctionComponent<MultiplicationTableProps> = ({table}) => {

    const Rows = []
    for (let i = 1; i < 11 ; i++) {
        Rows.push(<Row factor1={i} factor2={table} />)
    }

    return (
        <div className={'table'}>
            <Header table={table}/>
            {Rows}
        </div>
    )
}

export default MultiplicationTable