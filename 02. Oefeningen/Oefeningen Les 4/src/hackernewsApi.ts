// region Mutations & queries

import {useQuery, UseQueryResult} from '@tanstack/react-query'

/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                              MUTATIONS & QUERIES
 * ---------------------------------------------------------------------------------------------------------------------
 */

// endregion

export const useGetItemIds = (endpoint: HackerNewsStoryEndpoint): UseQueryResult<number[], Error> => {
    return useQuery({
        queryKey: [endpoint],
        queryFn: () => getItemIds(endpoint)
    })
}

export const useGetItem = (id:number): UseQueryResult<Iitem, Error> => {
    return useQuery({
        queryKey: ['item', id],
        queryFn: () => getItem(id)
    })
}

// region API functions

import axios from 'axios'
import {Iitem} from './models/Iitem.ts'

/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                              API functions
 * ---------------------------------------------------------------------------------------------------------------------
 */

const client = axios.create({
    baseURL: 'https://hacker-news.firebaseio.com/v0/'
})

type HackerNewsStoryEndpoint = 'topstories' | 'askstories' | 'showstories' | 'jobstories'
const getItemIds = async (endpoint: HackerNewsStoryEndpoint): Promise<number[]> => {
    return client.get(
        `${endpoint}.json`
    )
}

const getItem = async (id: number): Promise<Iitem> => {
    return client.get(
        `/item/${id}.json`
    )
}

// endregion