import {IBBox} from './IGeoCodeResult.ts'


// Bedoeld voor een gratis API die gebruikt kan worden in de plaats van de Bing API.
// Bing is beter aangezien deze verkeer throttled en niet door verschillende personen tegelijkertijd gebruikt kan
// worden op eenzelfde IP.

// Maar als Bing plat ligt, is dit een goed alternatief.

export interface IGeoCodeResultAlternative {
    place_id: number
    license: string
    powered_by: string
    osm_type: string
    osm_id: number
    boundingBox: IBBox
    lat: string
    lon: string
    display_name: string
    class: string
    type: string
    importance: number
}

export type GeoCodeResultAlternative = IGeoCodeResultAlternative[]
