export interface IGoal {
    goal: string
    id: string
}

export interface ISubject {
    name: string
    sp: number
    semester: 1
    id: string
    goals: IGoal[]
}