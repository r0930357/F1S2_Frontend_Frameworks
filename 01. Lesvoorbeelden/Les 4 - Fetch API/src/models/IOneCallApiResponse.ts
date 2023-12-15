import IWeatherData, {IDailyWeatherData, IHourlyWeatherData} from './IWeatherData.ts'
import IMinuteForecast from './IMinuteForecast.ts'

// 7-day forecast
export type DailyForecast = [
    IDailyWeatherData,
    IDailyWeatherData,
    IDailyWeatherData,
    IDailyWeatherData,
    IDailyWeatherData,
    IDailyWeatherData,
    IDailyWeatherData
]

// 48-hour forecast
type HourlyForecast = [
    IHourlyWeatherData, IHourlyWeatherData, IHourlyWeatherData, IHourlyWeatherData,
    IHourlyWeatherData, IHourlyWeatherData, IHourlyWeatherData, IHourlyWeatherData,
    IHourlyWeatherData, IHourlyWeatherData, IHourlyWeatherData, IHourlyWeatherData,
    IHourlyWeatherData, IHourlyWeatherData, IHourlyWeatherData, IHourlyWeatherData,
    IHourlyWeatherData, IHourlyWeatherData, IHourlyWeatherData, IHourlyWeatherData,
    IHourlyWeatherData, IHourlyWeatherData, IHourlyWeatherData, IHourlyWeatherData,
    IHourlyWeatherData, IHourlyWeatherData, IHourlyWeatherData, IHourlyWeatherData,
    IHourlyWeatherData, IHourlyWeatherData, IHourlyWeatherData, IHourlyWeatherData,
    IHourlyWeatherData, IHourlyWeatherData, IHourlyWeatherData, IHourlyWeatherData,
    IHourlyWeatherData, IHourlyWeatherData, IHourlyWeatherData, IHourlyWeatherData,
    IHourlyWeatherData, IHourlyWeatherData, IHourlyWeatherData, IHourlyWeatherData,
    IHourlyWeatherData, IHourlyWeatherData, IHourlyWeatherData, IHourlyWeatherData,
]

interface IOneCallApiResponse {
    lat: number
    lon: number
    timezone: string
    timezone_offset: number
    current: IWeatherData
    minutely: IMinuteForecast[]
    hourly: HourlyForecast
    daily: DailyForecast
}

export default IOneCallApiResponse
