import {Card} from 'react-bootstrap'
import styled from 'styled-components'
import {FunctionComponent} from 'react'
import {IDailyWeatherData} from '../../models/IWeatherData.ts'

const StyledCard = styled(Card)`
  text-align: center;
  background-color: #3399ff;
`

const WeatherIcon = styled.img`
  font-size: 6em;
  margin: .2em;
`


const WeatherItem: FunctionComponent<IDailyWeatherData> = ({weather: [{icon, description}], temp: {day}, dt}) => {
    return (
        <StyledCard className={'mt-5 w-100'}>
            <Card.Body>
                <Card.Title>{new Date(dt * 1000).toLocaleDateString()}</Card.Title>
            </Card.Body>
            <WeatherIcon src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
            <Card.Body>
                <Card.Title>{day} °C </Card.Title>
                <Card.Subtitle>{description}</Card.Subtitle>
            </Card.Body>
        </StyledCard>
    )
}

export default WeatherItem
