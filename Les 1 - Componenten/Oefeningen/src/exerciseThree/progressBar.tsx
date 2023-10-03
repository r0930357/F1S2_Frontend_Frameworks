import {FunctionComponent} from 'react'
import Bar from './Bar.tsx'
import Label from './Label.tsx'

interface ProgressBarProps {
    percentage: number
    color: string
}

const ProgressBar: FunctionComponent<ProgressBarProps> = ({percentage, color}) => {
    return (
        <>
            <svg height="80" width="400">

                /*De volledig bar, 100%*/
                <Bar percentage={100} color={"lightgrey"}/>

                /*Het voltooide gedeelte, l180 breed, of 180/360 = 50%*/
                <Bar percentage={percentage} color={color}/>

                /*De tekstuele weergave van het voltooide percentage*/
                <Label percentage={percentage} color={color}/>

            </svg>

        </>
    )
}

export default ProgressBar