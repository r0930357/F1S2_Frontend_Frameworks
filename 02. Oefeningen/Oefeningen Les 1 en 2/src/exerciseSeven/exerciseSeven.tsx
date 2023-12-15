import styled from 'styled-components'
import {ChangeEvent, FunctionComponent, useState} from 'react'
import Slider from './slider.tsx'

const BmiLabel = styled.div`
  font-family: Verdana, serif;
  font-size: 20px;
`

const calculateBMI = (hoogteInCm: number, massa: number): number => {
    const hoogteInM = hoogteInCm / 100
    return Math.round(massa / (hoogteInM * hoogteInM))
}

const BMIContainer = styled.div`
  padding: 20px 40px;
  border: #333 2px dotted;
  width: 450px;
  border-radius: 10px;
  text-align: left;
  margin-top: 2em;
`

const ExerciseSeven: FunctionComponent = () => {
    const [height, setHeight] = useState(160)
    const [mass, setMass] = useState(60)
    const Bmi = calculateBMI(height, mass)

    let resultBmi = "";
    if (Bmi <= 20) {
        resultBmi = `${Bmi} Onder gewicht`;
    } else if (Bmi <= 25) {
        resultBmi = `${Bmi} Op gewicht`;
    } else if (Bmi <= 30) {
        resultBmi = `${Bmi} Overgewicht`;
    } else if (Bmi <= 35) {
        resultBmi = `${Bmi} Obesitas`;
    } else {
        resultBmi = `${Bmi} Morbide obesitas`;
    }

    return (
        <BMIContainer>
            <BmiLabel>Height={height}cm</BmiLabel>
            <Slider value={height} min={70} max={220} changeHandler={(evt: ChangeEvent<HTMLInputElement>) => setHeight(Number(evt.target.value))}/>
            <BmiLabel>Mass={mass}kg</BmiLabel>
            <Slider value={mass} min={30} max={150} changeHandler={(evt: ChangeEvent<HTMLInputElement>) => setMass(Number(evt.target.value))}/>
            <BmiLabel>BMI = {resultBmi}</BmiLabel>
        </BMIContainer>
    )
}

export default ExerciseSeven
