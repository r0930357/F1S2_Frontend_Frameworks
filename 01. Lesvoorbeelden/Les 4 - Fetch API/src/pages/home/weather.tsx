import {Col, Row} from 'react-bootstrap'
import WeatherItem from './weatherItem.tsx'
import {FunctionComponent} from 'react'
import {IDailyWeatherData} from '../../models/IWeatherData.ts'

interface WeatherProps {
    city: string
    allowFetch: boolean
}

const Weather: FunctionComponent<WeatherProps> = ({city, allowFetch}) => {

    // if (geocodeError || weatherError) {
    //     return (
    //         <ErrorFallback>
    //             We konden het weer niet voor u ophalen :). ververs de pagina en probeer opnieuw, of contacteer ons als
    //             het probleem zich blijft vertonen.
    //         </ErrorFallback>
    //     )
    // }
    //
    // if (!coordinates) {
    //     return (
    //         <ErrorFallback>
    //             Geef a.u.b. een geldige locatie in voordat je het weer probeert te bekijken.
    //         </ErrorFallback>
    //     )
    //}

    const weatherItem = (day: IDailyWeatherData) => (
        <Col key={day.dt} xs={12} md={3} className="d-flex align-items-stretch">
            <WeatherItem {...day}/>
        </Col>
    )

    return (
        <Row className={'mb-5'}>
            {/*{sevenDayForecast?.map(weatherItem)}*/}
        </Row>
    )
}

export default Weather
