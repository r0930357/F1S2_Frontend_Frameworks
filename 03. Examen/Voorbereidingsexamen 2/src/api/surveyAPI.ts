import { persistToDatabase, retrieveFromDatabase } from './NIET_OPENEN_WORDT_GEBRUIKT_DOOR_DE_API_FILES/databaseSimulation.ts';
import { faker } from '@faker-js/faker';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'

//region Mutations & queries

/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          MUTATIONS & QUERIES
 * ---------------------------------------------------------------------------------------------------------------------
 */

export const useGetAllSurveys = () => {
    return useQuery({
        queryKey: ['survey'],
        queryFn: getAllSurveys,
        }
    )
}

export const useCreateSurvey = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: createSurvey,
        onSettled: async () => {
            await queryClient.invalidateQueries(['surveys'])
        },
    })
}

export const useDeleteSurvey = (surveyId: string) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: deleteSurvey,
        onMutate: () => {
            queryClient.setQueryData(['survey', surveyId], o => o.filter(x => x.id !== surveyId))
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries(['survey', surveyId])
        }
    })
}

//endregion

//region Fetching functions

/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          Fetching functions
 * ---------------------------------------------------------------------------------------------------------------------
 */

/**
 * Haal alle surveys op die in de database zitten.
 *
 * @return {Promise<Array<{
 *     name: string,
 *     id: string,
 *     createdAt: number,
 * }>>}
 */
export const getAllSurveys = async (): Promise<Array<{
    name: string;
    id: string;
    createdAt: number;
}>> => {
    const surveys = await retrieveFromDatabase('_surveys');
    return surveys.sort((a, b) => b.createdAt - a.createdAt);
};

/**
 * Maak een nieuwe survey aan.
 *
 * @param name {string} De naam van de survey.
 * @return {Promise<{
 *     name: string,
 *     id: string,
 *     createdAt: number,
 * }>}
 */
export const createSurvey = async ({ name }: { name: string }): Promise<{
    name: string;
    id: string;
    createdAt: number;
}> => {
    const survey = {
        name,
        id: faker.string.uuid(),
        createdAt: Date.now(),
    };
    const surveys = await retrieveFromDatabase('_surveys');
    await persistToDatabase('_surveys', [...surveys, survey]);
    return survey;
};

/**
 * Verwijder een bepaalde survey.
 *
 * @param id {string} Het id van de survey die verwijderd moet worden.
 * @return {Promise<void>}
 */
export const deleteSurvey = async ({ id }: { id: string }): Promise<void> => {
    const surveys = await retrieveFromDatabase('_surveys');
    await persistToDatabase('_surveys', surveys.filter(s => s.id !== id));
};

//endregion
