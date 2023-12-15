export interface Iitem {
    id: number
    deleted: boolean
    type: 'job' | 'story' | 'comment' | 'poll' | 'pollopt'
    by: string
    time: number
    dead: boolean
    kids: number[]
    parent: number
    text: string
}