import ReactDOM from 'react-dom/client'
import {StrictMode} from 'react'
import Example1 from './example1/example1.tsx'
import './main.css'
import Example2 from './example2/example2.tsx'
import subject from './example2/subject.tsx'
import subjects from './data/subjects.ts'


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
)

root.render(
    <StrictMode>
        <Example1/>
        <Example2 subjects={subjects}/>
    </StrictMode>,
)