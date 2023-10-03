import {FunctionComponent} from 'react'
import '../assets/main.css'

const translate: Record<number, string> = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
}

interface HeaderProps {
    table: number
}

const Header: FunctionComponent<HeaderProps> = ({table}) => {

    const numberToWord = (number: number) => {
        return translate [number] }

    return (
        <div className={'header'}>
            {numberToWord(table)}
        </div>
    )
}

export default Header