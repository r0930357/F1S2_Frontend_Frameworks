import { faker } from '@faker-js/faker';
import { generateAllData } from './generateData.ts';

/**
 * Retrieve an item from localstorage or use the default function if there is no item in the localstorage.
 *
 * @param storageKey {string} The key that should be used to retrieve items from localstorage.
 * @param timeout {boolean} Whether or not to implement an artificial timeout, defaults to true.
 * @return {Promise<any[]>}
 */
export const retrieveFromDatabase = async (storageKey: string, timeout: boolean = true): Promise<any[]> => {
    const storageItem = localStorage.getItem(storageKey);

    if (!storageItem) {
        generateAllData();
    }

    if (timeout) {
        await generateArtificialTimeout();
    }

    return JSON.parse(storageItem);
};

/**
 * Store an item in localstorage using the provided key.
 * @param storageKey {string} The key used to store data.
 * @param data {Object | Object[]} A serializable object or array of objects.
 * @param timeout {boolean} Whether to use an artificial timeout, defaults to true.
 * @return {Promise<void>}
 */
export const persistToDatabase = async (storageKey: string, data: Object | Object[], timeout: boolean = true): Promise<void> => {
    localStorage.setItem(storageKey, JSON.stringify(data));
    if (timeout) {
        await generateArtificialTimeout();
    }
};

/**
 * Wait for a few milliseconds to generate an async fetch call.
 *
 * @return {Promise<void>} A promise that will revolve within 1500ms but no sooner than 250ms.
 */
const generateArtificialTimeout = (): Promise<void> => {
    const timeout = faker.number.int({ min: 250, max: 1500 });
    return new Promise(r => setTimeout(r, timeout));
};
