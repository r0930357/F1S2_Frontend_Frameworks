import Coordinates from '../models/Coordinates.ts'
import axios from 'axios'
import IOneCallApiResponse from '../models/IOneCallApiResponse.ts'

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY

//region Mutations & queries

/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          MUTATIONS & QUERIES
 * ---------------------------------------------------------------------------------------------------------------------
 */

//endregion


//region API functions

/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          API functions
 * ---------------------------------------------------------------------------------------------------------------------
 */

const client = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
})

const getWeather = async (coordinates: Coordinates): Promise<IOneCallApiResponse> => {
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 500))
    const [latitude, longitude] = coordinates
    const {data} =  await client.get<IOneCallApiResponse>('/onecall', {
        params: {
            lat: latitude,
            lon: longitude,
            appid: API_KEY,
            units: 'metric',
            lang: 'nl-be',
        },
    })
    return data
}

//endregion



