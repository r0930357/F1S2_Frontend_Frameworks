import {generateAllData} from './generateData.js'

/**
 * Retrieve an item from localstorage or use the default function if there is no item in the localstorage.
 *
 * @param storageKey {string} The key that should be used to retrieve items from localstorage.
 * @return {any[]}
 */
export const retrieveFromDatabase = (storageKey) => {
    const storageItem = localStorage.getItem(storageKey)

    if (!storageItem) {
        generateAllData()
    }

    return JSON.parse(storageItem)
}


/**
 * Store an item in localstorage using the provided key.
 * @param storageKey {string} The key used to store data.
 * @param data {Object | Object[]} A serializable object or array of objects.
 */
export const persistToDatabase = (storageKey, data) => {
    localStorage.setItem(storageKey, JSON.stringify(data))
}
