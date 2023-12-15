import {createContext, FunctionComponent, PropsWithChildren, useState} from 'react'

/**
 * Context is een manier om data te delen binnen een componentenboom zonder dat
 * deze data via properties door verschillende niveaus doorgegeven moet worden.
 * Context is een oplossing voor prop-drilling, maar enkel binnen een deel van
 * de componenten boom, context is dus GEEN global state oplossing (zoals online
 * regelmatig te lezen staat).
 *
 * Het object dat hieronder meegegeven wordt als parameter aan de createContext
 * functie is een defaultwaarde die enkel gebruikt wordt als er geen provider
 * beschikbaar is (zie lijn 46).
 */
interface IAccordionContext {
    currentOpenKey: string | undefined
    toggleOpenKey: (newOpenKey: string | undefined) => void
}

export const AccordionContext = createContext<IAccordionContext>({
    currentOpenKey: undefined,
    toggleOpenKey: (): void => {
        console.warn('An implementation for this method has not been provided.')
    },
})
l
interface AccordionProps extends PropsWithChildren {
    defaultOpenKey?: string
}

const Accordion: FunctionComponent<AccordionProps> = ({children, defaultOpenKey}) => {
    // Context moet zo goed als altijd gecombineerd worden met state, de setter moet
    // niet noodzakelijk in de context zitten, maar er moet wel state aanwezig zijn.
    // Anders had de data evengoed in een globale variabele bewaard worden.
    const [currentOpenKey, setCurrentOpenKey] = useState<string | undefined>(defaultOpenKey)

    const toggleOpenKey = (newOpenKey: string | undefined) => {
        if (currentOpenKey === newOpenKey) {
            setCurrentOpenKey(undefined)
        } else {
            setCurrentOpenKey(newOpenKey)
        }
    }

    return (
        // Een provider bevat specifieke waarden voor een context.
        // Er kunnen meerdere providers aanwezig zijn voor eenzelfde context.
        // Als er meerdere providers aanwezig zijn, wordt de dichtstbijzijnde
        // provider (in de componentenboom) gebruikt. Als er geen provider
        // aanwezig is, wordt de defaultwaarde gebruikt die meegegeven is
        // aan de createContext functie. Dit is echter zo goed als nooit de
        // bedoeling, anders zou je evengoed een globale variabele kunnen
        // gebruiken.
        <AccordionContext.Provider value={{currentOpenKey, toggleOpenKey}}>
            <div className={'accordion'}>
                {children}
            </div>
        </AccordionContext.Provider>
    )
}

export default Accordion
