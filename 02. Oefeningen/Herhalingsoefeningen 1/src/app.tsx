import {FunctionComponent} from 'react'
import FilterBar from './filter/filterBar.tsx'

interface AppProps {

}

const App: FunctionComponent<AppProps> = () => {
    return (
        <>
            <FilterBar/>
        </>
    )
}

export default App