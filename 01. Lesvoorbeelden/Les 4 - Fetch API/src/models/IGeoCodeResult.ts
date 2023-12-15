import Coordinates from './Coordinates.ts'

export interface IBBox {
    0: number
    1: number
    2: number
    3: number
}

interface IGeoCodeResourceSet {
    estimatedTotal: number
    resources: IGeoCodeResource[]
}

interface IGeoCodePoint {
    type: string
    coordinates: Coordinates
    calculationMethod: string
    usageTypes: string[]
}

interface IGeoCodeResource {
    ___type: string
    bbox: IBBox
    name: string
    point: {
        type: string
        coordinates: Coordinates
    }
    address: {
        adminDistrict: string
        adminDistrict2: string
        countryRegion: string
        formattedAddress: string
        locality: string
    }
    confidence: 'high' | 'medium' | 'low' | 'unknown'
    entityType: string
    geocodePoints: IGeoCodePoint[]
    matchCodes: string[]
}

interface IGeoCodeResult {
    authenticationResultCode: string
    brandLogoUri: string
    copyright: string
    resourceSets: IGeoCodeResourceSet[]
    traceId: string
}


export default IGeoCodeResult
