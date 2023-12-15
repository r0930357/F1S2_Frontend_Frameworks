import IWeatherCondition from './IWeatherCondition.ts'

interface IDailyTemperature {
    morn: number
    day: number
    eve: number
    night: number
    min?: number
    max?: number
}

interface SnowRainInfo {
    '1h'?: string
}

interface IWeatherData {
    dt: number
    sunrise: number
    sunset: number
    moonrise?: number
    moonset?: number
    temp: number | IDailyTemperature
    feelsLike: number | IDailyTemperature
    pressure: number
    humidity: number
    dewPoint: number
    uvi: number
    clouds: number
    visibility: number
    windSpeed: number
    windDeg: number
    windGust?: number
    weather: IWeatherCondition[]
    rain: SnowRainInfo
    snow: SnowRainInfo
    pop?: number
}

export interface IDailyWeatherData extends IWeatherData{
    temp: IDailyTemperature
}

export interface IHourlyWeatherData extends IWeatherData{
    temp: number
}

export default IWeatherData
