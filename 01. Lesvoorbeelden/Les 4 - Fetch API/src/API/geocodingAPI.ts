import Coordinates from '../models/Coordinates.ts'
import IGeoCodeResult from '../models/IGeoCodeResult.ts'
import {GeoCodeResultAlternative} from '../models/IGeoCodeResultAlternative.ts'

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


/**
 *
 * @param fetchResult Het antwoord van een succesvolle call voor een geocode request.
 * @return De geografische coördinaten van de eerste match, i.e. de locatie die het meest waarschijnlijk correct is.
 */
const getCoordinatesFromResult = (fetchResult: IGeoCodeResult): Coordinates | undefined => {
    return fetchResult?.resourceSets?.at(0)?.resources?.at(0)?.geocodePoints?.at(0)?.coordinates
}

/**
 * ALTERNATIVE VERSIE MET EEN GRATIS API VOOR HET GEVAL DAT BING NIET WERKT.
 *
 * @param fetchResult Het antwoord van een succesvolle call voor een geocode request.
 * @return De geografische coördinaten van de eerste match, i.e. de locatie die het meest waarschijnlijk correct is.
 */
const getCoordinatesFromResultV2 = (fetchResult: GeoCodeResultAlternative): Coordinates | undefined => {
    return [Number(fetchResult[0].lat), Number(fetchResult[0].lon)]
}
//endregion

