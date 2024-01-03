export interface IQuestion {
    id: string,
    key: string,
    surveyId: string,
    title: string,
    type: 'single-line-answer' | 'multi-line-answer' | 'multiple-select',
    options: Array<{
        name: string,
        id: string,
    }> | null
}