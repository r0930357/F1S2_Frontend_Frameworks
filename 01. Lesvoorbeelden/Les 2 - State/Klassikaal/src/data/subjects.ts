import {ISubject} from '../models/ISubject.ts'

const subjects: ISubject[] = [
    {
        name: 'Javascript framework React',
        sp: 5,
        semester: 1,
        id: '6203412b-14f1-466a-a561-a33e4f4311d6',
        goals: [
            {
                goal: 'De student ontwikkelt een Single Page Application in React',
                id: 'db7173cd-c23a-4cd3-b731-bce96b069d5b',
            },
            {
                goal: "De student kan state management toepassen om data uit te wisselen tussen verschillende pagina's in een Single Page Application",
                id: 'de38eeaf-889c-48e2-b6d9-4d6dba7889fa',
            },
            {
                goal: 'De student kan een SPA opbouwen aan de hand van componenten',
                id: '7cb62148-d404-421e-96eb-db60ca90db7b',
            },
            {
                goal: 'De student kan APIs aanspreken vanuit React en deze gebruiken in een Single Page Application',
                id: 'fa3a0f7f-ab35-4741-9a9b-9e9fabd51177',
            },
        ],
    },
    {
        name: 'Agile en testing',
        sp: 3,
        semester: 1,
        id: 'a2af7e33-f198-44fb-8cc0-e34d27301834',
        goals: [
            {
                goal: 'De student identificeert wat Agile en Lean is',
                id: 'cb0d8804-eb8c-472a-92b9-eccd561e2560',
            },
            {
                goal: 'Kent de de Agile methode en kan dit toepassen in een projectwerk',
                id: 'eaa981e4-277f-42fe-a69f-1cef2206d016',
            },
            {
                goal: 'Kent de meeste voorkomende testvormen binnen softwareontwikkeling en weet wanneer en hoe deze toegepast worden',
                id: '179be1ee-384e-46e1-a69b-ae8c49e6d263',
            },
            {
                goal: 'Kan testscenario’s schrijven en toepassen op een projectwerk',
                id: '9d86cf79-8805-4dee-9d5f-802736f77392',
            },
        ],
    },
    {
        name: 'Mobiele applicaties',
        sp: 6,
        semester: 1,
        id: '476e4ee2-feea-482d-a840-2a1bf2380a0a',
        goals: [
            {
                goal: 'De student kan een mobiele hybrid-webview applicatie schrijven',
                id: 'adc72c96-aa32-4e90-9fb8-c0cd1d55ac28',
            },
            {
                goal: 'De student kan een hybrid-webview applicatie publiceren als Android applicatie',
                id: 'ff9a35f4-6884-4fb8-9f06-2adbda3c2319',
            },
            {
                goal: 'De student kan een mobiele applicatie aanbieden als progressive web app (PWA)',
                id: '9dbca9e8-2784-490a-9226-1d7aafabd557',
            },
            {
                goal: 'De student kan gebruik maken van een back-end-as-a-service',
                id: '5ba6f1d4-1905-472d-9eb5-3b81fb245602',
            },
            {
                goal: 'De student kan communiceren met een API',
                id: '38ac59ed-1c47-4fc8-935e-66013e97763b',
            },
            {
                goal: 'De student kan gebruikmaken van functies voorzien door het mobiele besturingssysteem (iOS of Android)',
                id: 'd8cb8e4e-37c9-4d2a-9100-84493bdd7395',
            },
        ],
    },
    {
        name: 'IT Topics',
        sp: 3,
        semester: 1,
        id: 'acd9dd00-e8a1-4346-ab31-9a53b5b4a3c3',
        goals: [
            {
                goal: 'De student volgt nieuwe ontwikkelingen in IT',
                id: 'b232fa84-bb9b-454c-a09d-8c01cbedc2da',
            },
            {
                goal: 'Kan een project planning in een projecttool interpreteren.',
                id: '9def09ce-e363-47f0-95ee-cc6c746094c9',
            },
        ],
    },
]

export default subjects
