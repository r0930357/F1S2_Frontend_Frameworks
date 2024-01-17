import {createContext} from 'react'

interface LanguageContextProps {
    language: 'en' | 'nl'
    setLanguage: (newMode: 'en' | 'nl') => void
}

const LanguageContext = createContext<LanguageContextProps>({
        language: 'en',
        setLanguage: () => {
            console.log('No implementation available for setLanguage, please provide one.')
        },
})

export default LanguageContext
