import {FunctionComponent} from 'react'
import {ISubject} from '../models/ISubject.ts'
import Subject from './subject.tsx'
import Accordion from './accordion.tsx'
import AccordionItem from './accordionItem.tsx'

interface Example2Props {
    subjects: ISubject[]
}

const Example2: FunctionComponent<Example2Props> = ({subjects}) => {

    const output = []
    for (const subject of subjects) {
        output.push((
                // De key property is aanwezig op elke React component.
                // Als componenten in een array geplaatst worden, moeten deze een key krijgen.
                // Op basis van deze property bepaald React welke elementen opnieuw gerenderd
                // moeten worden als er iets wijzigt in de array. Als key gebruik je best
                // het ID uit de database in de plaats van een array index.
                <AccordionItem key={subject.id} openKey={subject.id} title={subject.name}>
                    <Subject {...subject}/>
                </AccordionItem>
            ),
        )
    }

    return (
        <Accordion>
            {output}
        </Accordion>
    )
}

export default Example2
