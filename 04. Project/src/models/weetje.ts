export interface IOmschrijving {
    omschrijving: string
    id: string
}

export interface IWeetje {
    naam: string
    id: string
    omschrijvingen: IOmschrijving[]
}


