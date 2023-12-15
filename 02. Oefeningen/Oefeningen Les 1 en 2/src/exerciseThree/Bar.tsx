import {FunctionComponent} from 'react'

interface BarProps {
    percentage: number
    color: string
}

const Bar: FunctionComponent<BarProps> = ({percentage, color}) => {
    const d=`M20 55 l${(percentage / 100 * 360)} 0`

    return (
        <g fill="none" stroke={color} strokeWidth="25">
            <path strokeLinecap="round" d={d} />
        </g>
    )
}

export default Bar