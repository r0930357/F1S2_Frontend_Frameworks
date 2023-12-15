import ReactDOM from 'react-dom/client'
import {StrictMode} from 'react'
//import computerScientistV1 from './computerScientistV1.tsx'
//import ComputerScientistListV2 from './computerScientistListV2.tsx'
import ComputerScientistListV3 from './computerScientistListV3.tsx';
import computerScientists from './data/computerScientist.ts';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

// Voorbeeld 1: Javascript vs JSX
/*const greeting = {
    greeting1 : "World",
    greeting2 : "React",
}

const element = (
    <div>
        <h1>Hello {greeting.greeting1}</h1>
        <h2>Hello {greeting.greeting2}</h2>
    </div>
)*/

// Voorbeeld 2: Component opbouwen in JSX
/*const HelloWorld: FunctionComponent = () => {
    const greeting = {
        greeting1: "World",
        greeting2: "Universe",
    }

    return (
        <div>
            <h1>Hello {greeting.greeting1}</h1>
            <h2>Hello {greeting.greeting2 + "!"}</h2>
        </div>
    ) b
}*/

root.render(
    <StrictMode>
        <ComputerScientistListV3 scientists={computerScientists}/>
    </StrictMode>
)



