import {FunctionComponent, Suspense, useState} from 'react'
import Navigation from './navigation/navigation.tsx'
import Routing from './routing.tsx'
import LoadingPage from './utils/loadingPage.tsx'
import LanguageContext from './context/languageContext.tsx'

const App: FunctionComponent = () => {
    const [language, setLanguage] = useState<'en' | 'nl'>('en')

    return (

        <LanguageContext.Provider value={{language, setLanguage: () => setLanguage(x => x === 'en' ? 'nl' : 'en')}}>
            <Navigation/>
            <Suspense fallback={<LoadingPage/>}>
                <div className="container">
                    <Routing/>
                </div>
            </Suspense>
        </LanguageContext.Provider>
    )
}

export default App