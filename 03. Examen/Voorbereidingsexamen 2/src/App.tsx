import {FunctionComponent, Suspense, useState} from 'react'
import './App.css'
import Navigation from './navigation/navigation.tsx'
import Routing from './routing.tsx'
import LoadingPage from './utils/loadingPage.tsx'
import LanguageContext from './context/languageContext.tsx'


const App: FunctionComponent = () => {
    const [language, setLanguage] = useState<'en' | 'nl'>('en')
    return (
        <LanguageContext.Provider value={{language, setLanguage: () => setLanguage(x => x === 'en' ? 'nl' : 'en')}}>
            <Navigation/>
            <div className="container">
                <Suspense fallback={<LoadingPage/>}>
                    <Routing/>
                </Suspense>
            </div>
        </LanguageContext.Provider>
    )
}

export default App
